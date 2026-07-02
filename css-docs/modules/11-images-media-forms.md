# Module 11 — Styling Images, Media & Forms

> **Previous:** [← Module 10 — Overflow & Display](10-overflow-display.md) | **Next:** [Module 12 — Debugging CSS →](12-debugging.md)

---

## Images — Responsive by Default

```css
/* The single most important image rule */
img {
  max-width: 100%;   /* Never wider than its container */
  height: auto;      /* Maintain aspect ratio */
  display: block;    /* Remove mysterious bottom gap (inline whitespace) */
}
```

Put this in your global reset. Every project needs it.

---

## `object-fit` — Control Image Filling

When you set explicit dimensions on an image, it can stretch or squish. `object-fit` controls what happens:

```css
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;     /* Crop to fill — most common for photos */
}

.logo {
  width: 200px;
  height: 80px;
  object-fit: contain;   /* Fit entirely inside — no cropping */
}
```

| Value | Behaviour |
|-------|-----------|
| `cover` | Scales to fill, crops excess — aspect ratio preserved |
| `contain` | Scales to fit entirely — may show gaps |
| `fill` | Stretches to fill — distorts if aspect ratio differs |
| `none` | Original size, clips if bigger than box |

`object-position` works like `background-position` — control which part of the image is shown:

```css
.hero-img {
  object-fit: cover;
  object-position: center top;  /* Show the top of the image */
}
```

---

## `aspect-ratio` for Media Containers

```css
/* Responsive iframe/video wrapper */
.embed-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.embed-wrapper iframe {
  width: 100%;
  height: 100%;
}
```

---

## Styling Form Elements — The Normalisation Problem

Form elements are styled by the OS and browser, not by your CSS. Different browsers render the same `<input>` completely differently. Before styling, you need to normalise.

```css
/* Remove OS styling from inputs, textareas, and selects */
input,
textarea,
select,
button {
  font-family: inherit;  /* Form elements do NOT inherit font by default — fix this */
  font-size: inherit;
  color: inherit;
  -webkit-appearance: none;  /* Remove browser/OS native styling */
  appearance: none;
}
```

---

## Styling Text Inputs

```css
.input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background-color: white;
  font-size: 1rem;
  line-height: 1.5;
  transition: border-color 0.15s, box-shadow 0.15s;
}

.input:focus {
  outline: none;
  border-color: royalblue;
  box-shadow: 0 0 0 3px rgba(65, 105, 225, 0.2);
}

.input:disabled {
  background-color: #f3f4f6;
  cursor: not-allowed;
  opacity: 0.6;
}

.input::placeholder {
  color: #9ca3af;
}
```

---

## Styling Buttons

```css
.btn {
  display: inline-flex;       /* Flexbox for icon+text alignment */
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  background-color: royalblue;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s, transform 0.1s;
}

.btn:hover  { background-color: #2a52be; }
.btn:active { transform: scale(0.98); }
.btn:focus  { outline: 2px solid royalblue; outline-offset: 3px; }

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Secondary button variant */
.btn-outline {
  background-color: transparent;
  border: 2px solid royalblue;
  color: royalblue;
}

.btn-outline:hover {
  background-color: royalblue;
  color: white;
}
```

---

## Styling a Full Form

```css
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin-bottom: 1.25rem;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
}

.form-input {
  /* (same as .input above) */
}

.form-error {
  font-size: 0.75rem;
  color: #ef4444;
}
```

---

## Quick Reference

| Property | Use for |
|---------|---------|
| `max-width: 100%; height: auto` | Responsive images |
| `object-fit: cover` | Fill a box without distortion |
| `object-fit: contain` | Fit inside without cropping |
| `object-position` | Control which part shows when cropping |
| `appearance: none` | Remove OS/browser native form styling |
| `font-family: inherit` | Make form elements inherit the page font |

---

## 🧪 Exercises

**Exercise 1 — Circular avatar**

Write CSS for a `.avatar` that is always a perfect circle, 64×64px, with the image cropped to cover it.

<details>
<summary>Show answer</summary>

```css
.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
```
</details>

---

**Exercise 2 — Focus ring**

Write a focus style for an `.input` that: removes the default outline, shows a `royalblue` border, and adds a soft blue glow ring using `box-shadow`.

<details>
<summary>Show answer</summary>

```css
.input:focus {
  outline: none;
  border-color: royalblue;
  box-shadow: 0 0 0 3px rgba(65, 105, 225, 0.25);
}
```
</details>

---

**Exercise 3 — Ghost button**

Write a `.btn-ghost` variant — transparent background, a `2px` solid border in the current text colour, and fills with text colour on hover (inverting to white text).

<details>
<summary>Show answer</summary>

```css
.btn-ghost {
  background: transparent;
  border: 2px solid currentColor;
  padding: 0.625rem 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.15s, color 0.15s;
}

.btn-ghost:hover {
  background-color: currentColor;
  color: white;
}
```
</details>

---

> **Next:** [Module 12 — Debugging CSS →](12-debugging.md)
