import React from "react";
import { Check, X } from "lucide-react";
import { colors } from "../utils/colors";

const stageMeta = {
  applied:   { dot: colors.iris,  label: "New" },
  interview: { dot: colors.amber, label: "In review" },
  offer:     { dot: colors.mint,  label: "Offer" },
};

const CandidateCard = ({ name, role, stageKey = "applied", showActions }) => {
  const meta = stageMeta[stageKey] ?? stageMeta.applied;
  const initials = name.split(" ").map((n) => n[0]).join("");

  return (
    <div
      className="card-in rounded-xl border p-3"
      style={{ background: colors.card, borderColor: colors.line, boxShadow: "0 1px 2px rgba(21,20,33,.04)" }}
    >
      <div className="flex items-center gap-2.5">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-bold"
          style={{ background: colors.irisSoft, color: colors.iris }}
        >
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-body text-[13px] font-semibold" style={{ color: colors.ink }}>{name}</p>
          <p className="truncate font-body text-[11px]" style={{ color: colors.muted }}>{role}</p>
        </div>
        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full"
          style={{ background: meta.dot }}
          title={meta.label}
        />
      </div>

      {showActions && (
        <div className="mt-3 flex gap-1.5">
          <button
            className="flex flex-1 items-center justify-center gap-1 rounded-lg px-2 py-1.5 font-body text-[11px] font-semibold text-white transition-transform hover:-translate-y-px"
            style={{ background: colors.mint }}
          >
            <Check size={12} strokeWidth={3} /> Advance
          </button>
          <button
            className="flex items-center justify-center rounded-lg border px-2 py-1.5 transition-colors"
            style={{ borderColor: colors.line, color: colors.rose }}
            aria-label="Decline candidate"
          >
            <X size={13} strokeWidth={3} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CandidateCard;
