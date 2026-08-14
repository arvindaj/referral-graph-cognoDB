import { NextResponse } from "next/server";
import { runQuery, toNative } from "../../../lib/neo4j";

// GET /api/search?q=ste
// Lightweight autocomplete over Company names for the search box.
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") || "").trim();

  if (!q) return NextResponse.json({ companies: [] });

  try {
    const records = await runQuery(
      `MATCH (c:Company)
       WHERE toLower(c.name) CONTAINS toLower($q)
       RETURN c.name AS name
       ORDER BY name
       LIMIT 8`,
      { q }
    );
    return NextResponse.json({ companies: records.map((r) => toNative(r.get("name"))) });
  } catch (err) {
    console.error("GET /api/search failed:", err);
    return NextResponse.json({ error: "Failed to query the graph." }, { status: 500 });
  }
}
