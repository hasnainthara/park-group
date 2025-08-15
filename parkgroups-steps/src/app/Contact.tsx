"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
  Users,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    investmentType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      investmentType: "",
    });
    setIsSubmitting(false);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: ["Oxford Business Park", "Oxford, United Kingdom", "OX4 2JY"],
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+44 1865 xxx xxx", "+44 7xxx xxx xxx"],
      color: "from-green-400 to-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@parkgroups.co.uk", "investors@parkgroups.co.uk"],
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Mon - Fri: 9:00 AM - 6:00 PM",
        "Sat: 10:00 AM - 4:00 PM",
        "Sun: Closed",
      ],
      color: "from-orange-400 to-orange-600",
    },
  ];

  const investmentTypes = [
    "Real Estate Investment",
    "Technology Startups",
    "Healthcare Ventures",
    "Retail & Hospitality",
    "Manufacturing",
    "Other",
  ];

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[#0a0f0c] via-[#1a2e1f] to-[#243529] py-12 lg:py-16 relative"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-[#e6c068]/10 rounded-full blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-60 h-60 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#e6c068] via-[#f8f6f0] to-[#d4af37] bg-clip-text text-transparent mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-[#f8f6f0]/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to explore investment opportunities? We&apos;d love to hear from
            you. Let&apos;s discuss how Park Groups can help you achieve your
            financial goals.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-[#1a2e1f]/90 to-[#243529]/90 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 border border-[#e6c068]/20 shadow-xl">
              <h3 className="text-xl lg:text-2xl font-bold text-[#e6c068] mb-4 flex items-center gap-3">
                <Building2 className="w-5 h-5 lg:w-6 lg:h-6" />
                Contact Information
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="bg-gradient-to-br from-[#0a0f0c]/80 to-[#1a2e1f]/80 rounded-xl p-4 border border-[#e6c068]/10 group-hover:border-[#e6c068]/30 transition-all duration-300">
                      <div
                        className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <h4 className="text-[#e6c068] font-semibold mb-1 lg:mb-2 text-sm lg:text-base">
                        {item.title}
                      </h4>
                      <div className="space-y-1">
                        {item.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className="text-[#f8f6f0]/80 text-xs lg:text-sm"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <motion.div
              className="bg-gradient-to-br from-[#1a2e1f]/90 to-[#243529]/90 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 border border-[#e6c068]/20 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl lg:text-2xl font-bold text-[#e6c068] mb-4 flex items-center gap-3">
                <Users className="w-5 h-5 lg:w-6 lg:h-6" />
                Why Partner With Us?
              </h3>
              <div className="space-y-3">
                {[
                  "Oxford-based expertise with local market knowledge",
                  "Diverse portfolio across multiple industries",
                  "Strong community connections and values",
                  "Proven track record of successful investments",
                  "Personalized approach to each partnership",
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 text-[#f8f6f0]/90 text-sm lg:text-base"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 text-[#e6c068] flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gradient-to-br from-[#1a2e1f]/90 to-[#243529]/90 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 border border-[#e6c068]/20 shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl lg:text-2xl font-bold text-[#e6c068] mb-4 flex items-center gap-3">
              <Send className="w-5 h-5 lg:w-6 lg:h-6" />
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-[#e6c068] font-medium mb-1 text-sm lg:text-base">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-[#0a0f0c]/80 border border-[#e6c068]/30 rounded-lg lg:rounded-xl text-[#f8f6f0] placeholder-[#f8f6f0]/50 focus:border-[#e6c068] focus:outline-none transition-colors text-sm lg:text-base"
                    placeholder="Your full name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-[#e6c068] font-medium mb-1 text-sm lg:text-base">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-[#0a0f0c]/80 border border-[#e6c068]/30 rounded-lg lg:rounded-xl text-[#f8f6f0] placeholder-[#f8f6f0]/50 focus:border-[#e6c068] focus:outline-none transition-colors text-sm lg:text-base"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-[#e6c068] font-medium mb-1 text-sm lg:text-base">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-[#0a0f0c]/80 border border-[#e6c068]/30 rounded-lg lg:rounded-xl text-[#f8f6f0] placeholder-[#f8f6f0]/50 focus:border-[#e6c068] focus:outline-none transition-colors text-sm lg:text-base"
                    placeholder="Your company name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-[#e6c068] font-medium mb-1 text-sm lg:text-base">
                    Investment Interest
                  </label>
                  <select
                    name="investmentType"
                    value={formData.investmentType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-[#0a0f0c]/80 border border-[#e6c068]/30 rounded-lg lg:rounded-xl text-[#f8f6f0] focus:border-[#e6c068] focus:outline-none transition-colors text-sm lg:text-base"
                  >
                    <option value="">Select an option</option>
                    {investmentTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label className="block text-[#e6c068] font-medium mb-1 text-sm lg:text-base">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-[#0a0f0c]/80 border border-[#e6c068]/30 rounded-lg lg:rounded-xl text-[#f8f6f0] placeholder-[#f8f6f0]/50 focus:border-[#e6c068] focus:outline-none transition-colors text-sm lg:text-base"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-[#e6c068] font-medium mb-1 text-sm lg:text-base">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-[#0a0f0c]/80 border border-[#e6c068]/30 rounded-lg lg:rounded-xl text-[#f8f6f0] placeholder-[#f8f6f0]/50 focus:border-[#e6c068] focus:outline-none transition-colors resize-none text-sm lg:text-base"
                  placeholder="Tell us about your investment goals..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#e6c068] to-[#d4af37] text-[#0a0f0c] py-3 rounded-xl font-bold text-base lg:text-lg shadow-lg border border-[#e6c068]/30 disabled:opacity-70 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.div
                      className="w-4 h-4 lg:w-5 lg:h-5 border-2 border-[#0a0f0c] border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-4 h-4 lg:w-5 lg:h-5" />
                    Send Message
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
