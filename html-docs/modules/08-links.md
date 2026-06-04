# Module 08 — Links & Navigation

> **Previous:** [← Module 07 — Advanced Text](07-advanced-text.md) | **Next:** [Module 09 — Images →](09-images.md)

---

## Links are What Make the Web a Web

Without links, the web would just be a collection of disconnected pages. Links are the roads, the bridges, the teleportation portals between everything. The `<a>` element (short for "anchor") is the HTML tag for links.

---

## Basic Link Syntax

```html
<a href="https://developer.mozilla.org">Visit MDN</a>
```

- `<a>` — the anchor element
- `href` — "hypertext reference" — the destination URL
- The text between the tags is what the user sees and clicks

---

## Types of URLs

### Absolute URLs — Full address, works from anywhere

```html
<a href="https://www.example.com/about">About Page</a>
<a href="https://github.com/your-username">My GitHub</a>
```

Use these when linking to other websites.

### Relative URLs — Relative to your current file

```html
<!-- Same folder -->
<a href="about.html">About</a>

<!-- Subfolder -->
<a href="pages/contact.html">Contact</a>

<!-- Parent folder -->
<a href="../index.html">Back to Home</a>

<!-- Two levels up -->
<a href="../../index.html">Way back home</a>
```

Use these when linking within your own project. They are shorter and work wherever your project is deployed.

### URL Best Practice

```
Your project structure:
├── index.html
├── about.html
└── pages/
    └── contact.html
```

From `index.html`:
- Link to about: `<a href="about.html">About</a>`
- Link to contact: `<a href="pages/contact.html">Contact</a>`

From `pages/contact.html`:
- Link to home: `<a href="../index.html">Home</a>`
- Link to about: `<a href="../about.html">About</a>`

---

## Opening in a New Tab — `target`

```html
<a href="https://github.com" target="_blank">GitHub (opens in new tab)</a>
```

`target="_blank"` makes the link open in a new browser tab. Use it for:
- External links (so users do not lose your page)
- Links to documents like PDFs

**Always add `rel="noopener noreferrer"` when using `target="_blank"`:**

```html
<a href="https://github.com" target="_blank" rel="noopener noreferrer">
  GitHub
</a>
```

This is a security measure. Without it, the new tab can access your page via JavaScript — a vulnerability known as "tabnapping". Modern browsers have fixed this, but the `rel` attribute is still considered best practice.

---

## Email and Phone Links

```html
<!-- Opens the user's email client -->
<a href="mailto:john@example.com">Send me an email</a>

<!-- With subject and body pre-filled -->
<a href="mailto:john@example.com?subject=Hello&body=Hi%20John,">Email John</a>

<!-- Phone link — useful on mobile -->
<a href="tel:+919876543210">Call +91 98765 43210</a>
```

---

## Anchor Links — Linking Within the Same Page

Large pages need a way to jump to specific sections. This uses `id` attributes.

**Step 1:** Give the destination element an `id`

```html
<h2 id="skills">My Skills</h2>
<h2 id="projects">My Projects</h2>
<h2 id="contact">Contact Me</h2>
```

**Step 2:** Link to it using `#id-name`

```html
<nav>
  <ul>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```

You can also link from another page:

```html
<a href="portfolio.html#projects">See my projects</a>
```

---

## Download Links

```html
<a href="files/cv.pdf" download>Download my CV (PDF)</a>

<!-- Suggest a filename -->
<a href="files/cv-john-doe.pdf" download="John-Doe-CV.pdf">Download CV</a>
```

The `download` attribute tells the browser to download the file rather than navigate to it. Works for files hosted on the same domain.

---

## What Makes a Good Link?

**The link text should describe the destination:**

```html
<!-- ❌ Bad — meaningless out of context -->
<p>To read more about HTML, <a href="html-guide.html">click here</a>.</p>

<!-- ✅ Good — the link text is self-describing -->
<p>Read our <a href="html-guide.html">complete HTML guide</a>.</p>
```

Screen reader users often navigate by jumping from link to link. If every link text just says "click here" or "read more", navigation becomes impossible.

---

## Wrap Blocks in Links (HTML5)

In older HTML you could only put inline content inside `<a>`. HTML5 allows block content too, as long as `<a>` does not contain interactive elements (like other links or buttons).

```html
<!-- ✅ Valid in HTML5 — the entire card is clickable -->
<a href="project-detail.html">
  <div class="project-card">
    <h3>My Weather App</h3>
    <p>A React app that shows local weather using the OpenWeather API.</p>
  </div>
</a>
```

---

## Quick Reference

| Syntax | What it does |
|--------|-------------|
| `href="https://..."` | External link (absolute URL) |
| `href="page.html"` | Internal link (relative URL) |
| `href="#section-id"` | Jump to section on same page |
| `href="mailto:..."` | Open email client |
| `href="tel:..."` | Dial a phone number |
| `target="_blank"` | Open in new tab |
| `rel="noopener noreferrer"` | Security fix for `target="_blank"` |
| `download` | Download file instead of navigating |

---

## 🧪 Exercises

**Exercise 1 — Write the links**

Write the correct HTML for:

a) A link to `https://css-tricks.com` that opens in a new tab  
b) A mailto link to `hello@mysite.com`  
c) An internal link to an element with `id="contact"` on the same page  

<details>
<summary>Show answer</summary>

```html
<!-- a -->
<a href="https://css-tricks.com" target="_blank" rel="noopener noreferrer">CSS Tricks</a>

<!-- b -->
<a href="mailto:hello@mysite.com">Email me</a>

<!-- c -->
<a href="#contact">Contact</a>
```
</details>

---

**Exercise 2 — Relative paths**

Given this project structure:
```
├── index.html
├── about.html
└── blog/
    ├── post-1.html
    └── post-2.html
```

Write a link from `post-1.html` to `about.html`.

<details>
<summary>Show answer</summary>

```html
<a href="../about.html">About</a>
```

From `post-1.html`, you need to go one level up (`../`) to reach `about.html` at the root.
</details>

---

**Exercise 3 — Improve the link text**

Rewrite this to use meaningful link text:

```html
<p>My CV is available. <a href="cv.pdf" download>Click here</a> to download it.</p>
```

<details>
<summary>Show answer</summary>

```html
<p>You can <a href="cv.pdf" download>download my CV</a> as a PDF.</p>
```
</details>

---

**Exercise 4 — Build a page navigation**

Create a simple navigation with links to three sections on the same page. The sections should have `id` attributes. Write both the navigation and the section headings.

<details>
<summary>Show answer</summary>

```html
<nav>
  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<!-- ...content... -->

<h2 id="about">About</h2>
<h2 id="skills">Skills</h2>
<h2 id="contact">Contact</h2>
```
</details>

---

> **Next:** [Module 09 — Images →](09-images.md)
