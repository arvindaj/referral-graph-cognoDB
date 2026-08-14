import { NextResponse } from "next/server";
import { runQuery, toNative } from "../../../lib/neo4j";

// GET /api/path?company=Stellar+Labs&userId=me
//
// Finds the shortest chain of KNOWS relationships from the requesting user
// to someone who currently WORKS_AT the target company - i.e. the shortest
// "who can refer me" path.
//
// Deliberately NOT a single shortestPath() over a mixed pattern like
// (me)-[:KNOWS*1..6]-(insider)-[:WORKS_AT]->(target). shortestPath() is
// only reliably defined when it wraps ONE relationship type between two
// explicitly bound nodes - mixing KNOWS* and WORKS_AT inside one call is
// unspecified behavior that different Bolt/openCypher engines resolve
// differently, and some will silently return a path that doesn't actually
// match the pattern you wrote instead of erroring.
//
// So this runs in two matches instead: find everyone who WORKS_AT the
// target, then ask shortestPath() the question it's well-defined for -
// "shortest KNOWS chain from me to this specific bound person" - once per
// candidate, keeping the shortest. The WORKS_AT edge is appended in JS
// afterward, never inside the shortestPath() call itself.
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const company = searchParams.get("company");
  const userId = searchParams.get("userId") || "me";

  if (!company) {
    return NextResponse.json({ error: "Missing required 'company' query param" }, { status: 400 });
  }

  try {
    const records = await runQuery(
      `MATCH (target:Company {name: $company})<-[:WORKS_AT]-(insider:Person)
       MATCH (me:Person {id: $userId})
       WHERE insider <> me
       MATCH path = shortestPath((me)-[:KNOWS*1..6]-(insider))
       RETURN
         [n IN nodes(path) | {type: 'person', id: n.id, name: n.name}] AS peoplePath,
         insider.name AS referrer,
         length(path) AS knowsHops
       ORDER BY knowsHops ASC
       LIMIT 1`,
      { userId, company }
    );

    if (records.length === 0) {
      return NextResponse.json({ found: false, message: `No referral path found into ${company} within 6 hops.` });
    }

    const record = records[0];
    const peoplePath = toNative(record.get("peoplePath"));
    const knowsHops = toNative(record.get("knowsHops"));

    return NextResponse.json({
      found: true,
      hops: knowsHops + 1, // +1 for the final WORKS_AT edge into the company
      referrer: record.get("referrer"),
      path: [...peoplePath, { type: "company", name: company }],
    });
  } catch (err) {
    console.error("GET /api/path failed:", err);
    return NextResponse.json({ error: "Failed to query the graph. Is CognoDB running and reachable?" }, { status: 500 });
  }
}
