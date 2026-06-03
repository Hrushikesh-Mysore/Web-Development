# Module 05 — Emphasis & Importance

> **Previous:** [← Module 04 — Headings & Paragraphs](04-headings-paragraphs.md) | **Next:** [Module 06 — Lists →](06-lists.md)

---

## Semantic vs Visual Formatting

Here is the trap beginners fall into: they use HTML elements to control *how things look* instead of *what things mean*.

`<b>` makes text **bold**. `<strong>` makes text **important** — and the browser *also* makes it bold as a visual hint.

The difference matters because:
- A screen reader will announce `<strong>` text with emphasis in its voice
- Search engines weight `<strong>` content more than surrounding text
- CSS can restyle `<b>` and `<strong>` differently if needed

**Use semantic elements. Let CSS handle the visuals.**

---

## `<strong>` — Strong Importance

```html
<p>
  <strong>Do not ignore this warning.</strong> The machine will overheat.
</p>

<p>
  The sale ends <strong>tonight at midnight</strong>. Do not miss it.
</p>
```

Use `<strong>` when the content is genuinely important — a warning, a critical instruction, something the reader absolutely must not miss.

Browsers render it bold by default. Screen readers announce it with stronger emphasis.

---

## `<em>` — Emphasis (Stress)

```html
<p>I <em>really</em> did not want to go.</p>

<p>Are you <em>sure</em> about that?</p>
```

`<em>` adds spoken emphasis — the equivalent of stressing a word when you speak. It changes the meaning of the sentence.

Compare:
- "I *did* say that" — emphasises that you said it (implying someone doubts you)
- "I did *say* that" — emphasises the act of saying (not just thinking it)
- "I did say *that*" — emphasises what was said (not something else)

Browsers render it italic by default. Screen readers adjust their tone.

---

## `<b>` — Bring Attention (Without Importance)

```html
<p>
  The <b>quick brown fox</b> jumps over the lazy dog.
  This sentence is used for font testing.
</p>

<p>
  Search results for: <b>learn HTML</b>
</p>
```

Use `<b>` when you want to draw attention to text for a practical reason — a keyword in search results, a technical term on first use — but without implying urgency or importance.

Looks bold, but carries no semantic weight.

---

## `<i>` — Idiomatic Text (Without Stress)

```html
<p>The term <i>schadenfreude</i> means pleasure from others' misfortune.</p>

<p>I thought: <i>this is going to be a long day.</i></p>

<p>The ship was called <i>The Black Pearl</i>.</p>
```

Use `<i>` for:
- Foreign words and phrases
- Technical terms on first use
- Inner thoughts in narrative writing
- Titles of films, books, ships (though `<cite>` is more specific for that)

Looks italic, but carries no stress emphasis.

---

## `<mark>` — Highlighted / Relevant Text

```html
<p>
  The search term <mark>semantic HTML</mark> appeared 47 times in the document.
</p>

<p>
  Remember to review <mark>section 4.2</mark> before the meeting.
</p>
```

`<mark>` is like the yellow highlighter on a printed page. Use it for text that is relevant in context — search results highlighting, things to review, things pulled out for a specific reason.

Browsers render it with a yellow background by default.

---

## `<small>` — Fine Print

```html
<p>
  Buy now for only ₹999! 
  <small>Price excludes taxes and shipping. Offer valid until stock lasts.</small>
</p>
```

Use `<small>` for legal disclaimers, copyright notices, and fine print — text that is less prominent, not just smaller.

---

## `<del>` and `<ins>` — Deleted and Inserted Text

```html
<p>The meeting is on <del>Friday</del> <ins>Thursday</ins>.</p>

<p>Original price: <del>₹1,999</del> Now: ₹999</p>
```

`<del>` marks text that has been removed. `<ins>` marks text that has been added. Browsers render `<del>` with a strikethrough and `<ins>` with an underline by default.

These are excellent for showing document edits, corrections, or price changes.

---

## `<sup>` and `<sub>` — Superscript and Subscript

```html
<!-- Superscript — maths and footnotes -->
<p>x<sup>2</sup> + y<sup>2</sup> = r<sup>2</sup></p>
<p>According to Einstein,<sup>1</sup> energy equals mass times speed squared.</p>

<!-- Subscript — chemical formulas -->
<p>Water is H<sub>2</sub>O.</p>
<p>CO<sub>2</sub> is a greenhouse gas.</p>
```

---

## Summary — Which Tag to Use?

| Want to convey | Use this |
|----------------|----------|
| This is critically important | `<strong>` |
| Stress this word (changes sentence meaning) | `<em>` |
| Draw attention (no urgency) | `<b>` |
| Foreign word, title, technical term | `<i>` |
| Highlight as relevant | `<mark>` |
| Legal fine print, less prominent text | `<small>` |
| Removed content | `<del>` |
| Added/inserted content | `<ins>` |
| Superscript (exponents, footnotes) | `<sup>` |
| Subscript (chemical formulas) | `<sub>` |

---

## 🧪 Exercises

**Exercise 1 — Choose the right tag**

Which element should you use in each case?

a) A warning that says "Do not leave the stove unattended"  
b) A foreign word like *schadenfreude*  
c) A strikethrough on an old price  
d) The word "really" in "I *really* mean this"  
e) A highlighted search term in results  

<details>
<summary>Show answer</summary>

a) `<strong>` — it is genuinely important  
b) `<i>` — foreign term  
c) `<del>` — deleted/removed content  
d) `<em>` — stress emphasis  
e) `<mark>` — relevant in search context  
</details>

---

**Exercise 2 — Rewrite semantically**

This code uses `<b>` and `<i>` for everything. Rewrite it with the correct semantic elements:

```html
<p>
  <b>Warning:</b> Do not use this chemical near <b>open flames</b>.
  The technical name is <i>dihydrogen monoxide</i>.
</p>
```

<details>
<summary>Show answer</summary>

```html
<p>
  <strong>Warning:</strong> Do not use this chemical near <strong>open flames</strong>.
  The technical name is <i>dihydrogen monoxide</i>.
</p>
```

"Warning" and "open flames" are genuine safety warnings — they need `<strong>`. The technical name is a foreign/technical term — `<i>` is correct there.
</details>

---

**Exercise 3 — Chemistry time**

Write the chemical formula for sulfuric acid (H₂SO₄) correctly in HTML.

<details>
<summary>Show answer</summary>

```html
<p>Sulfuric acid: H<sub>2</sub>SO<sub>4</sub></p>
```
</details>

---

**Exercise 4 — Price update**

Show that a product's price changed from ₹2,500 to ₹1,800, using the correct HTML elements.

<details>
<summary>Show answer</summary>

```html
<p>Price: <del>₹2,500</del> <ins>₹1,800</ins></p>
```
</details>

---

> **Next:** [Module 06 — Lists →](06-lists.md)
