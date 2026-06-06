# Module 11 — Semantic Layout

> **Previous:** [← Module 10 — Audio & Video](10-audio-video.md) | **Next:** [Module 12 — Tables →](12-tables.md)

---

## What is Semantic HTML?

**Semantic** means "meaningful". Semantic HTML uses elements that describe the *role* of the content, not just how it should look.

Compare:

```html
<!-- ❌ Non-semantic — all divs, no meaning -->
<div class="header">...</div>
<div class="nav">...</div>
<div class="main">...</div>
<div class="sidebar">...</div>
<div class="footer">...</div>

<!-- ✅ Semantic — purpose is clear -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<aside>...</aside>
<footer>...</footer>
```

Both render identically on screen (unless styled). But the semantic version:
- Helps screen readers navigate by landmark
- Helps search engines understand page structure
- Makes your code easier to read and maintain
- Is how professional developers write HTML

---

## `<header>`

```html
<header>
  <h1>My Portfolio</h1>
  <nav>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

`<header>` represents introductory content. On a page level it typically contains the site logo, site title, and navigation. It can also appear inside `<article>` or `<section>` as an intro to that specific content block.

There can be **multiple** `<header>` elements on a page — one for the page, one per article, etc.

---

## `<nav>`

```html
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

`<nav>` wraps major navigation blocks — the main menu, a table of contents, pagination links.

Not every group of links is a `<nav>`. Links in a paragraph or footer copyright line do not need `<nav>`. Use it for blocks that are primarily navigation.

If you have multiple `<nav>` elements, distinguish them with `aria-label`:

```html
<nav aria-label="Main navigation">...</nav>
<nav aria-label="Breadcrumbs">...</nav>
<nav aria-label="Footer links">...</nav>
```

---

## `<main>`

```html
<main>
  <h1>About Me</h1>
  <p>Frontend developer based in Bangalore.</p>
</main>
```

`<main>` marks the dominant content of the page — the actual reason this page exists. There should be **only one** `<main>` per page, and it should not include repeated content like headers, navigation, or footers.

Screen readers can jump straight to `<main>` — it is one of the most useful landmarks.

---

## `<article>`

```html
<article>
  <header>
    <h2>Building Accessible Forms</h2>
    <p>By John Doe — <time datetime="2024-03-15">March 15, 2024</time></p>
  </header>
  <p>Forms are the backbone of web interactivity...</p>
  <footer>
    <p>Tags: HTML, Accessibility, Forms</p>
  </footer>
</article>
```

`<article>` wraps self-contained content that makes sense on its own and could be syndicated independently — a blog post, a news article, a forum thread, a product card, a comment.

Ask yourself: "Could this piece of content be taken out of the page and published on its own?" If yes → `<article>`.

---

## `<section>`

```html
<section>
  <h2>My Skills</h2>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>
</section>

<section>
  <h2>My Projects</h2>
  <!-- project cards here -->
</section>
```

`<section>` groups related content within a page. Unlike `<article>`, a section is not necessarily self-contained — it is a thematic grouping. Sections should almost always have a heading.

A rule of thumb: `<article>` is like a standalone newspaper article. `<section>` is like a chapter in a book.

---

## `<aside>`

```html
<main>
  <article>
    <h2>CSS Grid Explained</h2>
    <p>...</p>
  </article>

  <aside>
    <h3>Related Topics</h3>
    <ul>
      <li><a href="#">CSS Flexbox</a></li>
      <li><a href="#">CSS Variables</a></li>
    </ul>
  </aside>
</main>
```

`<aside>` is for content that is tangentially related to the main content — a sidebar, related links, a pull quote, an advertisement, author bio. It is related but not essential to understanding the main content.

---

## `<footer>`

```html
<footer>
  <p>&copy; 2024 John Doe. All rights reserved.</p>
  <nav aria-label="Footer navigation">
    <ul>
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/terms">Terms</a></li>
    </ul>
  </nav>
  <address>
    <a href="mailto:john@example.com">john@example.com</a>
  </address>
</footer>
```

Like `<header>`, `<footer>` can appear at the page level or inside `<article>`. A page footer typically has copyright info, secondary navigation, and contact details.

---

## Putting It All Together

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>John Doe — Frontend Developer</title>
</head>
<body>

  <header>
    <a href="/" aria-label="Homepage"><img src="logo.svg" alt="John Doe logo"></a>
    <nav aria-label="Main navigation">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="about">
      <h1>About Me</h1>
      <p>Frontend developer based in Bangalore.</p>
    </section>

    <section id="projects">
      <h2>Projects</h2>

      <article>
        <h3>Weather App</h3>
        <p>A React app showing real-time weather.</p>
      </article>

      <article>
        <h3>Portfolio Site</h3>
        <p>This site, built with HTML and CSS.</p>
      </article>
    </section>
  </main>

  <aside>
    <h2>Find Me Online</h2>
    <ul>
      <li><a href="https://github.com/johndoe">GitHub</a></li>
      <li><a href="https://linkedin.com/in/johndoe">LinkedIn</a></li>
    </ul>
  </aside>

  <footer>
    <p>&copy; 2024 John Doe</p>
    <address>
      <a href="mailto:john@example.com">john@example.com</a>
    </address>
  </footer>

</body>
</html>
```

---

## Generic Containers — `<div>` and `<span>`

When no semantic element fits, use:

- `<div>` — a generic block container (for layout, grouping)
- `<span>` — a generic inline container (for styling a piece of text)

```html
<!-- div for layout grouping with no semantic meaning -->
<div class="card-grid">
  <article>...</article>
  <article>...</article>
</div>

<!-- span for inline styling -->
<p>You have <span class="count">3</span> unread messages.</p>
```

Use `<div>` and `<span>` when no semantic option fits — not as your first choice.

---

## Quick Reference

| Element | Use it for |
|---------|-----------|
| `<header>` | Page or section header/intro |
| `<nav>` | Major navigation blocks |
| `<main>` | Primary page content (only one) |
| `<article>` | Self-contained, syndication-ready content |
| `<section>` | Thematic grouping within a page |
| `<aside>` | Tangentially related content / sidebar |
| `<footer>` | Page or section footer/metadata |
| `<div>` | Generic block container (no semantic fit) |
| `<span>` | Generic inline container (no semantic fit) |

---

## 🧪 Exercises

**Exercise 1 — `<article>` or `<section>`?**

Which would you use for each:

a) A blog post  
b) The "About Me" section of a portfolio  
c) A comment on a forum thread  
d) The "Experience" chunk of a résumé page  

<details>
<summary>Show answer</summary>

a) `<article>` — self-contained blog post that could be syndicated  
b) `<section>` — a thematic part of the page, not standalone  
c) `<article>` — each comment is self-contained  
d) `<section>` — a thematic grouping within the page  
</details>

---

**Exercise 2 — Fix the structure**

Rewrite this using semantic elements:

```html
<div class="top-bar">
  <div class="logo">MySite</div>
  <div class="menu">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </div>
</div>
<div class="content">
  <h1>Welcome</h1>
  <p>Content goes here.</p>
</div>
<div class="bottom">
  <p>&copy; 2024 MySite</p>
</div>
```

<details>
<summary>Show answer</summary>

```html
<header>
  <h1>MySite</h1>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <h1>Welcome</h1>
  <p>Content goes here.</p>
</main>

<footer>
  <p>&copy; 2024 MySite</p>
</footer>
```
</details>

---

**Exercise 3 — Label the landmarks**

On a typical news website, which semantic elements would you use for:

a) The site logo and main menu  
b) The main article text  
c) The "trending topics" sidebar  
d) The copyright and about links at the bottom  

<details>
<summary>Show answer</summary>

a) `<header>` containing `<nav>`  
b) `<main>` containing `<article>`  
c) `<aside>`  
d) `<footer>` containing `<nav>`  
</details>

---

> **Next:** [Module 12 — Tables →](12-tables.md)
