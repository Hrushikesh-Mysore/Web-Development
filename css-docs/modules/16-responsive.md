# Module 16 — Responsive Design & Media Queries

> **Previous:** [← Module 15 — CSS Grid](15-grid.md) | **Next:** [🏁 Final Project →](../project/README.md)

---

## What is Responsive Design?

Responsive design means your page looks good on every screen — a 375px phone, a 768px tablet, a 1440px desktop, and everything in between. Not three separate designs. One design that **responds** to the available space.

It is built on three things:

1. **Fluid layouts** — widths in `%`, `fr`, or `vw` instead of fixed `px`
2. **Flexible images** — `max-width: 100%` so images never overflow
3. **Media queries** — CSS rules that apply only at certain viewport sizes

---

## The Viewport Meta Tag — Do Not Forget This

Before media queries work on mobile, you need this in your `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Without it, mobile browsers pretend they are a 980px desktop and scale the page down. Your beautifully crafted CSS becomes a tiny unreadable mess. Always include it. No exceptions.

---

## Media Queries — The Syntax

```css
@media media-type and (condition) {
  /* CSS rules that apply only when the condition is true */
}
```

The most common media type is `screen`. You often omit it:

```css
/* Applies when viewport is 768px or wider */
@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

---

## Mobile-First vs Desktop-First

**Mobile-first:** Write your base CSS for small screens. Use `min-width` queries to add styles as the screen gets bigger.

```css
/* Base — mobile */
.nav {
  flex-direction: column;
}

/* Tablet and up */
@media (min-width: 768px) {
  .nav {
    flex-direction: row;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .nav {
    padding: 0 4rem;
  }
}
```

**Desktop-first:** Write CSS for large screens. Use `max-width` queries to change styles as the screen gets smaller.

```css
/* Base — desktop */
.nav {
  flex-direction: row;
}

/* Tablet and below */
@media (max-width: 1023px) {
  .nav {
    flex-direction: column;
  }
}
```

**Mobile-first is the industry standard.** It forces you to think about essential content first, and progressive enhancement is easier to reason about than progressive reduction. Use `min-width` queries.

---

## Common Breakpoints

These are not rules — they are starting points. Design for your content, not for specific devices.

```css
/* Small phones */
@media (min-width: 375px) { }

/* Large phones / small tablets */
@media (min-width: 640px) { }

/* Tablets */
@media (min-width: 768px) { }

/* Small desktops / large tablets */
@media (min-width: 1024px) { }

/* Wide desktops */
@media (min-width: 1280px) { }

/* Very wide screens */
@media (min-width: 1536px) { }
```

A common practical set for most projects: `640px`, `768px`, `1024px`, `1280px`.

---

## Range Media Queries — Modern Syntax

The modern CSS syntax is cleaner:

```css
/* Old syntax */
@media (min-width: 768px) and (max-width: 1023px) { }

/* New range syntax — much more readable */
@media (768px <= width <= 1023px) { }
@media (width >= 768px) { }
@media (width < 1024px) { }
```

Browser support for range syntax is excellent in 2024. Both syntaxes work.

---

## Beyond Width — Other Media Features

```css
/* Orientation */
@media (orientation: landscape) {
  .hero { height: 50vh; }  /* Less height in landscape */
}

@media (orientation: portrait) {
  .hero { height: 60vh; }
}

/* Dark mode preference */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #0d0d0d;
    --color-text: #f0f0f0;
    --color-surface: #1a1a1a;
  }
}

/* Reduced motion preference — respect users who get motion sickness */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* High resolution screens (Retina) */
@media (min-resolution: 2dppx) {
  .logo {
    background-image: url('logo@2x.png');
    background-size: contain;
  }
}

/* Print */
@media print {
  .nav, .footer, .sidebar { display: none; }
  body { font-size: 12pt; color: black; }
  a::after { content: ' (' attr(href) ')'; }
}
```

---

## Fluid Typography — Scale Text With the Viewport

### The `clamp()` Function

`clamp(min, preferred, max)` — a value that scales between a minimum and maximum.

```css
h1 {
  /* Minimum 2rem, scales with viewport, maximum 5rem */
  font-size: clamp(2rem, 5vw, 5rem);
}

body {
  font-size: clamp(1rem, 1.25vw, 1.25rem);
}
```

With `clamp`, your typography scales smoothly across all screen sizes without a single media query.

---

## Responsive Images — A Quick Recap

From the HTML docs, but important in CSS context:

```css
/* Global reset — always */
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

For background images:

```css
.hero {
  background-image: url('hero-sm.jpg');
  background-size: cover;
  background-position: center;
}

@media (min-width: 768px) {
  .hero {
    background-image: url('hero-lg.jpg');  /* Larger image for larger screens */
  }
}
```

---

## Responsive Layout Patterns

### Pattern 1 — Stack to Row

```css
/* Mobile: stack vertically */
.features {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Desktop: side by side */
@media (min-width: 768px) {
  .features {
    flex-direction: row;
  }
}
```

### Pattern 2 — Auto-Responsive Grid (No Media Queries)

```css
/* Works at any screen size — no media queries needed */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
```

This is the power of combining `auto-fill` and `minmax`. Columns are added or removed automatically.

### Pattern 3 — Responsive Nav

```css
/* Mobile: hidden menu (toggle with JS class) */
.nav-links {
  display: none;
  flex-direction: column;
  gap: 1rem;
}

.nav-links.is-open {
  display: flex;
}

/* Desktop: always visible, horizontal */
@media (min-width: 768px) {
  .nav-links {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
}
```

### Pattern 4 — Sidebar Layout

```css
/* Mobile: single column */
.page-layout {
  display: grid;
  gap: 2rem;
}

/* Desktop: sidebar + main */
@media (min-width: 1024px) {
  .page-layout {
    grid-template-columns: 260px 1fr;
  }
}
```

---

## Dark Mode with CSS Variables

Variables make dark mode implementation clean:

```css
:root {
  --color-bg: #ffffff;
  --color-text: #1a1a2e;
  --color-surface: #f5f5f5;
  --color-border: #e0e0e0;
  --color-primary: royalblue;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #0d0d0d;
    --color-text: #f0f0f0;
    --color-surface: #1a1a1a;
    --color-border: #333;
    --color-primary: cornflowerblue;
  }
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
}
```

Every element using these variables automatically switches between light and dark mode. No duplicated rules. No overriding. Just variable reassignment.

---

## Testing Responsive Designs

1. **Chrome / Firefox DevTools** → Toggle device toolbar (`Ctrl+Shift+M` / `Cmd+Shift+M`) — simulate any screen size
2. **Resize your browser window** — drag it narrow. This is still the fastest test.
3. **Real devices** — use your phone. DevTools is a simulation. Real devices are truth.
4. **Browser Stack** — test on real device/OS combinations you do not own

---

## Quick Reference

| Concept | Syntax / Notes |
|---------|--------------|
| Viewport meta tag | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` — required |
| Mobile-first breakpoint | `@media (min-width: 768px) { }` |
| Desktop-first breakpoint | `@media (max-width: 767px) { }` |
| Range syntax | `@media (width >= 768px) { }` |
| Dark mode | `@media (prefers-color-scheme: dark) { }` |
| Reduced motion | `@media (prefers-reduced-motion: reduce) { }` |
| Fluid font size | `font-size: clamp(1rem, 2.5vw, 2rem)` |
| Responsive images | `max-width: 100%; height: auto;` |
| Responsive grid | `repeat(auto-fill, minmax(280px, 1fr))` |

---

## 🧪 Exercises

**Exercise 1 — Stack to row**

Write CSS for a `.card-row` that stacks cards vertically on mobile (`< 768px`) and displays them side by side on larger screens.

<details>
<summary>Show answer</summary>

```css
/* Mobile first — stacked */
.card-row {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Tablet and up — side by side */
@media (min-width: 768px) {
  .card-row {
    flex-direction: row;
  }
}
```
</details>

---

**Exercise 2 — Fluid heading**

Write a `font-size` declaration for an `<h1>` that is never smaller than `2rem` and never bigger than `4.5rem`, scaling smoothly with the viewport width in between.

<details>
<summary>Show answer</summary>

```css
h1 {
  font-size: clamp(2rem, 5vw, 4.5rem);
}
```
</details>

---

**Exercise 3 — Dark mode colours**

Set up CSS variables for `--bg`, `--text`, and `--accent` in light mode and override them for dark mode using a media query.

<details>
<summary>Show answer</summary>

```css
:root {
  --bg: #ffffff;
  --text: #1a1a2e;
  --accent: royalblue;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #111111;
    --text: #eeeeee;
    --accent: cornflowerblue;
  }
}
```
</details>

---

**Exercise 4 — No-query responsive grid**

Write a `.portfolio-grid` that shows as many cards as fit at a minimum width of `260px` each, without using any media queries.

<details>
<summary>Show answer</summary>

```css
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}
```
</details>

---

**Exercise 5 — Reduced motion**

Write a CSS rule that disables all transitions and animations for users who have requested reduced motion.

<details>
<summary>Show answer</summary>

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
</details>

---

## 🎉 You Have Finished All 16 Modules

Here is what you now know how to do:

- Write valid, well-structured CSS from scratch
- Target any element with the right selector
- Understand why styles apply or do not using cascade and specificity
- Control spacing precisely with the box model
- Choose the right units for every situation
- Style text, backgrounds, borders, images, and forms
- Debug CSS confidently with DevTools
- Position elements anywhere on the page
- Build one-dimensional layouts with Flexbox
- Build two-dimensional layouts with Grid
- Make any design work on any screen size with responsive design

**One thing left: apply it all.**

→ [Go to the Final Project →](../project/README.md)

---

> **[← Module 15 — CSS Grid](15-grid.md)** | **[🏁 Final Project →](../project/README.md)**
