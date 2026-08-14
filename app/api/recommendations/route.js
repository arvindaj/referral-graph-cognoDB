import { NextResponse } from "next/server";
import { runQuery, toNative } from "../../../lib/neo4j";

// GET /api/recommendations?userId=me
//
// Ranks companies by two graph-native signals combined into one score:
//   1. skillOverlap    - how many of the user's skills are shared with
//                         people who work at that company
//   2. networkStrength - how many friends-of-friends (2-hop KNOWS) already
//                         work there, i.e. how "warm" that door is
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId") || "me";

  try {
    const records = await runQuery(
      `MATCH (me:Person {id: $userId})
       OPTIONAL MATCH (me)-[:HAS_SKILL]->(s:Skill)<-[:HAS_SKILL]-(other:Person)-[:WORKS_AT]->(c:Company)
       WHERE other <> me
       WITH me, c, count(DISTINCT s) AS skillOverlap, collect(DISTINCT other.name) AS matchedBy
       WHERE c IS NOT NULL
       OPTIONAL MATCH (me)-[:KNOWS*1..2]-(fof:Person)-[:WORKS_AT]->(c)
       WHERE fof <> me
       WITH c, skillOverlap, matchedBy, count(DISTINCT fof) AS networkStrength
       RETURN c.name AS company,
              skillOverlap,
              networkStrength,
              matchedBy[0..3] AS sampleConnections,
              (skillOverlap * 2 + networkStrength) AS score
       ORDER BY score DESC, skillOverlap DESC
       LIMIT 10`,
      { userId }
    );

    const recommendations = records.map((r) => ({
      company: r.get("company"),
      skillOverlap: toNative(r.get("skillOverlap")),
      networkStrength: toNative(r.get("networkStrength")),
      sampleConnections: toNative(r.get("sampleConnections")),
      score: toNative(r.get("score")),
    }));

    return NextResponse.json({ recommendations });
  } catch (err) {
    console.error("GET /api/recommendations failed:", err);
    return NextResponse.json({ error: "Failed to query the graph. Is CognoDB running and reachable?" }, { status: 500 });
  }
}
