import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { colors } from "../utils/colors";

const CandidateCard = ({ name, role, showActions }) => (
  <div
    className="card-in rounded-lg border p-3 shadow-sm"
    style={{ background: colors.card, borderColor:  colors.line }}
  >
    <div className="flex items-center gap-2">
      <div
        className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold"
        style={{ background:  colors.sky, color: colors.blue }}
      >
        {name.split(" ").map((n) => n[0]).join("")}
      </div>
      <div>
        <p className="font-body text-sm font-semibold" style={{ color: colors.ink }}>{name}</p>
        <p className="font-body text-xs" style={{ color:  colors.muted }}>{role}</p>
      </div>
    </div>
    {showActions && (
      <div className="mt-3 flex gap-2">
        <button
          className="flex flex-1 items-center justify-center gap-1 rounded-md px-2 py-1.5 font-body text-xs font-semibold text-white"
          style={{ background: colors.green }}
        >
          <CheckCircle2 size={13} /> Accept
        </button>
        <button
          className="flex flex-1 items-center justify-center gap-1 rounded-md border px-2 py-1.5 font-body text-xs font-semibold"
          style={{ borderColor: colors.line, color:colors.red }}
        >
          <XCircle size={13} /> Reject
        </button>
      </div>
    )}
  </div>
);

export default CandidateCard;
