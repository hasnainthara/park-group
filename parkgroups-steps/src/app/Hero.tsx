"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
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
  );
}
