# Module 14 — Flexbox

> **Previous:** [← Module 13 — Positioning](13-positioning.md) | **Next:** [Module 15 — CSS Grid →](15-grid.md)

---

## What is Flexbox?

Flexbox is a **one-dimensional layout system** — it lays items out in either a row or a column. It is the go-to tool for:
- Navigation bars
- Card rows
- Aligning content inside buttons
- Any single-axis alignment problem
- Vertical centering (finally easy!)

You activate flexbox on a **container**. Its direct children become **flex items**.

```css
.container {
  display: flex;  /* Activates flexbox — children become flex items */
}
```

---

## The Main Axis and the Cross Axis

Flexbox has two axes:

- **Main axis** — the direction items are laid out (row = horizontal, column = vertical)
- **Cross axis** — perpendicular to the main axis

Most flexbox properties work along one of these axes. This mental model unlocks everything.

---

## Container Properties

### `flex-direction` — Which Way?

```css
.container {
  flex-direction: row;            /* → Left to right (default) */
  flex-direction: row-reverse;    /* ← Right to left */
  flex-direction: column;         /* ↓ Top to bottom */
  flex-direction: column-reverse; /* ↑ Bottom to top */
}
```

### `justify-content` — Main Axis Alignment

```css
.container {
  justify-content: flex-start;    /* Pack to the start (default) */
  justify-content: flex-end;      /* Pack to the end */
  justify-content: center;        /* Centre */
  justify-content: space-between; /* First and last at edges, equal gaps between */
  justify-content: space-around;  /* Equal space around each item */
  justify-content: space-evenly;  /* Equal space between items AND edges */
}
```

### `align-items` — Cross Axis Alignment

```css
.container {
  align-items: stretch;     /* Items stretch to fill cross axis (default) */
  align-items: flex-start;  /* Aligned to cross-start */
  align-items: flex-end;    /* Aligned to cross-end */
  align-items: center;      /* Centred on cross axis */
  align-items: baseline;    /* Text baselines aligned */
}
```

### The Most Useful Pattern — Centring Anything

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

This centres children both horizontally and vertically. It took CSS decades to give us this. Appreciate it.

### `flex-wrap` — Let Items Wrap

```css
.container {
  flex-wrap: nowrap;   /* Default — items shrink to fit on one line */
  flex-wrap: wrap;     /* Items wrap to the next line when they run out of space */
}
```

### `gap` — Spacing Between Items

```css
.container {
  display: flex;
  gap: 1rem;          /* Equal gap between all items */
  gap: 1rem 2rem;     /* Row gap  Column gap */
}
```

`gap` replaced the old `margin` trick for flex spacing. Cleaner, simpler, always correct.

---

## Item Properties

These go on **flex items** (the children), not the container.

### `flex-grow` — Allow Growth

```css
/* 0 = do not grow (default) */
/* 1 = grow to fill available space */
/* 2 = grow twice as much as items with flex-grow: 1 */

.sidebar { flex-grow: 0; width: 250px; }   /* Fixed width */
.main    { flex-grow: 1; }                  /* Takes remaining space */
```

### `flex-shrink` — Allow Shrinking

```css
/* 1 = shrink when needed (default) */
/* 0 = do not shrink */

.logo { flex-shrink: 0; }  /* Never shrink the logo */
```

### `flex-basis` — Starting Size

```css
.item { flex-basis: 200px; }  /* Start at 200px, then grow/shrink from there */
.item { flex-basis: auto; }   /* Use the item's natural size (default) */
```

### `flex` Shorthand

```css
/* flex: grow  shrink  basis */
.item { flex: 1 1 auto; }   /* Grow and shrink equally from natural size */
.item { flex: 1; }          /* Shorthand for flex: 1 1 0 — equal flexible items */
.item { flex: 0 0 200px; }  /* Fixed at 200px, no grow, no shrink */
```

### `align-self` — Override Cross Axis for One Item

```css
.container {
  display: flex;
  align-items: center;
}

.special {
  align-self: flex-start;  /* This one item aligns to the start */
}
```

### `order` — Reorder Without Changing HTML

```css
.first  { order: -1; }   /* Appears first, regardless of HTML order */
.last   { order: 1; }    /* Appears last */
/* Default order is 0 */
```

---

## Real-World Patterns

### Navigation Bar

```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 64px;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
```

### Card Row That Wraps

```css
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.card {
  flex: 1 1 280px;   /* Grow, shrink, start at 280px minimum */
  /* Cards are at least 280px but grow equally to fill the row */
}
```

### Sidebar + Main Content

```css
.layout {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.sidebar { flex: 0 0 260px; }  /* Fixed 260px, never shrinks */
.content { flex: 1; }          /* Takes all remaining space */
```

### Sticky Footer

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;  /* Grows to push footer to the bottom */
}

footer {
  flex-shrink: 0;
}
```

---

## Quick Reference

### Container

| Property | Does |
|---------|------|
| `display: flex` | Activate flexbox |
| `flex-direction` | `row` (default) or `column` |
| `justify-content` | Main axis alignment |
| `align-items` | Cross axis alignment |
| `flex-wrap: wrap` | Allow items to wrap to next line |
| `gap` | Space between items |

### Items

| Property | Does |
|---------|------|
| `flex-grow` | Allow item to grow |
| `flex-shrink` | Allow item to shrink |
| `flex-basis` | Starting size |
| `flex: 1` | Shorthand for equal flexible sizing |
| `align-self` | Override `align-items` for one item |
| `order` | Change visual order |

---

## 🧪 Exercises

**Exercise 1 — Centre it**

Write CSS to perfectly centre a `.box` both horizontally and vertically inside a `.container` that is 400×400px.

<details>
<summary>Show answer</summary>

```css
.container {
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
```
</details>

---

**Exercise 2 — Navigation bar**

Build a `.navbar` with a logo on the left and links on the right, all vertically centred, with `1rem` gap between links.

<details>
<summary>Show answer</summary>

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.navbar-links {
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
```
</details>

---

**Exercise 3 — Flexible cards**

Create a `.projects-row` where cards start at `300px` wide, wrap to new rows when they do not fit, and grow equally to fill the row.

<details>
<summary>Show answer</summary>

```css
.projects-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.project-card {
  flex: 1 1 300px;
}
```
</details>

---

**Exercise 4 — Sticky footer**

Write CSS using flexbox to ensure the `<footer>` always sits at the bottom of the viewport, even if the page content is short.

<details>
<summary>Show answer</summary>

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}

main {
  flex: 1;
}
```
</details>

---

> **Next:** [Module 15 — CSS Grid →](15-grid.md)
