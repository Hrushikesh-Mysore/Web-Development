# Module 01 — HTML Basics & Syntax

> **Previous:** [Home](../README.md) | **Next:** [Module 02 — Document Structure →](02-document-structure.md)

---

## What is HTML?

HTML stands for **Hyper Text Markup Language**. That is a fancy name for something simple: it is a set of labels (called **tags**) that you wrap around text to tell the browser what that text *is*.

For example, if you want the browser to know something is a heading, you put `<h1>` before it and `</h1>` after it. The browser reads those labels and displays the content correctly.

HTML is **not** a programming language. You cannot do math with it. You cannot loop over a list of items. You just describe content. That is its entire job and it does it very well.

To sum up, HTML is a markup language used to describe the structure and meaning of content on a web page.

---

## Anatomy of an HTML Element

An HTML element is a piece of a web page defined by HTML tags.

An **element** has three parts:

```
<p>This is a paragraph.</p>
│   │                    │
│   │                    └─ Closing tag
│   └─ Content
└─ Opening tag
```

| Part | What it looks like | What it does |
|------|--------------------|--------------|
| Opening tag | `<p>` | Tells the browser where the element starts |
| Content | `This is a paragraph.` | The actual text or nested elements |
| Closing tag | `</p>` | Tells the browser where the element ends |

Together, these three parts form one **element**.

---

## Void (Self-Closing) Elements

Some elements are defined as void elements. They cannot contain content and therefore do not need a closing tag.

```html
<br>        <!-- line break — no content needed -->
<img src="photo.jpg" alt="A photo">
<input type="text">
<hr>        <!-- horizontal rule -->
<meta charset="UTF-8">
<link rel="stylesheet" href="style.css">
```

You may also see these written with a slash before the closing bracket (`<br />`, `<img />`). That is `XHTML` style. In modern `HTML5` both are acceptable, but the short form without slash is standard.

---

## Attributes

Attributes give elements extra information. They go inside the **opening tag**.

```html
<a href="https://example.com" target="_blank">Visit Example</a>
```

> **Note:**
>  The `<a ...>` tag is used to create hyperlinks and will be covered in greater detail in a later module. The `href` attribute specifies the destination URL (location) of the hyperlink.
> However, the second attribute, `target="_blank"`, is used to open the URL in a new browser tab or window.

Breaking that down:

```html
<a  href="https://example.com"  target="_blank">Visit Example</a>
    ─────────────────────────   ─────────────────
    Attribute 1                 Attribute 2
    name="value"                name="value"
```

**Rules for attributes:**
- They always go in the opening tag, never the closing tag
- The format is `name="value"` (quotes around the value)
- Multiple attributes are separated by spaces
- The order of attributes does not matter

**Boolean attributes** — some attributes do not need a value. Their presence alone is enough:

```html
<input type="checkbox" checked>    <!-- checked is a boolean attribute -->
<input type="text" disabled>       <!-- disabled makes it unclickable -->
<video controls autoplay>          <!-- controls shows play/pause buttons -->
```


---

## Nesting Elements

Elements can go inside other elements. This is called **nesting**.

```html
<p>I am learning <strong>HTML</strong> and it is great.</p>
```

The `<strong>` element is nested inside `<p>`. The browser reads: "there is a paragraph, and inside it there is some important text."

**Important rule:** Elements must be properly closed in order. You cannot do this:

```html
<!-- ❌ Wrong — overlapping elements -->
<p>I am <strong>learning</p></strong>

<!-- ✅ Right — properly nested -->
<p>I am <strong>learning</strong></p>
```

Think of it like parentheses in math. `( [ ] )` is fine. `( [ ) ]` breaks things.

---

## White-space in HTML

HTML collapses multiple spaces and line breaks into a single space. This is called **white-space collapsing**.

White-space collapsing ensures that multiple spaces, tabs, and line breaks in the HTML source are displayed as a single space, resulting in cleaner and more consistent text rendering.

```html
<p>This    has     lots      of     spaces.</p>
<!-- Renders as: "This has lots of spaces." -->

<p>
  This is on
  multiple lines.
</p>
<!-- Renders as: "This is on multiple lines." -->
```

This is a feature, not a bug. It means you can indent and format your HTML code nicely without it affecting how the page looks.

This behavior also helps browsers render content consistently across different devices and screen sizes, regardless of how the HTML source code is formatted.

---

## HTML Comments

Comments let you leave notes in your code. The browser completely ignores them.

```html
<!-- This is a comment. The browser will not show this. -->

<p>This paragraph is visible.</p>

<!-- 
  Multi-line comments work like this.
  Useful for leaving longer notes.
  Or for temporarily hiding code while debugging.
-->
```

> **Important:** HTML comments cannot be nested.
> Nested comments are invalid because they create confusion about where a comment ends.

```html
<!-- Outer comment

    <!-- Inner comment -->

-->
```

The browser sees the first `-->` and treats it as the end of the comment, making the rest of the code invalid or unpredictable.

Comments may not seem very important when you're coding by yourself, since you'll usually remember what a piece of code does and why you wrote it. However, in a professional environment, comments become much more valuable. They help you communicate your intentions, decisions, and reasoning to other developers who work on the same codebase. Since you won't always be there to explain your code, well-written comments can make collaboration and maintenance much easier.

---

## A Minimal Working HTML Page

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is my first web page.</p>
  </body>
</html>
```

You do not need to understand every line yet — that is what the next two modules cover. For now, just notice:
- The structure has an outer wrapper (`<html>`)
- There is a `<head>` section (invisible to the reader, holds settings)
- There is a `<body>` section (everything the reader sees)

> **Pro Tip:** In VS Code, type `!` and press `Tab` to generate a complete HTML boilerplate template.

---

## Quick Reference

| Term | Meaning |
|------|---------|
| Element | Opening tag + content + closing tag |
| Tag | The label itself, e.g. `<p>` or `</p>` |
| Attribute | Extra info added to an opening tag, e.g. `href="..."` |
| Void element | Element with no content and no closing tag |
| Nesting | Putting elements inside other elements |
| Boolean attribute | Attribute whose presence alone is enough, e.g. `checked` |

---

## Exercises

**Exercise 1 — Spot the mistake**

This code is broken. What is wrong?

```html
<p>Welcome to <em>my website</p></em>
```

<details>
<summary>Show answer</summary>

The `<em>` and `<p>` tags are overlapping. The `<em>` tag opens inside `<p>` but closes outside it, which breaks proper nesting.

Fixed version:
```html
<p>Welcome to <em>my website</em></p>
```
</details>

---

**Exercise 2 — Write it yourself**

Write a single paragraph that contains the phrase "HTML is powerful" where the word "powerful" is bold (use `<strong>`).

<details>
<summary>Show answer</summary>

```html
<p>HTML is <strong>powerful</strong>.</p>
```
</details>

---

**Exercise 3 — Attributes**

Create an image element that shows a file called `dog.jpg`, with the alt text "A happy dog", and a width of 300.

<details>
<summary>Show answer</summary>

```html
<img src="dog.jpg" alt="A happy dog" width="300">
```
</details>

---

**Exercise 4 — Build the skeleton**

Write the minimal HTML structure for a page titled "My Portfolio" with one heading that says "Hello!" and one paragraph that says "I build websites."

<details>
<summary>Show answer</summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My Portfolio</title>
  </head>
  <body>
    <h1>Hello!</h1>
    <p>I build websites.</p>
  </body>
</html>
```
</details>

---

**Exercise 5 — Comments**

What is the purpose of comments in HTML? Give one example of when you might use a comment.

<details>
<summary>Show answer</summary>

Comments are used to leave notes in your code. They can help explain code, remind you of something, or temporarily disable code while testing.

Example:

```html
<!-- TODO: Add navigation menu here -->
```

</details>

---

> **Next:** [Module 02 — Document Structure →](02-document-structure.md)
