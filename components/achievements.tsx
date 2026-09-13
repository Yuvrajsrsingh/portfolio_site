import React from "react";
import { Subheading } from "./subheading";
import { Box } from "./box";
import { IconTrophy, IconUsers } from "@tabler/icons-react";
import { portfolioConfig } from "@/data/portfolio-config";

export const Achievements = () => {
  return (
    <section>
      <Subheading>Key Achievements & Leadership</Subheading>
      <div className="mt-4 flex flex-col gap-3.5">
        {portfolioConfig.achievements.map((item, idx) => (
          <div
            key={item.title + idx}
            className="flex flex-col gap-2 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 sm:p-5 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div className="flex items-center gap-2.5">
                <Box
                  className={
                    idx === 0
                      ? "bg-linear-to-b from-blue-500 to-indigo-600 ring-offset-blue-500"
                      : "bg-linear-to-b from-amber-500 to-orange-600 ring-offset-amber-500"
                  }
                >
                  {idx === 0 ? (
                    <IconUsers className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
                  ) : (
                    <IconTrophy className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
                  )}
                </Box>
                <div>
                  <h3 className="text-foreground text-sm sm:text-base font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 text-xs font-medium">
                    {item.organization}
                  </p>
                </div>
              </div>

              {item.badge && (
                <span className="inline-flex w-fit items-center rounded-full bg-amber-500/10 dark:bg-amber-500/20 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:text-amber-300 ring-1 ring-amber-500/30">
                  {item.badge}
                </span>
              )}
            </div>

            <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed mt-1">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
