# Module 05 — The Box Model

> **Previous:** [← Module 04 — Cascade, Specificity & Inheritance](04-cascade.md) | **Next:** [Module 06 — Values & Units →](06-values-units.md)

---

## Everything is a Box

This is the one concept that unlocks CSS layout. Every single HTML element — text, image, button, heading, paragraph, the entire page — is a rectangular box. CSS controls the size and spacing of those boxes.

The box model defines how that rectangle is made up of four layers, from inside to outside:

```
┌─────────────────────────────────┐
│           MARGIN                │  ← Transparent space outside the border
│  ┌───────────────────────────┐  │
│  │         BORDER            │  │  ← The visible edge (if any)
│  │  ┌─────────────────────┐  │  │
│  │  │      PADDING        │  │  │  ← Space between content and border
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │    CONTENT    │  │  │  │  ← The actual text, image, etc.
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

---

## The Four Layers

### Content
The actual content — text, image, whatever is inside the element. Controlled by `width` and `height`.

### Padding
Space between the content and the border. Padding is **inside** the element — it gets the element's background colour.

```css
p {
  padding: 20px;                    /* All four sides */
  padding: 10px 20px;               /* Top/bottom  Left/right */
  padding: 10px 20px 15px 25px;     /* Top  Right  Bottom  Left */

  /* Individual sides */
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 15px;
  padding-left: 25px;
}
```

### Border
The visible edge of the element. Between padding and margin.

```css
div {
  border: 2px solid #333;           /* Shorthand: width  style  colour */
  border-top: 3px dashed red;       /* One side only */
  border-radius: 8px;               /* Round the corners */
}
```

Border styles: `solid`, `dashed`, `dotted`, `double`, `none`

### Margin
Space **outside** the border — separates this element from neighbours. Transparent (takes the background colour of the parent, not the element itself).

```css
p {
  margin: 16px;                     /* All four sides */
  margin: 0 auto;                   /* Top/bottom 0  Left/right auto (centres element) */
  margin-bottom: 1rem;              /* One side only */
}
```

---

## `box-sizing` — The Crucial Property

Here is the trap. By default, `width` and `height` in CSS only set the **content** area. Padding and border are added **on top**.

```css
/* Default behaviour — content-box */
.box {
  width: 300px;
  padding: 20px;
  border: 2px solid black;
}
/* Total rendered width = 300 + 20 + 20 + 2 + 2 = 344px */
/* Not 300px. This drives everyone crazy. */
```

The fix — `border-box`:

```css
.box {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 2px solid black;
}
/* Total rendered width = 300px exactly */
/* Padding and border are included in the width, not added to it */
```

With `border-box`, when you say something is `300px` wide, it is `300px` wide. Always. Full stop.

**This is so universally useful that every real-world project starts with this reset:**

```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

Put this at the very top of every stylesheet you ever write. You are welcome.

---

## Margin Collapsing — The Surprise

Margins between block elements collapse. When two vertical margins meet, the larger one wins instead of adding them together.

```css
h2 { margin-bottom: 24px; }
p  { margin-top: 16px; }
```

The gap between an `<h2>` and a `<p>` is **24px**, not 40px. The two margins collapse into one — the larger one.

### When does margin collapsing happen?

1. **Adjacent siblings** — the bottom margin of one element and the top margin of the next
2. **Parent and first/last child** — if there is no border, padding, or content between a parent's top margin and its child's top margin
3. **Empty blocks** — an element with no content, padding, or border has its top and bottom margins collapse into each other

### When does it NOT happen?

- Flexbox and Grid children — margins do not collapse in these contexts
- Elements with `overflow` set to something other than `visible`
- Inline-block elements

---

## Inspecting the Box Model in DevTools

Open DevTools → select any element → look at the **"box model" diagram** at the bottom of the Styles panel (or in the Computed tab). It shows the exact content, padding, border, and margin values as a nested diagram — exactly like the ASCII art at the top of this module.

This is the fastest way to diagnose spacing problems.

---

## Block vs Inline Box Behaviour

The box model behaves differently depending on whether an element is block or inline:

**Block elements** (`<div>`, `<p>`, `<h1>`, `<section>`, etc.):
- Take up the full width available
- Start on a new line
- `width`, `height`, all `margin`, all `padding` work as expected

**Inline elements** (`<span>`, `<a>`, `<strong>`, `<em>`, etc.):
- Take up only as much width as their content
- Flow in the text
- `width` and `height` have no effect
- Vertical margin (`margin-top`, `margin-bottom`) has no effect
- Horizontal margin and all padding do work

**`display: inline-block`** — the best of both worlds:
- Flows in the text like inline
- But `width`, `height`, and vertical margin work

```css
/* Make nav links sit side by side, but allow width/height */
.nav-link {
  display: inline-block;
  padding: 0.5rem 1rem;
}
```

---

## Quick Reference

| Property | Controls |
|----------|---------|
| `width` / `height` | Content area dimensions (or full box with `border-box`) |
| `padding` | Space inside the border |
| `border` | The element's edge |
| `margin` | Space outside the border |
| `box-sizing: border-box` | Include padding+border in `width`/`height` |
| `box-sizing: content-box` | Default — padding+border are added to `width`/`height` |
| `margin: 0 auto` | Centre a block element horizontally |

---

## 🧪 Exercises

**Exercise 1 — Calculate the total size**

Given this CSS, what is the total rendered width of `.card` in `content-box` mode?

```css
.card {
  width: 400px;
  padding: 20px;
  border: 4px solid black;
  margin: 10px;
}
```

<details>
<summary>Show answer</summary>

In `content-box` mode (the default):
- Content: 400px
- Padding: 20px left + 20px right = 40px
- Border: 4px left + 4px right = 8px
- **Total rendered width = 400 + 40 + 8 = 448px**

The margin (10px each side) is space outside the element — it does not count toward the element's own rendered size.
</details>

---

**Exercise 2 — Fix it with border-box**

Rewrite the rule above so that `.card` renders at exactly `400px` wide (including padding and border).

<details>
<summary>Show answer</summary>

```css
.card {
  box-sizing: border-box;
  width: 400px;
  padding: 20px;
  border: 4px solid black;
  margin: 10px;
}
```

Now the 400px includes padding and border. The content area will be `400 - 40 - 8 = 352px`, but the overall element is exactly `400px`.
</details>

---

**Exercise 3 — Margin collapsing**

Two paragraphs are stacked. The first has `margin-bottom: 24px`. The second has `margin-top: 32px`. What is the actual gap between them?

<details>
<summary>Show answer</summary>

**32px.** Vertical margins between adjacent block siblings collapse — the larger value wins. `24px` and `32px` collapse to `32px`, not `56px`.
</details>

---

**Exercise 4 — Centring a box**

Write CSS to make a `<div class="container">` exactly `800px` wide and centred horizontally on the page.

<details>
<summary>Show answer</summary>

```css
.container {
  width: 800px;
  margin: 0 auto;
}
```

`margin: 0 auto` sets top and bottom margin to `0`, and left and right margin to `auto`. Auto margins split the available space equally on both sides, centering the element. This only works on block elements with a set `width`.
</details>

---

> **Next:** [Module 06 — Values & Units →](06-values-units.md)
