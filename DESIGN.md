# CoinBets Design System

> Single source of truth for CoinBets UI. Every new component, page, or element **must** follow these specifications. Do not invent new colors, spacing, or typography that isn't documented here.

---

## 1. Visual Theme & Atmosphere

CoinBets is a **crypto casino review platform** with a premium, trustworthy feel. The design balances a **dark hero/header aesthetic** (black backgrounds with gold accents) against **clean white content areas** for readability. The overall tone is:

- **Professional & Trustworthy** — clean layouts, structured data, safety indicators
- **Premium & Modern** — gold shimmer accents, smooth animations, polished cards
- **Data-Dense but Readable** — tables, rating systems, and review cards present complex information clearly
- **Dark + Light Hybrid** — dark hero sections and navigation contrast with white card-based content areas

---

## 2. Color Palette

### 2.1 Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| **Brand Gold** | `#E6B830` / `#eab914` | Primary CTA buttons, shimmer borders, accent highlights, search focus ring |
| **Brand Gold Hover** | `#d4a812` | Hover state for gold buttons |
| **Brand Blue** | `#003EB6` | Expert scores, login button, shield icons, expert rating cards |
| **Brand Blue Hover** | `#003EB6/90` (90% opacity) | Hover state for blue buttons |

### 2.2 Backgrounds

| Token | Value | Usage |
|-------|-------|-------|
| **Dark Primary** | `#020202` | Hero sections, dark backgrounds, index sections |
| **Dark Secondary** | `#121212` | Dark cards, table rows, search inputs |
| **Dark Tertiary** | `#191919` / `#1f1c1e` | Dark card variants, placeholders |
| **Dark Nav** | `#060D17` / `#060505` | Navigation-adjacent dark areas |
| **Light Primary** | `#ffffff` | White cards, content areas |
| **Light Secondary** | `#f8f8f8` / `#f5f5f5` | Light buttons, badge backgrounds |
| **Page Background** | `oklch(0.97 0 0)` | Root page background (off-white) |

### 2.3 Text Colors

| Token | Value | Usage |
|-------|-------|-------|
| **Foreground** | `oklch(0.145 0 0)` | Primary text on light backgrounds |
| **Light Text** | `#f8f8f8` / `#f5f5f5` | Text on dark backgrounds |
| **Muted Text** | `#a7a7a7` / `#7e7e7e` | Secondary/helper text |
| **Dark Muted** | `#404040` / `#323232` | Subdued text on light backgrounds |
| **White Opacity** | `white/30`, `white/50`, `white/70` | Placeholder text, labels on dark bg |
| **Text Gradient** | `from-[#343434] to-[#202020]` | Gradient text via `bg-clip-text text-transparent` |

### 2.4 Rating Colors (5-Step Scale)

| Rating | Color | Name |
|--------|-------|------|
| **5 stars** | `#23BA21` | Bright Green |
| **4 stars** | `#9FF11A` | Lime |
| **3 stars** | `#D8DC00` | Yellow |
| **2 stars** | `#FFB257` | Orange |
| **1 star** | `#FF6847` | Red |
| **Inactive** | `#DDDDDD` | Gray (unfilled stars) |

### 2.5 Safety Index Colors

| Status | Color | Usage |
|--------|-------|-------|
| **High** | `#00de00` | High safety index badge |
| **Normal** | `#eaee45` | Normal safety index badge |

### 2.6 Status & Indicator Colors

| Token | Value | Usage |
|-------|-------|-------|
| **Positive** | `text-green-500` | Traffic increase, positive indicators |
| **Negative** | `text-red-500` / `#EF4444` | Traffic decrease, negative indicators |
| **Expert Shield Active** | `#003EB6` | Filled shield icon |
| **Expert Shield Inactive** | `#4F4F4F` | Empty/gray shield icon |

### 2.7 Border Colors

| Token | Value | Usage |
|-------|-------|-------|
| **Light Border** | `border-neutral-100` / `#f1f1f1` | Subtle dividers |
| **Default Border** | `border-neutral-200` | Card borders, standard dividers |
| **Medium Border** | `border-neutral-300` / `#d4d4d4` | Button borders |
| **Dark Border** | `#212121` | Dark mode dropdown borders |
| **Subtle Dark** | `border-white/10` | Borders on dark backgrounds |
| **Accent Ring** | `ring-[#e6b830]` | Shimmer border ring |

### 2.8 CSS Custom Properties (Design Tokens)

```css
:root {
  --background: oklch(0.97 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --radius: 0.625rem;
}
```

---

## 3. Typography

### 3.1 Font Families

| Token | Font | CSS Variable | Usage |
|-------|------|-------------|-------|
| **Sans** | Inter | `--font-inter` / `--font-sans` | Body text, UI elements |
| **Heading** | Inter Display (400-900) | `--font-inter-display` / `--font-heading` | Headlines, section titles |
| **Serif** | Instrument Serif (400, italic) | `--font-instrument-serif` / `--font-serif` | Decorative accent text |
| **Mono** | Geist Mono | `--font-geist-mono` / `--font-mono` | Code, monospace fallback |

### 3.2 Type Scale

| Level | Classes | Usage |
|-------|---------|-------|
| **Display** | `text-[45px] font-black tracking-tight leading-[1.2]` | Hero headline |
| **H1** | `text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-[1.2]` | Page titles |
| **H2** | `text-2xl sm:text-[30px] lg:text-[35px] font-black leading-[1.2] tracking-tight` | Section headers |
| **H3** | `text-xl sm:text-[26px] font-semibold leading-[1.2]` | Subsection headers |
| **H4** | `text-lg font-semibold` | Card titles |
| **Body Large** | `text-base font-medium leading-[1.4]` | Primary body text |
| **Body** | `text-sm font-medium` | Standard body text |
| **Body Small** | `text-xs font-medium` | Helper text, badges, metadata |
| **Caption** | `text-[10px] font-semibold uppercase tracking-[0.3px]` | Labels, micro text |
| **Score Display** | `text-[42px] font-bold leading-none` | Large numeric ratings |
| **Rating Number** | `text-[23px] font-semibold leading-none` | Rating values |

### 3.3 Font Weights

| Weight | Class | Usage |
|--------|-------|-------|
| 400 | `font-normal` | Regular body text |
| 500 | `font-medium` | UI text, labels, links |
| 600 | `font-semibold` | Card titles, badges, emphasized text |
| 700 | `font-bold` | Section titles, table headers |
| 900 | `font-black` | Hero headlines, brand statements |

### 3.4 Letter Spacing

| Token | Value | Usage |
|-------|-------|-------|
| **Tight** | `tracking-tight` | Headlines |
| **Normal** | `tracking-[.5px]` | Review body text |
| **Wide** | `tracking-[3px]` | Uppercase labels |
| **Fine** | `tracking-[0.3px]` | Micro labels, bottom bars |

### 3.5 Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| **None** | `leading-none` | Scores, compact numbers |
| **Tight** | `leading-[1.2]` | Headlines |
| **Normal** | `leading-[1.3]` - `leading-[1.4]` | Body text |
| **Relaxed** | `leading-relaxed` / `leading-[1.5]` | Long-form text |

---

## 4. Component Styling

### 4.1 Buttons

#### Primary CTA (Gold)
```
rounded-lg bg-[#eab914] px-3 py-1.5 text-sm font-medium text-[#171717]
hover:bg-[#d4a812] transition-colors
```
- Icon: `ChevronRight` with `group-hover:translate-x-0.5`

#### Primary Action (Blue)
```
h-12 rounded-lg bg-[#003EB6] hover:bg-[#003EB6]/90 text-white text-sm font-semibold w-full
```

#### Secondary (Dark)
```
rounded-lg bg-neutral-900 px-3 py-1.5 text-sm font-medium text-[#f8f8f8]
hover:bg-neutral-800 transition-colors
```

#### Outline/Border
```
rounded-lg border border-[#d4d4d4] px-3 py-1.5 text-sm font-medium text-[#f5f5f5]
hover:bg-white/5 transition-colors
```

#### Pill/Toggle
- **Active:** `bg-yellow-400 text-black`
- **Inactive:** `text-neutral-900 hover:bg-neutral-100`
- **Dark Inactive:** `text-white hover:bg-white/10`

#### Shimmer Button (Login CTA)
```
border border-white/10 px-6 py-3 text-white rounded-[100px]
shadow-[inset_0_-8px_10px_#ffffff1f]
hover:shadow-[inset_0_-6px_10px_#ffffff3f]
active:translate-y-px
```
- CSS Variables: `--spread: 120deg`, `--shimmer-color: #ffffff`, `--speed: 2.5s`, `--cut: 2px`
- Animations: `animate-shimmer-slide` + `animate-spin-around`

#### shadcn/ui Button Variants
| Variant | Style |
|---------|-------|
| `default` | Primary background |
| `outline` | Border with transparent bg |
| `secondary` | Secondary color |
| `ghost` | No bg, hover state only |
| `destructive` | Red/warning |
| `link` | Text link with underline on hover |

#### shadcn/ui Button Sizes
| Size | Classes |
|------|---------|
| `default` | `h-8 px-2.5 gap-1.5` |
| `xs` | `h-6 px-2 text-xs` |
| `sm` | `h-7 px-2.5 text-[0.8rem]` |
| `lg` | `h-9 px-2.5` |
| `icon` | `size-8` |
| `icon-xs` | `size-6` |
| `icon-sm` | `size-7` |
| `icon-lg` | `size-9` |

### 4.2 Cards

#### Review Card (Light)
```
rounded-lg border border-neutral-200 bg-white p-5 shadow-sm
hover:shadow-md transition-shadow
```
- Internal gap: `gap-3.5`
- Height: `h-full` (stretch to container)

#### Table Row Card (Dark)
```
bg-[#121212] rounded-md pl-5 pr-8 py-3.5
```
- Grid: `grid grid-cols-[2fr_5fr_7fr_4fr_7fr_5fr_4fr_3fr] items-center gap-4`

#### Expert Rating Card
```
w-[276px] border border-[#003EB6] rounded-lg px-3 py-3
```
- Shield icon: `size-[44px]`
- Score: `text-[42px] font-bold`
- Bottom bar: `bg-[#003EB6] py-1`, text: `text-[10px] font-semibold uppercase tracking-[0.3px]`

#### Blog Card
```
rounded-lg border border-neutral-200 bg-white overflow-hidden
```
- Thumbnail: `h-[201px]` with `object-cover`
- Category badge: `rounded-lg bg-neutral-100 px-2.5 py-1 text-sm font-semibold text-neutral-800`

### 4.3 Inputs

#### Standard Input
```
h-8 px-2.5 py-1 border-input rounded-lg text-base md:text-sm
focus:border-ring focus:ring-3 focus:ring-ring/50
placeholder:text-muted-foreground
disabled:bg-input/50 disabled:opacity-50
```

#### Large Input (Forms)
```
h-12 rounded-lg border-neutral-200 p-2
```

#### Search Input (Hero)
```
bg-[#121212] rounded-lg ring-inset ring-[#e6b830]
placeholder:text-white/30 focus:border-white/25
```
- Max width: `max-w-[603px]`
- Shimmer border glow: `shadow-[0px_1px_52px_0px_rgba(230,184,48,0.5)]`

#### Textarea
```
min-h-16 px-2.5 py-2 border-input rounded-lg
text-base md:text-sm
```

### 4.4 Badges & Pills

#### Safety Index Badge
```
rounded-full px-2 py-0.5 text-xs font-semibold text-[#060d17]
```
- High: `bg-[#00de00]`
- Normal: `bg-[#eaee45]`

#### Category Badge
```
rounded-lg bg-neutral-100 px-2.5 py-1 text-sm font-semibold text-neutral-800
```

#### Bonus Badge
```
rounded-lg bg-[#f5f5f5] px-2 py-1
```

#### shadcn Badge Variants
| Variant | Style |
|---------|-------|
| `default` | Primary bg, foreground text |
| `secondary` | Secondary bg |
| `destructive` | Destructive styling |
| `outline` | Bordered, transparent bg |
| `ghost` | Minimal hover state |
| `link` | Underlined text |

- All badges: `h-5 w-fit px-2 py-0.5 text-xs font-medium rounded-4xl`

### 4.5 Navigation

#### Navbar
- Height: `h-14` (56px)
- Position: `sticky top-0 z-40`
- Padding: `px-4 lg:px-10`
- Link style: `text-sm font-medium rounded-lg px-3 py-1.5`
- Icon sizes: `size-4`, `size-6`, `size-7`
- Hide/show on scroll: `translate-y-0` (visible) vs `-translate-y-full` (hidden)
- Shadow when scrolled: `shadow-sm` / `shadow-lg`

#### Dropdown Menu
- Width: `w-[240px]` (country selector) or `grid-cols-[720px]` (mega dropdown)
- Background: `#020202`
- Border: `border border-[#212121]`
- Item: `rounded-lg px-2 py-2.5 text-white hover:bg-yellow-400 hover:text-black transition-colors`
- Shadow: `shadow-2xl`

#### Mobile Navigation (Sheet)
- Side panel: `w-3/4 border-l h-full`
- Overlay: `bg-black/10 backdrop-blur-xs`

### 4.6 Dialogs & Modals

#### Login Dialog
```
sm:max-w-[860px] p-0 gap-0 min-h-[560px]
```
- Layout: Two-column — left panel `w-[52%] shrink-0` (desktop), right panel `flex-1 p-6 md:p-8`
- Title: `text-xl font-bold text-neutral-900`
- Overlay: `bg-black/10 backdrop-blur-xs`

#### Gallery Modal
- Overlay: `fixed inset-0 z-[9999] bg-black/80`
- Content: `max-w-[900px] w-[90vw]`
- Image: `h-[60vh] rounded-xl`
- Nav buttons: `size-10 rounded-full bg-black/50 text-white hover:bg-black/70`
- Thumbnails: `h-[60px] w-[90px] rounded-md`, selected: `ring-2 ring-white`

### 4.7 Popover / Tooltip

#### Popover
```
w-72 bg-popover rounded-lg p-2.5 shadow-md text-sm
```

#### Tooltip
```
bg-foreground text-background rounded-md px-3 py-1.5 text-xs max-w-xs
```

### 4.8 Checkbox
```
size-4 border-input rounded-[4px]
checked: border-primary bg-primary
```

### 4.9 Separator
```
bg-border h-px w-full (horizontal) | w-px self-stretch (vertical)
```

### 4.10 Slider
- Track: `h-1 bg-muted rounded-full`
- Range: `bg-primary`
- Thumb: `size-3 rounded-full border-ring bg-white`

### 4.11 Rating Stars
- Star icon: 20x20 SVG with colored background
- Colors: Dynamic based on rating (see Rating Colors in Section 2.4)
- Size: `size-5 shrink-0`
- Layout: `flex items-center gap-0.5`

---

## 5. Layout Principles

### 5.1 Container

```css
.site-container {
  @apply mx-auto max-w-[1600px] px-5 sm:px-10 lg:px-26;
}
```
- Max content width: **1600px**
- Horizontal padding: 20px (mobile) / 40px (tablet) / 104px (desktop)

### 5.2 Spacing Scale

Use Tailwind's default spacing scale. Common values used:

| Token | Value | Common Usage |
|-------|-------|-------------|
| `gap-0.5` | 2px | Tight icon groups |
| `gap-1` | 4px | Icon + text |
| `gap-1.5` | 6px | Button icon spacing |
| `gap-2` | 8px | Inline elements |
| `gap-2.5` | 10px | Card internals |
| `gap-3` | 12px | Button groups |
| `gap-3.5` | 14px | Card sections |
| `gap-4` | 16px | Form fields |
| `gap-5` | 20px | Section internals |
| `gap-6` | 24px | Section spacing |
| `gap-8` | 32px | Major sections |
| `gap-9` | 36px | Large separations |

### 5.3 Grid Patterns

#### Two Column
```
grid grid-cols-1 lg:grid-cols-2 gap-8
```

#### Three/Four Column
```
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4
```

#### Casino Index Table (8-column)
```
grid grid-cols-[2fr_5fr_7fr_4fr_7fr_5fr_4fr_3fr] items-center gap-4
```

### 5.4 Flex Patterns

```
flex items-center justify-between          /* Horizontal bar layout */
flex items-center gap-2                     /* Inline elements */
flex flex-col gap-4                         /* Vertical stack */
flex flex-col lg:flex-row items-center      /* Responsive direction */
```

### 5.5 Section Spacing

- Between major sections: `space-y-12` or `py-8` / `py-12`
- Within sections: `gap-5` / `gap-6`
- Card padding: `p-4` / `p-5`

---

## 6. Depth & Elevation

### 6.1 Shadow System

| Level | Token | Usage |
|-------|-------|-------|
| **Level 0** | No shadow | Flat elements, inline content |
| **Level 1** | `shadow-sm` | Cards at rest, navbar at top |
| **Level 2** | `shadow-md` | Cards on hover |
| **Level 3** | `shadow-lg` | Navbar when scrolled |
| **Level 4** | `shadow-2xl` | Dropdowns, floating panels |
| **Custom** | `shadow-[8px_0_12px_#121212]` | Sticky table column edge |
| **Glow** | `shadow-[0px_1px_52px_0px_rgba(230,184,48,0.5)]` | Shimmer border highlight |
| **Inset** | `shadow-[inset_0_-8px_10px_#ffffff1f]` | Shimmer button inner glow |

### 6.2 Z-Index Hierarchy

| Level | Value | Usage |
|-------|-------|-------|
| **Content** | `z-10` | Elevated content, hero category |
| **Gradient** | `z-20` | Fade-out gradients |
| **Navigation** | `z-40` | Sticky navbar |
| **Overlay** | `z-50` | Dropdown panels, sheet overlays |
| **Modal** | `z-[9999]` | Gallery modal (highest) |

### 6.3 Backdrop Effects
- Dialog/Sheet overlay: `bg-black/10 backdrop-blur-xs`
- Gallery overlay: `bg-black/80`

---

## 7. Animations & Motion

### 7.1 Custom Animations

#### Aurora Background (Hero)
Three variants with staggered timing:
- `animate-aurora-1`: 8s ease-in-out infinite (translate + scale + opacity)
- `animate-aurora-2`: 10s ease-in-out infinite
- `animate-aurora-3`: 12s ease-in-out infinite

#### Shimmer Border
- `animate-shimmer-slide`: `shimmer-slide var(--speed) ease-in-out infinite alternate`
- `animate-spin-around`: `spin-around calc(var(--speed) * 2) infinite linear`
- Requires: `--speed` CSS variable (default `2.5s`)

#### Vote Bars
- `animate-vote-green`: Width oscillates 48%-51% over 3s
- `animate-vote-red`: Width oscillates 49%-52% over 3s

#### Grid Shimmer
- `animate-grid-shimmer`: Mask-position animation, 5s ease-in-out infinite

### 7.2 Transition Defaults

| Property | Duration | Usage |
|----------|----------|-------|
| `transition-colors` | 150ms | Button/link hover |
| `transition-opacity` | varies | Fade in/out |
| `transition-shadow` | 150ms | Card hover elevation |
| `transition-transform` | varies | Icon/element movement |
| `transition-all` | varies | Multi-property changes |
| `duration-300` | 300ms | Standard transitions |
| `duration-500` | 500ms | Fade/opacity changes |

### 7.3 Motion Library (Framer Motion)

#### Dropdown/Panel Animations
```js
initial={{ opacity: 0, y: -12 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -8 }}
transition={{ type: "spring", stiffness: 400, damping: 17 }}
```

#### Dialog Animations
```
Open:  animate-in fade-in-0 zoom-in-95
Close: animate-out fade-out-0 zoom-out-95
```

#### Slide-in Direction Mapping
| Position | Animation |
|----------|-----------|
| Bottom | `slide-in-from-top-2` |
| Left | `slide-in-from-right-2` |
| Right | `slide-in-from-left-2` |
| Top | `slide-in-from-bottom-2` |

### 7.4 Interactive Micro-animations

- **Button press:** `active:translate-y-px`
- **Chevron slide:** `group-hover:translate-x-0.5`
- **Image scale:** `group-hover:scale-110`
- **Opacity hover:** `hover:opacity-80` / `hover:opacity-90`

---

## 8. Responsive Behavior

### 8.1 Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Default | < 640px | Mobile-first base styles |
| `sm:` | >= 640px | Tablets, larger phones |
| `md:` | >= 768px | Small tablets, dialog layouts |
| `lg:` | >= 1024px | Desktop |
| `xl:` | >= 1280px | Large screens |

### 8.2 Common Responsive Patterns

#### Show/Hide
```
hidden lg:flex          /* Desktop only */
hidden lg:block         /* Desktop only */
lg:hidden               /* Mobile only */
```

#### Typography Scaling
```
text-2xl sm:text-3xl lg:text-4xl     /* Headlines */
text-sm sm:text-base                  /* Body text */
```

#### Layout Switching
```
flex-col lg:flex-row                  /* Stack to row */
grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  /* Progressive grid */
w-full sm:w-fit                       /* Full width to content */
```

#### Spacing Scaling
```
px-5 sm:px-10 lg:px-26               /* Container padding */
py-8 sm:py-12 lg:py-15               /* Section padding */
gap-4 lg:gap-8                        /* Grid gaps */
```

### 8.3 Component Breakdowns

| Component | Mobile | Desktop |
|-----------|--------|---------|
| **Navbar** | Hamburger menu (Sheet) | Full horizontal nav |
| **Hero** | Text only, full width | Text + illustration side by side |
| **Cards** | Single column stack | 2-3 column grid |
| **Casino Table** | Horizontal scroll | Full grid display |
| **Login Dialog** | Single column form | Two-column (brand panel + form) |
| **Crypto Icons** | `size-[calc((100vw-80px)/10)]` | Fixed sizes |

---

## 9. Icons & Images

### 9.1 Icon Library

- **Primary:** Lucide React
- **Common icons:** ChevronRight, ChevronLeft, ChevronDown, Menu, Search, Calendar, Eye, Trophy, Sparkles, Crown, LayoutGrid, ShieldCheck, EyeOff, Smartphone, MonitorPlay, BookOpen, Star, X, Check
- **Country Flags:** `flag-icons` package (`<span className="fi fi-{code} fis" />`)
- **Custom SVGs:** Trust shields (50x50), rating stars (19x19), game icons (32x32)

### 9.2 Icon Sizes

| Size | Classes | Usage |
|------|---------|-------|
| **XS** | `size-3`, `size-3.5` | Inline indicators |
| **SM** | `size-4`, `size-5` | Button icons, rating stars |
| **MD** | `size-6` | Navigation icons |
| **LG** | `size-7`, `size-8`, `size-10` | Feature icons, nav buttons |
| **Custom** | `size-[17px]`-`size-[20px]` | Specific component icons |

### 9.3 Image Treatment

- All images use Next.js `<Image>` component
- **Photos/Screenshots:** `object-cover rounded-lg` or `rounded-xl`
- **Logos:** `object-contain` within sized container
- **Priority:** `priority` prop for above-fold images
- **Thumbnails:** Fixed dimensions with `rounded-md`
- **Aspect ratios:** `aspect-video` (16:9) for video thumbnails

### 9.4 Game Type Icons

18 game types with SVG icons at 32x32: Slots, Roulette, Blackjack, Video Poker, Bingo, Jackpot Games, Baccarat, Live Casino, Dice, Scratch Cards, Sports Betting, Betting, Keno, Esport Betting, Provably Fair, Crash, In House, Originals

---

## 10. Data Attributes

All components use semantic data attributes for identification:

| Attribute | Scope | Example |
|-----------|-------|---------|
| `data-section` | Large semantic areas | `"navbar"`, `"hero"`, `"main"`, `"body"` |
| `data-name` | Specific components | `"expert-card"`, `"bonus-bar"`, `"shimmer-border"` |

**Rule:** Every `div` and `section` element must have a `data-name` attribute for identification and targeting.

---

## 11. Do's and Don'ts

### Do's
- Use existing color tokens from this guide — never pick arbitrary hex values
- Follow the rating color scale exactly (5-step: green to red)
- Use `cn()` utility (clsx + tailwind-merge) for conditional class merging
- Apply `data-name` attributes to every div/section
- Use `rounded-lg` as the default border radius for cards and inputs
- Use `transition-colors` on interactive elements
- Apply `shadow-sm` at rest and `shadow-md` on hover for cards
- Use the `site-container` class for page-level content width
- Use `font-heading` (Inter Display) for headlines, `font-sans` (Inter) for body
- Keep dark sections (`#020202`) for hero/index areas and white for content cards
- Use Lucide React as the primary icon library

### Don'ts
- Don't create new color values — use the palette defined here
- Don't use `font-bold` for headlines — use `font-black` (900) for hero/h1 and `font-semibold`/`font-bold` for lower levels
- Don't use arbitrary shadows — stick to the shadow scale (sm, md, lg, 2xl)
- Don't hardcode pixel values for spacing — use Tailwind spacing classes
- Don't mix border-radius styles — `rounded-lg` for cards/inputs, `rounded-full` for pills/badges, `rounded-xl` for modals
- Don't add hover effects without `transition-*` classes
- Don't use raw `<img>` tags — always use Next.js `<Image>`
- Don't use global state libraries — use React hooks (useState, useEffect, useRef)
- Don't forget the `"use client"` directive for interactive components
- Don't create components without TypeScript interfaces for props
- Don't use inline styles when Tailwind classes exist

---

## 12. Agent Prompt Guide

### Quick Reference Prompts

When building new components, reference these patterns:

- **"Build a card like the review cards"** → White bg, `rounded-lg border border-neutral-200 p-5 shadow-sm hover:shadow-md`, gold CTA button with chevron
- **"Add a rating display"** → Use the 5-step rating color scale, star icons at `size-5`, score in `text-[23px] font-semibold`
- **"Create a dark section"** → `bg-[#020202]` background, `text-[#f8f8f8]` text, `border-white/10` borders
- **"Add a safety badge"** → `rounded-full px-2 py-0.5 text-xs font-semibold text-[#060d17]` with dynamic bg color
- **"Build a data table"** → Dark rows `bg-[#121212] rounded-md`, 8-column grid, sticky first column
- **"Add a CTA button"** → Gold: `bg-[#eab914] hover:bg-[#d4a812]` with `ChevronRight`, or Blue: `bg-[#003EB6]` for auth
- **"Create a modal/dialog"** → Use shadcn Dialog, `sm:max-w-[860px]`, overlay `bg-black/10 backdrop-blur-xs`
- **"Build a section header"** → `font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight`
