import React from "react";
import { Subheading } from "./subheading";
import { portfolioConfig } from "@/data/portfolio-config";
import {
  IconChartBar,
  IconCode,
  IconDatabase,
  IconCloud,
  IconBrain,
} from "@tabler/icons-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "BI & Analytics": <IconChartBar className="size-4 text-amber-500" />,
  "Programming & Frameworks": <IconCode className="size-4 text-blue-500" />,
  "Data & Databases": <IconDatabase className="size-4 text-emerald-500" />,
  "Cloud & Data Engineering": <IconCloud className="size-4 text-cyan-500" />,
  "AI / ML & Automation": <IconBrain className="size-4 text-purple-500" />,
};

export const Skills = () => {
  return (
    <section>
      <Subheading>Technical Skills</Subheading>
      <div className="mt-4 flex flex-col gap-4">
        {portfolioConfig.skillCategories.map((group) => (
          <div
            key={group.category}
            className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 text-sm"
          >
            <div className="flex items-center gap-1.5 w-48 shrink-0 font-medium text-foreground/85">
              {categoryIcons[group.category] || null}
              <span>{group.category}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md bg-neutral-100 dark:bg-neutral-800/80 px-2 py-0.5 text-xs text-foreground/80 ring-1 ring-neutral-200 dark:ring-neutral-700/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
