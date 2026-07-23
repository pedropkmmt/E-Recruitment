import React, { useState } from "react";
import { Briefcase, Menu, X } from "lucide-react";
import { colors } from "../utils/colors";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["What it does", "For candidates", "For hrs", "How it works"];

  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{ background: colors.card, borderColor: colors.line }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-md"
            style={{ background: colors.blue }}
          >
            <Briefcase size={16} color="#fff" />
          </span>
          <span className="font-display text-lg font-semibold" style={{ color: colors.navy }}>
            E-Recruitment
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="font-body text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: colors.ink }}
            >
              {l}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: colors.navy }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t px-6 py-4 md:hidden" style={{ borderColor: colors.line }}>
          {links.map((l) => (
            <a key={l} href="#" className="block py-2 font-body text-sm" style={{ color: colors.ink }}>
              {l}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
