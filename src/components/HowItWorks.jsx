import React from "react";
import { FileText, Send, Users, CalendarCheck } from "lucide-react";
import {colors } from "../utils/colors";

const STEPS = [
  { icon: FileText, title: "Admin posts a job", text: "The role goes live and becomes visible to all candidates." },
  { icon: Send, title: "Candidates apply", text: "Applications appear in the admin's list as they come in." },
  { icon: Users, title: "Admin reviews applicants", text: "Each candidate's application is reviewed on the platform." },
  { icon: CalendarCheck, title: "Interview decision", text: "The admin accepts the candidate for an interview or rejects the application." },
];

const HowItWorks = () => (
  <section className="border-y py-14 sm:py-20" style={{ background: colors.sky, borderColor: colors.line }}>
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 className="text-center font-display text-2xl font-semibold sm:text-3xl lg:text-4xl" style={{ color: colors.navy }}>
        How it works
      </h2>
      <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <div key={s.title}>
            <div className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                style={{ background: colors.blue }}
              >
                <s.icon size={18} color="#fff" />
              </div>
              <span className="font-body text-xs font-semibold" style={{ color: colors.muted }}>
                Step {i + 1}
              </span>
            </div>
            <h3 className="mt-4 font-display text-base font-semibold" style={{ color: colors.navy }}>
              {s.title}
            </h3>
            <p className="mt-2 font-body text-sm leading-relaxed" style={{ color: colors.muted }}>
              {s.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
