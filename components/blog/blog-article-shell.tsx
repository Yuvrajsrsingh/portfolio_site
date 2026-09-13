"use client";

import Link from "next/link";
import { format, parseISO } from "date-fns";
import {
  IconArrowLeft,
  IconBrandMedium,
  IconArrowUpRight,
} from "@tabler/icons-react";
import Container from "@/components/container";
import { DottedSeparator } from "@/components/separator";

import { portfolioConfig } from "@/data/portfolio-config";

export type BlogArticleFrontMatter = {
  title: string;
  publishedAt: string;
  summary?: string;
  readingTime?: { text: string };
  link?: string;
  platform?: string;
};

type BlogArticleShellProps = {
  frontMatter: BlogArticleFrontMatter;
  children: React.ReactNode;
};

export function BlogArticleShell({
  frontMatter,
  children,
}: BlogArticleShellProps) {
  const dateLabel = format(parseISO(frontMatter.publishedAt), "MMMM d, yyyy");

  return (
    <Container>
      <article className="pt-4">
        <h2 className="text-primary pt-3 font-medium tracking-tight">
          {frontMatter.title}
        </h2>
        {frontMatter.summary ? (
          <p className="text-foreground/70 pt-3 text-sm leading-relaxed">
            {frontMatter.summary}
          </p>
        ) : null}
        <div className="text-foreground/50 mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-xs">
          <span>{portfolioConfig.personal.name}</span>
          <span aria-hidden className="text-foreground/30">
            ·
          </span>
          <time dateTime={frontMatter.publishedAt}>{dateLabel}</time>
          {frontMatter.readingTime?.text ? (
            <>
              <span aria-hidden className="text-foreground/30">
                ·
              </span>
              <span>{frontMatter.readingTime.text}</span>
            </>
          ) : null}
        </div>

        <DottedSeparator className="my-8" />

        {frontMatter.link ? (
          <div className="my-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
            <div className="flex items-center gap-3">
              <IconBrandMedium className="size-6 text-emerald-500 shrink-0" />
              <div>
                <p className="text-foreground text-sm font-medium">Published on Medium</p>
                <p className="text-foreground/70 text-xs">Read the full story and join the discussion</p>
              </div>
            </div>
            <a
              href={frontMatter.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 text-xs font-medium transition-colors shadow-xs shrink-0"
            >
              <span>Open on Medium</span>
              <IconArrowUpRight className="size-3.5" />
            </a>
          </div>
        ) : null}

        <div className="prose prose-neutral prose-headings:scroll-mt-24 prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none">
          {children}
        </div>

        <DottedSeparator className="mt-12 mb-4" />
      </article>
    </Container>
  );
}
