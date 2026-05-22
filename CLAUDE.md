# CLAUDE.md - COB Official Website

Development guidelines and standards for the COB Official Website project.

## 🛠 Build & Operations
- **Dev**: `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Test**: `npm test` (Vitest)

## 🎯 Critical Focus: SEO & Performance
This project has a **zero-tolerance policy** for poor SEO and performance.
- **Metadata**: Every page must implement the Next.js Metadata API.
- **Semantics**: Use strictly semantic HTML5 (aside, article, section, nav).
- **Headings**: Maintain a perfect hierarchy with exactly one `<h1>` per page.
- **CWV**: Code must be optimized for Core Web Vitals (LCP, FID, CLS).
- **Images**: Mandatory use of `next/image` with proper alt text.

## 🏗 Tech Stack & Conventions
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4 + Poppins font.
- **Logic**: TypeScript (Strict), Zod (Validation), Zustand (State), React Query (Fetching).
- **i18n**: `next-intl` (English/Arabic parity required).

## 📜 Coding Standards
- **Components**: Arrow function functional components. Server components by default.
- **State**: Global UI state in Zustand; Server state in TanStack Query.
- **Data**: All API/external data must be validated with Zod.
- **Structure**: Follow the Atomic design principles in `src/components`.

For detailed rules, refer to [AGENTS.md](file:///d:/cob-official-website/AGENTS.md).
