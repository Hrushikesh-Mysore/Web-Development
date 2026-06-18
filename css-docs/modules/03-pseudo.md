# Module 03 — Pseudo-classes & Pseudo-elements

> **Previous:** [← Module 02 — Selectors](02-selectors.md) | **Next:** [Module 04 — Cascade, Specificity & Inheritance →](04-cascade.md)

---

## Two Different Concepts, Similar Syntax

**Pseudo-classes** target elements in a particular *state* — hovered, focused, first in a list, checked.  
**Pseudo-elements** target a *part* of an element — the first line, the first letter, or a generated piece of content.

Pseudo-classes use a **single colon**: `:hover`  
Pseudo-elements use a **double colon**: `::before`

---

## Pseudo-classes — Element States

### User Interaction States

These are the ones you will use every single day:

```css
/* Mouse is hovering over the element */
a:hover {
  color: hotpink;
  text-decoration: underline;
}

/* Element has keyboard focus (Tab key, or click) */
input:focus {
  outline: 2px solid royalblue;
  outline-offset: 2px;
}

/* Link has been visited */
a:visited {
  color: purple;
}

/* Element is being actively clicked */
button:active {
  transform: scale(0.98);
}
```

> **Accessibility note:** Never remove `:focus` outlines without replacing them. Users who navigate with a keyboard depend on focus styles to know where they are on the page. The browser default is fine; styling it to match your design is better.

### Form States

```css
/* Input passes validation */
input:valid {
  border-color: green;
}

/* Input fails validation */
input:invalid {
  border-color: red;
}

/* Required field */
input:required {
  border-left: 3px solid orange;
}

/* Checkbox or radio that is checked */
input:checked + label {
  font-weight: bold;
}

/* Input or button that is disabled */
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Input that is not disabled */
input:enabled {
  background: white;
}

/* Input that has no value yet (placeholder shown) */
input:placeholder-shown {
  border-style: dashed;
}
```

### Structural / Position Pseudo-classes

Target elements based on where they sit among their siblings:

```css
/* First child of its parent */
li:first-child {
  font-weight: bold;
}

/* Last child of its parent */
li:last-child {
  border-bottom: none;
}

/* Every even-numbered child (2, 4, 6...) */
tr:nth-child(even) {
  background-color: #f5f5f5;
}

/* Every odd-numbered child (1, 3, 5...) */
tr:nth-child(odd) {
  background-color: white;
}

/* Specific numbered child — the 3rd */
li:nth-child(3) {
  color: red;
}

/* Every 3rd item starting from the 1st (1, 4, 7...) */
li:nth-child(3n+1) {
  color: blue;
}

/* Only child — no siblings */
p:only-child {
  font-style: italic;
}

/* First of a type within parent */
p:first-of-type {
  font-size: 1.1rem;
}

/* Last of a type */
p:last-of-type {
  margin-bottom: 0;
}
```

### `:not()` — The Negation Pseudo-class

```css
/* Every <p> except those with class "special" */
p:not(.special) {
  color: #333;
}

/* Every input except submit buttons */
input:not([type="submit"]) {
  border: 1px solid #ccc;
}

/* Every li except the last one */
li:not(:last-child) {
  border-bottom: 1px solid #eee;
}
```

`:not()` is incredibly useful. It reads naturally and avoids writing two rules just to exclude one case.

---

## Pseudo-elements — Parts of Elements

Pseudo-elements let you style a part of an element as if it were a separate element — without adding anything to your HTML.

### `::before` and `::after` — Generated Content

```css
/* Insert content before every <blockquote> */
blockquote::before {
  content: '"';
  font-size: 3rem;
  color: #ccc;
}

/* Add an icon after every external link */
a[href^="https"]::after {
  content: ' ↗';
  font-size: 0.8em;
}

/* Classic decorative divider */
.section-title::after {
  content: '';
  display: block;
  width: 3rem;
  height: 3px;
  background: royalblue;
  margin-top: 0.5rem;
}
```

Key rules:
- They require a `content` property — even if it is empty (`content: ''`)
- They are inline by default; set `display: block` for layout use
- They are not in the HTML source — screen readers may or may not announce them

### `::first-line` and `::first-letter`

```css
/* Style only the first line of a paragraph */
p::first-line {
  font-weight: bold;
  color: #111;
}

/* Classic drop cap */
p::first-letter {
  font-size: 3rem;
  font-weight: bold;
  float: left;
  line-height: 1;
  margin-right: 0.15rem;
}
```

### `::placeholder` — Style Input Placeholder Text

```css
input::placeholder {
  color: #999;
  font-style: italic;
}
```

### `::selection` — Style Highlighted Text

```css
::selection {
  background-color: royalblue;
  color: white;
}
```

When the user selects/highlights text, it uses these colours instead of the browser default blue.

---

## Combining Pseudo-classes and Pseudo-elements

```css
/* The first letter of the first paragraph only */
p:first-of-type::first-letter {
  font-size: 2.5rem;
  font-weight: bold;
}

/* ::before on a hovered element */
.nav-link:hover::before {
  content: '→ ';
}

/* An input that is focused and valid */
input:focus:valid {
  border-color: green;
  outline-color: green;
}
```

---

## Quick Reference

### Pseudo-classes

| Pseudo-class | What it targets |
|-------------|----------------|
| `:hover` | Element under the mouse cursor |
| `:focus` | Element with keyboard/click focus |
| `:active` | Element being clicked |
| `:visited` | Visited links |
| `:checked` | Checked checkboxes/radios |
| `:disabled` / `:enabled` | Disabled/enabled form elements |
| `:valid` / `:invalid` | Form fields passing/failing validation |
| `:required` | Required form fields |
| `:first-child` / `:last-child` | First/last sibling |
| `:nth-child(n)` | nth sibling (even, odd, or formula) |
| `:first-of-type` / `:last-of-type` | First/last of element type among siblings |
| `:not(selector)` | Anything that does NOT match the selector |
| `:placeholder-shown` | Input with placeholder visible |

### Pseudo-elements

| Pseudo-element | What it targets |
|---------------|----------------|
| `::before` | Generated content before element |
| `::after` | Generated content after element |
| `::first-line` | First rendered line of text |
| `::first-letter` | First letter of text |
| `::placeholder` | Input placeholder text |
| `::selection` | User-selected (highlighted) text |

---

## 🧪 Exercises

**Exercise 1 — Hover and focus**

Write CSS that:
- Turns all `<button>` elements blue on hover
- Gives all `<input>` elements a solid blue outline on focus (no box-shadow)

<details>
<summary>Show answer</summary>

```css
button:hover {
  background-color: royalblue;
  color: white;
}

input:focus {
  outline: 2px solid royalblue;
  outline-offset: 2px;
}
```
</details>

---

**Exercise 2 — Zebra striping**

You have a table with `<tr>` rows. Write CSS to give every even row a light grey background (`#f5f5f5`).

<details>
<summary>Show answer</summary>

```css
tr:nth-child(even) {
  background-color: #f5f5f5;
}
```
</details>

---

**Exercise 3 — `::before` decoration**

Use `::before` to add a solid coloured square (a visual bullet point) before every `.feature-item` element. The square should be 10px × 10px and deep blue.

<details>
<summary>Show answer</summary>

```css
.feature-item::before {
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #0a1628;
  margin-right: 8px;
  vertical-align: middle;
}
```
</details>

---

**Exercise 4 — `:not()` in action**

You have a `.nav-link` class on all navigation links. One of them has an additional class `.active`. Write CSS to:
- Give all nav links grey text
- Give the active link dark navy text
- Add an underline to all nav links *except* the active one

<details>
<summary>Show answer</summary>

```css
.nav-link {
  color: #666;
  text-decoration: underline;
}

.nav-link.active {
  color: #0a1628;
}

.nav-link:not(.active) {
  text-decoration: underline;
}

/* Or more cleanly: */
.nav-link.active {
  color: #0a1628;
  text-decoration: none;
}
```
</details>

---

> **Next:** [Module 04 — Cascade, Specificity & Inheritance →](04-cascade.md)
