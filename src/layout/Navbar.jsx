import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { colors } from "../utils/colors";

const links = [
  { label: "Platform", href: "#platform" },
  { label: "How it works", href: "#how" },
  { label: "For candidates", href: "#platform" },
  { label: "For HR", href: "#platform" },
];

const Logo = () => (
  <a href="#" className="flex items-center gap-2.5">
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
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
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur"
      style={{ background: "rgba(244,244,242,.82)", borderColor: colors.line }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-body text-[13px] font-medium transition-colors hover:text-black"
              style={{ color: colors.muted }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href="#" className="font-body text-[13px] font-semibold" style={{ color: colors.ink }}>
            Sign in
          </a>
          <a
            href="#cta"
            className="rounded-full px-4 py-2 font-body text-[13px] font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ background: colors.ink }}
          >
            Get started
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: colors.ink }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t px-6 py-4 md:hidden" style={{ borderColor: colors.line }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block py-2 font-body text-sm" style={{ color: colors.ink }}>
              {l.label}
            </a>
          ))}
          <a href="#cta" onClick={() => setOpen(false)} className="mt-2 block rounded-full py-2.5 text-center font-body text-sm font-semibold text-white" style={{ background: colors.ink }}>
            Get started
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
