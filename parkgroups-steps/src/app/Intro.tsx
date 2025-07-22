"use client";

import { motion, AnimatePresence } from "framer-motion";

interface IntroOverlayProps {
  show: boolean;
}

export default function Intro({ show }: IntroOverlayProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-[#1a2e1f] flex items-center justify-center z-50 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Multiple green glitch overlays representing 6 companies */}
          <motion.div
            className="absolute inset-0 bg-green-900 opacity-15"
            animate={{ opacity: [0, 0.25, 0, 0.15, 0, 0.2, 0] }}
            transition={{
              duration: 4,
              times: [0, 0.1, 0.15, 0.3, 0.35, 0.8, 1],
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 bg-emerald-900 opacity-12"
            animate={{ opacity: [0, 0.18, 0, 0.12, 0, 0.15, 0] }}
            transition={{
              duration: 4,
              times: [0, 0.12, 0.18, 0.32, 0.38, 0.82, 1],
              delay: 0.15,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 bg-teal-900 opacity-8"
            animate={{ opacity: [0, 0.12, 0, 0.08, 0, 0.1, 0] }}
            transition={{
              duration: 4,
              times: [0, 0.2, 0.25, 0.45, 0.5, 0.85, 1],
              delay: 0.3,
              ease: "easeInOut",
            }}
          />

          {/* Euphoric green energy waves */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 30% 70%, rgba(6, 78, 59, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 70% 30%, rgba(5, 46, 22, 0.4) 0%, transparent 60%),
                           radial-gradient(circle at 50% 50%, rgba(20, 83, 45, 0.2) 0%, transparent 70%)`,
            }}
            animate={{
              opacity: [0, 0.6, 0.3, 0.8, 0.4, 0],
              scale: [1, 1.1, 0.95, 1.05, 1],
            }}
            transition={{
              duration: 4,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              ease: "easeInOut",
            }}
          />

          {/* Main logo with fade animation only */}
          <motion.img
            src="/logo.png"
            alt="Park Groups Logo"
            className="w-70 h-70 relative z-10"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.7, 0.4, 0.9, 0.6, 1],
            }}
            transition={{
              duration: 4,
              times: [0, 0.2, 0.35, 0.6, 0.8, 1],
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              filter: "drop-shadow(0 0 10px rgba(6, 78, 59, 0.5))",
            }}
          />

          {/* Dark green scan lines */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(6, 78, 59, 0.15) 2px,
                rgba(6, 78, 59, 0.15) 4px
              )`,
            }}
            animate={{
              opacity: [0, 0.6, 0.2, 0.8, 0.3, 0],
              y: [0, -3, 2, -2, 1, 0],
            }}
            transition={{
              duration: 4,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              ease: "easeInOut",
            }}
          />

          {/* Matrix-style digital rain effect */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: "2px",
                height: "60px",
                backgroundColor: [
                  "rgba(6, 78, 59, 0.8)", // Company 1 - Deep forest
                  "rgba(5, 46, 22, 0.7)", // Company 2 - Dark moss
                  "rgba(20, 83, 45, 0.9)", // Company 3 - Rich emerald
                  "rgba(13, 69, 41, 0.6)", // Company 4 - Pine shadow
                  "rgba(8, 55, 31, 0.8)", // Company 5 - Jungle depth
                  "rgba(15, 76, 47, 0.7)", // Company 6 - Forest canopy
                ][i],
                left: `${15 + i * 12}%`,
                top: "20%",
              }}
              animate={{
                y: ["-60px", "400px"],
                opacity: [0, 1, 1, 0],
                scaleY: [0.5, 1, 1.5, 0.3],
              }}
              transition={{
                duration: 2.5,
                delay: 0.8 + i * 0.2,
                ease: "easeOut",
                repeat: 1,
              }}
            />
          ))}

          {/* Euphoric energy pulses from 6 companies */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`pulse-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${20 + i * 8}px`,
                height: `${20 + i * 8}px`,
                backgroundColor: [
                  "rgba(6, 78, 59, 0.4)",
                  "rgba(5, 46, 22, 0.5)",
                  "rgba(20, 83, 45, 0.3)",
                  "rgba(13, 69, 41, 0.6)",
                  "rgba(8, 55, 31, 0.4)",
                  "rgba(15, 76, 47, 0.5)",
                ][i],
                left: `${25 + Math.cos((i * 60 * Math.PI) / 180) * 150}px`,
                top: `${50 + Math.sin((i * 60 * Math.PI) / 180) * 150}px`,
              }}
              animate={{
                scale: [0, 2, 0],
                opacity: [0, 0.8, 0],
                rotate: [0, 180],
              }}
              transition={{
                duration: 1.8,
                delay: 1.5 + i * 0.15,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Loading text with green glitch */}
          <motion.p
            className="absolute bottom-32 text-[#e6c068] text-lg tracking-wider font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 1, 0.7, 1, 0],
              y: [20, 0, 0, -5, 0, -15],
              x: [0, -2, 3, -1, 2, 0],
              textShadow: [
                "0 0 0 transparent",
                "2px 0 0 rgba(6, 78, 59, 0.8), -2px 0 0 rgba(20, 83, 45, 0.6)",
                "0 0 5px rgba(5, 46, 22, 0.9)",
                "1px 0 0 rgba(13, 69, 41, 0.7), -1px 0 0 rgba(8, 55, 31, 0.5)",
                "0 0 8px rgba(15, 76, 47, 0.8)",
                "0 0 0 transparent",
              ],
            }}
            transition={{
              duration: 4.5,
              times: [0, 0.25, 0.5, 0.65, 0.8, 1],
              ease: "easeInOut",
            }}
          >
            PARK.SYSTEM.INITIALIZED...
          </motion.p>

          {/* Hexagonal data fragments representing companies */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`hex-${i}`}
              className="absolute border-2 opacity-30"
              style={{
                width: "12px",
                height: "12px",
                borderColor: [
                  "rgb(6, 78, 59)",
                  "rgb(5, 46, 22)",
                  "rgb(20, 83, 45)",
                  "rgb(13, 69, 41)",
                  "rgb(8, 55, 31)",
                  "rgb(15, 76, 47)",
                ][i],
                left: `${20 + i * 10}%`,
                bottom: `${60 + (i % 2) * 15}px`,
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
              animate={{
                rotate: [0, 120, 240, 360],
                scale: [0, 1.2, 0.8, 1],
                opacity: [0, 0.6, 0.3, 0],
              }}
              transition={{
                duration: 2,
                delay: 2 + i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
