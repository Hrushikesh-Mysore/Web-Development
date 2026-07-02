# Module 13 — Positioning

> **Previous:** [← Module 12 — Debugging CSS](12-debugging.md) | **Next:** [Module 14 — Flexbox →](14-flexbox.md)

---

## Normal Flow

By default, every element sits in **normal flow** — block elements stack vertically, inline elements flow horizontally. `position` lets you step outside normal flow and place elements exactly where you want them.

---

## The Five Position Values

### `static` — Default

```css
.element { position: static; }  /* This is the default — no positioning */
```

Elements in normal flow. `top`, `right`, `bottom`, `left`, and `z-index` have no effect.

---

### `relative` — Offset From Normal Position

```css
.element {
  position: relative;
  top: 10px;    /* Move 10px down from where it would normally be */
  left: 20px;   /* Move 20px right */
}
```

The element stays in normal flow — its original space is preserved. It is shifted visually. Useful for:
- Small visual nudges
- Creating a **positioning context** for absolutely positioned children

---

### `absolute` — Removed From Flow, Placed in Parent

```css
.parent {
  position: relative;  /* Creates the positioning context */
}

.tooltip {
  position: absolute;
  top: 100%;    /* Below the parent's bottom edge */
  left: 0;      /* Aligned to parent's left edge */
}
```

The element is removed from normal flow — surrounding elements behave as if it does not exist. It is positioned relative to its **nearest positioned ancestor** (an ancestor with `position` other than `static`).

If no positioned ancestor exists, it positions relative to the `<html>` element.

**Common uses:**
- Tooltips and dropdowns
- Badges on avatar images
- Overlay labels on cards
- Icon positioning inside inputs

---

### `fixed` — Stuck to the Viewport

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
```

Removed from normal flow. Positioned relative to the **viewport** — it stays in place even as the user scrolls. Classic for sticky navigation bars and floating action buttons.

---

### `sticky` — Scroll Until You Hit a Wall

```css
.table-header {
  position: sticky;
  top: 0;         /* Sticks to the top of the scrolling container */
  background: white;
  z-index: 10;
}

.sidebar {
  position: sticky;
  top: 2rem;      /* Sticks 2rem from the top when the page scrolls */
  align-self: start;  /* Needed when inside a flex/grid container */
}
```

Stays in normal flow until the user scrolls it to the specified threshold — then it "sticks" and behaves like `fixed` until its parent scrolls out of view.

**Common uses:**
- Sticky table headers
- Sticky sidebar navigation
- Sticky section headings

> **Gotcha:** `sticky` stops working if any ancestor has `overflow: hidden` or `overflow: auto`. Check parent elements if sticky is not working.

---

## `top`, `right`, `bottom`, `left`

These properties control position offset. They work differently depending on the `position` value:

| Position value | Offsets are relative to |
|---------------|------------------------|
| `relative` | Element's original position |
| `absolute` | Nearest positioned ancestor |
| `fixed` | Viewport |
| `sticky` | Scroll container |

```css
/* Position at the bottom-right corner of a positioned parent */
.badge {
  position: absolute;
  bottom: 0;
  right: 0;
}

/* Centre an absolutely positioned element */
.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  /* Pull back by half the element's own size */
}
```

---

## `z-index` — Layering

When elements overlap, `z-index` controls which one is on top. Higher numbers are in front.

```css
.modal-backdrop { z-index: 50; }
.modal          { z-index: 100; }
.tooltip        { z-index: 200; }
```

Rules:
- Only works on positioned elements (`position` is not `static`)
- Elements with the same parent are compared directly
- **Stacking contexts** — some CSS properties create isolated stacking contexts (`opacity < 1`, `transform`, `filter`, `isolation: isolate`) — `z-index` inside a stacking context is independent of `z-index` outside it

---

## Practical Pattern — Card with Badge

```css
.card {
  position: relative;  /* Positioning context */
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

.card-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: royalblue;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}
```

---

## Quick Reference

| Value | In flow? | Positioned relative to |
|-------|----------|----------------------|
| `static` | Yes | N/A (not positioned) |
| `relative` | Yes | Its own normal position |
| `absolute` | No | Nearest positioned ancestor |
| `fixed` | No | Viewport |
| `sticky` | Yes (until threshold) | Scroll container |

---

## 🧪 Exercises

**Exercise 1 — Sticky nav**

Write CSS for a `.site-nav` that sticks to the top of the page as the user scrolls, with a white background and a shadow for depth. Use `z-index: 100`.

<details>
<summary>Show answer</summary>

```css
.site-nav {
  position: sticky;
  top: 0;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  z-index: 100;
}
```
</details>

---

**Exercise 2 — Notification badge**

Create a `.notification-badge` positioned at the top-right corner of a `.icon-btn`. The badge should be a 20×20px circle.

<details>
<summary>Show answer</summary>

```css
.icon-btn {
  position: relative;
  display: inline-block;
}

.notification-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 20px;
  height: 20px;
  background: red;
  color: white;
  border-radius: 50%;
  font-size: 0.625rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
```
</details>

---

**Exercise 3 — Centred modal overlay**

Write CSS for a `.modal` that is:
- Fixed to the viewport
- Exactly centred horizontally and vertically
- 500px wide, auto height
- Has a dark semi-transparent backdrop behind it

<details>
<summary>Show answer</summary>

```css
.modal-backdrop {
  position: fixed;
  inset: 0;  /* top:0 right:0 bottom:0 left:0 */
  background: rgba(0, 0, 0, 0.5);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: white;
  border-radius: 12px;
  width: 500px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  z-index: 100;
}
```
</details>

---

> **Next:** [Module 14 — Flexbox →](14-flexbox.md)
