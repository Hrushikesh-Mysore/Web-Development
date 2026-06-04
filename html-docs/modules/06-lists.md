# Module 06 — Lists

> **Previous:** [← Module 05 — Emphasis & Importance](05-emphasis-importance.md) | **Next:** [Module 07 — Advanced Text Features →](07-advanced-text.md)

---

## Three Types of Lists

HTML gives you three kinds of lists, each for a different situation:

| Type | Element | When to use it |
|------|---------|----------------|
| Unordered | `<ul>` | Items where order does not matter |
| Ordered | `<ol>` | Steps where sequence matters |
| Description | `<dl>` | Term + definition pairs |

---

## Unordered Lists — `<ul>`

Use when the items could be in any order without changing the meaning.

```html
<h2>Skills</h2>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>Git</li>
</ul>

<h2>Groceries</h2>
<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Eggs</li>
</ul>
```

Each item is wrapped in `<li>` (list item). Browsers render these with bullet points by default.

---

## Ordered Lists — `<ol>`

Use when the sequence matters — steps in a recipe, ranked items, instructions.

```html
<h2>How to make chai</h2>
<ol>
  <li>Boil water in a saucepan</li>
  <li>Add tea leaves and spices</li>
  <li>Add milk and bring to a boil</li>
  <li>Strain into a cup</li>
  <li>Add sugar to taste</li>
</ol>
```

Browsers number these automatically starting from 1.

**Useful attributes on `<ol>`:**

```html
<!-- Start from a number other than 1 -->
<ol start="4">
  <li>Fourth step</li>
  <li>Fifth step</li>
</ol>

<!-- Count backwards -->
<ol reversed>
  <li>Third place</li>
  <li>Second place</li>
  <li>First place</li>
</ol>

<!-- Use letters instead of numbers -->
<ol type="a">
  <li>Option A</li>
  <li>Option B</li>
  <li>Option C</li>
</ol>

<!-- Type values: "1" (default), "a", "A", "i" (Roman numerals), "I" -->
```

---

## Description Lists — `<dl>`

For pairs of terms and their descriptions. Think glossaries, FAQs, or metadata displays.

```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language — the structure of web pages.</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets — the visual presentation of web pages.</dd>

  <dt>JavaScript</dt>
  <dd>A scripting language that adds interactivity to web pages.</dd>
</dl>
```

- `<dl>` — description list (the container)
- `<dt>` — description term (the label)
- `<dd>` — description details (the definition/value)

One `<dt>` can have multiple `<dd>` elements, and vice versa:

```html
<dl>
  <dt>Front-end languages</dt>
  <dd>HTML</dd>
  <dd>CSS</dd>
  <dd>JavaScript</dd>
</dl>
```

---

## Nested Lists

Lists can go inside other lists. This is how you create sub-items.

```html
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Node.js</li>
      <li>Python</li>
      <li>SQL</li>
    </ul>
  </li>
</ul>
```

**Important rule:** The nested `<ul>` or `<ol>` must go *inside* an `<li>`, not directly inside the parent list element.

```html
<!-- ❌ Wrong — nested list not inside <li> -->
<ul>
  <li>Frontend</li>
  <ul>
    <li>HTML</li>
  </ul>
</ul>

<!-- ✅ Right — nested list inside <li> -->
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
    </ul>
  </li>
</ul>
```

You can mix `<ul>` and `<ol>` in the same nesting:

```html
<ol>
  <li>Choose a project
    <ul>
      <li>Portfolio site</li>
      <li>Blog</li>
      <li>To-do app</li>
    </ul>
  </li>
  <li>Set up your tools</li>
  <li>Start coding</li>
</ol>
```

---

## Navigation Menus are Lists

This is worth knowing early: website navigation menus are almost always built with `<ul>` and `<li>`. The reasoning is that a navigation menu is fundamentally a list of links.

```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/projects">Projects</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

CSS removes the bullet points and arranges them horizontally. The underlying HTML structure is a list.

---

## Quick Reference

| Element | Purpose |
|---------|---------|
| `<ul>` | Unordered list container |
| `<ol>` | Ordered list container |
| `<li>` | List item (used in both `<ul>` and `<ol>`) |
| `<dl>` | Description list container |
| `<dt>` | Term in a description list |
| `<dd>` | Definition/detail in a description list |
| `<ol start="n">` | Start numbering from n |
| `<ol reversed>` | Count backwards |
| `<ol type="a">` | Use letters (a, A, i, I, 1) |

---

## 🧪 Exercises

**Exercise 1 — Choose the list type**

Which list type would you use for each scenario?

a) The top 10 songs of 2024 in ranking order  
b) The ingredients of a recipe  
c) A glossary of HTML terms  
d) Steps to install VS Code  

<details>
<summary>Show answer</summary>

a) `<ol>` — order/ranking matters  
b) `<ul>` — ingredients can be in any order  
c) `<dl>` — term + definition pairs  
d) `<ol>` — installation steps must be done in sequence  
</details>

---

**Exercise 2 — Build a skills list**

Create an unordered list of three programming languages you want to learn, with each language having a nested `<ol>` showing two specific things to learn about that language.

<details>
<summary>Show answer</summary>

```html
<ul>
  <li>JavaScript
    <ol>
      <li>DOM manipulation</li>
      <li>Async/await and promises</li>
    </ol>
  </li>
  <li>Python
    <ol>
      <li>List comprehensions</li>
      <li>Working with APIs</li>
    </ol>
  </li>
  <li>SQL
    <ol>
      <li>SELECT and WHERE clauses</li>
      <li>Joins</li>
    </ol>
  </li>
</ul>
```
</details>

---

**Exercise 3 — FAQ with description list**

Create a description list for a three-question FAQ. Questions are the terms, answers are the descriptions. Use any topic you like.

<details>
<summary>Show answer</summary>

```html
<dl>
  <dt>What tools do I need to learn HTML?</dt>
  <dd>Just a text editor (like VS Code) and a web browser. That is all.</dd>

  <dt>How long does it take to learn HTML?</dt>
  <dd>You can learn the fundamentals in a weekend. Mastery comes with practice over months.</dd>

  <dt>Do I need to know CSS before starting HTML?</dt>
  <dd>No. Learn HTML first — it is the foundation. CSS comes after.</dd>
</dl>
```
</details>

---

**Exercise 4 — Fix the nesting**

This code is broken. Fix it:

```html
<ul>
  <li>Fruits</li>
  <ul>
    <li>Mango</li>
    <li>Banana</li>
  </ul>
  <li>Vegetables</li>
</ul>
```

<details>
<summary>Show answer</summary>

The nested `<ul>` must be inside the `<li>`, not as a sibling to it.

```html
<ul>
  <li>Fruits
    <ul>
      <li>Mango</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Vegetables</li>
</ul>
```
</details>

---

> **Next:** [Module 07 — Advanced Text Features →](07-advanced-text.md)
