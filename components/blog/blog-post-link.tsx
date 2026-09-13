import Link from "next/link";
import { cn } from "@/lib/utils";
import { formatPostDate } from "@/lib/format-post-date";
import { IconBrandMedium, IconArrowUpRight } from "@tabler/icons-react";

export type BlogPostLinkProps = {
  title: string;
  slug: string;
  publishedAt: string;
  summary?: string;
  link?: string;
  platform?: string;
  className?: string;
};

export function BlogPostLink({
  title,
  slug,
  publishedAt,
  summary,
  link,
  platform,
  className,
}: BlogPostLinkProps) {
  const isExternal = Boolean(link && link.startsWith("http"));
  const href = isExternal ? link! : `/blog/${slug}`;

  const linkContent = (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex items-center justify-between gap-4 md:gap-8">
        <div className="flex items-center gap-2 truncate">
          {platform === "Medium" || href.includes("medium.com") ? (
            <span className="inline-flex items-center gap-1 shrink-0 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 text-[11px] font-medium ring-1 ring-emerald-500/20">
              <IconBrandMedium className="size-3" />
              Medium
            </span>
          ) : null}
          <span className="text-foreground truncate group-hover:text-primary font-medium text-sm md:text-base">
            {title}
          </span>
          {isExternal ? (
            <IconArrowUpRight className="size-3.5 shrink-0 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-primary" />
          ) : null}
        </div>
        <span className="text-foreground/50 shrink-0 font-mono text-xs font-light group-hover:text-primary">
          {formatPostDate(publishedAt)}
        </span>
      </div>
      {summary ? (
        <p className="text-foreground/70 text-xs line-clamp-2 mt-0.5 leading-relaxed">
          {summary}
        </p>
      ) : null}
    </div>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group block py-2.5 px-3 -mx-3 rounded-xl hover:bg-neutral-100/70 dark:hover:bg-neutral-800/50 transition-colors duration-200",
          className,
        )}
      >
        {linkContent}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "group block py-2.5 px-3 -mx-3 rounded-xl hover:bg-neutral-100/70 dark:hover:bg-neutral-800/50 transition-colors duration-200",
        className,
      )}
    >
      {linkContent}
    </Link>
  );
}
