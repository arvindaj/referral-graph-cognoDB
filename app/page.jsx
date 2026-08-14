"use client";

import { useEffect, useState, useCallback } from "react";
import { Compass } from "lucide-react";
import SearchBox from "../components/SearchBox";
import HowItWorks from "../components/HowItWorks";
import PathResult from "../components/PathResult";
import RecommendationList from "../components/RecommendationList";

const USER_ID = "me"; // demo user seeded by scripts/seed.mjs

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // status: 'idle' | 'loading' | 'error' | 'notfound' | 'found'
  const [pathStatus, setPathStatus] = useState("idle");
  const [pathResult, setPathResult] = useState(null);
  const [pathError, setPathError] = useState(null);

  const [recs, setRecs] = useState([]);
  const [recsLoading, setRecsLoading] = useState(true);
  const [recsError, setRecsError] = useState(null);

  // Load job recommendations once on mount.
  useEffect(() => {
    fetch(`/api/recommendations?userId=${USER_ID}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setRecs(data.recommendations || []);
      })
      .catch((err) => setRecsError(err.message))
      .finally(() => setRecsLoading(false));
  }, []);

  // Debounced autocomplete.
  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }
    const handle = setTimeout(() => {
      fetch(`/api/search?q=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((data) => setSuggestions(data.companies || []))
        .catch(() => setSuggestions([]));
    }, 200);
    return () => clearTimeout(handle);
  }, [query]);

  const tracePath = useCallback(async (company) => {
    if (!company.trim()) return;
    setPathStatus("loading");
    setPathError(null);
    setPathResult(null);
    try {
      const res = await fetch(`/api/path?userId=${USER_ID}&company=${encodeURIComponent(company)}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setPathResult(data);
      setPathStatus(data.found ? "found" : "notfound");
    } catch (err) {
      setPathError(err.message);
      setPathStatus("error");
    }
  }, []);

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      {/* Hero */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Compass size={15} className="text-gold" strokeWidth={2} />
          <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase">Referral cartography</p>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl leading-tight text-paper max-w-2xl">
          Every company has a back door.
          <br />
          We trace it.
        </h1>
        <p className="mt-5 text-muted max-w-xl leading-relaxed">
          Type a company. Waypoint walks your network graph, hop by hop, until
          it finds the shortest chain of people who can put your name in
          front of the right door.
        </p>

        <div className="mt-10">
          <SearchBox
            query={query}
            onQueryChange={setQuery}
            suggestions={suggestions}
            onSubmit={tracePath}
            loading={pathStatus === "loading"}
          />
        </div>

        <div className="mt-8" aria-live="polite">
          {pathStatus === "idle" ? (
            <HowItWorks />
          ) : (
            <PathResult status={pathStatus} error={pathError} result={pathResult} />
          )}
        </div>
      </section>

      {/* Recommendations */}
      <section className="mt-24 border-t border-ink3 pt-12">
        <h2 className="font-display text-2xl text-paper">Warm doors worth knocking on</h2>
        <p className="mt-2 text-muted text-sm max-w-xl">
          Ranked by skill overlap with people already inside, and by how many
          friends-of-friends work there.
        </p>

        <div className="mt-8">
          <RecommendationList loading={recsLoading} error={recsError} recs={recs} onTrace={tracePath} />
        </div>
      </section>

      <footer className="mt-24 pt-8 border-t border-ink3 text-xs text-muted font-mono">
        Next.js · neo4j-driver over Bolt · CognoDB
      </footer>
    </main>
  );
}
