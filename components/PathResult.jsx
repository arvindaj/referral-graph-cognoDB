import { AlertTriangle, SignpostBig, Sparkles } from "lucide-react";

export default function PathResult({ status, error, result }) {
  if (status === "idle") return null;

  if (status === "loading") return <TrailSkeleton />;

  if (status === "error") {
    return (
      <div className="flex items-start gap-3 bg-coral/10 border border-coral/30 rounded-md px-4 py-3.5">
        <AlertTriangle size={17} className="text-coral shrink-0 mt-0.5" />
        <p className="text-sm text-coral leading-relaxed">{error}</p>
      </div>
    );
  }

  if (status === "notfound") {
    return (
      <div className="flex items-start gap-3 bg-ink2 border border-ink3 rounded-md px-4 py-3.5">
        <SignpostBig size={17} className="text-muted shrink-0 mt-0.5" />
        <div className="text-sm text-muted leading-relaxed">
          {result?.message || "No referral path found within 6 hops."}
          <br />
          Try a company one of your direct connections might work at, or widen your network first.
        </div>
      </div>
    );
  }

  if (status === "found") {
    return <FoundPath result={result} />;
  }

  return null;
}

function TrailSkeleton() {
  const dots = [0, 1, 2, 3];
  return (
    <div>
      <div className="h-3 w-40 bg-ink3 rounded animate-pulse mb-4" />
      <div className="flex items-center gap-3 max-w-xl">
        {dots.map((i) => (
          <div key={i} className="flex items-center gap-3 flex-1">
            <div className="h-4 w-4 rounded-full bg-ink3 animate-pulse shrink-0" />
            {i < dots.length - 1 && <div className="h-px flex-1 bg-ink3 animate-pulse" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function FoundPath({ result }) {
  const { path, hops, referrer } = result;
  const nodeCount = path.length;
  const width = 640;
  const height = 140;
  const paddingX = 60;
  const step = nodeCount > 1 ? (width - paddingX * 2) / (nodeCount - 1) : 0;
  const points = path.map((_, i) => ({
    x: paddingX + step * i,
    y: height / 2 + (i % 2 === 0 ? -18 : 18),
  }));
  const linePath = points
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(" ");

  return (
    <div>
      <p className="font-mono text-xs text-teal mb-3">
        {hops} hop{hops === 1 ? "" : "s"} · shortest path found
      </p>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-xl" role="img" aria-label={`Referral path: ${path.map((n) => n.name).join(" to ")}`}>
        <path d={linePath} fill="none" stroke="#E3A945" strokeWidth="2" className="route-line" />
        {points.map((p, i) => {
          const node = path[i];
          const isCompany = node.type === "company";
          const isYou = i === 0;
          return (
            <g key={i} className="node-pop" style={{ animationDelay: `${0.15 * i + 0.3}s` }}>
              <circle
                cx={p.x}
                cy={p.y}
                r={isCompany ? 9 : 7}
                fill={isCompany ? "#4FB6A8" : "#10141F"}
                stroke={isCompany ? "#4FB6A8" : "#E3A945"}
                strokeWidth="2"
              />
              <text
                x={p.x}
                y={p.y + (i % 2 === 0 ? -18 : 30)}
                textAnchor="middle"
                fontSize="11"
                fontFamily="IBM Plex Mono, monospace"
                fill="#EDEEF3"
              >
                {isYou ? "You" : node.name}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-4 flex items-start gap-3 bg-ink2 border border-gold/25 rounded-md px-4 py-3.5 max-w-xl">
        <Sparkles size={17} className="text-gold shrink-0 mt-0.5" />
        <p className="text-sm text-paper leading-relaxed">
          <span className="font-medium">{referrer}</span> is the closest person who can put your name forward.
          Ask your direct connection to make the intro — that's the shortest chain that works.
        </p>
      </div>
    </div>
  );
}
