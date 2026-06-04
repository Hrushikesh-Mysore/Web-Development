# Module 07 — Advanced Text Features

> **Previous:** [← Module 06 — Lists](06-lists.md) | **Next:** [Module 08 — Links & Navigation →](08-links.md)

---

## Beyond Basic Text

You can say a lot with `<p>`, `<h1>`, and `<strong>`. But HTML has a whole toolkit of elements for specific kinds of text. Using the right element makes your content clearer to browsers, search engines, and assistive technology.

---

## Quotations

### Block Quotation — `<blockquote>`

For long quotes from another source, use `<blockquote>`. The `cite` attribute holds the URL of the original source (optional, but good practice).

```html
<blockquote cite="https://developer.mozilla.org">
  <p>
    HTML (HyperText Markup Language) is the most basic building block of the Web.
    It defines the meaning and structure of web content.
  </p>
</blockquote>
```

Browsers indent `<blockquote>` by default. CSS can style it however you want.

### Inline Quotation — `<q>`

For short quotes inside a sentence, use `<q>`. Browsers automatically add quotation marks.

```html
<p>
  As Tim Berners-Lee once said, 
  <q cite="https://www.w3.org/People/Berners-Lee/">The web does not just connect machines, 
  it connects people.</q>
</p>
```

### Citations — `<cite>`

Use `<cite>` for the title of a creative work — a book, film, article, painting.

```html
<p>
  I have been re-reading <cite>Don Quixote</cite> by Miguel de Cervantes.
</p>

<p>
  The concept is explained in <cite>HTML and CSS: Design and Build Websites</cite>.
</p>
```

---

## Abbreviations — `<abbr>`

```html
<p>
  I work with <abbr title="HyperText Markup Language">HTML</abbr> every day.
</p>

<p>
  The <abbr title="World Health Organization">WHO</abbr> published new guidelines.
</p>
```

The `title` attribute provides the full expansion of the abbreviation. Hovering over the abbreviation in a browser shows a tooltip with the full text. Screen readers can announce it. It is simple and helps everyone.

---

## Contact Information — `<address>`

```html
<address>
  <p>Written by <a href="mailto:john@example.com">John Doe</a></p>
  <p>42, Koramangala 5th Block</p>
  <p>Bangalore, Karnataka</p>
</address>
```

`<address>` marks up contact information. It is typically used inside `<footer>` for site-wide contact details, or near an `<article>` for the author's contact information.

It does not have to be a postal address — an email link or phone number qualifies too.

---

## Computer Code

### `<code>` — Inline Code

```html
<p>
  Use the <code>console.log()</code> function to print to the browser console.
</p>

<p>
  Set the <code>lang</code> attribute on your <code>&lt;html&gt;</code> element.
</p>
```

### `<pre>` — Preformatted Text Block

`<pre>` preserves whitespace and line breaks exactly as written. Used for code blocks.

```html
<pre><code>
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("World"));
</code></pre>
```

The combination of `<pre>` (preserves whitespace) and `<code>` (marks it as code) is the standard approach.

### Other Code-Related Elements

```html
<!-- Keyboard input — things the user types -->
<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>

<!-- Sample output from a program -->
<p>The command outputs: <samp>Hello, World!</samp></p>

<!-- Variable name in code or math -->
<p>The variable <var>x</var> represents an unknown value.</p>
```

---

## Time and Dates — `<time>`

```html
<!-- Human-readable date with machine-readable datetime attribute -->
<p>Published on <time datetime="2024-03-15">March 15, 2024</time></p>

<!-- Time of day -->
<p>The event starts at <time datetime="19:30">7:30pm</time></p>

<!-- Full timestamp -->
<p>Last updated: <time datetime="2024-03-15T14:00:00">March 15, 2024, 2pm</time></p>
```

`<time>` is useful because it gives machines (search engines, calendar apps) an unambiguous date format while showing humans whatever readable text you want.

The `datetime` attribute uses the ISO 8601 format: `YYYY-MM-DD` for dates, `HH:MM` for times.

---

## Superscript, Subscript, and Strikethrough

Already covered in Module 05, but here as a reminder:

```html
<p>E = mc<sup>2</sup></p>
<p>H<sub>2</sub>O is water.</p>
<p>Was: <s>₹999</s> Now: ₹599</p>  <!-- <s> = no longer accurate, unlike <del> which is editorial -->
```

Note the difference between `<s>` and `<del>`:
- `<del>` — editorial deletion (like tracked changes in a document)
- `<s>` — content that is no longer relevant (like a crossed-out old price)

---

## Quick Reference

| Element | Use for |
|---------|---------|
| `<blockquote>` | Long quotation from another source |
| `<q>` | Short inline quotation |
| `<cite>` | Title of a creative work |
| `<abbr title="...">` | Abbreviations with full expansion |
| `<address>` | Contact information |
| `<code>` | Inline code |
| `<pre>` | Block of preformatted text (code blocks) |
| `<kbd>` | Keyboard input |
| `<samp>` | Sample program output |
| `<var>` | Variable name |
| `<time datetime="...">` | Date or time with machine-readable value |
| `<s>` | Outdated/no-longer-relevant content |

---

## 🧪 Exercises

**Exercise 1 — The right quote element**

Which element would you use for each:

a) The title of the novel *1984* by George Orwell  
b) A two-line quote you are pulling from an article  
c) A short quote inside a sentence  
d) The abbreviation "CSS" with its full form  

<details>
<summary>Show answer</summary>

a) `<cite>` — title of a creative work  
b) `<blockquote>` — long quote from a source  
c) `<q>` — short inline quote  
d) `<abbr title="Cascading Style Sheets">CSS</abbr>`  
</details>

---

**Exercise 2 — Add the abbreviation**

Rewrite this sentence with the correct HTML so that hovering over "API" reveals its full meaning:

> I use the API every day.

<details>
<summary>Show answer</summary>

```html
<p>I use the <abbr title="Application Programming Interface">API</abbr> every day.</p>
```
</details>

---

**Exercise 3 — Code block**

Write the HTML to display this JavaScript code as a formatted code block on a webpage:

```
const add = (a, b) => a + b;
console.log(add(2, 3));
```

<details>
<summary>Show answer</summary>

```html
<pre><code>const add = (a, b) => a + b;
console.log(add(2, 3));
</code></pre>
```
</details>

---

**Exercise 4 — Keyboard shortcut**

Write HTML that says: "Press **Ctrl + Z** to undo." using the correct semantic elements.

<details>
<summary>Show answer</summary>

```html
<p>Press <kbd>Ctrl</kbd> + <kbd>Z</kbd> to undo.</p>
```
</details>

---

> **Next:** [Module 08 — Links & Navigation →](08-links.md)
