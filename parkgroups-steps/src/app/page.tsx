"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative font-sans">
      <AnimatePresence>
        {showIntro && (
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

      {/* Main blurred page while intro active */}
      <div
        className={`${
          showIntro ? "blur-md" : "blur-0"
        } transition-all duration-700`}
      >
        {/* Header */}
        <motion.header
          className="bg-[#0f1a13] text-[#e6c068] px-6 py-4 flex justify-between items-center border-b border-[#2a3d2f]"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            />
            <span className="text-xl font-semibold">Park Groups</span>
          </motion.div>
          <nav className="space-x-6">
            {["Home", "About", "Companies", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className="hover:text-[#d4af37] transition relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#e6c068] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>
        </motion.header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0a0f0c] via-[#1a2e1f] to-[#243529] text-[#f8f6f0] text-center py-20 relative overflow-hidden">
          {/* Animated floating elements */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 border border-[#e6c068] opacity-20"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              x: [0, 20, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ rotate: 45 }}
          />

          <motion.div
            className="absolute bottom-20 right-20 w-24 h-24 border border-[#e6c068] opacity-15"
            animate={{
              rotate: [0, -360],
              scale: [1, 0.8, 1.2, 1],
              x: [0, -25, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            style={{ rotate: 12 }}
          />

          <motion.div
            className="absolute top-1/3 right-1/3 w-16 h-16 border border-[#e6c068] opacity-25"
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.3, 0.9, 1],
              x: [0, 15, -10, 0],
              y: [0, -20, 10, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            style={{ rotate: 45 }}
          />

          {/* Additional floating elements */}
          <motion.div
            className="absolute top-1/2 left-10 w-8 h-8 bg-[#e6c068] opacity-10 rounded-full"
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -40, 25, 0],
              scale: [1, 1.5, 0.8, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <motion.div
            className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-[#e6c068] opacity-8 rounded-full"
            animate={{
              x: [0, -25, 35, 0],
              y: [0, 30, -15, 0],
              scale: [1, 0.6, 1.4, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />

          <div className="relative z-10">
            <motion.h1
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Welcome to Park Groups
            </motion.h1>
            <motion.p
              className="text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Building Businesses. Creating Impact.
            </motion.p>
            <motion.button
              className="bg-[#e6c068] text-[#1a2e1f] px-6 py-3 rounded hover:bg-[#d4af37] shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(230, 192, 104, 0.3)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Companies
            </motion.button>
          </div>
        </section>

        {/* Body Content */}
        <main className="bg-[#0a0f0c] text-[#f8f6f0] px-8 py-12 space-y-8">
          <motion.h2
            className="text-3xl font-semibold"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Portfolio
          </motion.h2>
          <motion.p
            className="text-[#c5b896]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Park Groups is a diversified holding company with investments in
            multiple sectors across the UK.
          </motion.p>

          {/* Animated grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-gradient-to-br from-[#1a2e1f] to-[#243529] p-6 rounded shadow hover:shadow-xl transition-all duration-300 border-l-4 border-[#e6c068] group relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 },
              }}
            >
              {/* Floating particle effect */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-[#e6c068] rounded-full opacity-60"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.h3
                className="text-xl font-bold mb-2 text-[#e6c068]"
                whileHover={{ scale: 1.05 }}
              >
                Company A
              </motion.h3>
              <p className="text-[#c5b896] group-hover:text-[#f8f6f0] transition-colors">
                Industry description and impact summary.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#1a2e1f] to-[#243529] p-6 rounded shadow hover:shadow-xl transition-all duration-300 border-l-4 border-[#e6c068] group relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-[#e6c068] rounded-full opacity-60"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.h3
                className="text-xl font-bold mb-2 text-[#e6c068]"
                whileHover={{ scale: 1.05 }}
              >
                Company B
              </motion.h3>
              <p className="text-[#c5b896] group-hover:text-[#f8f6f0] transition-colors">
                Industry description and impact summary.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#1a2e1f] to-[#243529] p-6 rounded shadow hover:shadow-xl transition-all duration-300 border-l-4 border-[#e6c068] group relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-[#e6c068] rounded-full opacity-60"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
              <motion.h3
                className="text-xl font-bold mb-2 text-[#e6c068]"
                whileHover={{ scale: 1.05 }}
              >
                Company C
              </motion.h3>
              <p className="text-[#c5b896] group-hover:text-[#f8f6f0] transition-colors">
                Industry description and impact summary.
              </p>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-[#1a2e1f] text-[#e6c068] text-center py-6 border-t border-[#2a3d2f]">
          &copy; {new Date().getFullYear()} Park Groups. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
