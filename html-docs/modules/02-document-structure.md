# Module 02 — Document Structure

> **Previous:** [← Module 01 — HTML Basics](01-html-basics.md) | **Next:** [Module 03 — Metadata →](03-metadata.md)

---

## The Blueprint of Every Web Page

Every HTML page in the world has the same basic skeleton. It looks like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title Here</title>
  </head>
  <body>
    <!-- Everything you see on screen goes here -->
  </body>
</html>
```

Let us go through each part, one by one.

---

## `<!DOCTYPE html>`

```html
<!DOCTYPE html>
```

This line goes at the very top — above everything else. It is **not** an HTML element. It is a declaration. It tells the browser: *"I am writing modern HTML5. Please render this page in standards mode."*

Without it, the browser enters something called "quirks mode" — a backwards-compatibility mode where it guesses at your intentions. Quirks mode causes unpredictable layout bugs that will drive you absolutely mad. Always include `<!DOCTYPE html>`.

It is not case-sensitive (`<!doctype html>` also works), but the capitalised version is the convention.

---

## `<html>` — The Root Element

```html
<html lang="en">
  ...
</html>
```

Everything else on the page lives inside `<html>`. It is the root — the ancestor of all other elements.

The `lang` attribute is important. It tells the browser (and screen readers, and search engines) what human language the page is written in.

```html
<html lang="en">       <!-- English -->
<html lang="fr">       <!-- French -->
<html lang="de">       <!-- German -->
<html lang="ja">       <!-- Japanese -->
<html lang="ar">       <!-- Arabic -->
<html lang="hi">       <!-- Hindi -->
```

Screen readers use this to choose the correct pronunciation. Search engines use it to serve the page to the right audience. It is a small attribute with a big impact — always include it.

---

## `<head>` — The Invisible Settings Panel

```html
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
```

The `<head>` section contains **metadata** — information *about* the page that is not shown to the reader directly. Think of it as the page's settings panel.

Common things that go in `<head>`:
- Character encoding declaration
- Page title (shown in the browser tab)
- Links to CSS stylesheets
- Links to JavaScript files
- SEO meta tags
- The favicon (the tiny icon in the browser tab)

Nothing in `<head>` is rendered on the page itself. We cover this in detail in [Module 03](03-metadata.md).

---

## `<body>` — Everything the Reader Sees

```html
<body>
  <h1>Welcome!</h1>
  <p>This is the content of the page.</p>
</body>
```

The `<body>` contains all the visible content — headings, paragraphs, images, links, forms, everything. If a user can see or interact with something, it lives in `<body>`.

There can only be **one** `<body>` element per page.

---

## The Relationship Between Elements

Think of the HTML document as a family tree. The relationships have names:

```html
<html>
  <head>...</head>
  <body>
    <p>Hello <strong>world</strong></p>
  </body>
</html>
```

- `<html>` is the **parent** of `<head>` and `<body>`
- `<head>` and `<body>` are **children** of `<html>`
- `<head>` and `<body>` are **siblings**
- `<p>` is the parent of `<strong>`
- `<html>` is an **ancestor** of `<strong>`
- `<strong>` is a **descendant** of `<html>`

You will hear these terms constantly in HTML and CSS. Understanding them now will save you confusion later.

---

## Block vs Inline Elements

Every HTML element displays in one of two fundamental ways:

**Block elements** start on a new line and take up the full width available:
```html
<h1>I am a block element — I take a full line.</h1>
<p>So do I. New paragraph, new line.</p>
<div>Div is block too.</div>
```

**Inline elements** flow with the text around them:
```html
<p>
  I am normal text with <strong>bold words</strong>
  and <em>italic words</em> all on the same line.
</p>
```

Key rule: **Block elements should not go inside inline elements.**

```html
<!-- ❌ Wrong — block inside inline -->
<span><p>Bad idea.</p></span>

<!-- ✅ Right — inline inside block -->
<p><span>This is fine.</span></p>
```

---

## HTML Validation

Browsers are very forgiving. They will try to render even broken HTML. But "it works in my browser" is not the same as "it is correct". Invalid HTML can break in other browsers, cause accessibility issues, and confuse search engines.

The official HTML validator is at [validator.w3.org](https://validator.w3.org). Paste your HTML in and it will tell you exactly what is wrong.

---

## Quick Reference

| Element | What it does |
|---------|-------------|
| `<!DOCTYPE html>` | Tells browser to use HTML5 standards mode |
| `<html lang="en">` | Root of the entire document; declares language |
| `<head>` | Container for metadata (invisible to reader) |
| `<body>` | Container for all visible page content |
| `<meta charset="UTF-8">` | Declares character encoding (go in head) |
| `<title>` | Sets the browser tab title (goes in head) |

---

## 🧪 Exercises

**Exercise 1 — True or False**

True or false: You can have two `<body>` elements on a page if you need more space.

<details>
<summary>Show answer</summary>

**False.** Each HTML page has exactly one `<head>` and one `<body>`. If you add a second `<body>`, the browser either ignores it or behaves unpredictably. All your content goes inside the single `<body>`.
</details>

---

**Exercise 2 — What's missing?**

Find all the things wrong with this HTML:

```html
<html>
  <body>
    <title>My Site</title>
    <h1>Welcome</h1>
  </body>
</html>
```

<details>
<summary>Show answer</summary>

Three problems:
1. Missing `<!DOCTYPE html>` at the top
2. Missing `<head>` section — `<title>` belongs in `<head>`, not in `<body>`
3. Missing `lang` attribute on `<html>`

Fixed version:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My Site</title>
  </head>
  <body>
    <h1>Welcome</h1>
  </body>
</html>
```
</details>

---

**Exercise 3 — Language codes**

If you are building a webpage in Spanish, what should your opening `<html>` tag look like?

<details>
<summary>Show answer</summary>

```html
<html lang="es">
```

The language code for Spanish is `es`. You can find all valid language codes at [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry).
</details>

---

**Exercise 4 — Block or inline?**

Label each element as block or inline:
- `<p>` 
- `<strong>`
- `<h2>`
- `<em>`
- `<div>`
- `<a>`

<details>
<summary>Show answer</summary>

| Element | Type |
|---------|------|
| `<p>` | Block |
| `<strong>` | Inline |
| `<h2>` | Block |
| `<em>` | Inline |
| `<div>` | Block |
| `<a>` | Inline |
</details>

---

> **Next:** [Module 03 — Metadata →](03-metadata.md)
