// Seeds a sample referral-network graph into CognoDB (Bolt).
// Run with: npm run seed
import { config } from "dotenv";
import neo4j from "neo4j-driver";

// dotenv only auto-loads a file literally named ".env". The app (and the
// README setup steps) use the Next.js convention of ".env.local", so load
// that explicitly, falling back to plain ".env" if present.
config({ path: ".env.local" });
config(); // fills in anything still missing from .env, without overwriting

const uri = process.env.NEO4J_URI;
const user = process.env.NEO4J_USERNAME;
const password = process.env.NEO4J_PASSWORD;

if (!uri || !user || !password) {
  console.error("Set NEO4J_URI / NEO4J_USERNAME / NEO4J_PASSWORD (e.g. in .env.local) before seeding.");
  process.exit(1);
}

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

const people = [
  { id: "me", name: "You", skills: ["React", "Node.js", "GraphQL", "System Design"] },
  { id: "p1", name: "Priya Nair", skills: ["React", "TypeScript", "GraphQL"] },
  { id: "p2", name: "Diego Alvarez", skills: ["Node.js", "AWS", "System Design"] },
  { id: "p3", name: "Sara Kim", skills: ["Python", "Machine Learning"] },
  { id: "p4", name: "Tom Bakker", skills: ["React", "Node.js"] },
  { id: "p5", name: "Aisha Rahman", skills: ["Go", "Kubernetes", "System Design"] },
  { id: "p6", name: "Marcus Webb", skills: ["TypeScript", "GraphQL", "AWS"] },
  { id: "p7", name: "Elena Petrova", skills: ["React", "System Design"] },
  { id: "p8", name: "James Okafor", skills: ["Node.js", "Kubernetes"] },
  { id: "p9", name: "Lucia Ferreira", skills: ["Python", "AWS", "Machine Learning"] },
];

const companies = ["Stellar Labs", "Northwind", "Beacon Health", "Fintra", "Orbit Robotics"];

// Who works where.
const worksAt = [
  ["p1", "Stellar Labs"],
  ["p2", "Stellar Labs"],
  ["p3", "Beacon Health"],
  ["p4", "Northwind"],
  ["p5", "Orbit Robotics"],
  ["p6", "Fintra"],
  ["p7", "Stellar Labs"],
  ["p8", "Orbit Robotics"],
  ["p9", "Fintra"],
];

// Undirected friendship/colleague edges (KNOWS), written once per pair.
const knows = [
  ["me", "p4"],
  ["me", "p3"],
  ["p4", "p6"],
  ["p3", "p9"],
  ["p6", "p1"],
  ["p6", "p7"],
  ["p9", "p5"],
  ["p1", "p2"],
  ["p7", "p2"],
  ["p5", "p8"],
  ["me", "p8"], // gives a 2-hop path into Orbit Robotics as well
];

async function seed() {
  const session = driver.session({ database: process.env.NEO4J_DATABASE || "neo4j" });
  try {
    console.log("Clearing existing graph...");
    await session.run("MATCH (n) DETACH DELETE n");

    console.log("Creating constraints...");
    await session.run("CREATE CONSTRAINT person_id IF NOT EXISTS FOR (p:Person) REQUIRE p.id IS UNIQUE");
    await session.run("CREATE CONSTRAINT company_name IF NOT EXISTS FOR (c:Company) REQUIRE c.name IS UNIQUE");
    await session.run("CREATE CONSTRAINT skill_name IF NOT EXISTS FOR (s:Skill) REQUIRE s.name IS UNIQUE");

    console.log("Creating companies...");
    for (const name of companies) {
      await session.run("MERGE (c:Company {name: $name})", { name });
    }

    console.log("Creating people + skills...");
    for (const p of people) {
      await session.run("MERGE (p:Person {id: $id}) SET p.name = $name", { id: p.id, name: p.name });
      for (const skill of p.skills) {
        await session.run(
          `MERGE (s:Skill {name: $skill})
           WITH s
           MATCH (p:Person {id: $id})
           MERGE (p)-[:HAS_SKILL]->(s)`,
          { id: p.id, skill }
        );
      }
    }

    console.log("Creating WORKS_AT edges...");
    for (const [personId, company] of worksAt) {
      await session.run(
        `MATCH (p:Person {id: $personId}), (c:Company {name: $company})
         MERGE (p)-[:WORKS_AT]->(c)`,
        { personId, company }
      );
    }

    console.log("Creating KNOWS edges (undirected)...");
    for (const [a, b] of knows) {
      await session.run(
        `MATCH (a:Person {id: $a}), (b:Person {id: $b})
         MERGE (a)-[:KNOWS]-(b)`,
        { a, b }
      );
    }

    console.log("Seed complete. Try searching for: Stellar Labs, Fintra, Orbit Robotics, Northwind, Beacon Health");
  } finally {
    await session.close();
    await driver.close();
  }
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
