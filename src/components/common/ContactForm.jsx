"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    window.location.reload();
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    focus: { borderColor: "hsl(200, 90%, 50%)", transition: { duration: 0.2 } },
  };

  return (
    <section className="container mx-auto">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SpotlightCard className="p-8 bg-card border border-border shadow-xl rounded-3xl">
          <motion.form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={inputVariants}>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  First Name
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="bg-background border-border text-foreground focus:ring-primary focus:border-primary"
                />
              </motion.div>
              <motion.div variants={inputVariants}>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Last Name
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="bg-background border-border text-foreground focus:ring-primary focus:border-primary"
                />
              </motion.div>
            </div>

            <motion.div variants={inputVariants}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-background border-border text-foreground focus:ring-primary focus:border-primary"
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-background border-border text-foreground focus:ring-primary focus:border-primary"
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-background border-border text-foreground focus:ring-primary focus:border-primary"
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-background border-border text-foreground focus:ring-primary focus:border-primary"
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
                <Send className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.form>
        </SpotlightCard>
      </motion.div>
    </section>
  );
};

export default ContactForm;
