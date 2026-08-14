"use client";

import { useEffect, useRef, useState } from "react";
import { Search, X, Building2, Loader2 } from "lucide-react";

export default function SearchBox({ query, onQueryChange, suggestions, onSubmit, loading }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setOpen(suggestions.length > 0);
    setActiveIndex(-1);
  }, [suggestions]);

  // Close the dropdown on outside click.
  useEffect(() => {
    function handleClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleKeyDown(e) {
    if (!open || suggestions.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      pick(suggestions[activeIndex]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  function pick(name) {
    onQueryChange(name);
    setOpen(false);
    onSubmit(name);
  }

  return (
    <div ref={containerRef} className="relative max-w-xl">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setOpen(false);
          onSubmit(query);
        }}
        className="flex items-stretch gap-3"
      >
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            size={18}
            strokeWidth={2}
          />
          <label htmlFor="company-search" className="sr-only">
            Company name
          </label>
          <input
            id="company-search"
            type="text"
            role="combobox"
            aria-expanded={open}
            aria-controls="company-suggestions"
            aria-autocomplete="list"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => suggestions.length > 0 && setOpen(true)}
            placeholder="Who can get me into…"
            autoComplete="off"
            className="w-full bg-ink2 border border-ink3 rounded-md pl-11 pr-10 py-3 text-paper placeholder:text-muted focus:border-gold outline-none transition-colors"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                onQueryChange("");
                setOpen(false);
              }}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-paper transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="shrink-0 inline-flex items-center gap-2 bg-gold text-ink font-medium rounded-md px-5 py-3 hover:brightness-110 transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : null}
          Trace a path
        </button>
      </form>

      {open && suggestions.length > 0 && (
        <ul
          id="company-suggestions"
          role="listbox"
          className="absolute z-10 mt-2 w-full bg-ink2 border border-ink3 rounded-md overflow-hidden shadow-xl"
        >
          {suggestions.map((name, i) => (
            <li key={name} role="option" aria-selected={i === activeIndex}>
              <button
                type="button"
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => pick(name)}
                className={`w-full flex items-center gap-2.5 text-left px-4 py-2.5 text-sm transition-colors ${
                  i === activeIndex ? "bg-ink3 text-paper" : "text-paper/90 hover:bg-ink3"
                }`}
              >
                <Building2 size={14} className="text-muted shrink-0" />
                {name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
