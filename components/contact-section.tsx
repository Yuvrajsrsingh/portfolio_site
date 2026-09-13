"use client";

import React, { useState } from "react";
import { Subheading } from "./subheading";
import { Globe } from "./globe";
import {
  IconSend,
  IconMail,
  IconCheck,
  IconCopy,
  IconMapPin,
  IconBrandLinkedin,
  IconPhone,
} from "@tabler/icons-react";
import { portfolioConfig } from "@/data/portfolio-config";

export const ContactSection = () => {
  const targetEmail = portfolioConfig.socials.email || "yuvrajsrsingh@gmail.com";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      subject || `Message from ${name || "Portfolio Visitor"}`
    );
    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoUrl = `mailto:${targetEmail}?subject=${mailSubject}&body=${mailBody}`;

    window.location.href = mailtoUrl;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(targetEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <section className="w-full">
      <Subheading>Get in touch</Subheading>
      <p className="text-foreground/80 mt-2 text-sm leading-relaxed">
        Have an analytics opportunity, project idea, or question? Send me a message or find me on the globe.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Direct Mail Form */}
        <div className="flex flex-col justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3.5 rounded-xl border border-neutral-200/90 dark:border-neutral-800 bg-white/85 dark:bg-neutral-900/60 p-5 shadow-xs transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-foreground text-sm font-semibold flex items-center gap-1.5">
                <IconMail className="size-4 text-primary" /> Send a direct message
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-1 text-xs text-foreground/75 hover:text-primary transition-colors cursor-pointer font-medium"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <IconCheck className="size-3.5 text-emerald-500" /> Copied!
                  </>
                ) : (
                  <>
                    <IconCopy className="size-3.5" /> Copy Email
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-foreground/75 text-xs font-medium block mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Yuvraj Singh"
                  className="w-full rounded-md border border-neutral-300/90 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-1.5 text-sm text-foreground outline-hidden focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <label className="text-foreground/75 text-xs font-medium block mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-neutral-300/90 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-1.5 text-sm text-foreground outline-hidden focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-foreground/75 text-xs font-medium block mb-1">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Data Analyst Opportunity / Discussion"
                className="w-full rounded-md border border-neutral-300/90 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-1.5 text-sm text-foreground outline-hidden focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>

            <div>
              <label className="text-foreground/75 text-xs font-medium block mb-1">
                Message
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your team, role, or project inquiry..."
                className="w-full resize-none rounded-md border border-neutral-300/90 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-1.5 text-sm text-foreground outline-hidden focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>

            <button
              type="submit"
              className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-linear-to-b from-blue-600 to-indigo-700 px-4 py-2 text-sm font-medium text-white shadow-md shadow-blue-500/25 hover:from-blue-700 hover:to-indigo-800 active:scale-[0.99] transition-all cursor-pointer"
            >
              <IconSend className="size-4" />
              Send to {targetEmail}
            </button>

            {sent && (
              <p className="text-xs text-emerald-600 dark:text-emerald-400 text-center font-medium animate-fade-in">
                ✓ Opening your email client to send message...
              </p>
            )}
          </form>

          <div className="mt-3.5 flex flex-wrap items-center gap-2 text-xs">
            <a
              href={portfolioConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200/90 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 px-3 py-1.5 text-foreground/80 font-medium hover:text-primary transition-colors shadow-2xs"
            >
              <IconBrandLinkedin className="size-3.5 text-blue-600" />
              LinkedIn Profile
            </a>
            <a
              href={`tel:${portfolioConfig.personal.phone}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200/90 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 px-3 py-1.5 text-foreground/80 font-medium hover:text-primary transition-colors shadow-2xs"
            >
              <IconPhone className="size-3.5 text-emerald-600" />
              {portfolioConfig.personal.phone}
            </a>
          </div>
        </div>

        {/* Right Side: Interactive COBE WebGL Globe */}
        <div className="flex flex-col items-center justify-center relative">
          <Globe className="scale-95 sm:scale-100" />
          <div className="mt-2 flex items-center gap-2 text-xs text-foreground/75 font-mono font-medium">
            <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="flex items-center gap-1">
              <IconMapPin className="size-3.5 text-foreground/60" />
              Available for Data Analyst & BI Developer roles
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
