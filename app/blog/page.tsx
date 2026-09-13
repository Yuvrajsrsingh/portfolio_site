import type { Metadata } from "next";
import Container from "@/components/container";
import { Subheading } from "@/components/subheading";
import { DottedSeparator } from "@/components/separator";
import { BlogIndex, type BlogIndexPost } from "@/components/blog/blog-index";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { portfolioConfig } from "@/data/portfolio-config";
import { IconBrandMedium, IconArrowUpRight } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: `Articles & Blog - ${portfolioConfig.personal.name}`,
  description:
    "Writings on data analytics, productivity, business intelligence, and well-being.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const mdxPosts = (await getAllFilesFrontMatter("blog")) as BlogIndexPost[];
  const configPosts: BlogIndexPost[] = (portfolioConfig.blogPosts || []).map(
    (p, idx) => ({
      slug: `article-${idx}`,
      title: p.title,
      publishedAt: p.publishedAt,
      summary: p.summary,
      link: p.link,
      platform: p.platform || "Medium",
    }),
  );

  // Combine posts ensuring no duplicate titles
  const allPosts = [...mdxPosts];
  for (const cp of configPosts) {
    if (
      !allPosts.some(
        (p) => p.title.toLowerCase() === cp.title.toLowerCase(),
      )
    ) {
      allPosts.push(cp);
    }
  }

  const mediumUrl =
    portfolioConfig.socials.medium || "https://medium.com/@yuvrajsrsingh";

  return (
    <section>
      <Container className="min-h-screen">
        <Subheading className="mt-4">Writings & Articles</Subheading>
        <p className="text-foreground pt-4 text-base leading-relaxed">
          Thoughts and practical guides on productivity, analytics, data engineering, and continuous learning.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href={mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/80 px-4 py-2 text-xs font-medium text-foreground hover:border-emerald-500/40 hover:text-emerald-500 transition-colors shadow-xs"
          >
            <IconBrandMedium className="size-4 text-emerald-500" />
            <span>Read on Medium (@yuvrajsrsingh)</span>
            <IconArrowUpRight className="size-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-emerald-500" />
          </a>
        </div>

        <BlogIndex posts={allPosts} />
      </Container>
      <Container>
        <DottedSeparator className="my-8" />
      </Container>
    </section>
  );
}
