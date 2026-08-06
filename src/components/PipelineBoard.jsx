import React, { useState, useEffect } from "react";
import CandidateCard from "./CandidateCard";
import { colors } from "../utils/colors";

const CANDIDATES = [
  { name: "Naledi M.", role: "Frontend Developer", stage: 0 },
  { name: "Sipho K.",  role: "Frontend Developer", stage: 1 },
  { name: "Aisha P.",  role: "Frontend Developer", stage: 2 },
];

const STAGES = [
  { key: "applied",   label: "Applied" },
  { key: "interview", label: "Interview" },
  { key: "offer",     label: "Offer" },
];

const STATS = [
  { value: "128", label: "applied" },
  { value: "12",  label: "in review" },
  { value: "03",  label: "offers" },
];

const PipelineBoard = () => {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % 3), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative">
      <div className="iris-glow absolute -inset-6 -z-10" aria-hidden />
      <div
        className="float-y rounded-2xl border p-4 sm:p-5"
        style={{
          background: colors.card,
          borderColor: colors.line,
          boxShadow: "0 24px 60px -24px rgba(21,20,33,.35), 0 2px 6px rgba(21,20,33,.06)",
        }}
      >
        {/* header */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-label" style={{ color: colors.muted }}>
              Live pipeline
            </p>
            <p className="mt-0.5 font-display text-sm font-bold" style={{ color: colors.ink }}>
              Frontend Developer
            </p>
          </div>
          <span
            className="flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-bold"
            style={{ background: "rgba(18,185,129,.1)", color: "#0C8F63" }}
          >
            <span className="live-dot h-1.5 w-1.5 rounded-full" style={{ background: colors.mint }} />
            LIVE
          </span>
        </div>

        <div className="mb-3 flex items-center gap-2 px-1">
          {STAGES.map((s, i) => (
            <React.Fragment key={s.key}>
              <span className="font-mono text-[10px] font-bold uppercase" style={{ color: colors.muted }}>
                {s.label}
              </span>
              {i < STAGES.length - 1 && (
                <span
                  className="rail-flow h-px flex-1"
                  style={{
                    backgroundImage: `repeating-linear-gradient(90deg, ${colors.line} 0 8px, transparent 8px 16px)`,
                    backgroundSize: "28px 1px",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* columns */}
        <div className="grid grid-cols-3 gap-2.5">
          {STAGES.map((stage, i) => (
            <div
              key={stage.key}
              className="flex min-h-[112px] flex-col gap-2 rounded-xl p-2"
              style={{ background: colors.paper }}
            >
              {CANDIDATES.filter((c) => (c.stage + tick) % 3 === i).map((c) => (
                <CandidateCard
                  key={c.name + tick}
                  name={c.name}
                  role={c.role}
                  stageKey={stage.key}
                  showActions={i === 0}
                />
              ))}
            </div>
          ))}
        </div>

        {/* stats footer */}
        <div className="mt-4 grid grid-cols-3 border-t pt-3" style={{ borderColor: colors.line }}>
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-lg font-bold leading-none" style={{ color: colors.ink }}>
                {s.value}
              </p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-wider" style={{ color: colors.muted }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PipelineBoard;
