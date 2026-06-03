# Module 04 — Headings & Paragraphs

> **Previous:** [← Module 03 — Metadata](03-metadata.md) | **Next:** [Module 05 — Emphasis & Importance →](05-emphasis-importance.md)

---

## Why Structure Text?

Imagine a newspaper printed as one giant block of text with no headlines, no sections, no paragraph breaks. You would put it down immediately.

HTML headings and paragraphs solve this. They tell both the reader and the browser what matters, what sections exist, and how the information is organised. Screen readers use them for navigation. Search engines use them to understand your content. You use them to not lose your mind.

---

## Headings — `<h1>` to `<h6>`

HTML has six levels of headings:

```html
<h1>Heading Level 1</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6</h6>
```

The browser renders them in decreasing size by default:

| Element | Default appearance |
|---------|--------------------|
| `<h1>` | Very large, bold |
| `<h2>` | Large, bold |
| `<h3>` | Medium-large, bold |
| `<h4>` | Normal size, bold |
| `<h5>` | Small, bold |
| `<h6>` | Smaller, bold |

(You will style these with CSS later — the default sizes are just the browser's guess at what looks reasonable.)

---

## The Heading Hierarchy — Use it Right

Think of headings like a book's table of contents:

```html
<h1>The Complete Guide to Cooking</h1>       <!-- Book title — one per page -->

  <h2>Chapter 1: Breakfasts</h2>              <!-- Chapter -->
    <h3>Eggs</h3>                              <!-- Section -->
      <h4>Scrambled Eggs</h4>                  <!-- Sub-section -->
      <h4>Fried Eggs</h4>
    <h3>Toast</h3>

  <h2>Chapter 2: Lunches</h2>
    <h3>Sandwiches</h3>
```

**The golden rules:**

1. **One `<h1>` per page.** It is the main title. Think of it like the title of a book — there is only one.
2. **Do not skip levels.** Do not jump from `<h2>` to `<h4>`. Screen readers navigate by heading level and skipping levels confuses them.
3. **Use headings for structure, not for size.** If you want big text, use CSS. Do not use `<h3>` just because you want medium-sized text.

---

## Paragraphs — `<p>`

```html
<p>
  HTML is the language of the web. Every website you have ever visited 
  was built with it. It has been around since 1991 and shows no signs 
  of going anywhere.
</p>

<p>
  The best way to learn HTML is to write it. Not just read examples — 
  actually open a text editor and type the code yourself.
</p>
```

Each `<p>` creates a block of text with a small gap above and below it (by default). The browser adds this spacing automatically — you do not need to add `<br>` tags between paragraphs.

**Common mistake:** Using `<br>` to create paragraph spacing:

```html
<!-- ❌ Semantic disaster — these are separate thoughts, not line breaks -->
First sentence about topic A.<br><br>
Second sentence about topic B.<br><br>

<!-- ✅ Correct — two paragraphs -->
<p>First sentence about topic A.</p>
<p>Second sentence about topic B.</p>
```

---

## Line Break — `<br>`

Use `<br>` only when a line break is genuinely part of the content — like a poem or a postal address.

```html
<address>
  Flat 4B, Koramangala 5th Block<br>
  Bangalore<br>
  Karnataka 560095
</address>

<p>
  Roses are red,<br>
  Violets are blue,<br>
  HTML is semantic,<br>
  And so should you be too.
</p>
```

Do not use `<br>` to add vertical space between content. That is CSS's job.

---

## Horizontal Rule — `<hr>`

`<hr>` creates a thematic break — a visual divider between sections of content.

```html
<p>This section covers the theory.</p>

<hr>

<p>This section covers the practice.</p>
```

The `<hr>` is semantic — it means "the topic changes here". CSS will control how it looks.

---

## A Full Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My Travel Blog</title>
  </head>
  <body>

    <h1>My Travel Blog</h1>

    <h2>Week 1: Rajasthan</h2>

    <h3>Jaipur</h3>
    <p>
      Jaipur, known as the Pink City, was our first stop. The colour
      comes from the terracotta paint that coats the buildings of the
      old city. Walking through the bazaars in the early morning, 
      before the heat kicks in, is something I will not forget.
    </p>

    <h3>Jodhpur</h3>
    <p>
      From Jaipur we took a six-hour train to Jodhpur. The Blue City.
      The fort here sits on a 125-metre-high rock and you can see it
      from nearly everywhere in town.
    </p>

    <hr>

    <h2>Week 2: Kerala</h2>

    <p>
      After the dust of Rajasthan, the green of Kerala felt like 
      a completely different country.
    </p>

  </body>
</html>
```

---

## Quick Reference

| Element | Use it for |
|---------|-----------|
| `<h1>` | Page title — one per page |
| `<h2>` | Major sections |
| `<h3>` | Sub-sections |
| `<h4>`–`<h6>` | Deeper sub-sections (use sparingly) |
| `<p>` | Paragraphs of text |
| `<br>` | Line breaks within content (addresses, poems) |
| `<hr>` | Thematic break between sections |

---

## 🧪 Exercises

**Exercise 1 — The hierarchy mistake**

What is wrong with this structure?

```html
<h1>My Website</h1>
<h4>About Me</h4>
<h2>My Projects</h2>
```

<details>
<summary>Show answer</summary>

The heading level jumps from `<h1>` directly to `<h4>`, skipping `<h2>` and `<h3>`. This breaks the semantic hierarchy and confuses screen readers. "About Me" should be an `<h2>` since it is a top-level section of the page.

Fixed:
```html
<h1>My Website</h1>
<h2>About Me</h2>
<h2>My Projects</h2>
```
</details>

---

**Exercise 2 — Structure a recipe**

Create a proper heading and paragraph structure for a recipe page. The recipe is "Mango Lassi". It has two sections: "Ingredients" and "Method". Each section should have a short one-sentence description paragraph.

<details>
<summary>Show answer</summary>

```html
<h1>Mango Lassi</h1>
<p>A refreshing Indian yoghurt-based drink, perfect for hot afternoons.</p>

<h2>Ingredients</h2>
<p>You will need ripe mangoes, yoghurt, milk, sugar, and cardamom.</p>

<h2>Method</h2>
<p>Blend everything together until smooth and serve chilled.</p>
```
</details>

---

**Exercise 3 — When to use `<br>`**

Should you use `<br>` here, or something else?

> You want spacing between these two completely different topics on your page.

<details>
<summary>Show answer</summary>

Use two separate `<p>` elements, not `<br>`. `<br>` is only for line breaks that are part of the content (addresses, poems, lyrics). For spacing between topics — that is what paragraphs and CSS are for.
</details>

---

**Exercise 4 — Write the structure**

Look at this content and write the correct heading and paragraph HTML for it:

- Page title: "Introduction to Python"
- Section 1: "What is Python?" — with a short description
- Section 2: "Why Learn Python?" — with a short description
- Sub-section under Section 2: "Python in Web Development"

<details>
<summary>Show answer</summary>

```html
<h1>Introduction to Python</h1>

<h2>What is Python?</h2>
<p>Python is a high-level, readable programming language created by Guido van Rossum in 1991.</p>

<h2>Why Learn Python?</h2>
<p>Python is one of the most in-demand languages in the world, used in web development, data science, and automation.</p>

  <h3>Python in Web Development</h3>
  <p>Frameworks like Django and Flask allow developers to build powerful web applications with Python.</p>
```
</details>

---

> **Next:** [Module 05 — Emphasis & Importance →](05-emphasis-importance.md)
