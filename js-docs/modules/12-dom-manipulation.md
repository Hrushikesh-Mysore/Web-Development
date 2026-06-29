# Module 12 — DOM Manipulation

> **Previous:** [← Module 11 — The DOM](11-dom.md) | **Next:** [Module 13 — Events →](13-events.md)

**Sources:** [javascript.info — Modifying the document](https://javascript.info/modifying-document) · [MDN — Creating and manipulating elements](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

---

## Creating Elements

```javascript
// Create a new element — it is NOT in the page yet
const div = document.createElement("div");
const p   = document.createElement("p");
const img = document.createElement("img");

// Set it up before inserting
div.className   = "card";
div.textContent = "Hello!";
img.src         = "photo.jpg";
img.alt         = "A photo";
```

---

## Inserting Elements

```javascript
const container = document.querySelector(".container");
const newItem   = document.createElement("li");
newItem.textContent = "New list item";

// Append to end (most common)
container.appendChild(newItem);
container.append(newItem);           // Modern — also accepts strings
container.append("Plain text too");  // Adds a text node

// Prepend to start
container.prepend(newItem);

// Insert relative to another element
const reference = document.querySelector(".existing-item");
reference.before(newItem);   // Before the reference element
reference.after(newItem);    // After the reference element

// insertAdjacentHTML — insert raw HTML string at a position
container.insertAdjacentHTML("beforeend", "<li>Fast HTML insert</li>");
// positions: "beforebegin", "afterbegin", "beforeend", "afterend"
```

---

## Removing Elements

```javascript
const element = document.querySelector(".to-remove");

element.remove();   // Remove itself — modern, preferred

// Older way:
element.parentNode.removeChild(element);
```

---

## Cloning Elements

```javascript
const card = document.querySelector(".card");

// Shallow clone — copies element but not its children
const shallowCopy = card.cloneNode(false);

// Deep clone — copies element AND all its children
const deepCopy = card.cloneNode(true);

document.querySelector(".gallery").appendChild(deepCopy);
```

---

## Building and Injecting HTML Efficiently

### The performance-safe approach — `createElement`

```javascript
function createCard({ title, description, link }) {
  const article = document.createElement("article");
  article.className = "card";

  const h3 = document.createElement("h3");
  h3.textContent = title;

  const p = document.createElement("p");
  p.textContent = description;

  const a = document.createElement("a");
  a.href        = link;
  a.textContent = "Read more";

  article.append(h3, p, a);
  return article;
}

const container = document.querySelector(".cards");
const card = createCard({
  title: "My Project",
  description: "A cool thing I built.",
  link: "/projects/1"
});
container.appendChild(card);
```

### The fast approach — `innerHTML` (use carefully)

```javascript
// ⚠️ Never use innerHTML with user-supplied data — XSS risk
// ✅ Safe with your own static template strings
container.innerHTML = `
  <article class="card">
    <h3>${title}</h3>
    <p>${description}</p>
    <a href="${link}">Read more</a>
  </article>
`;
```

> **XSS warning:** Never inject `innerHTML` with content from user input, URL parameters, or any untrusted source. `<script>` tags and event handler attributes can execute arbitrary code. Use `textContent` for user-supplied text — it always renders as plain text, never as HTML.

---

## `DocumentFragment` — Batch Inserts Without Reflow

Inserting many elements one by one causes the browser to re-render after each insert. A `DocumentFragment` is an invisible container — build everything inside it, then insert once:

```javascript
const items = ["Apple", "Banana", "Cherry", "Mango"];
const ul    = document.querySelector("ul");

const fragment = document.createDocumentFragment();

items.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  fragment.appendChild(li);
});

ul.appendChild(fragment); // One DOM update, not four
```

---

## Quick Reference

| Method | Does |
|--------|------|
| `document.createElement(tag)` | Create a new element |
| `parent.appendChild(el)` | Add to end of parent |
| `parent.append(el / str)` | Add to end (modern) |
| `parent.prepend(el / str)` | Add to start |
| `el.before(el)` / `el.after(el)` | Insert before/after element |
| `parent.insertAdjacentHTML(pos, html)` | Insert HTML string at position |
| `el.remove()` | Remove element |
| `el.cloneNode(deep)` | Clone element |
| `document.createDocumentFragment()` | Batch insertion container |

---

## 🧪 Exercises

**Exercise 1 — Build a list**

Write JS to create a `<ul>` with three `<li>` items ("HTML", "CSS", "JavaScript") and append it to `document.body`.

<details>
<summary>Show answer</summary>

```javascript
const ul = document.createElement("ul");
const items = ["HTML", "CSS", "JavaScript"];

items.forEach(text => {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
});

document.body.appendChild(ul);
```
</details>

---

**Exercise 2 — Create and remove**

Select a `<div id="notice">` and remove it from the page.

<details>
<summary>Show answer</summary>

```javascript
document.getElementById("notice").remove();
```
</details>

---

**Exercise 3 — `DocumentFragment`**

Render an array of 100 numbers into a `<ul id="numbers">` using a `DocumentFragment` for efficiency.

<details>
<summary>Show answer</summary>

```javascript
const ul       = document.getElementById("numbers");
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
  const li = document.createElement("li");
  li.textContent = i;
  fragment.appendChild(li);
}

ul.appendChild(fragment);
```
</details>

---

> **Next:** [Module 13 — Events →](13-events.md)
