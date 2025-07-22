"use client";

import { motion } from "framer-motion";

export default function Header() {
  const navItems = ["Home", "About", "Companies", "Contact"];

  return (
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
        {navItems.map((item, index) => (
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
  );
}
