"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Sparkles, TrendingUp, Users, Globe } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToPortfolio = () => {
    const portfolioSection = document.querySelector("main");
    portfolioSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-[#0a0f0c] via-[#1a2e1f] to-[#243529] text-[#f8f6f0] overflow-hidden flex items-center justify-center"
    >
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e6c068]/10 via-transparent to-[#e6c068]/10 animate-pulse" />
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x}% ${
              50 + mousePosition.y
            }%, rgba(230, 192, 104, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Dynamic Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border-2 border-[#e6c068] opacity-20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          rotate: 45,
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 border-2 border-[#e6c068] opacity-25"
        animate={{
          rotate: [0, -360],
          scale: [1, 0.8, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          rotate: 12,
          x: -mousePosition.x,
          y: -mousePosition.y,
        }}
      />

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#e6c068] rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center max-w-6xl mx-auto px-8"
        style={{ y, opacity, scale }}
      >
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-2 bg-[#1a2e1f]/80 backdrop-blur-sm border border-[#e6c068]/30 rounded-full px-6 py-3 mb-8"
        >
          <Sparkles className="w-5 h-5 text-[#e6c068]" />
          <span className="text-[#e6c068] font-semibold">
            Premium Investment Portfolio
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#f8f6f0] via-[#e6c068] to-[#f8f6f0] bg-clip-text text-transparent leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Park Groups
        </motion.h1>

        {/* Subtitle with Animation */}
        <motion.div
          className="text-2xl md:text-3xl mb-8 text-[#c5b896] font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <span className="inline-block">Building</span>
          <motion.span
            className="inline-block mx-3 text-[#e6c068] font-semibold"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Exceptional
          </motion.span>
          <span className="inline-block">Businesses</span>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-xl md:text-2xl mb-12 text-[#c5b896] max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          A diversified holding company investing in innovative enterprises
          across the UK, creating sustainable value and driving market
          leadership in multiple sectors.
        </motion.p>

        {/* Stats Row */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex items-center space-x-3 bg-[#1a2e1f]/50 backdrop-blur-sm rounded-2xl px-6 py-4 border border-[#e6c068]/20">
            <TrendingUp className="w-6 h-6 text-[#e6c068]" />
            <div>
              <div className="text-2xl font-bold text-[#f8f6f0]">6</div>
              <div className="text-[#c5b896] text-sm">Companies</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-[#1a2e1f]/50 backdrop-blur-sm rounded-2xl px-6 py-4 border border-[#e6c068]/20">
            <Users className="w-6 h-6 text-[#e6c068]" />
            <div>
              <div className="text-2xl font-bold text-[#f8f6f0]">70K+</div>
              <div className="text-[#c5b896] text-sm">Customers</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-[#1a2e1f]/50 backdrop-blur-sm rounded-2xl px-6 py-4 border border-[#e6c068]/20">
            <Globe className="w-6 h-6 text-[#e6c068]" />
            <div>
              <div className="text-2xl font-bold text-[#f8f6f0]">UK</div>
              <div className="text-[#c5b896] text-sm">Nationwide</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={scrollToPortfolio}
          className="group relative bg-gradient-to-r from-[#e6c068] to-[#d4af37] text-[#0a0f0c] px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(230, 192, 104, 0.4)",
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center space-x-3">
            <span>Explore Our Portfolio</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </span>

          {/* Button shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: [-200, 200] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          />
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[#e6c068] cursor-pointer"
          onClick={scrollToPortfolio}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0a0f0c] to-transparent" />
    </section>
  );
}
