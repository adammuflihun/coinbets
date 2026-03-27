@AGENTS.md

# CoinBets Project Architecture & Conventions

## Project Overview
CoinBets is a Next.js 16.2.1 application for crypto casino reviews, expert analysis, and player ratings. Built with React 19, TypeScript, and Tailwind CSS v4.

---

## 1. Tech Stack & Dependencies

### Framework & Core
- **Next.js**: v16.2.1 (App Router)
- **React**: v19.2.4
- **TypeScript**: v5
- **Node**: ES2017 target

### UI & Styling
- **Tailwind CSS**: v4 (with @tailwindcss/postcss plugin)
- **Tailwind Merge**: v3.5.0 (for merging conflicting classes)
- **clsx**: v2.1.1 (className utility)
- **class-variance-authority**: v0.7.1 (component variants)
- **shadcn/ui**: v4.1.0 (Base Nova style, RSC enabled)
- **@base-ui/react**: v1.3.0 (headless button, input, dropdown)
- **Lucide React**: v0.577.0 (icon library)
- **Motion**: v12.38.0 (animations)
- **flag-icons**: v7.5.0 (country flags)
- **flickity**: v3.0.0 (carousel)
- **tw-animate-css**: v1.4.0 (animation utilities)

### Typography
- **@fontsource/inter**: v5.2.8 (regular fonts)
- **@fontsource-variable/inter**: v5.2.8 (variable fonts)
- Instrument Serif from Next.js Google Fonts

### Build & Dev
- **ESLint**: v9 with Next.js config
- **PostCSS**: v4

---

## 2. Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout (fonts, metadata, Navbar/Footer)
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles + animations
│   ├── casino/
│   │   └── review/[slug]/   # Dynamic casino review pages
│   ├── expert-reviews/      # Expert reviews listing
│   ├── guides/              # Guides with [slug] dynamic routes
│   ├── coinbet-index/       # 52 Index page
│   ├── casino-originals/    # Casino Originals page
│   ├── bonuses/             # Bonuses page
│   └── about/               # About page
├── components/              # React components
│   ├── ui/                  # shadcn/ui & Base UI components
│   ├── navbar.tsx           # Main navigation (desktop + mobile trigger)
│   ├── mobile-nav.tsx       # Mobile menu (Sheet-based)
│   ├── hero-header.tsx      # Hero section with shimmer border search
│   ├── hero-category.tsx    # Category showcase
│   ├── review-card.tsx      # Casino review card component
│   ├── expert-review-block.tsx # Full expert review section
│   ├── expert-rating-card.tsx  # Rating card for expert scores
│   ├── latest-reviews.tsx   # Latest user reviews carousel
│   ├── latest-blog.tsx      # Blog posts section
│   ├── blog-card.tsx        # Individual blog card
│   ├── casino-index.tsx     # Main casino index table
│   ├── coinbet-index-table.tsx
│   ├── casino-originals-table.tsx
│   ├── expert-reviews.tsx   # Expert reviews grid
│   ├── country-selector.tsx # Language/country dropdown
│   ├── login-dialog.tsx     # Auth modal (branded panel + form)
│   ├── footer.tsx           # Footer with links
│   ├── crypto-casino-banner.tsx
│   ├── latest-from-community.tsx
│   ├── video-home.tsx
│   ├── featured-guide.tsx
│   ├── game-icons.tsx
│   └── ... other feature components
├── data/                    # Static data
│   ├── casino-reviews.ts    # CasinoReview[] array with full details
│   ├── blog-posts.ts        # Blog post data
│   └── guides.ts            # Guide content
├── lib/                     # Utilities
│   └── utils.ts            # cn() helper (clsx + twMerge)
└── types/
    └── unicorn-studio.d.ts  # Type definitions

public/
├── hero/                    # Hero section assets
├── casino-index/           # Casino logos
├── crypto-payments/        # Crypto currency icons
├── categories/             # Category icons
├── icons/                  # SVG icons (logo, nav icons)
└── login-graphic/         # Login modal background
```

---

## 3. Component Patterns & Structure

### Export Patterns
All components use **named exports** for utility/presentational components:
```typescript
export function ComponentName() { ... }
export function AnotherComponent() { ... }
```

Default exports used only for page components and complex feature components:
```typescript
export default function Page() { ... }
```

### Component Structure Pattern
1. **"use client"** directive at top for interactive components
2. Imports (Next.js, React, lucide-react, UI components)
3. Data/constants (color maps, data arrays, SVG paths)
4. Icon/helper sub-components
5. Main component(s)
6. Export statements

### Example Structure (review-card.tsx)
```typescript
"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface ReviewData { ... }
const SAFETY_COLORS: Record<string, string> = { ... }
const RATING_COLORS: Record<number, string> = { ... }

function PlayerRatingIcon({ size = 30 }: { size?: number }) { ... }
function ExpertShieldIcon({ size = 30 }: { size?: number }) { ... }

export function ReviewCard({ review }: { review: ReviewData }) {
  return <div data-name="expert-card" className="...">
    {/* structured content */}
  </div>
}
```

---

## 4. Data Patterns

### Type-First Approach
All data structures have TypeScript interfaces defined:

```typescript
// data/casino-reviews.ts
export interface CasinoReview {
  slug: string;
  name: string;
  logo: string;
  playerRating: number;
  playerReviews: number;
  expertScore: number;
  views: string;
  safetyIndex: "High" | "Normal";
  safetyScore: number;
  safetyFactors: string[];
  reviewTitle: string;
  reviewText: string;
  whatWeLiked: string[];
  redFlags: string[];
  cryptoAccepted: { icon: string; name: string }[];
  bonus: string;
  screenshots: string[];
  websiteLanguages: string[];
  supportLanguages: string[];
  games: string[];
  videoUrl?: string;
  owner: string;
  established: number;
  estimatedRevenue: string;
  licensingAuthorities: { flag: string; name: string }[];
  gameProviders: { name: string; image: string }[];
  contactEmail: string;
  lastUpdated: string;
}

export const casinoReviews: CasinoReview[] = [ ... ]
```

### Data Access Pattern
Data is imported directly in components and pages:
```typescript
import { casinoReviews } from "@/data/casino-reviews";
const casino = casinoReviews.find((c) => c.slug === slug);
```

---

## 5. Styling Conventions

### Tailwind CSS v4 + Custom Animations

#### Root Layout (globals.css)
```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";
@import "flickity/css/flickity.css";

:root {
  /* OKLCH color space for accessibility */
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... 25+ design token CSS variables */
  --radius: 0.625rem;
}

.site-container {
  @apply mx-auto max-w-[1600px] px-5 sm:px-10 lg:px-26;
}
```

#### Color System
Uses OKLCH color space for perceptually uniform colors:
- **Backgrounds**: White (1) to near-black (0.145)
- **Text**: Dark gray/black (foreground)
- **Accents**: Specific oklch values for UI elements
- **Safety colors**: Hard-coded hex (#00de00 for "High", #eaee45 for "Normal")
- **Rating colors**: 5-step scale from green (#23BA21) to red (#FF6847)

#### Responsive Breakpoints (Tailwind defaults)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Custom Utilities & Animations

**Aurora animations** (3 variants for background effects):
```css
@keyframes aurora-1 { /* 8s ease-in-out infinite */ }
@keyframes aurora-2 { /* 10s ease-in-out infinite */ }
@keyframes aurora-3 { /* 12s ease-in-out infinite */ }

@utility animate-aurora-1 { animation: aurora-1 8s ease-in-out infinite; }
```

**Shimmer animations** (button borders):
```css
@keyframes shimmer-slide { to { transform: translate(calc(100cqw - 100%), 0); } }
@keyframes spin-around { /* rotating gradient */ }

@utility animate-shimmer-slide { animation: shimmer-slide var(--speed) ease-in-out infinite alternate; }
@utility animate-spin-around { animation: spin-around calc(var(--speed) * 2) infinite linear; }
```

**Vote animations** (for positive/negative indicators):
```css
@keyframes vote-green { /* width animation 0%, 100% { width: 51%; } */ }
@keyframes vote-red { /* width animation */ }
```

**Grid shimmer**:
```css
@keyframes grid-shimmer { /* mask-position animation */ }
```

### Class Naming & Organization
- **Utility-first**: Extensive use of Tailwind classes
- **Spacing**: Gap, padding, margin following `sm:`, `md:`, `lg:` breakpoints
- **Responsive text**: `text-sm sm:text-base lg:text-lg`
- **Flexbox layouts**: `flex items-center justify-between gap-X`
- **Border utilities**: `border border-neutral-200`, `rounded-lg`, `rounded-xl`

### Typography
**Font families** (CSS variables):
```
--font-inter (default)
--font-inter-display (larger weights: 400-900)
--font-instrument-serif (serif accent, italic available)
--font-geist-mono (monospace fallback)
```

**Font sizes** (Tailwind + custom):
- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`
- Custom sizes in components: `text-[23px]` (exact pixel values)

**Font weights**:
- `font-normal` (400)
- `font-medium` (500)
- `font-semibold` (600)
- `font-bold` (700)
- `font-black` (900 for headlines)

---

## 6. Data Attributes for Semantic Markup

Extensively used throughout for testing, styling, and structure identification:

### Navbar (navbar.tsx)
```
data-section="navbar"
data-name="nav-bar"
data-section="nav-categories"
data-name="nav-mobile-trigger"
data-section="nav-actions"
data-name="nav-links"
data-name="nav-right-actions"
data-section="nav-search"
data-name="nav-language"
```

### Hero Section (hero-header.tsx)
```
data-section="hero"
data-section="hero-background"
data-name="hero-container"
data-name="hero-layout"
data-section="hero-content"
data-section="hero-headline"
data-section="hero-search"
data-name="shimmer-border"
data-name="shimmer-animation"
data-section="hero-crypto-icons"
data-section="hero-description"
data-section="hero-illustration"
```

### Review Cards (review-card.tsx, expert-rating-card.tsx)
```
data-name="expert-card"
data-name="expert-casino-header"
data-name="expert-logo"
data-name="expert-casino-info"
data-name="expert-safety"
data-name="divider"
data-name="expert-ratings"
data-name="player-rating"
data-name="player-rating-detail"
data-name="expert-score"
data-name="highlights"
data-name="highlight-item"
data-name="card-bottom"
data-name="bonus-bar"
data-name="bonus-info"
data-name="bonus-badge"
```

### Pages (page.tsx)
```
data-section="main"
data-section="body"
data-section="casino-review"
```

### Pattern
- `data-section`: Large semantic sections (navbar, hero, main, body)
- `data-name`: Specific components/regions for targeting and testing

---

## 7. UI Library: shadcn/ui + Base UI

### shadcn/ui Components Used
Located in `src/components/ui/`:
- `button.tsx` (with variants: default, outline, secondary, ghost, destructive, link)
- `input.tsx` (with Base UI InputPrimitive)
- `label.tsx`
- `checkbox.tsx`
- `input-group.tsx`
- `textarea.tsx`
- `dialog.tsx` (modal for login)
- `sheet.tsx` (side panel for mobile nav)
- `popover.tsx` (dropdowns, country selector)
- `dropdown-menu.tsx`
- `command.tsx`
- `tooltip.tsx`
- `badge.tsx`
- `separator.tsx`
- `collapsible.tsx`
- `slider.tsx`
- `shimmer-button.tsx` (custom, animated border)

### Base UI Integration
Using `@base-ui/react` for unstyled, accessible primitives:
- `Button` component from `@base-ui/react/button`
- `Input` component from `@base-ui/react/input`
- These are wrapped in shadcn-style components with Tailwind styling

### Configuration (components.json)
```json
{
  "style": "base-nova",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

---

## 8. Icons & Images

### Icon Libraries
- **Lucide React**: Primary icon library
  ```typescript
  import { ChevronRight, Search, Menu, Check, ChevronDown } from "lucide-react";
  ```

- **Inline SVGs**: Custom SVG paths for specific icons (star ratings, shields, safety badges)
  ```typescript
  const STAR_BG = "M15.9988 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z";
  ```

- **Flag Icons**: `flag-icons` package for country flags
  ```typescript
  import "flag-icons/css/flag-icons.min.css";
  // <span className={`fi fi-${code} fis`} />
  ```

### Image Handling
All images use Next.js `Image` component:
```typescript
import Image from "next/image";

<Image
  src="/path/to/image.png"
  alt="Descriptive alt text"
  width={540}
  height={500}
  className="..."
  priority  // for above-fold images
/>
```

### Remote Image Support (next.config.ts)
```typescript
remotePatterns: [
  { protocol: "https", hostname: "img.youtube.com" },
  { protocol: "https", hostname: "coinbets.com" },
  { protocol: "https", hostname: "upload.wikimedia.org" },
  { protocol: "https", hostname: "stg-coinbets-staging.kinsta.cloud" },
]
```

---

## 9. State Management & Hooks

### Local State Only
No global state management library (Redux, Zustand, etc.). Uses React hooks:

**useState** patterns:
```typescript
// Simple boolean toggles
const [open, setOpen] = useState(false);

// Form inputs
const [search, setSearch] = useState("");
const [selected, setSelected] = useState(countries[0]);

// Complex state (Navbar)
const [visible, setVisible] = useState(true);
const [atTop, setAtTop] = useState(true);
```

**useEffect** patterns:
```typescript
// Scroll event listeners
useEffect(() => {
  const onScroll = () => { /* ... */ };
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);
```

**useRef** patterns:
```typescript
// Scroll position tracking
const lastScrollY = useRef(0);
```

### Custom Hooks
`useScrollDirection()` in navbar.tsx:
```typescript
function useScrollDirection() {
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastScrollY = useRef(0);
  // ... scroll tracking logic
  return { visible, atTop };
}
```

---

## 10. Page & Layout Patterns

### Root Layout (src/app/layout.tsx)
```typescript
export const metadata: Metadata = {
  title: {
    default: "CoinBets - Crypto Casino Reviews, Bonuses & Guides",
    template: "%s | CoinBets",  // Dynamic page titles
  },
  description: "...",
  keywords: ["crypto casino", "bitcoin casino", ...],
  openGraph: { ... },
  twitter: { ... },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interDisplay.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body data-section="body" className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

### Home Page (src/app/page.tsx)
```typescript
export default function Home() {
  return (
    <main data-section="main" className="flex-1">
      <HeroHeader />
      <HeroCategory />
      <div className="space-y-12">
        <LatestReviews />
        <VideoHome />
        <CasinoCategories />
        {/* ... more sections */}
      </div>
    </main>
  );
}
```

### Dynamic Page Pattern (casino/review/[slug]/page.tsx)
```typescript
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const casino = casinoReviews.find((c) => c.slug === slug);
  return {
    title: `${casino?.name ?? "Casino"} Review`,
    description: `In-depth review of ${casino?.name}...`,
  };
}

export default async function CasinoReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main data-section="casino-review" className="flex-1">
      <ReviewBlock slug={slug} />
    </main>
  );
}
```

---

## 11. Common Component Patterns

### Conditional Rendering
```typescript
{item.hasDropdown && <ChevronDown className="size-4" />}
{selected.code === country.code && <Check className="size-4" />}
```

### Mapping Lists
```typescript
{navLinks.map((link) => (
  <Link key={link.label} href={link.href} className="...">
    {link.label}
  </Link>
))}
```

### Responsive Grid/Flex
```typescript
className="grid grid-cols-1 lg:grid-cols-2 gap-8"
className="flex flex-col lg:flex-row items-center justify-between"
```

### Button Composition
```typescript
<Link href="/path" className="group flex items-center justify-between ...">
  Text
  <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
</Link>
```

### Disabled/Loading States
```typescript
disabled:pointer-events-none disabled:opacity-50
aria-invalid:border-destructive aria-invalid:ring-3
```

---

## 12. Dialog/Modal Pattern (LoginDialog)

```typescript
"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type View = "login" | "signup" | "forgot";

export function LoginDialog() {
  const [view, setView] = useState<View>("login");
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ShimmerButton>Login</ShimmerButton>
      </DialogTrigger>
      <DialogContent className="max-w-[800px]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <BrandedPanel />  {/* 52% width, hidden on mobile */}
          <div>{/* Form */}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

---

## 13. Form Pattern

Uses Base UI inputs + Tailwind + shadcn components:

```typescript
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

<form className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input
      id="email"
      type="email"
      placeholder="user@example.com"
      className="h-8 px-2.5 py-1"
    />
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="terms" />
    <Label htmlFor="terms">I agree to terms</Label>
  </div>
  <Button type="submit" variant="default">Sign In</Button>
</form>
```

---

## 14. Utility Functions

### cn() Helper (lib/utils.ts)
Combines clsx and tailwind-merge for safe class merging:

```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Usage:
```typescript
className={cn(
  "base classes",
  condition && "conditional-class",
  customClassName
)}
```

---

## 15. Browser & Performance Features

### Image Optimization
- Use `next/image` for all images
- Set `width` and `height` for static images
- Use `priority` prop for above-fold images
- `fill` prop for absolute-positioned images with parent container

### Event Listeners
Passive event listeners for scroll performance:
```typescript
window.addEventListener("scroll", onScroll, { passive: true });
```

### Animations
- Hardware-accelerated with `transform-gpu`
- Use container queries (`[container-type:size]`) for responsive animations
- Leverage CSS animations over JS for performance

---

## 16. Build & Development

### Scripts
```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```

### TypeScript Configuration
- Strict mode enabled
- JSX: react-jsx (automatic runtime)
- Target: ES2017
- Module resolution: bundler (ESM)
- Path alias: `@/*` maps to `./src/*`

### ESLint Configuration
Uses Next.js recommended rules with TypeScript support:
```javascript
import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
```

---

## 17. File Naming Conventions

- **Components**: `kebab-case.tsx` (e.g., `hero-header.tsx`, `review-card.tsx`)
- **Pages**: `page.tsx` (Next.js convention)
- **Layout files**: `layout.tsx`
- **Dynamic routes**: `[param].tsx` (e.g., `[slug].tsx`)
- **UI components**: `kebab-case.tsx` (e.g., `shimmer-button.tsx`)
- **Data files**: `kebab-case.ts` (e.g., `casino-reviews.ts`, `blog-posts.ts`)
- **Utility files**: `kebab-case.ts` (e.g., `utils.ts`)

---

## 18. Accessibility Features

- **Semantic HTML**: Proper heading hierarchy, section elements
- **ARIA attributes**: `aria-expanded`, `aria-invalid`, `aria-label` (implicit)
- **Focus management**: Dialog modals auto-focus, ESC to close
- **Color contrast**: OKLCH color space ensures perceptual uniformity
- **Icon labels**: All icons have meaningful context or alt text
- **Keyboard navigation**: Form inputs, buttons, dropdowns support Tab/Enter

---

## 19. Environment & Configuration

### Next.js Config
- Remote images allowed from specific domains (coinbets.com, YouTube, Wikimedia, staging)
- App Router enabled
- No custom webpack config needed

### PostCSS Config
Simple setup using Tailwind's PostCSS plugin:
```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

---

## 20. Key Code Patterns to Follow

### 1. Component with Props & Types
```typescript
interface CardProps {
  title: string;
  content: string;
  onClick?: () => void;
}

export function Card({ title, content, onClick }: CardProps) {
  return (
    <div
      data-name="card"
      className="rounded-lg border bg-white p-4"
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-neutral-600">{content}</p>
    </div>
  );
}
```

### 2. Data Mapping with Keys
```typescript
{items.map((item, index) => (
  <div key={item.id || index} className="...">
    {item.name}
  </div>
))}
```

### 3. Responsive Layout
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Items */}
</div>
```

### 4. Interactive Component
```typescript
"use client";

export function Interactive() {
  const [state, setState] = useState(false);
  
  return (
    <button onClick={() => setState(!state)} className="...">
      {state ? "On" : "Off"}
    </button>
  );
}
```

---

## Summary

CoinBets uses a **modern, type-safe Next.js 16 stack** with:
- **Rendering**: Server Components by default, "use client" for interactivity
- **Styling**: Tailwind v4 with custom CSS animations and OKLCH color space
- **Components**: shadcn/ui + Base UI with extensive data-attributes for semantics
- **Data**: Static TypeScript arrays imported directly, no API layer for review data
- **Icons**: Lucide React + inline SVGs + flag-icons
- **State**: React hooks only (useState, useEffect, useRef, custom hooks)
- **Accessibility**: ARIA, semantic HTML, keyboard navigation
- **DX**: Path aliases (@/), cn() utility for class merging, TypeScript strict mode

All components follow consistent patterns with kebab-case naming, data-attributes for semantic markup, responsive Tailwind classes, and proper TypeScript typing.
