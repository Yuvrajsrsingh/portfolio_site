"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DottedUnderline } from "./dotted-underline";
import { portfolioConfig } from "@/data/portfolio-config";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const links = [
  { title: "Home", href: "/" },
  { title: "Blog", href: "/blog" },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="mx-auto flex max-w-2xl flex-col items-start gap-4 px-4 pt-4 md:pt-8">
      <div className="flex items-center gap-3.5">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="relative size-12 md:size-14 shrink-0 rounded-2xl overflow-hidden ring-2 ring-emerald-500/30 dark:ring-emerald-400/20 shadow-md bg-neutral-100 dark:bg-neutral-800"
        >
          <Image
            src={portfolioConfig.personal.avatar || "/yuvraj.png"}
            alt={portfolioConfig.personal.name}
            width={56}
            height={56}
            priority
            unoptimized
            className="size-full object-cover rounded-2xl"
          />
        </motion.div>
        <div className="flex flex-col justify-center">
          <h1 className="text-foreground text-xl font-bold tracking-tight md:text-2xl">
            {portfolioConfig.personal.name}
          </h1>
          <p className="text-foreground/80 text-xs font-medium tracking-tight">
            {portfolioConfig.personal.role}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {links.map((link) => {
          const active = isActivePath(pathname, link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group relative transition-colors",
                active
                  ? "text-primary"
                  : "text-foreground/70 hover:text-primary",
              )}
            >
              {link.title}
              <DottedUnderline
                className={cn(
                  "mask-x-from-90% transition-opacity duration-300",
                  active
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100",
                )}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
