import React, { useState, useEffect } from "react";
import CandidateCard from "./CandidateCard";
import { colors } from "../utils/colors";

const CANDIDATES = [
  { name: "Naledi M.", role: "Frontend Developer", stage: 0 },
  { name: "Sipho K.", role: "Data Analyst", stage: 1 },
  { name: "Aisha P.", role: "Product Designer", stage: 2 },
];

const STAGES = ["Applied", "Interview", "Hired"];

const PipelineBoard = () => {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % 3), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="rounded-xl border p-4 shadow-lg"
      style={{ background: colors.sky, borderColor: colors.line }}
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="font-body text-xs font-medium uppercase tracking-wider" style={{ color: colors.muted }}>
          Candidate pipeline — Frontend Developer
        </span>
        <span
          className="rounded-full px-2 py-0.5 font-body text-[10px] font-semibold text-white"
          style={{ background: colors.blue }}
        >
          LIVE
        </span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {STAGES.map((stage, i) => (
          <div key={stage}>
            <p className="mb-2 font-body text-[11px] font-semibold uppercase tracking-wide" style={{ color: colors.muted }}>
              {stage}
            </p>
            <div
              className="flex min-h-[72px] flex-col gap-2 rounded-lg border border-dashed p-2 sm:min-h-[120px]"
              style={{ borderColor: "#B9CBE6" }}
            >
              {CANDIDATES.filter((c) => (c.stage + tick) % 3 === i).map((c) => (
                <CandidateCard key={c.name + tick} name={c.name} role={c.role} showActions={i === 0} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PipelineBoard;
