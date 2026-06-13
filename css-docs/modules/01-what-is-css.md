# Module 01 — What is CSS?

> **Previous:** [Home](../README.md) | **Next:** [Module 02 — Selectors →](02-selectors.md)

---

## CSS in One Sentence

CSS (Cascading Style Sheets) is a language that describes **how HTML elements should look**.

HTML says "this is a heading". CSS says "that heading should be dark blue, 32px, and have 24px of space below it". They do completely different jobs, which is why they are separate languages.

---

## How CSS Works

When a browser loads a page, it does two things:

1. Reads the HTML and builds a tree of elements (the DOM)
2. Reads the CSS and works out which styles apply to which elements

The result is a painted page. Change the CSS, the paint changes. The HTML stays the same.

---

## CSS Syntax — A Rule

Everything in CSS is built from **rules**. A rule looks like this:

```css
selector {
  property: value;
  property: value;
}
```

A real example:

```css
h1 {
  color: navy;
  font-size: 2rem;
  margin-bottom: 1rem;
}
```

Breaking it apart:

```
h1            ← Selector — "target the h1 element"
{             ← Opening brace — rule begins
  color:      ← Property — what to change
  navy;       ← Value — what to change it to
  font-size:  ← Another property
  2rem;       ← Another value
}             ← Closing brace — rule ends
```

Each `property: value` pair is called a **declaration**. Declarations end with a semicolon. The last one is optional, but include it anyway — it prevents bugs when you add more declarations later.

---

## Three Ways to Add CSS to a Page

### 1. External stylesheet — the right way

```html
<!-- In <head> -->
<link rel="stylesheet" href="style.css">
```

Your CSS lives in a separate `.css` file. One file can style dozens of pages. Change one file, every page updates. This is what you will use for real projects.

### 2. Internal stylesheet — useful for single-page experiments

```html
<!-- In <head> -->
<style>
  h1 {
    color: navy;
  }
</style>
```

CSS lives inside a `<style>` tag in the HTML. Fine for testing, not for production — you would have to copy it to every page.

### 3. Inline styles — avoid in almost every case

```html
<h1 style="color: navy; font-size: 2rem;">Hello</h1>
```

CSS goes directly on the element. Has the highest specificity (more on that in Module 04), impossible to reuse, and makes your HTML a nightmare to read. Use it only when you have no other option.

---

## CSS Comments

```css
/* This is a comment — the browser ignores it */

h1 {
  color: navy; /* This styles the main heading */
}

/* 
  Multi-line comments work like this.
  Useful for separating sections in large stylesheets.
*/
```

---

## What Can CSS Style?

Nearly everything visual:

```css
/* Colours and backgrounds */
color: red;
background-color: #f0f0f0;

/* Text and fonts */
font-size: 18px;
font-family: 'Georgia', serif;
font-weight: bold;
line-height: 1.6;

/* Spacing */
margin: 16px;
padding: 8px 16px;

/* Dimensions */
width: 600px;
height: 100%;

/* Borders */
border: 2px solid black;
border-radius: 8px;

/* Layout */
display: flex;
position: absolute;

/* Visual effects */
box-shadow: 0 4px 8px rgba(0,0,0,0.2);
opacity: 0.8;
```

You will learn all of these in the modules ahead.

---

## The Browser's Default Styles

Before you write a single line of CSS, browsers already have their own opinions about how things look. These are called **user-agent stylesheets**. That is why an unstyled `<h1>` is big and bold, a `<strong>` is bold, and a `<ul>` has bullet points.

This also means different browsers have slightly different defaults. A CSS reset or normalise file smooths those differences out.

A common minimal reset you will see in real projects:

```css
/* Zero out margins and paddings, use consistent box model */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

Do not worry about understanding every bit of that yet — it is covered in Module 05.

---

## The Browser's DevTools — Start Now

Get into the habit of opening DevTools (`F12`) whenever you are working with CSS. The best features for CSS:

- **Elements panel → Styles tab** — see which CSS rules apply to any element, edit them live
- **Elements panel → Computed tab** — see the final computed value of every property after all cascade rules are applied
- Click any element on the page and its styles appear instantly

This is your most important learning tool. No tutorial can replace it.

---

## Quick Reference

| Term | Meaning |
|------|---------|
| Rule | A selector + a block of declarations |
| Selector | The pattern that targets elements |
| Declaration | One `property: value` pair |
| Property | What you are styling (e.g. `color`) |
| Value | How you are styling it (e.g. `navy`) |
| External stylesheet | CSS in a `.css` file, linked with `<link>` |
| User-agent stylesheet | The browser's built-in default styles |

---

## 🧪 Exercises

**Exercise 1 — Anatomy**

Label the parts of this CSS rule:

```css
p {
  color: #333333;
  line-height: 1.5;
}
```

<details>
<summary>Show answer</summary>

- `p` → Selector
- `{ ... }` → Declaration block
- `color: #333333;` → Declaration 1
- `color` → Property
- `#333333` → Value
- `line-height: 1.5;` → Declaration 2
</details>

---

**Exercise 2 — Link your stylesheet**

Write the HTML tag that links a stylesheet called `main.css` stored in a folder called `css/`.

<details>
<summary>Show answer</summary>

```html
<link rel="stylesheet" href="css/main.css">
```
</details>

---

**Exercise 3 — Write your first rule**

Write a CSS rule that makes all `<h2>` elements dark green (`#1a5c1a`) with a font size of `1.5rem`.

<details>
<summary>Show answer</summary>

```css
h2 {
  color: #1a5c1a;
  font-size: 1.5rem;
}
```
</details>

---

**Exercise 4 — Which method?**

Which method of adding CSS would you use for:

a) A stylesheet shared across 20 pages of a website  
b) A quick single-page experiment  
c) Dynamically applied styles from JavaScript  

<details>
<summary>Show answer</summary>

a) External stylesheet (`<link>`) — single source of truth  
b) Internal `<style>` tag — no separate file needed  
c) Inline styles via `element.style.property = value` in JS — the one valid use case for inline styles  
</details>

---

> **Next:** [Module 02 — Selectors →](02-selectors.md)
