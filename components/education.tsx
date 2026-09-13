import React from "react";
import { Subheading } from "./subheading";
import { IconSchool, IconAward, IconCalendar } from "@tabler/icons-react";
import { portfolioConfig } from "@/data/portfolio-config";

export const Education = () => {
  return (
    <section>
      <Subheading>Education</Subheading>
      <div className="mt-4 flex flex-col gap-3">
        {portfolioConfig.education.map((item, idx) => (
          <div
            key={item.degree + idx}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 rounded-xl border border-neutral-200/90 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 p-4 shadow-xs"
          >
            <div className="flex items-center gap-3">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 text-foreground/80 border border-neutral-200/60 dark:border-neutral-700">
                <IconSchool className="size-4" />
              </div>
              <div>
                <p className="text-foreground text-sm font-semibold">
                  {item.degree}
                </p>
                <p className="text-foreground/75 text-xs font-medium">
                  {item.institution}
                </p>
              </div>
            </div>

            <div className="flex sm:flex-col sm:items-end gap-3 sm:gap-0.5 text-xs font-mono mt-1 sm:mt-0">
              <span className="flex items-center gap-1 font-bold text-foreground">
                <IconAward className="size-3.5 text-amber-500" />
                {item.score}
              </span>
              <span className="flex items-center gap-1 text-foreground/60">
                <IconCalendar className="size-3 text-foreground/40" />
                {item.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
