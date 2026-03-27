import React from "react";
import { motion } from "framer-motion";

export const WhyUsIllustration = ({ className }: { className?: string }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 500 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="250" cy="250" r="250" fill="#F8F9FA" />
      
      {/* Background Grid */}
      <g stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" opacity="0.5">
        <line x1="100" y1="0" x2="100" y2="500" />
        <line x1="200" y1="0" x2="200" y2="500" />
        <line x1="300" y1="0" x2="300" y2="500" />
        <line x1="400" y1="0" x2="400" y2="500" />
        <line x1="0" y1="100" x2="500" y2="100" />
        <line x1="0" y1="200" x2="500" y2="200" />
        <line x1="0" y1="300" x2="500" y2="300" />
        <line x1="0" y1="400" x2="500" y2="400" />
      </g>

      {/* Main Growth Chart */}
      <motion.path 
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        d="M100 380 L180 300 L260 320 L380 180" 
        stroke="#E51D27" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" 
      />
      
      {/* Chart points */}
      <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} cx="100" cy="380" r="8" fill="white" stroke="#E51D27" strokeWidth="4" />
      <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} cx="180" cy="300" r="8" fill="white" stroke="#E51D27" strokeWidth="4" />
      <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.0 }} cx="260" cy="320" r="8" fill="white" stroke="#E51D27" strokeWidth="4" />
      <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.4 }} cx="380" cy="180" r="12" fill="#E51D27" />

      {/* Graduation Cap */}
      <g transform="translate(320, 90)">
        <motion.path 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.5 }}
          d="M60 0 L120 30 L60 60 L0 30 Z" fill="#1E293B" 
        />
        <motion.path 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.7 }}
          d="M20 40 L20 70 C20 80 60 90 60 90 C60 90 100 80 100 70 L100 40" fill="none" stroke="#1E293B" strokeWidth="6" 
        />
        <motion.path 
          initial={{ height: 0 }}
          whileInView={{ height: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.9 }}
          d="M110 35 L110 75" stroke="#E51D27" strokeWidth="4" 
        />
      </g>

      {/* Decorative Blocks */}
      <motion.rect initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} x="80" y="140" width="80" height="80" rx="10" fill="white" stroke="#CBD5E1" strokeWidth="2" />
      <motion.path initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} d="M100 170 H140 M100 190 H130" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
      
      <motion.rect initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }} x="180" y="80" width="100" height="100" rx="10" fill="white" stroke="#CBD5E1" strokeWidth="2" />
      <motion.circle initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9 }} cx="230" cy="130" r="20" fill="#E51D27" opacity="0.1" />
      <motion.path initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.0 }} d="M220 130 L228 138 L240 122" fill="none" stroke="#E51D27" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
