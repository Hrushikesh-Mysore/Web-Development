# Module 09 — Text & Font Styling

> **Previous:** [← Module 08 — Backgrounds & Borders](08-backgrounds-borders.md) | **Next:** [Module 10 — Overflow & Display →](10-overflow-display.md)

---

## Font Family

```css
body {
  /* Font stack: browser tries each in order until it finds one installed */
  font-family: 'Inter', Arial, Helvetica, sans-serif;
}

h1 {
  font-family: 'Georgia', 'Times New Roman', serif;
}

code {
  font-family: 'Fira Code', 'Courier New', monospace;
}
```

**Generic families** (always available):
- `sans-serif` — no serifs (Arial, Helvetica style)
- `serif` — with serifs (Georgia, Times style)
- `monospace` — fixed-width (code fonts)
- `cursive` — script/handwritten
- `system-ui` — uses the operating system's default UI font

Always end your font stack with a generic family as a fallback.

---

## Web Fonts — Google Fonts

Loading a custom font from Google Fonts:

```html
<!-- In <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

```css
body {
  font-family: 'Inter', sans-serif;
}
```

The `rel="preconnect"` hints tell the browser to establish the connection early — this reduces the time it takes to load the font.

### Self-hosting with `@font-face`

```css
@font-face {
  font-family: 'MyFont';
  src:
    url('fonts/myfont.woff2') format('woff2'),
    url('fonts/myfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;  /* Show fallback font until custom font loads */
}

body {
  font-family: 'MyFont', sans-serif;
}
```

`font-display: swap` prevents invisible text while the font loads — highly recommended.

---

## Font Size

```css
body {
  font-size: 1rem;      /* 16px by default */
}

h1 { font-size: 3rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }
small { font-size: 0.875rem; }
```

Use `rem` for font sizes — it respects the user's browser font size preference, which is important for accessibility.

---

## Font Weight

```css
p      { font-weight: 400; }  /* normal */
strong { font-weight: 700; }  /* bold */
.light { font-weight: 300; }  /* light */
.black { font-weight: 900; }  /* extra black */

/* Keywords also work */
font-weight: normal;   /* 400 */
font-weight: bold;     /* 700 */
```

Only use weights your font actually has. Loading a 300-weight version of a font that does not have it will cause the browser to fake it — the results are usually ugly.

---

## Font Style

```css
em      { font-style: italic; }
.normal { font-style: normal; }
```

---

## Line Height

```css
p {
  line-height: 1.6;   /* Unitless — 1.6× the font size. Recommended. */
}

/* For headings, tighter line height often looks better */
h1 {
  font-size: 3rem;
  line-height: 1.2;
}
```

Body text: `1.5`–`1.7` is the sweet spot for readability.  
Headings: `1.1`–`1.3` — tighter spacing looks cleaner at large sizes.

---

## Text Alignment

```css
.centre { text-align: center; }
.right  { text-align: right; }
.left   { text-align: left; }   /* Default in LTR languages */
.just   { text-align: justify; } /* Spreads text to fill both edges */
```

> **Avoid `justify` for body text** unless you are also controlling hyphenation — unjustified text creates irregular word spacing that makes reading harder.

---

## Letter Spacing and Word Spacing

```css
h1 {
  letter-spacing: -0.02em;   /* Slightly tighter — looks good on large headings */
}

.uppercase-label {
  text-transform: uppercase;
  letter-spacing: 0.1em;     /* Uppercase text reads better with more spacing */
}

p {
  word-spacing: 0.05em;      /* Rarely needed */
}
```

---

## Text Decoration

```css
a { text-decoration: underline; }
a { text-decoration: none; }

/* Style it */
a {
  text-decoration: underline;
  text-decoration-color: royalblue;
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;   /* Gap between text and underline */
}

del { text-decoration: line-through; }
ins { text-decoration: underline; }
```

---

## Text Transform

```css
.uppercase { text-transform: uppercase; }
.lowercase { text-transform: lowercase; }
.capitalise { text-transform: capitalize; }  /* First letter of each word */
.none { text-transform: none; }
```

---

## Text Overflow — Truncation

```css
/* Single-line truncation with ellipsis */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* The element must have a width set for this to work */
}

/* Multi-line clamp (limits to 3 lines) */
.clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

---

## A Complete Typography System

```css
:root {
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-serif: 'Georgia', serif;
  --font-mono: 'Fira Code', monospace;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;
  --text-4xl: 3rem;
}

body {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  line-height: 1.6;
  color: #1a1a2e;
}

h1 { font-size: var(--text-4xl); line-height: 1.2; font-weight: 700; }
h2 { font-size: var(--text-3xl); line-height: 1.25; font-weight: 700; }
h3 { font-size: var(--text-2xl); line-height: 1.3; font-weight: 600; }
```

---

## Quick Reference

| Property | Common values |
|---------|--------------|
| `font-family` | Font stack ending in generic family |
| `font-size` | `rem` recommended |
| `font-weight` | `300` `400` `600` `700` `900` |
| `font-style` | `normal` `italic` |
| `line-height` | Unitless `1.5`–`1.7` for body |
| `text-align` | `left` `center` `right` `justify` |
| `letter-spacing` | `em` values (`-0.02em` to `0.1em`) |
| `text-transform` | `uppercase` `lowercase` `capitalize` |
| `text-decoration` | `none` `underline` `line-through` |
| `text-overflow` | `ellipsis` (needs `overflow:hidden` + `white-space:nowrap`) |

---

## 🧪 Exercises

**Exercise 1 — Font stack**

Write a `font-family` declaration for a sans-serif page that prefers Inter, then falls back to the system UI font, then any sans-serif.

<details>
<summary>Show answer</summary>

```css
font-family: 'Inter', system-ui, sans-serif;
```
</details>

---

**Exercise 2 — Heading styles**

Write CSS for an `<h1>` with: 3rem font size, 700 weight, tight line height of 1.2, and slightly negative letter spacing of -0.02em.

<details>
<summary>Show answer</summary>

```css
h1 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
}
```
</details>

---

**Exercise 3 — Truncate a title**

Write CSS so that a `.card-title` that is too long for its container shows an ellipsis instead of wrapping.

<details>
<summary>Show answer</summary>

```css
.card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```
</details>

---

**Exercise 4 — Link styling**

Style all `<a>` tags to have no underline by default, royalblue colour, and show an underline on hover with a 2px offset.

<details>
<summary>Show answer</summary>

```css
a {
  color: royalblue;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  text-underline-offset: 2px;
}
```
</details>

---

> **Next:** [Module 10 — Overflow & Display →](10-overflow-display.md)
