# Module 12 — Debugging CSS

> **Previous:** [← Module 11 — Styling Images, Media & Forms](11-images-media-forms.md) | **Next:** [Module 13 — Positioning →](13-positioning.md)

---

## CSS Does Not Crash — It Just Ignores You

CSS has no error console. When something goes wrong, nothing explodes — the browser silently ignores invalid or overridden rules and moves on. That makes debugging feel like detective work.

The good news: once you know the right tools and know where to look, CSS bugs are almost always fast to fix.

---

## The DevTools Styles Panel — Your Main Tool

Open DevTools (`F12`) → click any element → look at the **Styles** panel on the right.

What you can see and do:

**Crossed-out declarations** — a strikethrough means a rule is being overridden. Hover over it to see which rule won.

**Source links** — each rule shows the filename and line number. Click it to jump to that line in the Sources panel.

**Live editing** — click any value and type a new one. The page updates instantly. Use this for testing changes without touching your file.

**Add new declarations** — click the empty space inside any rule block to add a new property/value. Temporary, but great for experimenting.

**Checkbox toggle** — click the checkbox next to any declaration to toggle it on/off.

---

## The Computed Tab

The Computed tab shows the **final resolved value** of every property after all cascade and inheritance rules are applied.

Use it when:
- You cannot tell why a property has an unexpected value
- You want to know the exact pixel value of something in `rem` or `%`
- You want to see whether a property is set directly or inherited

Click the arrow next to any computed value to see which rule produced it.

---

## The Box Model Diagram

In the Styles or Computed panel, there is a box model diagram showing the actual calculated values for content, padding, border, and margin. Hover over each section and the corresponding area highlights on the page.

Use this when spacing looks wrong and you cannot find why.

---

## Common CSS Bugs and Their Fixes

### 1. "My style is not applying"

Check in this order:
- Is the selector correct? Use DevTools to inspect the element and check.
- Is the stylesheet linked correctly? Open the Network tab and confirm the CSS file loaded (200 status).
- Is a more specific rule overriding it? Look for a strikethrough in the Styles panel.
- Is `!important` involved somewhere?
- Did you make a typo in the property name or value? CSS silently ignores invalid values.

### 2. Unexpected extra space around elements

```css
/* Images have a small gap below them by default — they are inline */
img {
  display: block;  /* Fix: make them block */
}

/* Or — remove the gap without changing display */
img {
  vertical-align: bottom;
}
```

### 3. Margin not working as expected

Vertical margins between block elements **collapse**. Use padding instead, or switch to flexbox/grid (which do not collapse margins).

### 4. Element not filling its parent width

The element might be `display: inline`. Inline elements only take as much space as their content. Set `display: block` or `display: inline-block`.

### 5. Height: 100% not working

`height: 100%` requires the parent to also have an explicit height. A chain of `height: 100%` must go all the way up to `<html>` and `<body>`.

```css
html, body {
  height: 100%;
}

.wrapper {
  height: 100%;
}
```

Or use `min-height: 100vh` on the body — simpler.

### 6. Overflow: hidden not clipping children

If child elements are absolutely positioned, `overflow: hidden` on the parent will not clip them unless the parent is also positioned (`position: relative`).

### 7. `z-index` not working

`z-index` only works on **positioned elements** (`position: relative`, `absolute`, `fixed`, or `sticky`). An element with `position: static` (the default) will not respond to `z-index`.

---

## The Validation Shortcut

Paste your CSS into the W3C CSS Validator:

🔗 [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/)

It catches typos, invalid values, and unknown properties.

---

## A Debugging Checklist

When something is not working:

- [ ] Open DevTools and inspect the element
- [ ] Is the selector targeting the right element?
- [ ] Is the property shown in the Styles panel at all?
- [ ] If shown — is it crossed out? Which rule overrides it?
- [ ] Check the Computed tab for the actual resolved value
- [ ] Check the box model diagram for unexpected spacing
- [ ] Validate the CSS if you suspect a typo

---

## 🧪 Exercises

**Exercise 1 — Diagnosis**

A developer set `z-index: 100` on a `.tooltip` but it is still behind other elements. What is the most likely cause?

<details>
<summary>Show answer</summary>

`.tooltip` probably has `position: static` (the default). `z-index` is ignored on static elements. The fix: add `position: relative` (or `absolute`, `fixed`, `sticky`) to `.tooltip`.

```css
.tooltip {
  position: relative;  /* or absolute, depending on use case */
  z-index: 100;
}
```
</details>

---

**Exercise 2 — The image gap**

An `<img>` inside a `.card` has a small white gap below it even though `margin` and `padding` are both `0`. What causes it, and how do you fix it?

<details>
<summary>Show answer</summary>

Images are `display: inline` by default. Inline elements sit on the text baseline, leaving a small gap below for descenders (letters like g, y, p that extend below the line). Fix:

```css
img {
  display: block;
}

/* Or: */
img {
  vertical-align: bottom;
}
```
</details>

---

**Exercise 3 — Why is my style ignored?**

This rule should make `.btn` have a red background, but it does not work:

```css
.btn {
  background-colour: red;
}
```

<details>
<summary>Show answer</summary>

`background-colour` is not a valid CSS property. CSS uses American English: `background-color`. CSS silently ignores invalid property names without any error.

Fixed:
```css
.btn {
  background-color: red;
}
```
</details>

---

> **Next:** [Module 13 — Positioning →](13-positioning.md)
