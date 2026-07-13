import React from "react";
import { Search, Send, CalendarCheck, ClipboardList, Users, ShieldCheck } from "lucide-react";
import { colors} from "../utils/colors";

const FEATURES = [
  {
    heading: "For candidates",
    items: [
      { icon: Search, title: "Browse open jobs", text: "See every role posted by the company, with full descriptions and requirements." },
      { icon: Send, title: "Apply online", text: "Submit your application and CV directly through the platform " },
      { icon: CalendarCheck, title: "Get an answer", text: "Know where you stand: accepted for an interview, or notified if it's not a fit." },
    ],
  },
  {
    heading: "For admins",
    items: [
      { icon: ClipboardList, title: "Create and post jobs", text: "Write a job, set the details, and publish it so every candidate can see and apply." },
      { icon: Users, title: "View applicants", text: "See the full list of candidates who applied to each job, with their details in one view." },
      { icon: ShieldCheck, title: "Accept or reject", text: "Move a candidate forward to an interview or decline the application, in one click." },
    ],
  },
];

const Features = () => (
  <section className="py-14 sm:py-20" style={{ background: colors.card }}>
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="mb-10 text-center sm:mb-12">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl lg:text-4xl" style={{ color: colors.navy }}>
          What the platform does
        </h2>
        <p className="mx-auto mt-3 max-w-xl font-body text-sm" style={{ color: colors.muted }}>
          One system for the whole hiring flow — from the moment a job is posted
          to the interview decision.
        </p>
      </div>

      <div className="grid gap-6 sm:gap-10 lg:grid-cols-2">
        {FEATURES.map((group) => (
          <div
            key={group.heading}
            className="rounded-2xl border p-5 sm:p-8"
            style={{ background: colors.sky, borderColor: colors.line }}
          >
            <h3 className="font-display text-xl font-semibold" style={{ color: colors.navy }}>
              {group.heading}
            </h3>
            <div className="mt-6 space-y-6">
              {group.items.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md"
                    style={{ background: colors.card }}
                  >
                    <Icon size={19} color={colors.blue} />
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold" style={{ color: colors.ink }}>{title}</p>
                    <p className="mt-1 font-body text-sm leading-relaxed" style={{ color: colors.muted }}>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
