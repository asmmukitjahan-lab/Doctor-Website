import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Brand({ footer = false }) {
  return (
    <Link
      className={`group inline-flex w-max items-center gap-2.5 ${footer ? "text-paper" : "text-plum"}`}
      to="/"
      aria-label="Dr. Elena Marceau, home"
    >
      <span
        className={`relative grid size-10 shrink-0 place-items-center rounded-full border ${
          footer ? "border-lavender/50 text-lavender" : "border-plum/25 text-plum"
        }`}
        aria-hidden="true"
      >
        <span className="absolute inset-1.5 rounded-full border border-current/20" />
        <span className="font-display text-lg leading-none">E</span>
        <Plus size={10} className="absolute -right-1 -top-1 rounded-full bg-peach p-0.5 text-plum transition-transform duration-300 group-hover:rotate-90" />
      </span>
      <span className="flex flex-col gap-1">
        <strong className="text-[11px] font-bold tracking-[0.16em]">ELENA MARCEAU</strong>
        <small className={`text-[7px] tracking-[0.19em] ${footer ? "text-paper/60" : "text-plum/55"}`}>
          NEUROLOGY / LONDON
        </small>
      </span>
    </Link>
  );
}
