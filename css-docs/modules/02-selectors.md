# Module 02 — Selectors

> **Previous:** [← Module 01 — What is CSS?](01-what-is-css.md) | **Next:** [Module 03 — Pseudo-classes & Pseudo-elements →](03-pseudo.md)

---

## What is a Selector?

A selector is the part of a CSS rule that says **which HTML elements to target**. Get the selector wrong and your styles apply to the wrong things. Get it right and you can style anything, with surgical precision.

---

## Type Selectors — Target by Element Name

```css
/* Styles every <p> on the page */
p {
  line-height: 1.6;
}

/* Styles every <h2> */
h2 {
  font-size: 1.5rem;
}

/* Styles every <a> */
a {
  color: royalblue;
}
```

Simple. Broad. Applies to **all** matching elements.

---

## Class Selectors — Target by Class Name

```html
<p class="intro">This is the intro paragraph.</p>
<p>This is a normal paragraph.</p>
<h2 class="intro">An intro heading too</h2>
```

```css
/* Targets any element with class="intro" */
.intro {
  font-size: 1.2rem;
  color: #444;
}
```

- Class selectors start with a **dot** (`.`)
- Any element can have a class
- Multiple elements can share the same class
- One element can have multiple classes: `class="intro highlight"`

```css
/* Targeting an element with multiple classes */
.intro.highlight {
  background-color: yellow;  /* Only applies if BOTH classes are present */
}
```

Classes are the most common selector in real CSS. You will use them constantly.

---

## ID Selectors — Target by ID

```html
<header id="site-header">...</header>
```

```css
/* Targets the element with id="site-header" */
#site-header {
  background-color: #1a1a2e;
}
```

- ID selectors start with a **hash** (`#`)
- IDs must be **unique** — one per page
- IDs have very high specificity (covered in Module 04) which causes problems when overriding styles

> **Best practice:** Prefer classes for styling. Use IDs for anchor links and JavaScript hooks.

---

## The Universal Selector

```css
/* Targets every single element on the page */
* {
  box-sizing: border-box;
}
```

Rarely used alone. Mostly appears in CSS resets with `*, *::before, *::after`.

---

## Attribute Selectors — Target by Attribute

Target elements based on HTML attributes and their values:

```css
/* Has the attribute at all */
[disabled] { opacity: 0.5; }

/* Attribute equals a specific value */
[type="text"] { border: 1px solid #ccc; }

/* Attribute value starts with "https" */
[href^="https"] { color: green; }

/* Attribute value ends with ".pdf" */
[href$=".pdf"] { color: red; }

/* Attribute value contains "external" anywhere */
[href*="external"] { text-decoration: underline; }
```

Attribute selectors are great for styling form inputs by type without adding classes to every one.

---

## Combinators — Selectors in Relationship

Combinators let you select elements based on their position relative to other elements.

### Descendant combinator (space)

```css
/* Any <a> that is ANYWHERE inside a <nav> */
nav a {
  text-decoration: none;
}
```

### Child combinator (`>`)

```css
/* Only <li> that are DIRECT children of <ul> */
/* Does NOT target li inside nested ul */
ul > li {
  list-style: square;
}
```

### Adjacent sibling combinator (`+`)

```css
/* The <p> that comes IMMEDIATELY after an <h2> */
h2 + p {
  font-size: 1.1rem;
  color: #555;
}
```

### General sibling combinator (`~`)

```css
/* ALL <p> elements that are siblings AFTER an <h2> */
h2 ~ p {
  margin-left: 1rem;
}
```

---

## Selector Lists — Grouping

Apply the same styles to multiple selectors at once:

```css
/* Without grouping — repetitive */
h1 { color: navy; }
h2 { color: navy; }
h3 { color: navy; }

/* With grouping — clean */
h1, h2, h3 {
  color: navy;
}
```

---

## Combining Selectors

Selectors can be stacked for precision:

```css
/* Only <p> elements with class "note" inside an <article> */
article p.note {
  background: lightyellow;
  padding: 0.5rem;
}

/* <a> elements inside <nav> that have class "active" */
nav a.active {
  font-weight: bold;
  border-bottom: 2px solid currentColor;
}
```

---

## A Practical Example

```html
<nav>
  <ul>
    <li><a href="/" class="active">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<main>
  <h2>Latest Posts</h2>
  <p class="lead">Welcome to the blog.</p>
  <p>Here is a regular paragraph.</p>
</main>
```

```css
/* All nav links — no underline */
nav a {
  text-decoration: none;
  color: #333;
}

/* Only the active link */
nav a.active {
  color: royalblue;
  font-weight: bold;
}

/* Lead paragraph only */
.lead {
  font-size: 1.2rem;
  color: #555;
}

/* First paragraph after an h2 */
h2 + p {
  margin-top: 0.5rem;
}
```

---

## Quick Reference

| Selector | Syntax | Targets |
|----------|--------|---------|
| Type | `p` | All `<p>` elements |
| Class | `.classname` | All elements with that class |
| ID | `#idname` | The one element with that ID |
| Universal | `*` | Every element |
| Attribute | `[attr="val"]` | Elements matching attribute condition |
| Descendant | `a b` | `b` anywhere inside `a` |
| Child | `a > b` | `b` that is a direct child of `a` |
| Adjacent sibling | `a + b` | `b` immediately after `a` |
| General sibling | `a ~ b` | All `b` siblings after `a` |
| List | `a, b, c` | `a`, `b`, and `c` |

---

## 🧪 Exercises

**Exercise 1 — Selector choice**

Write the selector you would use for each scenario:

a) Target all `<button>` elements  
b) Target elements with class `card`  
c) Target the element with `id="hero"`  
d) Target `<a>` tags with `target="_blank"`  
e) Target any `<p>` that immediately follows an `<h3>`  

<details>
<summary>Show answer</summary>

```css
/* a */ button { }
/* b */ .card { }
/* c */ #hero { }
/* d */ [target="_blank"] { }
/* e */ h3 + p { }
```
</details>

---

**Exercise 2 — Descendant vs child**

Given this HTML, write a selector that styles only the `<li>` elements in the **outer** `<ul>`, not the nested ones.

```html
<ul class="menu">
  <li>Item 1
    <ul>
      <li>Nested item</li>
    </ul>
  </li>
  <li>Item 2</li>
</ul>
```

<details>
<summary>Show answer</summary>

```css
.menu > li {
  /* Styles only direct li children of .menu */
  font-weight: bold;
}
```

Using `.menu li` would style the nested items too. The child combinator (`>`) is the key.
</details>

---

**Exercise 3 — Group selectors**

Rewrite these rules using a selector list:

```css
h1 { font-family: Georgia, serif; }
h2 { font-family: Georgia, serif; }
h3 { font-family: Georgia, serif; }
h4 { font-family: Georgia, serif; }
```

<details>
<summary>Show answer</summary>

```css
h1, h2, h3, h4 {
  font-family: Georgia, serif;
}
```
</details>

---

**Exercise 4 — Real-world scenario**

You have this HTML. Write CSS to:
- Remove underlines from all links inside `.card`
- Make the `.card-title` bold and dark navy
- Give the `.card-meta` paragraph a smaller, grey font

```html
<div class="card">
  <h3 class="card-title"><a href="#">My Project</a></h3>
  <p class="card-meta">Published March 2024</p>
  <p>Description of the project...</p>
</div>
```

<details>
<summary>Show answer</summary>

```css
.card a {
  text-decoration: none;
}

.card-title {
  font-weight: bold;
  color: #0a1628;
}

.card-meta {
  font-size: 0.875rem;
  color: #666;
}
```
</details>

---

> **Next:** [Module 03 — Pseudo-classes & Pseudo-elements →](03-pseudo.md)
