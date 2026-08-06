import React from "react";
import { colors } from "../utils/colors";

const cols = [
  { head: "Candidates", links: ["Browse jobs", "Applications", "Create account"] },
  { head: "For HR", links: ["Post a job", "Applicant list", "Sign in"] },
  { head: "Company", links: ["About", "Contact", "Privacy"] },
];

const Footer = () => (
  <footer className="border-t" style={{ background: colors.paper, borderColor: colors.line }}>
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#" className="flex items-center gap-2.5">
            <svg width="24" height="24" viewBox="0 0 26 26" fill="none" aria-hidden>
              <rect width="26" height="26" rx="8" fill={colors.ink} />
              <path d="M6 13h14" stroke={colors.mutedInk} strokeWidth="1.5" strokeDasharray="2 3" strokeLinecap="round" />
              <circle cx="6" cy="13" r="2.4" fill={colors.mutedInk} />
              <circle cx="13" cy="13" r="2.4" fill={colors.mutedInk} />
              <circle cx="20" cy="13" r="3" fill={colors.iris} />
            </svg>
            <span className="font-display text-[17px] font-bold" style={{ color: colors.ink }}>
              Recruit<span style={{ color: colors.iris }}>·</span>
            </span>
          </a>
          <p className="mt-4 max-w-[15rem] font-body text-[13px] leading-relaxed" style={{ color: colors.muted }}>
            One track from application to offer for the people hiring and the people looking.
          </p>
        </div>

        {cols.map((c) => (
          <div key={c.head}>
            <p className="font-mono text-[11px] uppercase tracking-wider" style={{ color: colors.muted }}>{c.head}</p>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="font-body text-[13px] transition-colors hover:text-black" style={{ color: colors.ink }}>{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 sm:flex-row" style={{ borderColor: colors.line }}>
        <p className="font-mono text-[11px]" style={{ color: colors.muted }}>
          © {new Date().getFullYear()} E-Recruitment platform
        </p>
        <p className="font-mono text-[11px]" style={{ color: colors.muted }}>Built for candidates & HR</p>
      </div>
    </div>
  </footer>
);

export default Footer;
