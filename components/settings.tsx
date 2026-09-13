"use client";

import { SPRING_CONFIG } from "@/lib/motion-config";
import { cn } from "@/lib/utils";
import {
  IconSettingsFilled,
  IconSun,
  IconMoon,
  IconDeviceDesktop,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { DottedSeparator } from "./separator";
import { useTheme } from "next-themes";

type FontOption = "inter" | "schibsted" | "geist";
type ColorOption =
  | "regular"
  | "blue"
  | "emerald"
  | "rose"
  | "amber"
  | "violet";

const FONTS: { id: FontOption; label: string; variable: string }[] = [
  {
    id: "schibsted",
    label: "Schibsted",
    variable: "var(--font-schibsted-grotesk)",
  },
  { id: "inter", label: "Inter", variable: "var(--font-inter)" },
  { id: "geist", label: "Geist", variable: "var(--font-geist-sans)" },
];

interface PaletteValues {
  bg: string;
  foreground: string;
  primary: string;
  cardBg: string;
  cardBorder: string;
}

const THEMES: Record<
  ColorOption,
  {
    label: string;
    swatch: string;
    gradientFrom: string;
    gradientTo: string;
    ringOffset: string;
    activeRing: string;
    light: PaletteValues;
    dark: PaletteValues;
  }
> = {
  regular: {
    label: "Paper",
    swatch: "bg-stone-500",
    gradientFrom: "from-stone-600",
    gradientTo: "to-stone-900",
    ringOffset: "ring-offset-stone-600",
    activeRing: "ring-stone-600",
    light: {
      bg: "#fafaf9",
      foreground: "#1c1917",
      primary: "#0c0a09",
      cardBg: "rgba(255, 255, 255, 0.8)",
      cardBorder: "rgba(214, 211, 209, 0.85)",
    },
    dark: {
      bg: "#0c0a09",
      foreground: "#f5f5f4",
      primary: "#ffffff",
      cardBg: "rgba(28, 25, 23, 0.7)",
      cardBorder: "rgba(68, 64, 60, 0.6)",
    },
  },
  blue: {
    label: "Nocturne",
    swatch: "bg-blue-500",
    gradientFrom: "from-blue-600",
    gradientTo: "to-indigo-900",
    ringOffset: "ring-offset-blue-500",
    activeRing: "ring-blue-500",
    light: {
      bg: "#f8fafc",
      foreground: "#0f172a",
      primary: "#2563eb",
      cardBg: "rgba(255, 255, 255, 0.85)",
      cardBorder: "rgba(226, 232, 240, 0.9)",
    },
    dark: {
      bg: "#0b0f19",
      foreground: "#f8fafc",
      primary: "#60a5fa",
      cardBg: "rgba(15, 23, 42, 0.7)",
      cardBorder: "rgba(30, 41, 59, 0.8)",
    },
  },
  emerald: {
    label: "Lagoon",
    swatch: "bg-teal-500",
    gradientFrom: "from-teal-600",
    gradientTo: "to-emerald-900",
    ringOffset: "ring-offset-teal-500",
    activeRing: "ring-teal-500",
    light: {
      bg: "#f0fdfa",
      foreground: "#042f2e",
      primary: "#0d9488",
      cardBg: "rgba(255, 255, 255, 0.85)",
      cardBorder: "rgba(204, 251, 241, 0.9)",
    },
    dark: {
      bg: "#041514",
      foreground: "#f0fdfa",
      primary: "#2dd4bf",
      cardBg: "rgba(6, 44, 42, 0.6)",
      cardBorder: "rgba(19, 78, 74, 0.7)",
    },
  },
  rose: {
    label: "Bloom",
    swatch: "bg-rose-500",
    gradientFrom: "from-rose-500",
    gradientTo: "to-pink-900",
    ringOffset: "ring-offset-rose-500",
    activeRing: "ring-rose-500",
    light: {
      bg: "#fff1f2",
      foreground: "#4c0519",
      primary: "#e11d48",
      cardBg: "rgba(255, 255, 255, 0.85)",
      cardBorder: "rgba(254, 205, 211, 0.9)",
    },
    dark: {
      bg: "#16050a",
      foreground: "#fff1f2",
      primary: "#fb7185",
      cardBg: "rgba(50, 10, 25, 0.6)",
      cardBorder: "rgba(136, 19, 55, 0.6)",
    },
  },
  amber: {
    label: "Honey",
    swatch: "bg-amber-500",
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-900",
    ringOffset: "ring-offset-amber-500",
    activeRing: "ring-amber-500",
    light: {
      bg: "#fffbeb",
      foreground: "#451a03",
      primary: "#d97706",
      cardBg: "rgba(255, 255, 255, 0.85)",
      cardBorder: "rgba(254, 243, 199, 0.9)",
    },
    dark: {
      bg: "#180d04",
      foreground: "#fffbeb",
      primary: "#fbbf24",
      cardBg: "rgba(45, 24, 8, 0.6)",
      border: "rgba(120, 53, 15, 0.6)",
    } as any,
  },
  violet: {
    label: "Lilac",
    swatch: "bg-violet-500",
    gradientFrom: "from-violet-500",
    gradientTo: "to-purple-900",
    ringOffset: "ring-offset-violet-500",
    activeRing: "ring-violet-500",
    light: {
      bg: "#faf5ff",
      foreground: "#2e1065",
      primary: "#7c3aed",
      cardBg: "rgba(255, 255, 255, 0.85)",
      cardBorder: "rgba(243, 232, 255, 0.9)",
    },
    dark: {
      bg: "#0f081d",
      foreground: "#faf5ff",
      primary: "#a78bfa",
      cardBg: "rgba(35, 18, 65, 0.6)",
      cardBorder: "rgba(91, 33, 182, 0.6)",
    },
  },
};

const STORAGE_KEY = "site-settings";

function isColorOption(value: unknown): value is ColorOption {
  return typeof value === "string" && value in THEMES;
}

function loadSettings(): { font: FontOption; color: ColorOption } {
  if (typeof window === "undefined")
    return { font: "schibsted", color: "regular" };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as {
        font?: FontOption;
        color?: unknown;
      };
      const color = isColorOption(parsed.color) ? parsed.color : "regular";
      const font =
        parsed.font && FONTS.some((f) => f.id === parsed.font)
          ? parsed.font
          : "schibsted";
      return { font, color };
    }
  } catch {}
  return { font: "schibsted", color: "regular" };
}

function saveSettings(font: FontOption, color: ColorOption) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ font, color }));
}

function applySettings(font: FontOption, color: ColorOption, isDark: boolean) {
  const root = document.documentElement;
  const fontConfig = FONTS.find((f) => f.id === font)!;
  const themeGroup = THEMES[color] || THEMES.regular;
  const palette = isDark ? themeGroup.dark : themeGroup.light;

  root.style.setProperty("--primary-font", fontConfig.variable);
  root.style.setProperty("--theme-bg", palette.bg);
  root.style.setProperty("--primary", palette.primary);
  root.style.setProperty("--foreground", palette.foreground);
  root.style.setProperty("--card-bg", palette.cardBg);
  root.style.setProperty(
    "--card-border",
    palette.cardBorder || (palette as any).border
  );
}

export const Settings = () => {
  const [open, setOpen] = useState(false);
  const [font, setFont] = useState<FontOption>("schibsted");
  const [color, setColor] = useState<ColorOption>("regular");
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    const saved = loadSettings();
    setFont(saved.font);
    setColor(saved.color);
    applySettings(saved.font, saved.color, isDark);
  }, [isDark]);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const handleFont = (f: FontOption) => {
    setFont(f);
    applySettings(f, color, isDark);
    saveSettings(f, color);
  };

  const handleColor = (c: ColorOption) => {
    setColor(c);
    applySettings(font, c, isDark);
    saveSettings(font, c);
  };

  const themeConfig = THEMES[color] || THEMES.regular;

  return (
    <div
      ref={containerRef}
      className="fixed top-4 right-4 z-50 flex flex-col items-end"
    >
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.button
            key="trigger"
            layoutId="settings-container"
            onClick={() => setOpen(true)}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={cn(
              "fixed top-5 right-5 flex aspect-square size-8 items-center justify-center rounded-lg bg-linear-to-b align-middle ring-1 ring-white/20 ring-offset-2 ring-inset cursor-pointer",
              themeConfig.gradientFrom,
              themeConfig.gradientTo,
              themeConfig.ringOffset
            )}
            title="Customise theme, fonts & mode"
          >
            <IconSettingsFilled className="size-4 shrink-0 text-white drop-shadow-xl drop-shadow-black/40" />
          </motion.button>
        ) : (
          <motion.div
            key="panel"
            layoutId="settings-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={cn(
              "fixed top-4 right-4 w-60 rounded-xl border border-neutral-200/80 bg-white/95 dark:bg-neutral-900/95 p-4 shadow-xl ring-1 ring-black/10 dark:border-neutral-800 backdrop-blur-md"
            )}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.15 }}
            >
              {/* Dark / Light / System Mode Toggle */}
              <div className="mb-3">
                <span className="text-[11px] font-semibold text-foreground/60 uppercase tracking-wider block mb-1.5">
                  Appearance
                </span>
                <div className="grid grid-cols-3 gap-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 p-1">
                  <button
                    type="button"
                    onClick={() => setTheme("light")}
                    className={cn(
                      "flex items-center justify-center gap-1 py-1 px-1.5 rounded-md text-xs font-medium transition-all cursor-pointer",
                      theme === "light"
                        ? "bg-white dark:bg-neutral-700 text-foreground shadow-xs font-semibold"
                        : "text-foreground/70 hover:text-foreground"
                    )}
                  >
                    <IconSun className="size-3.5 text-amber-500" />
                    Light
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme("dark")}
                    className={cn(
                      "flex items-center justify-center gap-1 py-1 px-1.5 rounded-md text-xs font-medium transition-all cursor-pointer",
                      theme === "dark"
                        ? "bg-white dark:bg-neutral-700 text-foreground shadow-xs font-semibold"
                        : "text-foreground/70 hover:text-foreground"
                    )}
                  >
                    <IconMoon className="size-3.5 text-blue-400" />
                    Dark
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme("system")}
                    className={cn(
                      "flex items-center justify-center gap-1 py-1 px-1.5 rounded-md text-xs font-medium transition-all cursor-pointer",
                      theme === "system"
                        ? "bg-white dark:bg-neutral-700 text-foreground shadow-xs font-semibold"
                        : "text-foreground/70 hover:text-foreground"
                    )}
                  >
                    <IconDeviceDesktop className="size-3.5 text-neutral-400" />
                    Auto
                  </button>
                </div>
              </div>

              <DottedSeparator className="my-2" />

              {/* Font Options */}
              <div className="my-3">
                <span className="text-[11px] font-semibold text-foreground/60 uppercase tracking-wider block mb-1.5">
                  Typography
                </span>
                <div className="flex items-center gap-1.5">
                  {FONTS.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => handleFont(f.id)}
                      style={{ fontFamily: f.variable }}
                      className={cn(
                        "rounded-md px-2 py-1 text-xs transition-all cursor-pointer border",
                        font === f.id
                          ? "bg-primary text-white dark:text-neutral-900 border-primary font-medium shadow-xs"
                          : "bg-neutral-100 dark:bg-neutral-800 text-foreground/80 border-transparent hover:border-neutral-300 dark:hover:border-neutral-700"
                      )}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <DottedSeparator className="my-2" />

              {/* Theme Color Palettes */}
              <div className="mt-3">
                <span className="text-[11px] font-semibold text-foreground/60 uppercase tracking-wider block mb-1.5">
                  Color Accent
                </span>
                <div className="flex gap-2">
                  {(Object.keys(THEMES) as ColorOption[]).map((c) => {
                    const item = THEMES[c];
                    return (
                      <button
                        key={c}
                        onClick={() => handleColor(c)}
                        title={item.label}
                        className="group flex flex-col items-center gap-1 cursor-pointer"
                      >
                        <div
                          className={cn(
                            "size-5 rounded-full transition-all",
                            item.swatch,
                            color === c
                              ? `ring-2 ring-offset-2 ${item.activeRing} scale-110`
                              : "ring-1 ring-neutral-300 dark:ring-neutral-700 group-hover:scale-105"
                          )}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
