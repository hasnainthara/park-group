"use client";

import { motion } from "framer-motion";

const companies = [
  {
    name: "Company A",
    description: "Industry description and impact summary.",
  },
  {
    name: "Company B",
    description: "Industry description and impact summary.",
  },
  {
    name: "Company C",
    description: "Industry description and impact summary.",
  },
];

export default function Portfolio() {
  return (
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
        {companies.map((company, index) => (
          <motion.div
            key={company.name}
            className="bg-gradient-to-br from-[#1a2e1f] to-[#243529] p-6 rounded shadow hover:shadow-xl transition-all duration-300 border-l-4 border-[#e6c068] group relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 + index * 0.2 }}
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
                delay: index,
              }}
            />
            <motion.h3
              className="text-xl font-bold mb-2 text-[#e6c068]"
              whileHover={{ scale: 1.05 }}
            >
              {company.name}
            </motion.h3>
            <p className="text-[#c5b896] group-hover:text-[#f8f6f0] transition-colors">
              {company.description}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
