"use client";

import React, { useState } from "react";
import { Subheading } from "./subheading";
import { Box } from "./box";
import {
  IconCertificate,
  IconBrandGoogle,
  IconCode,
  IconApi,
  IconBrain,
  IconChevronDown,
  IconChevronUp,
  IconId,
} from "@tabler/icons-react";
import { portfolioConfig } from "@/data/portfolio-config";

const getCertIcon = (icon?: string) => {
  switch (icon) {
    case "hackerrank":
      return <IconCode className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />;
    case "postman":
      return <IconApi className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />;
    case "gdg":
    case "google":
      return <IconBrandGoogle className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />;
    case "microsoft":
      return <IconBrain className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />;
    default:
      return <IconCertificate className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />;
  }
};

export const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const items = portfolioConfig.certifications;
  const displayed = showAll ? items : items.slice(0, 6);

  return (
    <section>
      <div className="flex items-center justify-between">
        <Subheading>Licenses & Certifications ({items.length})</Subheading>
        {items.length > 6 && (
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-1 text-xs text-primary font-medium hover:underline cursor-pointer transition-colors"
          >
            {showAll ? (
              <>
                Show less <IconChevronUp className="size-3.5" />
              </>
            ) : (
              <>
                View all ({items.length}) <IconChevronDown className="size-3.5" />
              </>
            )}
          </button>
        )}
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {displayed.map((cert, idx) => (
          <div
            key={cert.title + idx}
            className="flex flex-col justify-between rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-all hover:border-neutral-300 dark:hover:border-neutral-700"
          >
            <div>
              <div className="flex items-start gap-2.5">
                <Box
                  className={
                    cert.boxClassName ||
                    "bg-linear-to-b from-blue-500 to-indigo-600 ring-offset-blue-500"
                  }
                >
                  {getCertIcon(cert.icon)}
                </Box>
                <div className="flex-1 min-w-0">
                  <h3 className="text-foreground text-sm font-semibold leading-tight line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-foreground/70 text-xs mt-0.5 font-medium">
                    {cert.issuer}
                  </p>
                  <p className="text-foreground/50 text-[11px] font-mono mt-0.5">
                    {cert.date}
                  </p>
                </div>
              </div>

              {cert.credentialId && (
                <div className="mt-2.5 flex items-center gap-1 text-[11px] text-foreground/60 font-mono">
                  <IconId className="size-3 text-foreground/40 shrink-0" />
                  <span className="truncate">ID: {cert.credentialId}</span>
                </div>
              )}
            </div>

            {cert.skills && cert.skills.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1 pt-2 border-t border-neutral-200/60 dark:border-neutral-800/60">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-neutral-100 dark:bg-neutral-800/80 px-1.5 py-0.5 text-[10px] text-foreground/75 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
