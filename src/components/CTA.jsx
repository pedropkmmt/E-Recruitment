import React from "react";
import { ArrowRight } from "lucide-react";
import { colors } from "../utils/colors";

const CTA = () => (
  <section id="cta" className="px-4 py-16 sm:px-6 sm:py-24" style={{ background: colors.paper }}>
    <div
      className="relative mx-auto max-w-5xl overflow-hidden rounded-[28px] px-6 py-14 text-center sm:px-10 sm:py-20"
      style={{ background: `linear-gradient(135deg, ${colors.iris}, ${colors.irisDeep})` }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, rgba(255,255,255,.6) 0 2px, transparent 2px 26px)`,
          maskImage: "radial-gradient(60% 60% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(60% 60% at 50% 50%, black, transparent)",
        }}
        aria-hidden
      />
      <div className="relative">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
          Start hiringor get hired.
        </h2>
        <p className="mx-auto mt-4 max-w-md font-body text-[15px]" style={{ color: "rgba(255,255,255,.82)" }}>
          Create a free account to apply for roles, or sign in as HR to post your
          first job and start reviewing candidates today.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-body text-sm font-semibold transition-transform hover:-translate-y-0.5"
            style={{ color: colors.iris }}
          >
            Create free account <ArrowRight size={16} />
          </a>
          <a
            href="#"
            className="flex items-center justify-center rounded-full px-6 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-white/10"
            style={{ border: "1px solid rgba(255,255,255,.45)" }}
          >
            Post a job as HR
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
