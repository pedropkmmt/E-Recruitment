import React from "react";
import {colors } from "../utils/colors";

const CTA = () => (
  <section className="px-4 py-14 sm:px-6 sm:py-20" style={{ background: colors.card }}>
    <div
      className="mx-auto max-w-6xl rounded-2xl px-5 py-10 text-center sm:px-6 sm:py-14"
      style={{ background: colors.navy }}
    >
      <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
        Start hiring — or get hired
      </h2>
      <p className="mx-auto mt-3 max-w-md font-body text-sm" style={{ color: "#B7C6E2" }}>
        Create a free account to apply for jobs, or sign in as an admin to post
        your first role.
      </p>
      <div className="mx-auto mt-7 flex max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
        <a
          href="#"
          className="rounded-md px-6 py-3 font-body text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          style={{ background: colors.blue }}
        >
          Create free account
        </a>
      </div>
    </div>
  </section>
);

export default CTA;
