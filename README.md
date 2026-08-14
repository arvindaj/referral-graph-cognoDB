# Waypoint — Referral Network Graph

Find the shortest "who can refer me" path into a target company through
your professional network, and get job recommendations ranked by skill
overlap + friend-of-friend connections.

Built with **Next.js (App Router)** + **API routes** talking to **CognoDB**
over Bolt via the official `neo4j-driver` package — CognoDB speaks
Bolt/openCypher, so no custom client is needed.

---

## 1. The use case

Job seekers rarely get hired through the front door — they get hired
because *someone on the inside* vouches for them. The hard part isn't
finding a company to apply to, it's finding **the shortest chain of people**
who can make that introduction happen.

Waypoint answers two questions for a job seeker:

1. **"Who can get me into Company X?"** — trace the shortest chain of
   connections from you to someone who currently works there.
2. **"Where should I even be looking?"** — surface companies where you
   already have an edge, ranked by how many of your skills overlap with
   people who work there *and* how many friends-of-friends are already on
   the inside.

---

## 2. Why a graph database?

Both of those questions are **path-finding and traversal problems**, and
that's exactly the class of problem relational databases are weakest at.

| | Relational (SQL) | Graph (CognoDB / openCypher) |
|---|---|---|
| Model | People and companies live in tables; relationships live in a separate join/edge table | People, companies, and skills are nodes; relationships are first-class edges |
| "Shortest path from me to anyone at Company X" | Recursive CTE, self-joining the edge table once per hop, with manual cycle detection and no clean way to stop at the first match | `shortestPath((me)-[:KNOWS*1..6]-(insider)-[:WORKS_AT]->(target))` — one line |
| "Skill overlap AND 2-hop network strength, combined" | Two separate multi-way joins, unrolled by hand for each hop depth, then merged and re-aggregated | One `MATCH` per pattern, combined in a single `RETURN` |
| Performance as hops increase | Degrades sharply — each extra hop is another self-join | Roughly constant per hop — the engine walks the graph directly using index-free adjacency, it doesn't re-scan a table |
| Readability | The intent ("find a path") gets buried in SQL plumbing | The Cypher query *reads* like the question being asked |

The core reason: in a relational database, a "relationship" is just a
foreign key you have to re-join on every hop. In a graph database, a
relationship is a stored, directly-traversable pointer — so "how are these
two things connected, and how closely" is a native operation instead of an
emergent one you have to engineer around.

---

## 3. Data model

```
(:Person {id, name})-[:HAS_SKILL]->(:Skill {name})
(:Person)-[:WORKS_AT]->(:Company {name})
(:Person)-[:KNOWS]-(:Person)     // undirected — written once per pair
```

- **Person** — a user or a contact in someone's network.
- **Skill** — a shared vocabulary of skills; `HAS_SKILL` is many-to-many.
- **Company** — an employer; `WORKS_AT` links a person to where they
  currently work.
- **KNOWS** — an undirected professional connection between two people.
  It's written once per pair (not once in each direction) since Cypher can
  traverse an undirected relationship either way.

*(See the entity-relationship diagram rendered above in this conversation
for a visual version of this schema.)*

---

## 4. Setup and run instructions

### 4.1 Create a CognoDB instance

> **Note on this section:** I don't have access to CognoDB's own
> provisioning docs or console, so I can't give you exact click-by-click
> steps for creating an instance. What's below is the generic pattern every
> Bolt-compatible graph store (Neo4j, Memgraph, and — per this project's
> premise — CognoDB) shares: you end up with a **host, a Bolt port
> (conventionally `7687`), a username, and a password**. Use whatever your
> organization's CognoDB provisioning flow actually gives you for those
> four values, and plug them into step 4.2 below.
>
> If CognoDB is fully Neo4j/Bolt-compatible (as this project assumes), a
> local **Neo4j** instance is a drop-in stand-in for development:
> ```bash
> docker run -d --name cognodb-dev \
>   -p 7474:7474 -p 7687:7687 \
>   -e NEO4J_AUTH=neo4j/your-password \
>   neo4j:5
> ```
> This gives you `bolt://localhost:7687` with user `neo4j` and the password
> you set — the same shape of credentials a hosted CognoDB instance would
> hand you.

### 4.2 Configure and install

```bash
git clone <this repo>
cd referral-graph
npm install
cp .env.example .env.local
```

Edit `.env.local`:

```bash
NEO4J_URI=bolt://<your-cognodb-host>:7687
NEO4J_USERNAME=<your-username>
NEO4J_PASSWORD=<your-password>
NEO4J_DATABASE=neo4j
```

### 4.3 Seed sample data

```bash
npm run seed
```

This clears any existing graph and creates 10 people, 5 companies, a
skills vocabulary, and enough `KNOWS`/`WORKS_AT` edges that both a 2-hop
and a longer referral path are reachable from the demo user (`me`).

### 4.4 Run it

```bash
npm run dev
```

Open `http://localhost:3000`. Try tracing a path into **Stellar Labs**,
**Fintra**, **Orbit Robotics**, **Northwind**, or **Beacon Health** — those
are the companies the seed script populates.

---

## 5. The main queries, explained

### 5.1 Shortest referral path — `app/api/path/route.js`

```cypher
MATCH (me:Person {id: $userId})
MATCH (target:Company {name: $company})
MATCH p = shortestPath((me)-[:KNOWS*1..6]-(insider:Person)-[:WORKS_AT]->(target))
WHERE insider <> me
WITH p, insider, length(p) AS hops
ORDER BY hops ASC
LIMIT 1
RETURN ..., hops, insider.name AS referrer
```

- `[:KNOWS*1..6]` is a **variable-length pattern**: "1 to 6 KNOWS hops, in
  any direction." Capping it at 6 keeps the search bounded — beyond
  six degrees the referral is no longer meaningfully "warm" anyway.
- `shortestPath(...)` tells the engine to stop as soon as it finds the
  first (shortest) match, rather than enumerating every possible path —
  this is the single line doing the work a recursive CTE would need pages
  of SQL to approximate.
- The pattern chains two different relationship types in one path
  (`KNOWS` then `WORKS_AT`), so the "destination" isn't just any node — it
  has to specifically be someone employed at the target company.

### 5.2 Job recommendations — `app/api/recommendations/route.js`

```cypher
MATCH (me:Person {id: $userId})
OPTIONAL MATCH (me)-[:HAS_SKILL]->(s:Skill)<-[:HAS_SKILL]-(other:Person)-[:WORKS_AT]->(c:Company)
WHERE other <> me
WITH me, c, count(DISTINCT s) AS skillOverlap, collect(DISTINCT other.name) AS matchedBy
WHERE c IS NOT NULL
OPTIONAL MATCH (me)-[:KNOWS*1..2]-(fof:Person)-[:WORKS_AT]->(c)
WHERE fof <> me
WITH c, skillOverlap, matchedBy, count(DISTINCT fof) AS networkStrength
RETURN c.name AS company, skillOverlap, networkStrength, ...,
       (skillOverlap * 2 + networkStrength) AS score
ORDER BY score DESC, skillOverlap DESC
LIMIT 10
```

- The first `MATCH` walks a **2-hop skill pattern**: your skill, to anyone
  else who shares it, to where they work. This is the "you'd fit in there"
  signal.
- The second `MATCH` walks a **1-to-2 hop KNOWS pattern** into the same
  company: this is the "you already have a warm way in" signal.
- Both signals are computed per-company in the same query and combined
  into one `score` — no application-side joining of two separate query
  results required.

### 5.3 Company autocomplete — `app/api/search/route.js`

A plain `CONTAINS` filter over `Company` names. Included for completeness
— this one isn't graph-native, it's just a lookup, which is exactly the
kind of query a graph database handles no differently (or better) than
anything else. The interesting problems are 5.1 and 5.2.

---

## 6. Screenshots

I wasn't able to generate real screenshots of the running app in this
environment — I don't have a browser available to load `localhost:3000`
and capture it. What I can offer instead:

- An inline **entity-relationship diagram** of the data model, rendered
  earlier in this conversation.
- I can render an inline **UI mockup** on request that shows the intended
  look (search bar, animated referral trail, ranked recommendation cards)
  — flagged clearly as a design reference, not a captured screenshot.

`scripts/screenshot.mjs` captures the real thing once you have the app
running against an actual CognoDB instance:

```bash
npm install                    # pulls in playwright as a dev dependency
npx playwright install chromium   # downloads the browser binary, first time only
npm run seed                   # populate the graph if you haven't already
npm run dev                    # leave this running in one terminal
```

Then, in a second terminal:

```bash
npm run screenshot
```

This drives a real headless browser through the app — loads the home
page, traces a path into **Stellar Labs** (a reachable company, to
capture the found-path trail), then traces a path into **Beacon Health**
(to capture the not-found state) — and saves three PNGs to `docs/`:

- `docs/screenshot-home.png` — idle state + recommendations list
- `docs/screenshot-path-found.png` — the animated referral trail
- `docs/screenshot-path-notfound.png` — the no-path-found message

Reference them here once generated:

```markdown
![Home screen — search and recommendations](docs/screenshot-home.png)
![Referral trail — shortest path found](docs/screenshot-path-found.png)
![No referral path found](docs/screenshot-path-notfound.png)
```

If it fails immediately, it's almost always one of: the dev server isn't
running, the graph hasn't been seeded, or `npx playwright install
chromium` hasn't been run yet — the script's error output will tell you
which.

---

## 7. Project structure

```
app/
  page.jsx                     orchestrates state, composes the components below
  layout.jsx / globals.css     theme (fonts, tokens, keyboard focus, reduced-motion)
  api/path/route.js            GET  shortest referral path into a company
  api/recommendations/route.js GET  ranked company recommendations
  api/search/route.js          GET  company name autocomplete
components/
  SearchBox.jsx                autocomplete input, keyboard nav
  HowItWorks.jsx                idle-state explainer (3-step)
  PathResult.jsx                loading / error / not-found / found states + trail visualization
  RecommendationList.jsx        skeleton / error / empty states + ranked rows with relative stat bars
lib/neo4j.js                   driver singleton + query helper + Neo4j->JSON conversion
scripts/seed.mjs               populates a small sample graph (10 people, 5 companies)
scripts/screenshot.mjs         drives a headless browser to capture real UI screenshots into docs/
```
