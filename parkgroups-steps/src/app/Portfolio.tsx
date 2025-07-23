"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, TrendingUp, Users, Globe } from "lucide-react";
import { useState } from "react";

const companies = [
  {
    name: "Dosapark",
    description:
      "At Dosapark, We believe the secret to unforgettable food is simple - use the right ingredients, and cook with heart. Located in the heart of Oxford, our restaurant brings you the bold, comforting flavours of South India, served fresh, rolled hot, and always with love.",
    logo: "/dosapark.png",
    website: "https://dosapark.com",
    sector: "Food & Hospitality",
    impact:
      "Bringing authentic South Indian cuisine to Oxford's culinary landscape",
    metrics: { growth: "+150%", customers: "10K+", locations: "Oxford" },
  },
  {
    name: "Sortlist",
    description:
      "A comprehensive marketplace connecting businesses with top-tier marketing agencies and freelancers across the UK, streamlining the process of finding the perfect marketing partner.",
    logo: "/Sorlist_logo.png",
    website: "https://sortlist.store/",
    sector: "Digital Marketplace",
    impact: "Revolutionizing how businesses discover marketing talent",
    metrics: { growth: "+200%", customers: "5K+", locations: "UK-wide" },
  },
  {
    name: "Skillpedia",
    description:
      "An innovative online learning platform designed to bridge the skills gap in the UK workforce, offering industry-relevant courses and certifications for career advancement.",
    logo: "/eskillpedia_logo.jpg",
    website: "https://ns2.skillpedia.uk/",
    sector: "EdTech",
    impact: "Empowering professionals with future-ready skills",
    metrics: { growth: "+180%", customers: "15K+", locations: "Digital" },
  },
  {
    name: "PropertyPark",
    description:
      "A cutting-edge property technology platform that simplifies real estate transactions and property management across the UK residential market.",
    logo: "/propertypark.png",
    website: "https://propertypark.online/",
    sector: "PropTech",
    impact: "Modernizing UK property transactions",
    metrics: { growth: "+120%", customers: "8K+", locations: "UK-wide" },
  },
  {
    name: "Ox and Chicks",
    description:
      "Premium food and beverage concept focusing on quality ingredients and exceptional customer experience in the hospitality sector.",
    logo: "/oxandchicks.png",
    website: "https://oxandchicks.com",
    sector: "Food & Beverage",
    impact: "Redefining casual dining experiences",
    metrics: { growth: "+90%", customers: "12K+", locations: "Regional" },
  },
  {
    name: "ReadyJob",
    description:
      "A comprehensive job matching platform connecting skilled professionals with leading UK employers, featuring AI-powered matching and career development tools.",
    logo: "/logo.png",
    website: "https://readyjob.co.uk/",
    sector: "HR Tech",
    impact: "Transforming recruitment and career development",
    metrics: { growth: "+160%", customers: "20K+", locations: "UK-wide" },
  },
];

export default function Portfolio() {
  const [selectedCompany, setSelectedCompany] = useState(0);

  return (
    <main className="bg-[#0a0f0c] text-[#f8f6f0] px-8 py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <motion.h2
          className="text-5xl font-bold bg-gradient-to-r from-[#e6c068] to-[#f8f6f0] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Investment Portfolio
        </motion.h2>
        <motion.p
          className="text-xl text-[#c5b896] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Park Groups strategically invests in innovative companies across
          multiple high-growth sectors, building a diversified portfolio that
          drives sustainable returns and market leadership.
        </motion.p>
      </div>

      {/* Featured Company Showcase */}
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-br from-[#1a2e1f] via-[#243529] to-[#1a2e1f] rounded-3xl overflow-hidden shadow-2xl border border-[#e6c068]/20">
          {/* Company Navigation */}
          <div className="flex overflow-x-auto bg-[#0f1610] p-4 space-x-4">
            {companies.map((company, index) => (
              <motion.button
                key={company.name}
                onClick={() => setSelectedCompany(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all whitespace-nowrap ${
                  selectedCompany === index
                    ? "bg-[#e6c068] text-[#0a0f0c]"
                    : "bg-[#243529] text-[#c5b896] hover:bg-[#2a3f2f]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-8 h-8 relative">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={32}
                    height={32}
                    className="object-contain rounded"
                  />
                </div>
                <span className="font-semibold">{company.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Featured Company Details */}
          <motion.div
            key={selectedCompany}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Company Info */}
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-[#f8f6f0] rounded-2xl p-3">
                    <Image
                      src={companies[selectedCompany].logo}
                      alt={companies[selectedCompany].name}
                      width={80}
                      height={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-[#e6c068]">
                      {companies[selectedCompany].name}
                    </h3>
                    <p className="text-[#c5b896] text-lg">
                      {companies[selectedCompany].sector}
                    </p>
                  </div>
                </div>

                <p className="text-lg text-[#f8f6f0] leading-relaxed">
                  {companies[selectedCompany].description}
                </p>

                <div className="bg-[#0f1610] rounded-xl p-6">
                  <h4 className="text-[#e6c068] font-semibold mb-3 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Market Impact
                  </h4>
                  <p className="text-[#c5b896]">
                    {companies[selectedCompany].impact}
                  </p>
                </div>

                <Link
                  href={companies[selectedCompany].website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-[#e6c068] text-[#0a0f0c] px-8 py-4 rounded-xl font-semibold hover:bg-[#f8f6f0] transition-all group"
                >
                  <span>Explore Company</span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Metrics & Visualization */}
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <motion.div
                    className="bg-[#0f1610] rounded-xl p-6 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <TrendingUp className="w-8 h-8 text-[#e6c068] mx-auto mb-3" />
                    <div className="text-2xl font-bold text-[#f8f6f0]">
                      {companies[selectedCompany].metrics.growth}
                    </div>
                    <div className="text-[#c5b896] text-sm">Growth</div>
                  </motion.div>

                  <motion.div
                    className="bg-[#0f1610] rounded-xl p-6 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Users className="w-8 h-8 text-[#e6c068] mx-auto mb-3" />
                    <div className="text-2xl font-bold text-[#f8f6f0]">
                      {companies[selectedCompany].metrics.customers}
                    </div>
                    <div className="text-[#c5b896] text-sm">Customers</div>
                  </motion.div>

                  <motion.div
                    className="bg-[#0f1610] rounded-xl p-6 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Globe className="w-8 h-8 text-[#e6c068] mx-auto mb-3" />
                    <div className="text-2xl font-bold text-[#f8f6f0]">
                      {companies[selectedCompany].metrics.locations}
                    </div>
                    <div className="text-[#c5b896] text-sm">Reach</div>
                  </motion.div>
                </div>

                {/* Animated Progress Bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#c5b896]">Market Penetration</span>
                      <span className="text-[#e6c068]">85%</span>
                    </div>
                    <div className="bg-[#0f1610] rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-[#e6c068] to-[#f8f6f0] h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#c5b896]">Revenue Growth</span>
                      <span className="text-[#e6c068]">92%</span>
                    </div>
                    <div className="bg-[#0f1610] rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-[#e6c068] to-[#f8f6f0] h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "92%" }}
                        transition={{ duration: 1.5, delay: 0.7 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Portfolio Overview Grid */}
      <div className="max-w-7xl mx-auto">
        <motion.h3
          className="text-3xl font-bold text-center mb-12 text-[#e6c068]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Complete Portfolio Overview
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              className="bg-gradient-to-br from-[#1a2e1f] to-[#243529] rounded-2xl p-6 border border-[#e6c068]/20 hover:border-[#e6c068]/40 transition-all group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              onClick={() => setSelectedCompany(index)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#f8f6f0] rounded-xl p-2">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={48}
                    height={48}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#e6c068] group-hover:text-[#f8f6f0] transition-colors">
                    {company.name}
                  </h4>
                  <p className="text-[#c5b896] text-sm">{company.sector}</p>
                </div>
              </div>

              <p className="text-[#c5b896] mb-4 line-clamp-3">
                {company.impact}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-[#e6c068] font-semibold">
                  {company.metrics.growth} Growth
                </span>
                <ExternalLink className="w-4 h-4 text-[#c5b896] group-hover:text-[#e6c068] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
