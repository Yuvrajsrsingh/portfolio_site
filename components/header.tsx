import React from "react";
import { LinkPreview } from "./link-preview";
import { portfolioConfig } from "@/data/portfolio-config";

export const Header = () => {
  return (
    <div>
      {portfolioConfig.personal.bioParagraphs.map((para, index) => (
        <div key={index} className="text-foreground pt-4 text-base">
          {para.text}
          {para.link ? (
            <>
              <LinkPreview url={para.link.url}>{para.link.text}</LinkPreview>
              {para.afterLink || ""}
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
};
