# COB Official Website — Agent Reference

## ⚠️ Next.js 16 Breaking Changes
This version has breaking changes — APIs, conventions, and file structure may differ from older Next.js versions. Before writing any code, consult the relevant guide in `node_modules/next/dist/docs/` and heed deprecation notices.

---

## Build & Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm test` | Vitest (no tests written yet) |

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 + `tw-animate-css`
- **Font**: Poppins (`--font-poppins`), Plus Jakarta Sans (`--font-plus-jakarta`)
- **State**: Zustand (global UI state)
- **Data Fetching**: TanStack Query (server state) — Provider exists but no queries yet
- **Validation**: Zod 4 — installed but NOT implemented yet
- **i18n**: next-intl (en/ar)
- **UI Library**: shadcn/ui via `@base-ui/react` + `class-variance-authority`
- **Icons**: lucide-react
- **Testing**: Vitest + Testing Library (infrastructure ready, no tests written)

---

## Project Structure

```
src/
  app/
    [locale]/
      layout.tsx         — Root layout (NextIntlClientProvider, fonts, globals)
      page.tsx           — Homepage (~1349 lines, 'use client')
      solutions/
        [slug]/
          page.tsx       — Solution detail (SSG server component)
          SolutionClientPage.tsx
          [serviceSlug]/
            page.tsx     — Service detail (SSG server component)
            ServiceClientPage.tsx
  components/
    Navbar.tsx
    Footer.tsx           — Also renders booking form overlay + chatbot
    consultation/
      ConsultationBookingForm.tsx
      ConsultationSchedulePicker.tsx
      FormStepIndicator.tsx
    providers/
      QueryProvider.tsx
    solutions/
      SolutionSuiteNav.tsx
      SectionEcgDividers.tsx
      SolutionIcon.tsx
    ui/
      button.tsx
      input.tsx
  i18n/
    request.ts
    routing.ts           — Exports Link, redirect, usePathname, useRouter, getPathname
  lib/
    contact-info.ts
    consultation-scheduling.ts
    nav-menu.ts
    service-page-content.ts
    solution-utils.ts
    solutions-data.ts    — Central data: 7 solution suites with sub-categories
    utils.ts             — cn(), slugify()
  messages/
    en.json              — 368 keys
    ar.json              — 365+ keys
  middleware.ts          — next-intl locale routing
  store/
    useConsultationStore.ts
```

---

## Architecture Rules

### Component Rules
- **Server Components by default**. Only add `'use client'` when you need interactivity (hooks, state, events, browser APIs).
- Keep components small and focused — one responsibility each.
- Prefer composition over inheritance.
- Arrow function components only.

### Data Flow
- All content is currently **static** (from `solutions-data.ts` and message JSON files).
- No API routes exist (`src/app/api/` is empty).
- TanStack Query is set up but not used yet — use it when adding real API calls.
- Zustand store is for **UI-only global state** (`selectedSolutions`, `isFormOpen`).

### Missing Infrastructure (needs to be built)
1. Zod schemas for form validation
2. API routes for the booking form submission
3. Loading states (`loading.tsx`)
4. Error boundaries (`error.tsx`)
5. Not-found pages (`not-found.tsx`)
6. Tests (Vitest ready, zero written)
7. Arabic RTL layout/CSS adjustments

---

## Coding Standards

### TypeScript
- No `any`. Use `unknown` if type is truly uncertain, then narrow.
- Define interfaces/types for all props and data structures.
- Prefer `interface` for object shapes, `type` for unions/utility types.

### Imports
- Use path alias `@/` (maps to `./src/*`).
- Group: external → internal → relative.

### Naming
- **Components**: PascalCase (`UserCard.tsx`)
- **Hooks**: camelCase with `use` prefix (`useUserData.ts`)
- **Utilities/Helpers**: camelCase (`formatDate.ts`)
- **Directories**: kebab-case (`user-profile/`)
- **Store files**: camelCase with `use` prefix + `Store` suffix (`useConsultationStore.ts`)

### Validation (Zod)
- All form inputs must have Zod schemas.
- All external data (API responses, user input) must be validated with Zod.

---

## Styling (Tailwind 4)

- Use CSS variables from `globals.css` (`@theme inline` block) for colors, radii, fonts.
- Prefer utility classes over custom CSS.
- Brand primary: `#246fb1`.
- Custom utilities available: `.bg-medical-grid`, `.rhombus-card`, `.rhombus-content`, `.animate-marquee`, `.animate-reveal`, `.animate-float-slow`, `.animate-float-medium`, `.animate-scan`, `.animate-spin-slow`, `.animate-slide-in-right`, `.animate-fade-in`.
- Use `cn()` from `@/lib/utils` for conditional class merging.

---

## Localization (next-intl)

- **Never** hardcode user-facing strings. Use `useTranslations('Namespace')('key')`.
- Add keys to **both** `en.json` and `ar.json` simultaneously (parity required).
- For rich text with inline HTML, use `t.rich('key', { component: (chunks) => ... })`.
- Locales: `['en', 'ar']`, default: `'en'`
- Use `import { Link, usePathname, useRouter } from '@/i18n/routing'` for localized navigation.

---

## State Management (Zustand)

- Only use Zustand for **global UI state** that multiple unrelated components need.
- Prefer local state (`useState`) for component-specific state.
- Current store pattern: `useConsultationStore` with `selectedSolutions: string[]` and `isFormOpen: boolean`.
- Actions should be pure and synchronous. Side effects belong in TanStack Query or `useEffect`.

---

## SEO & Accessibility (NON-NEGOTIABLE)

- **Every page** must have `generateMetadata` or a `metadata` object (title + description).
- Exactly one `<h1>` per page, logical heading hierarchy.
- Semantic HTML5: `<header>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<nav>`, `<aside>`.
- All `next/image` must have `alt` text.
- Use ARIA labels where semantic HTML is insufficient.
- Optimize for Core Web Vitals (LCP, FID, CLS).

---

## Performance

- Use `next/image` with proper sizes/loading attributes.
- Minimize client JS — push interactivity to the leaves.
- Avoid large client bundles. Lazy-load heavy components with `next/dynamic`.
- No inline `style` objects (use Tailwind classes).

---

## Anti-Patterns (DO NOT DO)

- ❌ Using `any` in TypeScript
- ❌ Hardcoding strings instead of translation keys
- ❌ Adding `'use client'` to entire pages when only a small part needs interactivity
- ❌ Writing new CSS files when Tailwind utilities suffice
- ❌ Mutating Zustand state outside of store actions
- ❌ Skipping Zod validation for external data
- ❌ Committing without being asked
