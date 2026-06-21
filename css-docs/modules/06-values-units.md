# Module 06 — Values & Units

> **Previous:** [← Module 05 — The Box Model](05-box-model.md) | **Next:** [Module 07 — Sizing →](07-sizing.md)

---

## Why Units Matter

In CSS, a number without a unit means nothing. `font-size: 18` is invalid. `font-size: 18px` works. Choosing the *right* unit is what separates brittle pixel-perfect layouts from flexible, scalable designs.

---

## Absolute Units

Fixed — do not change based on anything else.

| Unit | What it is | Use it for |
|------|-----------|-----------|
| `px` | One CSS pixel | Borders, fine details, media query breakpoints |
| `pt` | 1/72 of an inch | Print stylesheets only |
| `cm`, `mm` | Centimetres, millimetres | Print only |

`px` is the only absolute unit you will use regularly on screen.

---

## Relative Units — The Good Stuff

Relative units scale based on something else — the parent, the root, the viewport. This is how you make designs that adapt.

### `em` — Relative to the Current Element's Font Size

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 1.5em;  /* 1.5 × 20px = 30px */
  padding: 1em;      /* 1 × 30px = 30px (current element's font-size) */
}
```

The confusing part: for `font-size`, `em` is relative to the **parent's** font size. For other properties (`padding`, `margin`, etc.), `em` is relative to the **element's own** font size.

`em` values compound when nested — a child of the child would calculate from the child's 30px, not the root 20px. This can get messy fast.

**Use `em` for:** Component-level spacing that should scale with the component's own text size.

### `rem` — Relative to the Root Font Size

```css
:root {
  font-size: 16px;  /* This is the root — or the browser's default of 16px */
}

h1 { font-size: 3rem; }    /* 3 × 16px = 48px — always */
p  { font-size: 1rem; }    /* 1 × 16px = 16px — always */
.small { font-size: 0.875rem; }  /* 14px — always */
```

`rem` is always relative to the root `<html>` font size. It does not compound. It is predictable. This makes `rem` the preferred unit for font sizes in modern CSS.

**Use `rem` for:** Font sizes, and spacing that should scale consistently across the whole design.

### `%` — Percentage of the Parent

```css
.container {
  width: 90%;        /* 90% of the parent element's width */
  max-width: 1200px;
}

p {
  font-size: 120%;   /* 120% of the parent's font size */
}
```

**Use `%` for:** Widths that should adapt to their container.

### Viewport Units

```css
.hero {
  height: 100vh;     /* 100% of the viewport height */
  width: 100vw;      /* 100% of the viewport width */
}

h1 {
  font-size: 5vw;    /* 5% of viewport width — scales with the window */
}

.sidebar {
  width: 25vw;
}
```

| Unit | Meaning |
|------|---------|
| `vw` | 1% of the viewport width |
| `vh` | 1% of the viewport height |
| `vmin` | 1% of the smaller viewport dimension |
| `vmax` | 1% of the larger viewport dimension |
| `dvh` | 1% of the dynamic viewport height (accounts for mobile browser UI) |

> **Mobile tip:** On mobile, `100vh` can include the browser's address bar, causing overflow. Prefer `100dvh` (dynamic viewport height) for full-screen sections.

---

## Colour Values

CSS has several ways to specify colours. All are valid — choose what is clearest.

### Keywords

```css
color: red;
color: navy;
color: transparent;
color: currentColor;  /* inherits the element's current color value */
```

There are 148 named colours. `currentColor` is the most useful keyword — it always equals whatever `color` is currently set to.

### Hex

```css
color: #ff0000;    /* Red — full hex */
color: #f00;       /* Red — shorthand (when both digits in each pair are the same) */
color: #ff000080;  /* Red at 50% opacity — 8-digit hex */
```

### RGB and RGBA

```css
color: rgb(255, 0, 0);          /* Red */
color: rgb(255 0 0);            /* Modern syntax — no commas */
color: rgba(255, 0, 0, 0.5);   /* Red at 50% opacity */
color: rgb(255 0 0 / 50%);     /* Modern syntax */
```

### HSL — The Most Human-Readable

```css
/* hsl(hue, saturation, lightness) */
color: hsl(0, 100%, 50%);       /* Red */
color: hsl(240, 100%, 50%);     /* Blue */
color: hsl(120, 50%, 40%);      /* Dark muted green */
color: hsl(0 100% 50% / 50%);  /* Red at 50% opacity */
```

HSL is the easiest to reason about when designing:
- Hue: 0–360 degrees on the colour wheel (0 = red, 120 = green, 240 = blue)
- Saturation: 0% = grey, 100% = full colour
- Lightness: 0% = black, 50% = full colour, 100% = white

**Want a lighter version of your brand colour?** Increase the lightness. Darker? Decrease it. Keep hue and saturation the same.

---

## Numeric Values Without Units

Some CSS properties take plain numbers with no unit:

```css
line-height: 1.5;      /* Multiplier of the font size — preferred over px */
opacity: 0.8;           /* 0 = invisible, 1 = fully visible */
z-index: 10;            /* Layer stacking order */
flex-grow: 1;           /* Flex proportion */
```

`line-height: 1.5` means "1.5 times the current font size". If the font is 16px, the line height is 24px. This unitless form is preferred for `line-height` because it scales correctly if the font size changes.

---

## CSS Custom Properties (Variables)

```css
:root {
  --color-primary: hsl(220, 90%, 50%);
  --color-text: hsl(220, 10%, 20%);
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --font-size-base: 1rem;
  --border-radius: 6px;
}

button {
  background-color: var(--color-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius);
}

/* Fallback value if variable is not defined */
p {
  color: var(--color-text, #333);
}
```

CSS variables (custom properties):
- Are declared with `--` prefix
- Are accessed with `var()`
- Cascade and inherit like normal properties
- Can be overridden in specific contexts
- Are live — changing a variable with JavaScript updates all elements using it

---

## Quick Reference

| Unit | Relative to | Best for |
|------|------------|---------|
| `px` | Absolute | Borders, shadows, breakpoints |
| `rem` | Root font size | Font sizes, consistent spacing |
| `em` | Current font size | Component-relative spacing |
| `%` | Parent element | Widths, responsive sizing |
| `vw` | Viewport width | Full-width layouts, fluid type |
| `vh` | Viewport height | Full-height sections |
| `dvh` | Dynamic viewport height | Mobile full-height sections |

---

## 🧪 Exercises

**Exercise 1 — Calculate the values**

The root font size is `16px`. What is the computed pixel value of:

a) `font-size: 2rem`  
b) `font-size: 0.875rem`  
c) `padding: 1.5rem`  
d) `width: 50%` on an element inside a 960px container  

<details>
<summary>Show answer</summary>

a) `2 × 16px = 32px`  
b) `0.875 × 16px = 14px`  
c) `1.5 × 16px = 24px`  
d) `50% × 960px = 480px`  
</details>

---

**Exercise 2 — Colour in HSL**

Write an HSL colour for:

a) A vivid red  
b) A muted grey-blue  
c) Black  
d) White  

<details>
<summary>Show answer</summary>

```css
/* a — vivid red */
color: hsl(0, 100%, 50%);

/* b — muted grey-blue */
color: hsl(220, 20%, 50%);

/* c — black */
color: hsl(0, 0%, 0%);

/* d — white */
color: hsl(0, 0%, 100%);
```
</details>

---

**Exercise 3 — Set up CSS variables**

Create a `:root` block with variables for a simple design system: one primary colour, one text colour, three spacing sizes (small/medium/large), and a base font size.

<details>
<summary>Show answer</summary>

```css
:root {
  --color-primary: hsl(220, 85%, 50%);
  --color-text: hsl(220, 15%, 20%);

  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;

  --font-base: 1rem;
}
```
</details>

---

**Exercise 4 — Which unit?**

What unit would you choose for:

a) A full-height hero section  
b) Body text font size  
c) A 1px border  
d) A container that is 80% of its parent  
e) Line height for a paragraph  

<details>
<summary>Show answer</summary>

a) `100vh` (or `100dvh` for mobile)  
b) `rem` — consistent, predictable, respects user preferences  
c) `px` — borders are fine details  
d) `%` — width relative to parent  
e) Unitless number like `1.5` — scales correctly if font size changes  
</details>

---

> **Next:** [Module 07 — Sizing →](07-sizing.md)
