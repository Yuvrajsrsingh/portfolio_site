"use client";
import React from "react";
import Container from "./container";
import { motion } from "motion/react";
import { portfolioConfig } from "@/data/portfolio-config";

export const Footer = () => {
  return (
    <Container className="pb-10">
      <footer className="my-8 flex flex-col items-center gap-4">
        <Signature name={portfolioConfig.personal.name} />
        <div className="flex flex-col items-center gap-1.5 text-center">
          <p className="text-foreground/40 text-sm text-balance">
            Crafted with Next.js, Tailwind CSS & Motion.
          </p>
          <p className="text-foreground/40 text-xs text-balance">
            © {new Date().getFullYear()} {portfolioConfig.personal.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </Container>
  );
};

const Signature = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <motion.span
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-serif italic text-2xl tracking-widest text-foreground/80 font-normal select-none"
        style={{ fontFamily: "Georgia, Cambria, serif" }}
      >
        {name}
      </motion.span>
      <motion.svg
        width="120"
        height="16"
        viewBox="0 0 120 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-foreground/40 mt-1"
      >
        <motion.path
          d="M4 11C25 4 45 14 70 8C90 3 105 13 116 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        />
      </motion.svg>
    </div>
  );
};
