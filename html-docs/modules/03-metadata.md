# Module 03 — Metadata & the Head

> **Previous:** [← Module 02 — Document Structure](02-document-structure.md) | **Next:** [Module 04 — Headings & Paragraphs →](04-headings-paragraphs.md)

---

## What Lives in `<head>`?

The `<head>` is your page's backstage area. The audience (your user) never sees it directly, but everything that makes the show run smoothly lives here. Bad metadata = broken social previews, missing browser tab title, garbled characters, wrong language for screen readers.

Let us go through each element you will actually use.

---

## Character Encoding — `<meta charset>`

```html
<meta charset="UTF-8">
```

This must be the **first** element inside `<head>`. It tells the browser how to decode the characters in your file.

`UTF-8` can encode every character in every language on earth, plus emoji. There is no good reason to use anything else in 2024.

Without this, you will see characters like `Ã©` instead of `é`, or squares instead of Chinese characters. Embarrassing.

---

## Viewport — `<meta name="viewport">`

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

This tells the browser: *"Do not shrink my page to fit a desktop layout on a phone. Show it at normal size and let me handle the responsive design."*

Without this line, your page will look like a tiny, zoomed-out newspaper on a mobile phone. Always include it.

---

## Page Title — `<title>`

```html
<title>John's Portfolio — Frontend Developer</title>
```

The title appears in three important places:
1. The browser tab
2. The browser's history and bookmarks
3. Search engine result pages (the clickable blue link)

**Good title:** Descriptive, unique per page, under 60 characters  
**Bad title:** "Home" or "Page 1" or leaving it blank

---

## Meta Description — For Search Engines

```html
<meta name="description" content="John is a frontend developer based in Bangalore. View his projects, skills, and contact info.">
```

This is what appears under the title in Google search results. It does not affect your ranking directly, but a good description gets more clicks.

Keep it between 150–160 characters. Describe what is on the page.

---

## Author and Keywords

```html
<meta name="author" content="John Doe">
<meta name="keywords" content="HTML, frontend developer, portfolio, web design">
```

`author` is useful for documentation and CMS systems. `keywords` is largely ignored by modern search engines (it was abused for spam in the 1990s). You can include both but do not spend much time on them.

---

## Open Graph — Social Media Previews

When someone shares your link on WhatsApp, Twitter, or LinkedIn, the preview card (image, title, description) is controlled by Open Graph tags:

```html
<meta property="og:title" content="John's Portfolio">
<meta property="og:description" content="Frontend developer based in Bangalore.">
<meta property="og:image" content="https://johndoe.com/preview-image.jpg">
<meta property="og:url" content="https://johndoe.com">
<meta property="og:type" content="website">
```

These are optional but strongly recommended for any page that might be shared. Without them, social media sites will guess — and they guess badly.

---

## Favicon — The Tiny Tab Icon

```html
<link rel="icon" href="favicon.ico" type="image/x-icon">

<!-- Modern approach — supports different sizes and formats -->
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
```

The favicon is that tiny icon in the browser tab next to your page title. A `.ico` file (32x32 pixels) is the classic format. SVG favicons are the modern approach — they scale perfectly at any size.

Without a favicon, browsers show a generic document icon. It is a small detail that makes your page feel professional.

---

## Linking CSS

```html
<link rel="stylesheet" href="style.css">
```

This loads an external CSS file. The `rel="stylesheet"` tells the browser what kind of file it is. CSS files go in `<head>` so the browser has the styles ready before it renders the page body (prevents a flash of unstyled content).

---

## Linking JavaScript

```html
<!-- In <head> — loads before body renders (can delay page display) -->
<script src="app.js"></script>

<!-- Before </body> — loads after content, generally preferred -->
<script src="app.js"></script>

<!-- Modern approach — does not block rendering -->
<script src="app.js" defer></script>
```

The `defer` attribute tells the browser: "Download this script in the background, but run it only after the HTML is fully parsed." This is the recommended approach for most scripts.

---

## A Complete, Real-World Head

```html
<head>
  <!-- Always first -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Identity -->
  <title>John Doe — Frontend Developer</title>
  <meta name="description" content="Frontend developer portfolio. Projects, skills, contact.">
  <meta name="author" content="John Doe">

  <!-- Social sharing -->
  <meta property="og:title" content="John Doe — Frontend Developer">
  <meta property="og:description" content="Frontend developer portfolio. Projects, skills, contact.">
  <meta property="og:image" content="https://johndoe.com/og-image.jpg">
  <meta property="og:url" content="https://johndoe.com">

  <!-- Favicon -->
  <link rel="icon" href="favicon.svg" type="image/svg+xml">

  <!-- Styles -->
  <link rel="stylesheet" href="style.css">
</head>
```

---

## Quick Reference

| Element | Purpose |
|---------|---------|
| `<meta charset="UTF-8">` | Character encoding — supports all languages |
| `<meta name="viewport" ...>` | Proper mobile display |
| `<title>` | Browser tab + search result title |
| `<meta name="description">` | Search result snippet (150–160 chars) |
| `<meta property="og:...">` | Social media share preview |
| `<link rel="icon">` | Favicon in browser tab |
| `<link rel="stylesheet">` | Load external CSS |
| `<script defer>` | Load JavaScript without blocking render |

---

## 🧪 Exercises

**Exercise 1 — Order matters**

Which of these elements should come first in `<head>`, and why?

```html
<title>My Page</title>
<meta charset="UTF-8">
```

<details>
<summary>Show answer</summary>

`<meta charset="UTF-8">` should come first. The browser needs to know the character encoding before it reads anything else in the document, including the title. If the title contains special characters and the charset comes after, those characters might be decoded incorrectly.
</details>

---

**Exercise 2 — Write the head**

Write a complete `<head>` section for a recipe website page called "Classic Biryani Recipe" with a description of your choice.

<details>
<summary>Show answer</summary>

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Classic Biryani Recipe — Spice Kitchen</title>
  <meta name="description" content="Make the perfect aromatic biryani with this step-by-step recipe. Serves 4, ready in 90 minutes.">
  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="style.css">
</head>
```
</details>

---

**Exercise 3 — The missing link**

You have a CSS file at `css/main.css`. Write the `<link>` tag to include it.

<details>
<summary>Show answer</summary>

```html
<link rel="stylesheet" href="css/main.css">
```
</details>

---

**Exercise 4 — Social meta**

Add Open Graph tags to a page called "My Travel Blog" at URL `https://mytravelblog.com/post/goa-trip` with a description and image URL of your choice.

<details>
<summary>Show answer</summary>

```html
<meta property="og:title" content="Goa Trip — My Travel Blog">
<meta property="og:description" content="Three days in North Goa — beaches, food, and everything in between.">
<meta property="og:image" content="https://mytravelblog.com/images/goa-beach.jpg">
<meta property="og:url" content="https://mytravelblog.com/post/goa-trip">
<meta property="og:type" content="article">
```
</details>

---

> **Next:** [Module 04 — Headings & Paragraphs →](04-headings-paragraphs.md)
