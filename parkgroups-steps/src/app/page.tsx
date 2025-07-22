"use client";

import { useState, useEffect } from "react";
import Intro from "./Intro";
import Header from "./Header";
import Hero from "./Hero";
import Portfolio from "./Portfolio";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative font-sans">
      <Intro show={showIntro} />

      {/* Main blurred page while intro active */}
      <div
        className={`${
          showIntro ? "blur-md" : "blur-0"
        } transition-all duration-700`}
      >
        <Header />
        <Hero />
        <Portfolio />

        {/* Footer */}
        <footer className="bg-[#1a2e1f] text-[#e6c068] text-center py-6 border-t border-[#2a3d2f]">
          &copy; {new Date().getFullYear()} Park Groups. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
