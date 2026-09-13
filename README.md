# Developer Portfolio Website Template

A modern, minimal portfolio website and developer blog inspired by [manuarora.in](https://www.manuarora.in/). Built with Next.js 16 (App Router), Tailwind CSS v4, Motion, and MDX.

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ How to Customize Your Portfolio

All personal data, social links, projects, and work experience are centralized in one file:

📁 **`data/portfolio-config.ts`**

Open that file to customize:
- **`personal`**: Your name, alias, role, bio paragraphs, and avatar image.
- **`socials`**: Links to your GitHub, Twitter/X, LinkedIn, YouTube, and email.
- **`projects`**: Your "Things I do" list of featured projects, descriptions, and URLs.
- **`companies`**: Your past experience, client work, or companies you've worked with.
- **`workWithMe`**: Your consultation booking URL (Cal.com / Calendly), freelance link, and email for copy-to-clipboard.
- **`siteMetadata`**: SEO titles, descriptions, and canonical URL.

## 📝 Writing Blog Posts

Add any `.mdx` file to the `data/blog/` directory:

```mdx
---
title: "My New Article Title"
publishedAt: "2026-04-01"
summary: "A short description of this article."
image: ""
---

Your markdown content here...
```

Blog posts are automatically indexed and routed to `/blog/[slug]`.

## 🎨 Features & Stack

- **Theme & Font Customizer**: Built-in interactive floating settings widget (Paper, Bloom, Lagoon, Nocturne, Honey, Violet; Inter, Schibsted, Geist).
- **Interactive Micro-interactions**: Smooth page transitions, tilt effects, and animated signature underline using `motion`.
- **Copy Email with Toast**: Clickable direct email with spring-physics floating toast.
- **Next.js 16 App Router**: Server components and static site generation for maximum speed and SEO.
- **Tailwind CSS v4**: Ultra-fast utility styling.
