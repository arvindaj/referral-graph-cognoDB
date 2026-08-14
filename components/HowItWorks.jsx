import { Users, Route, Handshake } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Your network, mapped",
    body: "Every person you know, and everyone they know, plotted as a graph — not a spreadsheet you'd have to trace by hand.",
  },
  {
    icon: Route,
    title: "Shortest path in, found",
    body: "Type a company. We walk the graph hop by hop and stop at the very first connection who already works there.",
  },
  {
    icon: Handshake,
    title: "A warm intro, not a cold one",
    body: "You get the exact chain of people to ask — so the referral request starts with someone who already knows you.",
  },
];

export default function HowItWorks() {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {steps.map(({ icon: Icon, title, body }) => (
        <div key={title} className="bg-ink2 border border-ink3 rounded-md p-5">
          <Icon size={18} className="text-gold mb-3" strokeWidth={1.75} />
          <p className="text-paper text-sm font-medium mb-1.5">{title}</p>
          <p className="text-muted text-xs leading-relaxed">{body}</p>
        </div>
      ))}
    </div>
  );
}
