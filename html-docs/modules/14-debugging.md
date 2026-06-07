# Module 14 — Debugging HTML

> **Previous:** [← Module 13 — Forms & Buttons](13-forms.md) | **Next:** [Module 15 — Microdata →](15-microdata.md)

---

## HTML Does Not Crash — But it Can Still Break

Unlike JavaScript, HTML never throws a visible error. The browser always tries to render *something*, even from broken markup. That can feel reassuring — but it is actually dangerous. Your page can look fine in one browser and be completely mangled in another, because each browser handles broken HTML differently.

The solution is to write valid HTML, learn to spot problems, and use tools that catch mistakes before they reach users.

---

## Browser DevTools — Your Most Useful Tool

Every browser ships with DevTools. Open them with `F12` or `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac).

### The Elements Panel

The Elements panel shows the **live DOM** — the browser's interpreted version of your HTML, not your source file. This is crucial to understand: if your HTML has errors, the browser corrects them silently, and the Elements panel shows the corrected version. Different browsers may correct invalid HTML differently, which is why invalid markup can create inconsistent layouts.

```
What you wrote:          What the browser shows in DevTools:
──────────────────       ──────────────────────────────────
<p>Hello              →  <p>Hello</p>      ← browser added closing tag
<p><strong>World      →  <p><strong>World</strong></p>
<table>               →  <table><tbody>... ← browser inserted <tbody>
  <tr><td>data
```

If your source and the DevTools view differ, the browser is correcting your errors. Fix them in your source.

### Inspecting an Element

Right-click any element on the page → "Inspect". DevTools opens and highlights that element in the HTML tree. You can:
- See exactly what HTML is rendered
- See which CSS is applied
- Edit the HTML or CSS live (changes are not saved — but great for experimenting)
- See computed dimensions and box model

---

## The HTML Validator

The most reliable automated way to verify your HTML is the W3C Validator:

**validate at** <https://validator.w3.org>

You can validate by:
- **URL** — paste your live site URL
- **File upload** — upload your `.html` file
- **Direct input** — paste your HTML code

It outputs a list of errors and warnings with line numbers. Work through them top to bottom — fixing one error often resolves several others below it.

**Common errors the validator catches:**
- Missing `alt` on `<img>`
- Missing `lang` on `<html>`
- Unclosed tags
- Incorrect nesting
- Duplicate `id` attributes
- Missing `<!DOCTYPE html>`

> [!tip]
> Fix all errors first. Then review warnings and decide whether they apply to your document.

---

## Common HTML Mistakes and How to Fix Them

### 1. Unclosed Tags

```html
<!-- ❌ Missing closing tag -->
<p>This paragraph never ends.
<p>This is a new paragraph but the browser may merge them.

<!-- ✅ Fixed -->
<p>This paragraph ends properly.</p>
<p>And this one too.</p>
```

### 2. Wrong Nesting Order

```html
<!-- ❌ Tags close in wrong order -->
<p>I am <strong>learning HTML</p></strong>

<!-- ✅ Fixed -->
<p>I am <strong>learning HTML</strong></p>
```

### 3. Missing `alt` on Images

```html
<!-- ❌ No alt attribute -->
<img src="photo.jpg">

<!-- ✅ Fixed — descriptive alt -->
<img src="photo.jpg" alt="Portrait of John in a library">

<!-- ✅ Fixed — decorative, intentionally empty -->
<img src="decorative-line.svg" alt="">
```

### 4. Duplicate `id` Values

```html
<!-- ❌ Two elements with the same id -->
<h2 id="intro">Introduction</h2>
<p id="intro">Some intro text.</p>

<!-- ✅ Fixed — ids must be unique on the page -->
<h2 id="intro-heading">Introduction</h2>
<p id="intro-text">Some intro text.</p>
```

IDs must be unique. Using the same `id` twice breaks anchor links, CSS specificity, and JavaScript `getElementById()`.

### 5. Invalid Content Nesting

```html
<!-- ❌ Block element inside inline element -->
<span>
  <h2>This is wrong</h2>
</span>

<!-- ✅ Fixed -->
<div>
  <h2>This is correct</h2>
</div>
```

---

> [!tip]
> Certain elements cannot legally contain others according to HTML's content model. For example, a `<span>` should not wrap heading elements.

---
### 6. Missing `<!DOCTYPE html>`

Without this, browsers enter quirks mode and rendering becomes unpredictable. Always put it on line 1.

### 7. Missing `<label>` for Inputs

```html
<!-- ❌ Input with no label -->
<input type="text" placeholder="Your name">

<!-- ✅ Fixed -->
<label for="name">Your Name</label>
<input type="text" id="name" name="name">
```

---

## Reading Error Messages

When the validator flags an error, do not panic. Read it carefully.

**Example error:**
```
Error: An img element must have an alt attribute, except under certain conditions. 
Line 24, column 5.
```

→ Go to line 24 in your file. Find the `<img>` tag. Add an `alt` attribute.

**Example error:**
```
Error: End tag p seen but there were open elements.
Line 38, column 5.
```

→ This usually means a tag opened before `<p>` on or before line 38 was never closed. Look above line 38 for an unclosed element.

---

## Accessibility Checking

Beyond HTML validity, check accessibility with:

- **axe DevTools** — a free browser extension that audits your page for accessibility issues
- **WAVE** — [wave.webaim.org](https://wave.webaim.org) — visual accessibility report
- **Lighthouse** — available within Chrome DevTools. Open DevTools and look for the Lighthouse panel.
- **Screen reader** — NVDA (Windows, free), VoiceOver (Mac, built-in), TalkBack (Android)

> [!tip]
> The Console is mainly used for JavaScript errors, but it can also show warnings related to HTML, accessibility, and resource loading.

---

## VS Code Tips for Catching Errors Early

VS Code highlights HTML errors as you type. Install these extensions:

- **HTMLHint** — flags common HTML mistakes inline
- **Prettier** — auto-formats your HTML on save (catches some structural issues)
- **Auto Rename Tag** — when you rename an opening tag, the closing tag updates automatically (prevents mismatched tags)

Set VS Code to format on save:
```json
// settings.json
{
  "editor.formatOnSave": true
}
```

---
## Debugging Strategy

When a page breaks:

1. Validate the HTML.
2. Check DevTools.
3. Look near the element that appears broken.
4. Look above that element for an unclosed tag.
5. Fix one error at a time and retest.

---
## Quick Debugging Checklist

Before publishing any HTML page, run through this:

- [ ] `<!DOCTYPE html>` on line 1
- [ ] `<html lang="en">` (or appropriate language code)
- [ ] `<meta charset="UTF-8">` first in `<head>`
- [ ] `<title>` present and descriptive
- [ ] All `<img>` elements have `alt` attributes
- [ ] All `<input>` elements have associated `<label>` elements
- [ ] No duplicate `id` values
- [ ] All tags properly closed and nested
- [ ] Validated at [validator.w3.org](https://validator.w3.org)

---

## Exercises

**Exercise 1 — Spot the bugs**

Find all the HTML errors in this code:

```html
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Welcome
  <p>Read <a href="article.html">my article</p></a>
  <img src="photo.jpg">
  <div id="box">First</div>
  <div id="box">Second</div>
</body>
</html>
```

<details>
<summary>Show answer</summary>

Six errors:
1. Missing `<!DOCTYPE html>`
2. Missing `lang` attribute on `<html>`
3. Unclosed `<h1>` tag
4. `</a>` closes after `</p>` — wrong nesting order
5. `<img>` is missing an `alt` attribute
6. Duplicate `id="box"` on two `<div>` elements

Fixed version:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <h1>Welcome</h1>
  <p>Read <a href="article.html">my article</a></p>
  <img src="photo.jpg" alt="Description of photo">
  <div id="box-1">First</div>
  <div id="box-2">Second</div>
</body>
</html>
```
</details>

---

**Exercise 2 — DevTools task**

Open any website in your browser, press `F12`, go to the Elements panel, and find:
- The `<title>` element in `<head>`
- One `<img>` element and check if it has an `alt` attribute
- Any `<nav>` element

This is a hands-on exercise — no written answer, but practice with DevTools is essential.

---

**Exercise 3 — Validate your work**

Take any HTML file you have written in the previous modules and paste it into [validator.w3.org](https://validator.w3.org). Fix any errors it reports. Write down the errors you found and what fixed them.

This is an open-ended exercise. The point is to practise using the validator.

---

**Exercise 4 — The broken form**

Fix the accessibility issues in this form:

```html
<form>
  <input type="text" placeholder="Your name">
  <input type="email" placeholder="Email">
  <textarea placeholder="Message"></textarea>
  <button>Submit</button>
</form>
```

<details>
<summary>Show answer</summary>

Every input needs a `<label>`. The button needs a `type`. The form needs `action` and `method`.

```html
<form action="/contact" method="post">
  <div>
    <label for="name">Your Name</label>
    <input type="text" id="name" name="name" placeholder="e.g. John Doe">
  </div>
  <div>
    <label for="email">Email Address</label>
    <input type="email" id="email" name="email">
  </div>
  <div>
    <label for="message">Message</label>
    <textarea id="message" name="message" placeholder="Write your message..."></textarea>
  </div>
  <button type="submit">Submit</button>
</form>
```
</details>

---

> **Next:** [Module 15 — Microdata & Structured Data →](15-microdata.md)
