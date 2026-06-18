# ⚡ CSS Cheat Sheet

> The 20% of CSS that does 80% of the work. One page. No fluff.

---

## Project Reset — Start Every File With This

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

img, video { max-width: 100%; height: auto; display: block; }
input, button, textarea, select { font: inherit; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Design Tokens — Define Once, Use Everywhere

```css
:root {
  --color-bg:      #fff;
  --color-text:    #1a1a2e;
  --color-primary: royalblue;
  --color-border:  #e0e0e0;

  --font-sans: 'Inter', system-ui, sans-serif;

  --text-sm:   0.875rem;
  --text-base: 1rem;
  --text-lg:   1.125rem;
  --text-xl:   1.25rem;
  --text-2xl:  1.5rem;
  --text-3xl:  2rem;
  --text-4xl:  clamp(2rem, 5vw, 3rem);

  --space-2:  0.5rem;
  --space-4:  1rem;
  --space-6:  1.5rem;
  --space-8:  2rem;
  --space-12: 3rem;

  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-full: 9999px;

  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 14px rgba(0,0,0,0.1);
}
```

---

## Selectors

```css
p            { }   /* type */
.class        { }   /* class */
#id           { }   /* id */
[type="text"] { }   /* attribute */
a:hover       { }   /* pseudo-class */
p::before     { }   /* pseudo-element */

nav a         { }   /* descendant */
ul > li       { }   /* direct child */
h2 + p        { }   /* adjacent sibling */
h2 ~ p        { }   /* all following siblings */
h1, h2, h3    { }   /* list */
p:not(.note)  { }   /* negation */
```

---

## The Box Model

```css
.box {
  box-sizing: border-box;  /* ALWAYS — width includes padding + border */
  width: 400px;
  padding: 1rem 2rem;      /* top/bottom  left/right */
  border: 1px solid #ccc;
  margin: 0 auto;          /* centre a block element */
}
```

---

## Common Units

| Unit | Relative to | Use for |
|------|------------|---------|
| `px` | Absolute | Borders, shadows, breakpoints |
| `rem` | Root font-size | Font sizes, spacing |
| `em` | Own font-size | Component-relative spacing |
| `%` | Parent | Widths |
| `vw/vh` | Viewport | Full-width/height sections |
| `fr` | Available grid space | Grid tracks |
| `ch` | Width of `0` character | Readable line length |

---

## Colours

```css
color: #1a1a2e;                  /* hex */
color: rgb(26 26 46);            /* rgb */
color: hsl(240 30% 14%);         /* hsl — most intuitive */
color: hsl(240 30% 14% / 50%);  /* with opacity */
color: transparent;
color: currentColor;             /* inherits the current color value */
```

---

## Typography

```css
body {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #1a1a2e;
}

h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

/* Truncate to one line */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Limit to 3 lines */
.clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

---

## Backgrounds & Borders

```css
.card {
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

/* Image background */
.hero {
  background: url('hero.jpg') no-repeat center / cover;
  /* url  repeat  position / size */
}

/* Gradient */
.gradient {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

/* Image + gradient overlay */
.overlay {
  background-image:
    linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.75)),
    url('photo.jpg');
  background-size: cover;
}

/* Focus ring (not border) */
button:focus {
  outline: 2px solid royalblue;
  outline-offset: 3px;
}
```

---

## Flexbox

```css
/* Container */
.flex {
  display: flex;
  flex-direction: row;           /* row | column */
  justify-content: space-between; /* main axis */
  align-items: center;           /* cross axis */
  flex-wrap: wrap;
  gap: 1rem;
}

/* Centre anything */
.centre {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Items */
.item { flex: 1; }           /* grow equally */
.fixed { flex: 0 0 260px; } /* fixed size, no grow/shrink */
.grow  { flex-grow: 1; }    /* fill remaining space */

/* Sticky footer */
body { display: flex; flex-direction: column; min-height: 100vh; }
main { flex: 1; }
```

---

## CSS Grid

```css
/* Container */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);   /* 3 equal columns */
  grid-template-columns: 260px 1fr;         /* fixed + flexible */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); /* responsive */
  gap: 1.5rem;
}

/* Named areas — most readable layout approach */
.page {
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-rows: 64px 1fr auto;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  min-height: 100vh;
}
header  { grid-area: header; }
.sidebar{ grid-area: sidebar; }
main    { grid-area: main; }
footer  { grid-area: footer; }

/* Item placement */
.item { grid-column: 1 / 3; }      /* span 2 columns */
.item { grid-column: 1 / -1; }     /* full width */
.item { grid-column: span 2; }     /* span 2 from wherever it lands */
```

---

## Positioning

```css
/* Stacking context for absolute children */
.parent { position: relative; }

/* Remove from flow, place in parent */
.badge {
  position: absolute;
  top: 8px;
  right: 8px;
}

/* Stick to viewport */
.navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 100; }

/* Stick at scroll threshold */
.sticky-header { position: sticky; top: 0; z-index: 10; }

/* Centre an absolutely positioned element */
.centred {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Full overlay */
.overlay { position: absolute; inset: 0; }  /* inset = top+right+bottom+left */
```

---

## Responsive Design

```css
/* Always in <head> */
/* <meta name="viewport" content="width=device-width, initial-scale=1.0"> */

/* Mobile-first breakpoints */
@media (min-width: 640px)  { /* large phones  */ }
@media (min-width: 768px)  { /* tablets       */ }
@media (min-width: 1024px) { /* small desktop */ }
@media (min-width: 1280px) { /* wide desktop  */ }

/* Fluid font */
font-size: clamp(1rem, 2.5vw, 1.5rem);

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root { --color-bg: #111; --color-text: #eee; }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Common Patterns

```css
/* Responsive container */
.container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 1rem; }

/* Responsive grid — no media queries */
.cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }

/* Circular image */
.avatar { width: 80px; height: 80px; border-radius: 50%; object-fit: cover; }

/* Pill badge */
.badge { padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; }

/* Button */
.btn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.75rem 1.5rem; border: none; border-radius: 6px;
  background: royalblue; color: white; font-weight: 600; cursor: pointer;
  transition: background-color 0.15s;
}
.btn:hover { background: #2a52be; }

/* Card */
.card {
  background: white; border: 1px solid #e0e0e0;
  border-radius: 8px; padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

/* Smooth hover lift */
.card { transition: transform 0.2s, box-shadow 0.2s; }
.card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.12); }

/* Input */
.input {
  width: 100%; padding: 0.75rem 1rem; border: 1px solid #d1d5db;
  border-radius: 6px; font-size: 1rem;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.input:focus {
  outline: none; border-color: royalblue;
  box-shadow: 0 0 0 3px rgba(65, 105, 225, 0.2);
}
```

---

## Specificity Quick Score

```
Inline style   → (1,0,0,0)  ← wins everything except !important
#id            → (0,1,0,0)
.class :pseudo → (0,0,1,0)
element        → (0,0,0,1)
```

Later rule wins a tie. Avoid `!important`.

---

## Accessibility Reminders

| Do | Why |
|----|-----|
| Never `outline: none` without a replacement | Keyboard users need focus visibility |
| `font: inherit` on form elements | OS defaults ignore your font |
| `max-width: 100%; height: auto` on images | Prevent overflow |
| `prefers-reduced-motion` media query | Some users get motion sickness |
| Sufficient colour contrast (4.5:1 for text) | Readability for low-vision users |
| `display: block` on images | Removes mysterious bottom gap |

---

*Full documentation → [Back to README](../README.md)*
