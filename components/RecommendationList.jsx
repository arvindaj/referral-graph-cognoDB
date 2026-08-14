import { AlertTriangle, Sparkles, Layers, Users2, Info } from "lucide-react";

const PIP_COUNT = 5;

export default function RecommendationList({ loading, error, recs, onTrace }) {
  if (loading) return <ListSkeleton />;

  if (error) {
    return (
      <div className="flex items-start gap-3 bg-coral/10 border border-coral/30 rounded-md px-4 py-3.5">
        <AlertTriangle size={17} className="text-coral shrink-0 mt-0.5" />
        <p className="text-sm text-coral leading-relaxed">{error}</p>
      </div>
    );
  }

  if (recs.length === 0) {
    return (
      <div className="flex items-start gap-3 bg-ink2 border border-ink3 rounded-md px-4 py-3.5">
        <Layers size={17} className="text-muted shrink-0 mt-0.5" />
        <p className="text-sm text-muted leading-relaxed">
          No recommendations yet — seed the graph with <code className="font-mono text-xs bg-ink3 px-1.5 py-0.5 rounded">npm run seed</code> to populate sample data.
        </p>
      </div>
    );
  }

  // Scale every bar against the strongest company in *this* list, so "full"
  // always means "the best you've got right now" rather than an arbitrary
  // fixed ceiling that might make every row look empty or every row look full.
  const maxSkill = Math.max(1, ...recs.map((r) => r.skillOverlap));
  const maxNetwork = Math.max(1, ...recs.map((r) => r.networkStrength));

  return (
    <div>
      <Legend />
      <div className="space-y-3 mt-3">
        {recs.map((rec, i) => (
          <RecommendationRow
            key={rec.company}
            rec={rec}
            rank={i + 1}
            maxSkill={maxSkill}
            maxNetwork={maxNetwork}
            onTrace={() => onTrace(rec.company)}
          />
        ))}
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div className="flex items-center gap-2 text-[11px] text-muted font-mono">
      <Info size={12} />
      Bars are relative to the strongest match below — not an absolute score.
    </div>
  );
}

function RecommendationRow({ rec, rank, maxSkill, maxNetwork, onTrace }) {
  const isTop = rank === 1;
  return (
    <button
      onClick={onTrace}
      className={`w-full flex items-center justify-between gap-4 bg-ink2 border rounded-md px-5 py-4 text-left transition-colors ${
        isTop ? "border-gold/40 hover:border-gold/70" : "border-ink3 hover:border-gold/60"
      }`}
    >
      <div className="flex items-center gap-4 min-w-0">
        <span className="font-mono text-xs text-muted w-5 shrink-0">{String(rank).padStart(2, "0")}</span>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-paper font-medium truncate">{rec.company}</p>
            {isTop && (
              <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wide text-gold bg-gold/10 rounded-full px-2 py-0.5 shrink-0">
                <Sparkles size={10} />
                Best match
              </span>
            )}
          </div>
          {rec.sampleConnections?.length > 0 && (
            <p className="text-xs text-muted truncate mt-0.5">via {rec.sampleConnections.join(", ")}</p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-5 shrink-0">
        <StatBar
          icon={Layers}
          label="skills"
          value={rec.skillOverlap}
          max={maxSkill}
          color="teal"
          tooltip={
            rec.skillOverlap === 0
              ? "No shared skills with people who work here"
              : `${rec.skillOverlap} of your skills also show up at ${rec.company}`
          }
        />
        <StatBar
          icon={Users2}
          label="network"
          value={rec.networkStrength}
          max={maxNetwork}
          color="gold"
          tooltip={
            rec.networkStrength === 0
              ? "No friends-of-friends there yet — this would be a colder intro"
              : `${rec.networkStrength} friend${rec.networkStrength === 1 ? "" : "s"}-of-friends already work at ${rec.company}`
          }
        />
      </div>
    </button>
  );
}

const colorMap = {
  teal: { text: "text-teal", fill: "bg-teal", dim: "bg-teal/15" },
  gold: { text: "text-gold", fill: "bg-gold", dim: "bg-gold/15" },
};

function StatBar({ icon: Icon, label, value, max, color, tooltip }) {
  const filled = value === 0 ? 0 : Math.max(1, Math.round((value / max) * PIP_COUNT));
  const c = colorMap[color];

  return (
    <div className="group relative flex flex-col items-center font-mono">
      <div className={`flex items-center gap-1.5 ${c.text} text-xs mb-1.5`}>
        <Icon size={12} />
        <span className="tabular-nums">{value}</span>
      </div>

      <div className="flex items-center gap-[3px]" aria-hidden="true">
        {Array.from({ length: PIP_COUNT }).map((_, i) => (
          <span
            key={i}
            className={`block h-2.5 w-1 rounded-full ${i < filled ? c.fill : `${c.dim} border border-ink3`}`}
          />
        ))}
      </div>

      <div className="text-muted text-[10px] uppercase tracking-wide mt-1.5">{label}</div>

      {/* Tooltip */}
      <div
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 rounded-md bg-ink3 border border-ink3 px-2.5 py-2 text-[11px] leading-snug text-paper text-center normal-case opacity-0 scale-95 transition-all duration-150 group-hover:opacity-100 group-hover:scale-100 group-focus-within:opacity-100 group-focus-within:scale-100 z-10"
      >
        {tooltip}
      </div>
    </div>
  );
}

function ListSkeleton() {
  return (
    <div className="space-y-3">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center justify-between gap-4 bg-ink2 border border-ink3 rounded-md px-5 py-4">
          <div className="flex items-center gap-4 min-w-0 flex-1">
            <div className="h-3 w-5 bg-ink3 rounded animate-pulse shrink-0" />
            <div className="min-w-0 flex-1 space-y-2">
              <div className="h-3.5 w-32 bg-ink3 rounded animate-pulse" />
              <div className="h-2.5 w-48 bg-ink3 rounded animate-pulse" />
            </div>
          </div>
          <div className="flex gap-4 shrink-0">
            <div className="h-6 w-10 bg-ink3 rounded animate-pulse" />
            <div className="h-6 w-10 bg-ink3 rounded animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}
