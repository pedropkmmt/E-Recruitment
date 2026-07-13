import React from "react";
import { ArrowRight, ClipboardList } from "lucide-react";
import PipelineBoard from "./PipelineBoard";
import { colors } from "../utils/colors";

const Hero = () => (
  <section style={{ background: colors.navy }}>
    <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-2 lg:py-28">
      <div>
        <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: colors.blueSoft }}>
          Online recruitment platform
        </p>
        <h1 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          Hiring, handled in one place.
        </h1>
        <p className="mt-5 max-w-md font-body text-base leading-relaxed" style={{ color: "#B7C6E2" }}>
          E-Recruitment connects job seekers and hiring admins. Candidates browse
          open roles and apply online. Admins create and publish jobs, review every
          applicant, and accept or reject candidates for interviews.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#"
            className="flex items-center justify-center gap-2 rounded-md px-5 py-3 font-body text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
            style={{ background: colors.blue }}
          >
            Apply for jobs <ArrowRight size={16} />
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 rounded-md border px-5 py-3 font-body text-sm font-semibold text-white sm:w-auto"
            style={{ borderColor: "#33507F" }}
          >
            <ClipboardList size={16} /> Post a job
          </a>
        </div>
      </div>
      <PipelineBoard />
    </div>
  </section>
);

export default Hero;
