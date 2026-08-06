import React from "react";
import { ArrowRight } from "lucide-react";
import PipelineBoard from "./PipelineBoard";
import { colors } from "../utils/colors";

const Hero = () => (
  <section className="relative overflow-hidden" style={{ background: colors.paper }}>
    <div
      className="pointer-events-none absolute inset-0 -z-0 opacity-[0.6]"
      style={{
        backgroundImage: `linear-gradient(${colors.line} 1px, transparent 1px)`,
        backgroundSize: "100% 72px",
        maskImage: "linear-gradient(to bottom, black, transparent 80%)",
        WebkitMaskImage: "linear-gradient(to bottom, black, transparent 80%)",
      }}
      aria-hidden
    />
    <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
      <div>
        <span
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider"
          style={{ borderColor: colors.line, background: colors.card, color: colors.iris }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: colors.iris }} />
          Applicant tracking, simplified
        </span>

        <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.03] sm:text-6xl" style={{ color: colors.ink }}>
          From applied<br />
          to hired, on<br />
          <span style={{ color: colors.iris }}>one track.</span>
        </h1>

        <p className="mt-6 max-w-md font-body text-[15px] leading-relaxed sm:text-base" style={{ color: colors.muted }}>
          Recruit connects people looking for work with the teams hiring them.
          Candidates browse roles and apply in minutes. HR posts jobs, reviews
          every applicant, and moves them forward all in one place.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#cta"
            className="flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-body text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ background: colors.iris, boxShadow: "0 10px 24px -8px rgba(90,59,242,.6)" }}
          >
            Apply for jobs <ArrowRight size={16} />
          </a>
          <a
            href="#cta"
            className="flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 font-body text-sm font-semibold transition-colors hover:bg-white"
            style={{ borderColor: colors.ink, color: colors.ink }}
          >
            Post a job
          </a>
        </div>

        <div className="mt-9 flex items-center gap-6 font-mono text-[11px] uppercase tracking-wider" style={{ color: colors.muted }}>
          <span>No fees to apply</span>
          <span className="h-3 w-px" style={{ background: colors.line }} />
          <span>Live status updates</span>
        </div>
      </div>

      <div className="lg:pl-4">
        <PipelineBoard />
      </div>
    </div>
  </section>
);

export default Hero;
