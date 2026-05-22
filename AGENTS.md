<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Best Practices & Guidelines

This project uses a modern tech stack with specific conventions. Follow these rules to ensure consistency and performance.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Schema Validation**: Zod
- **Localization**: next-intl

## Coding Standards
- Use **functional components** with Arrow functions.
- Use **TypeScript** for all files. Avoid `any` at all costs.
- Use **Zod** for all data validation (API responses, form inputs).
- Use **Server Components** by default. Use `'use client'` only when necessary.
- Prefer **Composition** over inheritance.

## Folder Structure
- `src/app/[locale]`: Localized routes and layouts.
- `src/components`: UI components (keep them atomic).
- `src/store`: Zustand stores.
- `src/lib`: Shared utilities and Zod schemas.
- `src/messages`: Translation JSON files.

## Styling (Tailwind 4)
- Use CSS variables in `src/app/globals.css` for theme customization.
- Prefer utility classes over custom CSS.
- Main font: **Poppins** (`--font-poppins`).

## Localization (next-intl)
- Always use `useTranslations` for UI text.
- Add new keys to `src/messages/en.json` and `src/messages/ar.json` simultaneously.

## Data Fetching
- Wrap all data-fetching hooks with TanStack Query.
- Use the `QueryProvider` defined in `src/components/providers/QueryProvider.tsx`.

## SEO & Best Practices (CRITICAL)
- **Metadata**: Always define `generateMetadata` or a `metadata` object in layouts and pages.
- **Semantic HTML**: Use proper HTML5 tags (`<article>`, `<aside>`, `<nav>`, etc.).
- **Headings**: Ensure exactly one `<h1>` per page.
- **Accessibility**: Use ARIA labels where necessary and ensure high contrast.
- **Performance**: Monitor and optimize for Core Web Vitals.
- **Clean Code**: Follow SOLID principles and keep the codebase DRY.
