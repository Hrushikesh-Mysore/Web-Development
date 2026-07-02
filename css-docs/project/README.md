# 🏁 Final Project — Style Your Résumé

> **All 16 modules done? Now make it look like something you are proud to share.**

---

## The Brief

Take the HTML résumé you built in the HTML documentation project and write a complete CSS stylesheet for it. No CSS frameworks. No copy-pasting from the internet. Just your own CSS, using everything you have learned.

The goal is a résumé page that looks sharp on a phone, a tablet, and a desktop — and loads fast.

---

## What to Style

Work through each section in this order. Completing them in sequence means you always have something working — nothing half-finished.

### 1. The Reset & Base

```css
/* Start every project with these */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

img, video {
  max-width: 100%;
  height: auto;
  display: block;
}

input, button, textarea, select {
  font: inherit;
}
```

Then define your design tokens as CSS variables — colours, fonts, spacing, border radius.

### 2. Typography

Style the body font, line height, and colour. Then style every heading level. Then links, `<strong>`, `<em>`, `<code>`, and `<small>`.

### 3. Layout

Build your page layout using Grid or Flexbox. Consider:
- A full-width header
- A centred main content container (capped at `860px` or so)
- A footer

### 4. Header & Navigation

Style the site header, your name, your job title, and the navigation links.

### 5. Sections

Style each résumé section — about, skills, experience, projects, education, contact. Give each section clear visual separation.

### 6. Components

Style the smaller reusable pieces:
- Skill tags/badges
- Project cards
- Experience entries
- Contact form inputs and button

### 7. Responsive

Make it work on mobile. At minimum, test at `375px` (phone) and `1024px` (desktop). The key breakpoints to handle:
- Navigation collapses on small screens
- Two-column layout (if any) stacks on mobile
- Font sizes scale down appropriately
- Padding shrinks so content does not feel cramped

### 8. Polish

Add hover states to links and buttons. Add focus styles to interactive elements. Add transitions to hover effects. Check dark mode if you want to go the extra mile.

---

## Requirements Checklist

### Setup
- [ ] `box-sizing: border-box` reset applied globally
- [ ] CSS variables defined in `:root` for colours, spacing, fonts
- [ ] External stylesheet linked from HTML with `<link>`
- [ ] Google Font or system font stack defined

### Typography
- [ ] Body font, size, line height, and colour set
- [ ] All heading levels styled (h1–h3 at minimum)
- [ ] Links styled with a non-visited and a `:hover` state
- [ ] `font-family: inherit` on all form elements

### Box Model
- [ ] Consistent spacing using your CSS variable spacing scale
- [ ] No hardcoded magic numbers — use variables or relative units
- [ ] Content container has `max-width` and `margin: 0 auto`

### Layout
- [ ] Overall page layout uses Flexbox or Grid
- [ ] At least one Grid layout used (e.g. project cards, skills grid)
- [ ] At least one Flexbox layout used (e.g. nav, button content)

### Visual Design
- [ ] Colour palette is consistent (use your CSS variables)
- [ ] All sections visually distinct but part of a coherent design
- [ ] Profile image is circular or styled intentionally
- [ ] Cards or experience entries have clear visual grouping
- [ ] At least one use of `border-radius`
- [ ] At least one use of `box-shadow`

### Interactivity
- [ ] All links have `:hover` styles
- [ ] All buttons have `:hover` and `:active` styles
- [ ] All inputs have `:focus` styles (not just the browser default)
- [ ] Hover transitions use `transition` (not instant jumps)

### Responsive
- [ ] `<meta name="viewport">` present in HTML (from HTML docs project)
- [ ] Page looks good at `375px` viewport width
- [ ] Page looks good at `768px` viewport width
- [ ] Page looks good at `1280px` viewport width
- [ ] Navigation adapts to small screens
- [ ] No horizontal scroll at any viewport width
- [ ] Images never overflow their containers

### Accessibility
- [ ] Colour contrast is sufficient (text on background)
- [ ] Focus styles are visible and styled
- [ ] `prefers-reduced-motion` media query disables transitions
- [ ] `prefers-color-scheme: dark` override added (bonus)

---

## Design Tokens to Define First

Before writing a single layout rule, define these in `:root`. Everything else references them.

```css
:root {
  /* Colours */
  --color-bg:        #ffffff;
  --color-surface:   #f8f8f8;
  --color-border:    #e0e0e0;
  --color-text:      #1a1a2e;
  --color-text-muted:#555e6e;
  --color-primary:   royalblue;
  --color-primary-dark: #2a52be;

  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --text-sm:   0.875rem;
  --text-base: 1rem;
  --text-lg:   1.125rem;
  --text-xl:   1.25rem;
  --text-2xl:  1.5rem;
  --text-3xl:  2rem;
  --text-4xl:  clamp(2rem, 5vw, 3rem);

  /* Spacing */
  --space-1:  0.25rem;
  --space-2:  0.5rem;
  --space-3:  0.75rem;
  --space-4:  1rem;
  --space-6:  1.5rem;
  --space-8:  2rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* Shape */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* Shadow */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.12);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.16);
}
```

---

## File Structure

```
resume/
├── index.html
├── style.css          ← Your main stylesheet
└── images/
    └── profile.jpg
```

---

## Reference Solution

A complete styled résumé is in [`solution/`](solution/).

- [`solution/index.html`](solution/index.html) — the HTML (same as from the HTML docs project)
- [`solution/style.css`](solution/style.css) — the complete CSS

**Look at it only after you have tried building your own.** Use it as a reference to understand how something is structured — not as something to copy wholesale. The learning happens in the struggle, not the solution.

---

## Deploying to GitHub Pages

1. Push your project to GitHub (if you followed the HTML docs project, it is already there at `your-username.github.io`)
2. Commit and push `style.css`
3. GitHub Pages picks it up automatically — no extra steps

Your styled résumé will be live at `https://your-username.github.io`.

---

## What Comes Next

You now know HTML and CSS well enough to build real things. Where to go from here:

- **JavaScript** — add interactivity. The [MDN JavaScript learning path](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting) is the right next step.
- **CSS animations and transitions** — [MDN CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations)
- **CSS custom properties deep dive** — [MDN Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- **Build more projects** — a blog page, a product landing page, a portfolio with multiple sections

---

> **[← Module 16 — Responsive Design](../modules/16-responsive.md)** | **[⚡ Cheat Sheet →](../cheatsheet/README.md)**
