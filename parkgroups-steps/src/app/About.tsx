"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  MapPin,
  TrendingUp,
  Heart,
  Globe,
  Award,
  Building2,
  Target,
  Handshake,
  Star,
} from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("story");



  const stats = [
    { number: "15+", label: "Companies in Portfolio", icon: Building2 },
    { number: "£25M+", label: "Assets Under Management", icon: TrendingUp },
    { number: "8", label: "Years in Oxford", icon: MapPin },
    { number: "50+", label: "Strategic Partners", icon: Handshake },
  ];

  const values = [
    {
      icon: Heart,
      title: "Community First",
      description:
        "Proudly representing the Tamil community while embracing diversity and inclusion in all our business ventures.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "Committed to delivering exceptional results through strategic thinking, careful planning, and meticulous execution.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description:
        "Constantly seeking new opportunities and innovative approaches to create value for our investors and partners.",
    },
    {
      icon: Award,
      title: "Integrity",
      description:
        "Building lasting relationships based on trust, transparency, and ethical business practices in everything we do.",
    },
  ];

  const tabs = [
    { id: "story", label: "Our Story", icon: Heart },
    { id: "values", label: "Our Values", icon: Star },
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-br from-[#0a0f0c] via-[#1a2e1f] to-[#243529] py-12 lg:py-20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 lg:w-96 h-72 lg:h-96 bg-[#e6c068]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-60 lg:w-80 h-60 lg:h-80 bg-[#d4af37]/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-8 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#e6c068] via-[#f8f6f0] to-[#d4af37] bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Who We Are
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl text-[#f8f6f0]/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Two visionary leaders, one shared mission: building a diverse
            portfolio of successful businesses while proudly representing our
            community and values.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-gradient-to-br from-[#1a2e1f]/90 to-[#243529]/80 backdrop-blur-xl rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-[#e6c068]/20 text-center group hover:border-[#e6c068]/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-[#e6c068] to-[#d4af37] rounded-lg lg:rounded-xl flex items-center justify-center mx-auto mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#0a0f0c]" />
              </div>
              <motion.div
                className="text-2xl lg:text-3xl font-bold text-[#e6c068] mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <p className="text-[#f8f6f0]/80 text-xs lg:text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#1a2e1f]/50 backdrop-blur-xl rounded-xl lg:rounded-2xl p-2 border border-[#e6c068]/20 w-full max-w-2xl">
            <div className="flex gap-1 lg:gap-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3 lg:px-6 py-2 lg:py-3 rounded-lg lg:rounded-xl font-medium transition-all duration-300 flex-1 justify-center text-sm lg:text-base ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-[#e6c068] to-[#d4af37] text-[#0a0f0c] shadow-lg"
                      : "text-[#f8f6f0]/80 hover:text-[#e6c068] hover:bg-[#243529]/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tab Content */}
        <div className="mb-8 lg:mb-16">
          {activeTab === "story" && (
            <motion.div
              key="story"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#1a2e1f]/90 to-[#243529]/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-12 border border-[#e6c068]/20"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#e6c068] mb-4 lg:mb-6">
                    Our Journey
                  </h3>
                  <div className="space-y-4 lg:space-y-6 text-[#f8f6f0]/90 leading-relaxed text-sm lg:text-base">
                    <p>
                      Founded in the heart of Oxford by two passionate
                      entrepreneurs, Raji and Razzak, Park Groups emerged from a
                      shared vision to create meaningful business ventures that
                      serve both profit and purpose.
                    </p>
                    <p>
                      Rooted in the rich Tamil heritage and culture, our
                      founders have built a diverse portfolio spanning real
                      estate, technology, healthcare, and hospitality. What
                      started as a local Oxford initiative has grown into a
                      multi-million pound investment platform.
                    </p>
                    <p>
                      We take immense pride in representing the Tamil community
                      while fostering an inclusive environment where diverse
                      talents from all backgrounds contribute to our collective
                      success.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative bg-gradient-to-br from-[#0a0f0c]/80 to-[#1a2e1f]/80 rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-[#e6c068]/30">
                    <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-4 lg:mb-6">
                      <div className="bg-[#e6c068]/10 rounded-xl lg:rounded-2xl p-3 lg:p-4 text-center">
                        <Building2 className="w-6 lg:w-8 h-6 lg:h-8 text-[#e6c068] mx-auto mb-2" />
                        <div className="text-xl lg:text-2xl font-bold text-[#e6c068]">
                          15+
                        </div>
                        <div className="text-xs text-[#f8f6f0]/70">
                          Portfolio Companies
                        </div>
                      </div>
                      <div className="bg-[#d4af37]/10 rounded-xl lg:rounded-2xl p-3 lg:p-4 text-center">
                        <TrendingUp className="w-6 lg:w-8 h-6 lg:h-8 text-[#d4af37] mx-auto mb-2" />
                        <div className="text-xl lg:text-2xl font-bold text-[#d4af37]">
                          300%
                        </div>
                        <div className="text-xs text-[#f8f6f0]/70">
                          Growth Rate
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <MapPin className="w-8 lg:w-12 h-8 lg:h-12 text-[#e6c068] mx-auto mb-3 lg:mb-4" />
                      <h4 className="text-lg lg:text-xl font-bold text-[#e6c068] mb-2">
                        Oxford Based
                      </h4>
                      <p className="text-[#f8f6f0]/80 text-xs lg:text-sm">
                        Proudly serving the Oxford business community for over 8
                        years, building lasting relationships and creating local
                        opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}


          {activeTab === "values" && (
            <motion.div
              key="values"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              className="grid sm:grid-cols-2 gap-6 lg:gap-8"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="bg-gradient-to-br from-[#1a2e1f]/90 to-[#243529]/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-[#e6c068]/20 group hover:border-[#e6c068]/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <motion.div
                    className="w-12 lg:w-16 h-12 lg:h-16 bg-gradient-to-r from-[#e6c068] to-[#d4af37] rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="w-6 lg:w-8 h-6 lg:h-8 text-[#0a0f0c]" />
                  </motion.div>

                  <h3 className="text-xl lg:text-2xl font-bold text-[#e6c068] mb-3 lg:mb-4 group-hover:text-[#d4af37] transition-colors duration-300">
                    {value.title}
                  </h3>

                  <p className="text-[#f8f6f0]/90 leading-relaxed text-sm lg:text-base">
                    {value.description}
                  </p>

                  <motion.div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#e6c068] to-[#d4af37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl lg:rounded-b-3xl" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#1a2e1f]/90 to-[#243529]/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-[#e6c068]/20 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#e6c068] mb-4">
              Ready to Join Our Journey?
            </h3>
            <p className="text-[#f8f6f0]/90 mb-6 lg:mb-8 leading-relaxed text-sm lg:text-base">
              We&apos;re always looking for like-minded investors and partners who
              share our vision of building sustainable, profitable businesses
              that make a positive impact on our communities.
            </p>
            <motion.button
              className="bg-gradient-to-r from-[#e6c068] to-[#d4af37] text-[#0a0f0c] px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-bold text-base lg:text-lg shadow-xl border border-[#e6c068]/30 hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
