import React from "react";
import { Subheading } from "./subheading";
import { Box } from "./box";
import {
  IconChartBar,
  IconRobot,
  IconGauge,
  IconLanguage,
  IconEye,
  IconCalendar,
} from "@tabler/icons-react";
import { portfolioConfig } from "@/data/portfolio-config";

const projectIcons = [
  <IconChartBar key="chart" className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />,
  <IconRobot key="robot" className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />,
  <IconGauge key="gauge" className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />,
  <IconLanguage key="lang" className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />,
  <IconEye key="eye" className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />,
];

export const Work = () => {
  return (
    <section>
      <Subheading>Key Projects</Subheading>
      <div className="mt-6 flex flex-col gap-6">
        {portfolioConfig.projects.map((project, index) => (
          <div
            key={project.title + index}
            className="flex flex-col gap-3 rounded-xl border border-neutral-200/90 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 p-5 shadow-xs transition-all hover:border-neutral-300 dark:hover:border-neutral-700"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5">
              <div className="flex items-center gap-3">
                <Box
                  className={
                    project.boxClassName ||
                    "bg-linear-to-b from-blue-500 to-indigo-600 ring-offset-blue-500"
                  }
                >
                  {projectIcons[index % projectIcons.length]}
                </Box>
                <div>
                  <h3 className="text-foreground text-sm sm:text-base font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-foreground/75 text-xs font-mono font-medium">
                    {project.organization}
                  </p>
                </div>
              </div>

              {project.period && (
                <span className="flex items-center gap-1.5 text-xs text-foreground/70 font-mono mt-1 sm:mt-0">
                  <IconCalendar className="size-3.5 text-foreground/50" />
                  {project.period}
                </span>
              )}
            </div>

            <p className="text-foreground/85 text-xs sm:text-sm leading-relaxed mt-0.5">
              {project.description}
            </p>

            {project.highlights && project.highlights.length > 0 && (
              <ul className="flex flex-col gap-1.5 list-disc list-outside pl-4 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-1.5 mt-1 pt-2.5 border-t border-neutral-200/60 dark:border-neutral-800/80">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-neutral-100 dark:bg-neutral-800/90 border border-neutral-200/80 dark:border-neutral-700 px-2 py-0.5 text-[11px] font-mono font-medium text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
