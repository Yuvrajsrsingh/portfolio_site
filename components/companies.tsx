import React from "react";
import { Subheading } from "./subheading";
import { Box } from "./box";
import { IconBriefcase, IconMapPin, IconCalendar } from "@tabler/icons-react";
import { portfolioConfig } from "@/data/portfolio-config";

export const Companies = () => {
  return (
    <section>
      <Subheading>Industrial Experience</Subheading>
      <div className="mt-6 flex flex-col gap-6">
        {portfolioConfig.experience.map((exp, index) => (
          <div
            key={exp.company + index}
            className="flex flex-col gap-3.5 rounded-xl border border-neutral-200/90 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 p-5 shadow-xs transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
              <div className="flex items-center gap-3">
                <Box
                  className={
                    exp.boxClassName ||
                    "bg-linear-to-b from-neutral-500 to-neutral-700 ring-offset-neutral-500"
                  }
                >
                  <IconBriefcase className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
                </Box>
                <div>
                  <h3 className="text-foreground text-base font-semibold">
                    {exp.company}
                  </h3>
                  <p className="text-foreground/85 text-xs sm:text-sm font-medium">
                    {exp.role}
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-col sm:items-end gap-2.5 sm:gap-1 text-xs text-foreground/70 mt-1 sm:mt-0 font-mono">
                <span className="flex items-center gap-1.5">
                  <IconCalendar className="size-3.5 text-foreground/50" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <IconMapPin className="size-3.5 text-foreground/50" />
                  {exp.location}
                </span>
              </div>
            </div>

            {exp.track && (
              <p className="text-xs text-foreground/75 font-medium italic">
                {exp.track}
              </p>
            )}

            <ul className="mt-1 flex flex-col gap-2 list-disc list-outside pl-4 text-xs sm:text-sm text-foreground/85 leading-relaxed">
              {exp.highlights.map((highlight, hIndex) => (
                <li key={hIndex}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
