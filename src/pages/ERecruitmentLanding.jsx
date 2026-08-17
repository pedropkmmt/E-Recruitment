import React from "react";
import { colors } from "../utils/colors";
import Navbar from "../layout/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Footer from "../layout/Footer";

export default function ERecruitmentLanding() {
  return (
    <div className="font-body" style={{ background: colors.paper }}>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
