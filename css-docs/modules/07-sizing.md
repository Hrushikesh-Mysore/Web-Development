# Module 07 — Sizing

> **Previous:** [← Module 06 — Values & Units](06-values-units.md) | **Next:** [Module 08 — Backgrounds & Borders →](08-backgrounds-borders.md)

---

## How Elements Get Their Size

An element's size comes from one of three places:

1. **Intrinsic size** — the element's natural size based on its content
2. **Extrinsic size** — size given to it by CSS (`width`, `height`)
3. **Content-driven size** — size flows from parent and children together

---

## `width` and `height`

```css
.box {
  width: 400px;       /* Fixed pixel width */
  height: 200px;      /* Fixed pixel height */
}

.fluid {
  width: 80%;         /* 80% of parent width */
}

.full-screen {
  width: 100vw;
  height: 100vh;
}
```

**Be cautious with fixed heights.** If content grows (longer text, larger font size, translated content), a fixed height causes overflow. Prefer `min-height` for containers.

---

## `min-width`, `max-width`, `min-height`, `max-height`

These are the real power tools for responsive layouts.

```css
/* Fluid, but never narrower than 300px or wider than 800px */
.content {
  width: 90%;
  min-width: 300px;
  max-width: 800px;
  margin: 0 auto;
}

/* Grow to fit content, but always at least 50px tall */
.button {
  min-height: 50px;
}

/* Never taller than the viewport */
.modal {
  max-height: 90vh;
  overflow-y: auto;
}
```

The classic responsive container pattern:

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
```

This container is full width on small screens and caps at `1200px` on large screens. The `margin: 0 auto` centres it. The `padding` keeps content off the edges.

---

## `min-content`, `max-content`, and `fit-content`

These are **intrinsic sizing keywords** — they let the element size itself based on its content.

```css
.tag {
  width: min-content;   /* Shrinks to the narrowest possible without breaking words */
}

.heading {
  width: max-content;   /* Grows as wide as needed to fit content on one line */
}

.pill {
  width: fit-content;   /* Grows to fit content, but respects the available space */
}
```

Practical example:

```css
/* A tag/badge that is just wide enough for its text */
.badge {
  width: fit-content;
  padding: 0.25rem 0.75rem;
  background: royalblue;
  color: white;
  border-radius: 9999px;
}
```

---

## `aspect-ratio` — Keep Proportions

```css
/* Always a 16:9 rectangle, regardless of width */
.video-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
}

/* Perfect square */
.avatar {
  width: 80px;
  aspect-ratio: 1;
}
```

Before `aspect-ratio` existed, developers used the "padding-top hack" to maintain ratios. `aspect-ratio` is the clean modern solution.

---

## `overflow` — When Content Does Not Fit

```css
.box {
  width: 200px;
  height: 100px;
  overflow: visible;  /* Default — content spills outside the box */
  overflow: hidden;   /* Clips content at the edge */
  overflow: scroll;   /* Always shows scrollbars */
  overflow: auto;     /* Shows scrollbars only when needed — usually what you want */
}

/* Control axes separately */
.sidebar {
  overflow-x: hidden;
  overflow-y: auto;
}
```

---

## Quick Reference

| Property | Does |
|---------|------|
| `width` / `height` | Set explicit dimensions |
| `min-width` / `min-height` | Minimum dimension (can grow beyond this) |
| `max-width` / `max-height` | Maximum dimension (cannot grow beyond this) |
| `min-content` | Shrink to minimum possible without breaking words |
| `max-content` | Grow to fit all content on one line |
| `fit-content` | Grow to content, but respect available space |
| `aspect-ratio` | Maintain a width-to-height ratio |
| `overflow: hidden` | Clip overflow content |
| `overflow: auto` | Scrollbar only when content overflows |

---

## 🧪 Exercises

**Exercise 1 — Responsive container**

Write CSS for a `.wrapper` that is full width on mobile, capped at `960px` on desktop, and centred with `1rem` of horizontal padding.

<details>
<summary>Show answer</summary>

```css
.wrapper {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
}
```
</details>

---

**Exercise 2 — Video embed**

Create a `.video-container` that always maintains a 16:9 aspect ratio and fills its parent's width.

<details>
<summary>Show answer</summary>

```css
.video-container {
  width: 100%;
  aspect-ratio: 16 / 9;
}

.video-container iframe,
.video-container video {
  width: 100%;
  height: 100%;
}
```
</details>

---

**Exercise 3 — Avoid height overflow**

Write a CSS card component that is at least `200px` tall but grows to fit its content.

<details>
<summary>Show answer</summary>

```css
.card {
  min-height: 200px;
  padding: 1.5rem;
  /* No fixed height — it grows with content */
}
```
</details>

---

> **Next:** [Module 08 — Backgrounds & Borders →](08-backgrounds-borders.md)
