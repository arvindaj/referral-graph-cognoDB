import neo4j from "neo4j-driver";

// Singleton driver instance, reused across API route invocations (important
// in serverless/dev-reload environments where modules can re-evaluate).
let driver;

export function getDriver() {
  if (!driver) {
    const uri = process.env.NEO4J_URI;
    const user = process.env.NEO4J_USERNAME;
    const password = process.env.NEO4J_PASSWORD;

    if (!uri || !user || !password) {
      throw new Error(
        "Missing NEO4J_URI / NEO4J_USERNAME / NEO4J_PASSWORD env vars. Copy .env.example to .env.local and fill in your CognoDB Bolt credentials."
      );
    }

    driver = neo4j.driver(uri, neo4j.auth.basic(user, password), {
      // Sensible defaults for a small referral-graph workload.
      maxConnectionPoolSize: 20,
      connectionAcquisitionTimeout: 10_000,
    });
  }
  return driver;
}

// Runs a cypher query in a managed session and always closes the session,
// even if the query throws. Returns the raw list of Neo4j Records.
export async function runQuery(cypher, params = {}) {
  const session = getDriver().session({
    database: process.env.NEO4J_DATABASE || "neo4j",
  });
  try {
    const result = await session.run(cypher, params);
    return result.records;
  } finally {
    await session.close();
  }
}

// Converts Neo4j integers / nodes to plain JSON-friendly values recursively.
export function toNative(value) {
  if (neo4j.isInt(value)) return value.toNumber();
  if (Array.isArray(value)) return value.map(toNative);
  if (value && typeof value === "object") {
    // Node / Relationship objects expose `.properties`
    if (value.properties) {
      return {
        id: value.elementId ?? String(value.identity),
        labels: value.labels,
        type: value.type,
        ...toNative(value.properties),
      };
    }
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = toNative(v);
    return out;
  }
  return value;
}
