# Module 15 — CSS Grid

> **Previous:** [← Module 14 — Flexbox](14-flexbox.md) | **Next:** [Module 16 — Responsive Design & Media Queries →](16-responsive.md)

---

## Flexbox vs Grid — Which One?

People argue about this. Here is the simple answer:

- **Flexbox** — one dimension at a time. A row of nav links. A column of form fields. Items that flow and wrap.
- **Grid** — two dimensions simultaneously. A page layout. A photo gallery. Anything with rows AND columns.

They work together. Use both. The best layouts usually combine them.

---

## Activating Grid

```css
.container {
  display: grid;
}
```

Grid, like flexbox, is activated on the **container**. Its direct children become **grid items**.

---

## Defining Columns — `grid-template-columns`

```css
/* Three equal columns */
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}

/* Two columns — first fixed, second fills remaining space */
.container {
  grid-template-columns: 300px 1fr;
}

/* Three equal flexible columns */
.container {
  grid-template-columns: 1fr 1fr 1fr;
}

/* Shorthand for the above */
.container {
  grid-template-columns: repeat(3, 1fr);
}

/* Responsive — as many columns as will fit at 250px minimum */
.container {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
```

The `fr` unit means **fraction of the remaining space**. `1fr 2fr` gives you one-third / two-thirds.

---

## Defining Rows — `grid-template-rows`

```css
.container {
  grid-template-rows: 80px 1fr auto;
  /* Row 1: 80px fixed  |  Row 2: fills remaining  |  Row 3: sized by content */
}
```

Usually you let rows size themselves automatically (`auto`). You define columns explicitly and rows flow.

---

## `gap` — Space Between Cells

```css
.container {
  gap: 1.5rem;          /* Equal row and column gap */
  gap: 1rem 2rem;       /* Row gap  Column gap */
  row-gap: 1rem;
  column-gap: 2rem;
}
```

---

## Placing Items — Lines

Grid creates numbered lines automatically. Column lines run vertically, row lines run horizontally. They start at 1 and go to `n + 1` (3 columns = lines 1, 2, 3, 4).

```css
.item {
  grid-column: 1 / 3;   /* Start at column line 1, end at line 3 (spans 2 columns) */
  grid-row: 1 / 2;      /* Start at row line 1, end at line 2 */
}

/* Using span keyword */
.item {
  grid-column: 1 / span 2;   /* Start at line 1, span 2 columns */
  grid-row: span 2;           /* Span 2 rows from wherever it lands */
}

/* Shorthand */
.item {
  grid-area: 1 / 1 / 3 / 3;  /* row-start / col-start / row-end / col-end */
}
```

---

## Named Template Areas — The Most Readable Approach

```css
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

/* Assign items to named areas */
.site-header { grid-area: header; }
.sidebar     { grid-area: sidebar; }
.main        { grid-area: main; }
.site-footer { grid-area: footer; }
```

This is the most readable way to build a full page layout. The ASCII art in `grid-template-areas` directly shows your layout. A `.` is an empty cell.

```css
/* Layout with empty cell */
grid-template-areas:
  "header header"
  "sidebar ."
  "footer  footer";
```

---

## `minmax()` — Flexible but Bounded

```css
.container {
  grid-template-columns: minmax(200px, 1fr) 1fr;
  /* First column: at least 200px, at most 1fr of space */
}
```

Combined with `auto-fill` or `auto-fit`, this is how you make fully responsive grids without media queries:

```css
/* Responsive card grid — no media queries needed */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
```

`auto-fill` creates as many columns as possible at the minimum size. When the viewport narrows, columns drop to the next row automatically.

**`auto-fill` vs `auto-fit`:**
- `auto-fill` — creates columns even if empty (cells stay in the grid)
- `auto-fit` — collapses empty columns so items stretch to fill the space

---

## Alignment in Grid

```css
/* Align all items within their cells */
.container {
  align-items: start;    /* Cross axis — vertical in a row layout */
  justify-items: start;  /* Main axis — horizontal */
  place-items: center;   /* Shorthand: align-items + justify-items */
}

/* Align the entire grid within the container */
.container {
  align-content: start;
  justify-content: center;
  place-content: center;
}

/* Override for a single item */
.item {
  align-self: end;
  justify-self: start;
}
```

---

## Real-World Layouts

### Full Page Layout

```css
body {
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-rows: 64px 1fr auto;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  min-height: 100vh;
}

header  { grid-area: header;  }
.sidebar{ grid-area: sidebar; }
main    { grid-area: main;    }
footer  { grid-area: footer;  }
```

### Photo / Project Gallery

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
}
```

### Feature Grid with a Featured Item

```css
.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.feature--featured {
  grid-column: span 2;  /* Takes up two column widths */
}
```

### Two-Column Article Layout

```css
.article-layout {
  display: grid;
  grid-template-columns: 1fr min(65ch, 100%) 1fr;
}

.article-layout > * {
  grid-column: 2;  /* Content in the middle column */
}

.article-layout .full-bleed {
  grid-column: 1 / -1;  /* Full width — from first to last line */
}
```

The `1fr / content / 1fr` pattern is a modern, elegant way to centre content with automatic margins.

---

## Quick Reference

### Container

| Property | Does |
|---------|------|
| `display: grid` | Activate grid |
| `grid-template-columns` | Define column tracks |
| `grid-template-rows` | Define row tracks |
| `grid-template-areas` | Name areas for readable placement |
| `gap` | Space between all cells |
| `repeat(n, size)` | Repeat a track n times |
| `minmax(min, max)` | Track with min and max bounds |
| `auto-fill` | Fill with as many tracks as fit |
| `fr` | Fraction of remaining space |

### Items

| Property | Does |
|---------|------|
| `grid-column: a / b` | Span from column line a to b |
| `grid-row: a / b` | Span from row line a to b |
| `grid-area: name` | Place in a named template area |
| `span n` | Span n tracks |
| `1 / -1` | From first to last line (full width) |
| `place-self: center` | Centre item within its cell |

---

## 🧪 Exercises

**Exercise 1 — Three-column grid**

Create a `.projects` grid with 3 equal columns and a `1.5rem` gap between cells.

<details>
<summary>Show answer</summary>

```css
.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
```
</details>

---

**Exercise 2 — Responsive gallery**

Build a `.gallery` that automatically creates as many columns as fit at a minimum of `220px` each, with a `1rem` gap.

<details>
<summary>Show answer</summary>

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}
```
</details>

---

**Exercise 3 — Named areas layout**

Build a two-column page layout using `grid-template-areas` with a full-width header, a `280px` sidebar, a main content area, and a full-width footer.

<details>
<summary>Show answer</summary>

```css
.page {
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  min-height: 100vh;
}

.page-header  { grid-area: header; }
.page-sidebar { grid-area: sidebar; }
.page-main    { grid-area: main; }
.page-footer  { grid-area: footer; }
```
</details>

---

**Exercise 4 — Featured card**

You have a `.card-grid` with `repeat(3, 1fr)` columns. Make the first `.card` span all three columns.

<details>
<summary>Show answer</summary>

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.card:first-child {
  grid-column: 1 / -1;  /* From first to last line — full width */
}
```
</details>

---

> **Next:** [Module 16 — Responsive Design & Media Queries →](16-responsive.md)
