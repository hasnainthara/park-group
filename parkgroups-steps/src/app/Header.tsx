"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 0.98]);
  const headerBlur = useTransform(scrollY, [0, 100], [10, 25]);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Home", sectionId: "hero", hasDropdown: false },
    { name: "About", sectionId: "about", hasDropdown: false },
    { name: "Companies", sectionId: "portfolio", hasDropdown: true },
    { name: "Contact", sectionId: "contact", hasDropdown: false },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 100,
        y: (e.clientY - window.innerHeight / 2) / 100,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x}% ${
              50 + mousePosition.y
            }%, rgba(230, 192, 104, 0.3) 0%, transparent 70%)`,
          }}
        />
      </div>

      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "h-20 bg-[#0a0f0c]/95 backdrop-blur-xl border-b border-[#e6c068]/30 shadow-2xl"
            : "h-24 bg-gradient-to-r from-[#0f1a13]/90 via-[#1a2e1f]/85 to-[#243529]/90 backdrop-blur-lg border-b border-[#e6c068]/20"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        style={{
          backdropFilter: `blur(${headerBlur}px)`,
          opacity: headerOpacity,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#e6c068]/5 via-transparent to-[#e6c068]/5 opacity-50" />
        <motion.div
          className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-[#e6c068] to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />

        <div className="relative h-full max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            className="flex items-center gap-4 min-w-[250px] group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{ x: mousePosition.x * 0.5, y: mousePosition.y * 0.3 }}
            onClick={() => scrollToSection("hero")}
          >
            <motion.div
              className={`transition-all duration-700 flex items-center justify-center ${
                isScrolled ? "w-16 h-16" : "w-20 h-20"
              }`}
              whileHover={{ rotate: [0, -2, 2, 0] }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src="/park-groups-logo.svg"
                alt="Park Groups Logo"
                className="w-full h-full object-contain"
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              className="space-y-0.5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h1
                className={`font-bold bg-gradient-to-r from-[#e6c068] via-[#f8f6f0] to-[#e6c068] bg-clip-text text-transparent leading-tight ${
                  isScrolled ? "text-2xl" : "text-3xl"
                } transition-all duration-700`}
                whileHover={{
                  backgroundImage:
                    "linear-gradient(45deg, #e6c068, #f8f6f0, #d4af37, #e6c068)",
                }}
                style={{
                  textShadow: "0 0 10px rgba(230, 192, 104, 0.3)",
                  lineHeight: "1.1",
                }}
              >
                Park Groups
              </motion.h1>

              {!isScrolled && (
                <motion.div
                  className="text-xs text-[#e6c068]/80 font-medium mt-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  style={{
                    textShadow: "0 0 5px rgba(230, 192, 104, 0.2)",
                  }}
                >
                  <span className="relative">
                    Premium Investments
                    <motion.div
                      className="absolute -bottom-0.5 left-0 w-full h-px bg-gradient-to-r from-[#e6c068]/60 to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 1.2 }}
                    />
                  </span>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <motion.button
                  onClick={() => scrollToSection(item.sectionId)}
                  className="relative flex items-center space-x-1 px-6 py-3 text-[#f8f6f0] font-medium transition-all duration-300 hover:text-[#e6c068] group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#e6c068]/10 to-[#d4af37]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    layoutId={`nav-bg-${index}`}
                  />

                  <motion.div
                    className="absolute inset-0 border border-[#e6c068]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  />

                  <span className="relative z-10">{item.name}</span>

                  {item.hasDropdown && (
                    <motion.div
                      animate={{ rotate: [0, 180, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      <ChevronDown className="w-4 h-4 relative z-10" />
                    </motion.div>
                  )}

                  <motion.div className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-[#e6c068] to-[#d4af37] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.button>
              </motion.div>
            ))}

            <motion.button
              className="ml-6 group relative bg-gradient-to-r from-[#e6c068] to-[#d4af37] text-[#0a0f0c] px-6 py-3 rounded-2xl font-bold shadow-xl border border-[#e6c068]/30 overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(230, 192, 104, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
            >
              <span className="relative z-10">Get Started</span>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                animate={{ x: ["0%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative w-10 h-10 bg-[#1a2e1f] rounded-xl border border-[#e6c068]/30 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#e6c068]" />
              ) : (
                <Menu className="w-5 h-5 text-[#e6c068]" />
              )}
            </motion.div>
          </motion.button>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e6c068]/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        className={`fixed inset-0 z-40 bg-[#0a0f0c]/95 backdrop-blur-xl lg:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.sectionId)}
              className="text-3xl font-bold text-[#f8f6f0] hover:text-[#e6c068] transition-colors"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 50,
              }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
}
