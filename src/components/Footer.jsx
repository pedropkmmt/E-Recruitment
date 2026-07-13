import React from "react";
import { Briefcase } from "lucide-react";
import { colors } from "../utils/colors";

const Footer = () => (
  <footer className="border-t" style={{ background: colors.card, borderColor: colors.line }}>
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-md" style={{ background: colors.blue }}>
          <Briefcase size={14} color="#fff" />
        </span>
        <span className="font-display text-sm font-semibold" style={{ color: colors.navy }}>
          E-Recruitment
        </span>
      </div>
      <div className="flex gap-6">
        {["Jobs", "Admins", "Contact", "Privacy"].map((l) => (
          <a key={l} href="#" className="font-body text-sm transition-opacity hover:opacity-70" style={{ color: colors.muted }}>
            {l}
          </a>
        ))}
      </div>
      <p className="font-body text-xs" style={{ color: colors.muted }}>
        © {new Date().getFullYear()} E-Recruitment
      </p>
    </div>
  </footer>
);

export default Footer;
