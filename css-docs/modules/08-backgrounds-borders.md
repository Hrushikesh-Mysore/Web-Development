# Module 08 — Backgrounds & Borders

> **Previous:** [← Module 07 — Sizing](07-sizing.md) | **Next:** [Module 09 — Text & Font Styling →](09-text-fonts.md)

---

## Background Colour

```css
.hero {
  background-color: #1a1a2e;
}

/* Transparent is the default */
p {
  background-color: transparent;
}

/* Using variables */
.card {
  background-color: var(--color-surface);
}
```

---

## Background Images

```css
.hero {
  background-image: url('images/hero.jpg');

  /* Prevent tiling */
  background-repeat: no-repeat;

  /* Scale to cover the entire area (may crop) */
  background-size: cover;

  /* Scale to fit entirely (may show gaps) */
  background-size: contain;

  /* Explicit size */
  background-size: 400px 200px;

  /* Centre the image */
  background-position: center;

  /* Position specifically */
  background-position: top right;
  background-position: 50% 20%;

  /* Fix the image while the page scrolls (parallax effect) */
  background-attachment: fixed;
}
```

The shorthand:

```css
.hero {
  background: url('hero.jpg') no-repeat center / cover;
  /* url  repeat  position / size */
}
```

---

## Gradients

Gradients are CSS images — they can go anywhere `background-image` can go.

### Linear Gradient

```css
/* Top to bottom (default) */
background: linear-gradient(#1a1a2e, #16213e);

/* Direction using keywords */
background: linear-gradient(to right, #1a1a2e, #16213e);
background: linear-gradient(to bottom right, navy, royalblue);

/* Angle */
background: linear-gradient(135deg, #667eea, #764ba2);

/* Multiple colour stops */
background: linear-gradient(to right, #f093fb, #f5576c, #fda085);

/* Stop positions */
background: linear-gradient(to right, navy 20%, royalblue 80%);
```

### Radial Gradient

```css
/* Circle from centre */
background: radial-gradient(circle, royalblue, navy);

/* Ellipse */
background: radial-gradient(ellipse at top, #1a1a2e, transparent);
```

### Using Gradients for Overlays

```css
/* Image with a dark gradient overlay — great for text readability on photos */
.hero {
  background-image:
    linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.8)),
    url('hero.jpg');
  background-size: cover;
  background-position: center;
}
```

---

## `border`

```css
.card {
  /* Shorthand: width style colour */
  border: 1px solid #e0e0e0;

  /* Individual sides */
  border-top: 3px solid royalblue;
  border-bottom: 1px dashed #ccc;

  /* Individual components */
  border-width: 2px;
  border-style: solid;   /* solid | dashed | dotted | double | none */
  border-color: #333;

  /* Remove a border */
  border: none;
  border-top: none;
}
```

---

## `border-radius` — Rounded Corners

```css
/* All four corners */
.card {
  border-radius: 8px;
}

/* A circle (on a square element) */
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

/* Pill shape */
.badge {
  border-radius: 9999px;  /* Any large number works */
}

/* Individual corners: top-left  top-right  bottom-right  bottom-left */
.tab {
  border-radius: 8px 8px 0 0;
}
```

---

## `box-shadow`

```css
/* x-offset  y-offset  blur  colour */
.card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* Bigger, softer shadow */
.modal {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* No offset — glow effect */
.highlighted {
  box-shadow: 0 0 12px royalblue;
}

/* Inset shadow (inside the element) */
.input:focus {
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
}

/* Multiple shadows — comma separated */
.fancy {
  box-shadow:
    0 1px 3px rgba(0,0,0,0.1),
    0 4px 12px rgba(0,0,0,0.15);
}
```

---

## `outline` vs `border`

```css
/* outline does NOT affect layout — it sits outside the element without taking space */
button:focus {
  outline: 2px solid royalblue;
  outline-offset: 3px;   /* Gap between element edge and outline */
}

/* border DOES affect layout (unless box-sizing: border-box) */
```

Use `outline` for focus styles. Use `border` for decorative edges.

---

## Quick Reference

| Property | Does |
|---------|------|
| `background-color` | Solid fill colour |
| `background-image: url()` | Image as background |
| `background-size: cover` | Scale image to fill, may crop |
| `background-size: contain` | Scale to fit, may show gaps |
| `background-position: center` | Position the background image |
| `background-repeat: no-repeat` | Do not tile the image |
| `linear-gradient()` | Directional colour transition |
| `radial-gradient()` | Circular/elliptical gradient |
| `border: width style color` | Element edge |
| `border-radius` | Round corners |
| `box-shadow: x y blur color` | Drop shadow |
| `outline` | Focus ring — outside the border, no layout impact |

---

## 🧪 Exercises

**Exercise 1 — Hero section**

Write CSS for a `.hero` that is `100vh` tall, uses an image called `hero.jpg` as a background, covers the full area, and is centred.

<details>
<summary>Show answer</summary>

```css
.hero {
  height: 100vh;
  background-image: url('hero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```
</details>

---

**Exercise 2 — Card component**

Create a `.card` with a white background, `1px` solid light grey border, `8px` rounded corners, and a subtle drop shadow.

<details>
<summary>Show answer</summary>

```css
.card {
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
}
```
</details>

---

**Exercise 3 — Gradient button**

Write CSS for a `.btn-gradient` that goes from `#667eea` (left) to `#764ba2` (right), with white text, pill-shaped corners, and a lifted shadow on hover.

<details>
<summary>Show answer</summary>

```css
.btn-gradient {
  background: linear-gradient(to right, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 9999px;
  padding: 0.75rem 2rem;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
  cursor: pointer;
  transition: box-shadow 0.2s;
}

.btn-gradient:hover {
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
}
```
</details>

---

> **Next:** [Module 09 — Text & Font Styling →](09-text-fonts.md)
