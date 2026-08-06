import React from "react";
import { Search, Send, Bell, PenLine, Users, CircleCheck } from "lucide-react";
import { colors } from "../utils/colors";

const GROUPS = [
  {
    tag: "01 / Candidates",
    heading: "Find a role. Apply. Hear back.",
    accent: colors.iris,
    items: [
      { icon: Search, title: "Browse open roles", text: "Every job a company posts, with the full description and requirements up front." },
      { icon: Send,   title: "Apply in minutes", text: "Send your application and CV straight through the platform, no back-and-forth email." },
      { icon: Bell,   title: "Know where you stand", text: "Get a clear answer: moved forward to an interview, or told early if it isn't a fit." },
    ],
  },
  {
    tag: "02 / HR",
    heading: "Post a role. Review. Decide.",
    accent: colors.mint,
    items: [
      { icon: PenLine,     title: "Post a job", text: "Write the role, set the details, and publish it live for every candidate to see." },
      { icon: Users,       title: "See every applicant", text: "The full list of people who applied to a role, with their details in one view." },
      { icon: CircleCheck, title: "Move them forward", text: "Advance a candidate to an interview or decline the application in a single click." },
    ],
  },
];

const Features = () => (
  <section id="platform" className="py-16 sm:py-24" style={{ background: colors.paper }}>
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="mb-12 max-w-2xl sm:mb-16">
        <p className="font-mono text-[11px] uppercase tracking-label" style={{ color: colors.iris }}>
          What the platform does
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl" style={{ color: colors.ink }}>
          Two sides of hiring, running on the same track.
        </h2>
      </div>

      <div className="grid gap-px overflow-hidden rounded-3xl border lg:grid-cols-2"
           style={{ borderColor: colors.line, background: colors.line }}>
        {GROUPS.map((group) => (
          <div key={group.tag} className="p-6 sm:p-10" style={{ background: colors.card }}>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ background: group.accent }} />
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider" style={{ color: colors.muted }}>
                {group.tag}
              </span>
            </div>
            <h3 className="mt-4 font-display text-xl font-bold sm:text-2xl" style={{ color: colors.ink }}>
              {group.heading}
            </h3>

            <div className="mt-8 space-y-7">
              {group.items.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: colors.paper, color: group.accent }}
                  >
                    <Icon size={18} strokeWidth={2.2} />
                  </div>
                  <div>
                    <p className="font-body text-[15px] font-semibold" style={{ color: colors.ink }}>{title}</p>
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
