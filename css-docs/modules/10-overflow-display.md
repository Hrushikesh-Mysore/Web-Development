# Module 10 — Overflow & Display

> **Previous:** [← Module 09 — Text & Font Styling](09-text-fonts.md) | **Next:** [Module 11 — Styling Images, Media & Forms →](11-images-media-forms.md)

---

## `display` — The Most Important Layout Property

`display` controls how an element participates in the page layout. It is the master switch.

```css
/* Block — full width, starts on new line */
div    { display: block; }

/* Inline — flows in text, no width/height */
span   { display: inline; }

/* Inline-block — flows in text BUT allows width/height */
img    { display: inline-block; }

/* None — completely removed from layout and accessibility tree */
.hidden { display: none; }

/* Flex — activates flexbox on the element's children */
.nav   { display: flex; }

/* Grid — activates grid on the element's children */
.page  { display: grid; }
```

---

## `display: none` vs `visibility: hidden`

```css
/* Removed from layout — takes up no space, not read by screen readers */
.gone { display: none; }

/* Invisible — but still takes up space, still in accessibility tree */
.invisible { visibility: hidden; }

/* Visible to screen readers but hidden visually — best for accessibility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

The `.sr-only` pattern is the gold standard for content that should be accessible but visually hidden (like "skip to main content" links).

---

## `overflow`

```css
.box {
  overflow: visible;  /* Default — content spills outside */
  overflow: hidden;   /* Clips at the boundary */
  overflow: scroll;   /* Always shows scrollbars */
  overflow: auto;     /* Scrollbars only when content overflows */
}

/* Control axes separately */
.table-wrapper {
  overflow-x: auto;   /* Horizontal scroll if table is too wide */
  overflow-y: visible;
}
```

---

## `white-space`

```css
/* Default — wraps at whitespace, collapses multiple spaces */
p { white-space: normal; }

/* Never wraps — content overflows if too long */
.nowrap { white-space: nowrap; }

/* Preserves whitespace and newlines exactly (like <pre>) */
.code  { white-space: pre; }

/* Preserves whitespace but wraps */
.verse { white-space: pre-wrap; }
```

---

## Quick Reference

| Value | Behaviour |
|-------|-----------|
| `display: block` | Full width, new line |
| `display: inline` | Flows in text, no sizing |
| `display: inline-block` | Flows in text, allows sizing |
| `display: none` | Removed from layout and screen readers |
| `display: flex` | Enables Flexbox on children |
| `display: grid` | Enables Grid on children |
| `visibility: hidden` | Invisible but keeps space |
| `overflow: hidden` | Clips overflowing content |
| `overflow: auto` | Scroll only when needed |

---

## 🧪 Exercises

**Exercise 1 — Show and hide**

What is the difference between `display: none` and `visibility: hidden`? When would you use each?

<details>
<summary>Show answer</summary>

`display: none` removes the element from layout entirely — it takes no space and screen readers skip it. Use it to fully hide something.

`visibility: hidden` makes the element invisible but it still occupies its space in the layout. Use it when you want to hide something without causing layout shifts (like a placeholder in a grid).
</details>

---

**Exercise 2 — Inline-block nav**

Write CSS to make `.nav-link` elements sit side by side (inline), but allow `padding` to be set on all sides.

<details>
<summary>Show answer</summary>

```css
.nav-link {
  display: inline-block;
  padding: 0.5rem 1rem;
}
```
</details>

---

**Exercise 3 — Scrollable table**

Wrap a wide table so it scrolls horizontally on small screens without breaking the page layout.

<details>
<summary>Show answer</summary>

```css
.table-wrapper {
  overflow-x: auto;
  width: 100%;
}
```

Then in HTML:
```html
<div class="table-wrapper">
  <table>...</table>
</div>
```
</details>

---

> **Next:** [Module 11 — Styling Images, Media & Forms →](11-images-media-forms.md)
