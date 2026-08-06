import React from "react";
import { colors } from "../utils/colors";

const STEPS = [
  { n: "01", title: "HR posts a job", text: "The role goes live and becomes visible to every candidate on the platform." },
  { n: "02", title: "Candidates apply", text: "Applications land in the HR's list the moment they're submitted." },
  { n: "03", title: "HR reviews applicants", text: "Each application is opened and reviewed side by side in one view." },
  { n: "04", title: "A decision is made", text: "The candidate is moved forward to an interview, or the application is declined." },
];

const HowItWorks = () => (
  <section id="how" className="py-16 sm:py-24" style={{ background: colors.ink }}>
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="mb-14 max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-label" style={{ color: colors.mutedInk }}>
          The journey
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
          One clear path, from post to offer.
        </h2>
      </div>

      <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <div
          className="absolute left-0 right-0 top-4 hidden h-px lg:block"
          style={{ backgroundImage: `repeating-linear-gradient(90deg, ${colors.lineInk} 0 6px, transparent 6px 14px)` }}
          aria-hidden
        />
        {STEPS.map((s, i) => (
          <div key={s.n} className="relative">
            <div className="flex items-center gap-3">
              <span
                className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full font-mono text-[11px] font-bold text-white"
                style={{ background: i === STEPS.length - 1 ? colors.mint : colors.iris }}
              >
                {s.n}
              </span>
            </div>
            <h3 className="mt-5 font-display text-lg font-bold text-white">{s.title}</h3>
            <p className="mt-2 font-body text-sm leading-relaxed" style={{ color: colors.mutedInk }}>
              {s.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
