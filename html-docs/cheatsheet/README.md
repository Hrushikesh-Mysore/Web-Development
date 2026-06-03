# ⚡ HTML Cheat Sheet

> The 20% of HTML you will use 80% of the time. One page. No fluff.

---

## Document Shell

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <meta name="description" content="150–160 char description.">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- content -->
</body>
</html>
```

---

## Page Layout (Semantic)

```html
<header>      <!-- logo, nav -->
<nav>         <!-- navigation links -->
<main>        <!-- primary content — one per page -->
  <section>   <!-- thematic grouping — always has a heading -->
  <article>   <!-- self-contained content (post, card, comment) -->
  <aside>     <!-- sidebar, related links -->
<footer>      <!-- copyright, secondary nav, contact -->
```

---

## Text

```html
<h1>–<h6>          Headings — h1 once per page, don't skip levels
<p>                Paragraph
<strong>           Important (bold)
<em>               Stressed emphasis (italic)
<br>               Line break — only in addresses & poems
<hr>               Thematic section break
<blockquote>       Long quote from a source
<q>                Short inline quote
<abbr title="..."> Abbreviation
<code>             Inline code
<pre><code>        Code block
<time datetime=""> Date or time
<mark>             Highlighted / relevant text
<small>            Fine print
<del>              Removed content (strikethrough)
<ins>              Added content (underline)
<sup> / <sub>      Superscript / subscript
```

---

## Links

```html
<a href="page.html">Internal</a>
<a href="https://example.com" target="_blank" rel="noopener noreferrer">External</a>
<a href="#section-id">Anchor</a>
<a href="mailto:you@email.com">Email</a>
<a href="tel:+911234567890">Phone</a>
<a href="file.pdf" download>Download</a>
```

---

## Images & Media

```html
<!-- Image -->
<img src="photo.jpg" alt="Description" width="800" height="600">

<!-- Image with caption -->
<figure>
  <img src="photo.jpg" alt="Description">
  <figcaption>Caption text.</figcaption>
</figure>

<!-- Responsive image -->
<img
  src="med.jpg"
  srcset="sm.jpg 400w, med.jpg 800w, lg.jpg 1200w"
  sizes="(max-width: 600px) 400px, 800px"
  alt="Description"
>

<!-- Modern format with fallback -->
<picture>
  <source srcset="img.webp" type="image/webp">
  <img src="img.jpg" alt="Description">
</picture>

<!-- Video -->
<video controls poster="thumb.jpg">
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
  <track kind="subtitles" src="subs.vtt" srclang="en" label="English" default>
  <p>Browser can't play video. <a href="video.mp4">Download</a>.</p>
</video>

<!-- Audio -->
<audio controls>
  <source src="audio.ogg" type="audio/ogg">
  <source src="audio.mp3" type="audio/mpeg">
</audio>
```

---

## Lists

```html
<!-- Unordered -->
<ul>
  <li>Item</li>
</ul>

<!-- Ordered -->
<ol>
  <li>Step one</li>
</ol>

<!-- Description -->
<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
</dl>

<!-- Navigation menu pattern -->
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
```

---

## Tables

```html
<table>
  <caption>Table title — always include</caption>
  <thead>
    <tr>
      <th scope="col">Column A</th>
      <th scope="col">Column B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Row label</th>
      <td>Data</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>Sum</td>
    </tr>
  </tfoot>
</table>

<!-- Span attributes -->
<td colspan="2">Spans 2 columns</td>
<td rowspan="3">Spans 3 rows</td>
```

---

## Forms

```html
<form action="/submit" method="post">
  <fieldset>
    <legend>Section title</legend>

    <!-- Text inputs -->
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required autocomplete="name">

    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>

    <label for="msg">Message</label>
    <textarea id="msg" name="message" rows="4"></textarea>

    <!-- Dropdown -->
    <label for="role">Role</label>
    <select id="role" name="role">
      <option value="">-- Choose --</option>
      <option value="dev">Developer</option>
      <option value="design">Designer</option>
    </select>

    <!-- Checkboxes -->
    <fieldset>
      <legend>Skills</legend>
      <label><input type="checkbox" name="skill" value="html"> HTML</label>
      <label><input type="checkbox" name="skill" value="css"> CSS</label>
    </fieldset>

    <!-- Radio buttons -->
    <fieldset>
      <legend>Level</legend>
      <label><input type="radio" name="level" value="jr"> Junior</label>
      <label><input type="radio" name="level" value="sr"> Senior</label>
    </fieldset>

    <button type="submit">Submit</button>
    <button type="reset">Clear</button>
  </fieldset>
</form>
```

**Common input types:**
`text` `email` `password` `tel` `url` `number` `date` `search` `checkbox` `radio` `file` `hidden`

**Validation attributes:**
`required` `minlength="n"` `maxlength="n"` `min="n"` `max="n"` `pattern="regex"`

---

## Microdata (Schema.org)

```html
<!-- Person -->
<div itemscope itemtype="https://schema.org/Person">
  <span itemprop="name">Your Name</span>
  <span itemprop="jobTitle">Your Title</span>
  <a itemprop="email" href="mailto:you@email.com">you@email.com</a>
  <a itemprop="sameAs" href="https://github.com/you">GitHub</a>

  <!-- Nested organisation -->
  <div itemprop="worksFor" itemscope itemtype="https://schema.org/Organization">
    <span itemprop="name">Company Name</span>
  </div>
</div>

<!-- Hidden machine value -->
<meta itemprop="priceCurrency" content="INR">
```

**Test at:** [search.google.com/test/rich-results](https://search.google.com/test/rich-results)

---

## Head Extras Worth Knowing

```html
<!-- Social sharing (Open Graph) -->
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Description.">
<meta property="og:image" content="https://yoursite.com/image.jpg">
<meta property="og:url" content="https://yoursite.com">

<!-- Favicon -->
<link rel="icon" href="favicon.svg" type="image/svg+xml">
```

---

## Accessibility Reminders

| Do this | Why |
|---------|-----|
| `alt` on every `<img>` | Screen readers + broken image fallback |
| `<label for="id">` on every input | Bigger click target + screen reader |
| `scope` on `<th>` | Screen readers navigate tables correctly |
| `<caption>` on every `<table>` | Context before entering the table |
| `aria-label` on duplicate `<nav>` | Distinguishes "Main nav" from "Footer nav" |
| One `<h1>` per page | Clear document hierarchy |
| Don't skip heading levels | Screen reader navigation works correctly |
| Validate at [validator.w3.org](https://validator.w3.org) | Catch errors before users do |

---

*Full documentation → [Back to README](../README.md)*
