# Module 11 — The DOM

> **Previous:** [← Module 10 — Strings & Numbers](10-strings-numbers.md) | **Next:** [Module 12 — DOM Manipulation →](12-dom-manipulation.md)

**Sources:** [javascript.info — DOM tree](https://javascript.info/dom-nodes) · [javascript.info — Searching the DOM](https://javascript.info/searching-elements-dom) · [javascript.info — Node properties](https://javascript.info/basic-dom-node-properties) · [MDN — Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

---

## What is the DOM?

When a browser loads an HTML page, it reads the HTML and builds a **tree of objects** — one object for every element, attribute, and piece of text. This tree is the **Document Object Model**, or DOM.

JavaScript does not interact with the HTML text directly. It interacts with these objects. Change an object, the page updates. The browser handles the re-rendering.

```
HTML:                          DOM tree:
<html>                         document
  <body>                       └── html
    <h1>Hello</h1>                 └── body
    <p>World</p>                       ├── h1 ("Hello")
  </body>                             └── p ("World")
</html>
```

Every element in the DOM is a **node**. There are element nodes, text nodes, and comment nodes. You mostly work with element nodes.

---

## Selecting Elements

### `document.querySelector` — The One Selector to Rule Them All

Takes any valid CSS selector, returns the **first matching element**, or `null` if nothing matches:

```javascript
document.querySelector("h1")           // First <h1>
document.querySelector(".card")        // First element with class "card"
document.querySelector("#hero")        // Element with id "hero"
document.querySelector("nav a.active") // First active link inside nav
document.querySelector("[data-id='3']") // First element with data-id="3"
```

### `document.querySelectorAll` — Select Multiple Elements

Returns a **NodeList** (array-like) of all matching elements:

```javascript
const allCards = document.querySelectorAll(".card");
const allLinks = document.querySelectorAll("a");
const inputs   = document.querySelectorAll("input[type='text']");

// Loop over results
allCards.forEach(card => {
  console.log(card.textContent);
});

// Convert to a real array for array methods
const cardsArray = Array.from(allCards);
// Or:
const cardsArray = [...document.querySelectorAll(".card")];
```

### Older Selectors (still useful)

```javascript
document.getElementById("main-title")           // By id — fastest
document.getElementsByClassName("card")         // By class — live HTMLCollection
document.getElementsByTagName("p")              // By tag — live HTMLCollection
```

`querySelector`/`querySelectorAll` are preferred for their CSS selector flexibility. `getElementById` is still the fastest lookup when you need just one element by id.

---

## Reading Element Content

```javascript
const heading = document.querySelector("h1");

// Text content — just the text, no HTML tags
heading.textContent        // "Hello World"

// HTML content — includes inner HTML tags as a string
heading.innerHTML          // "<span>Hello</span> World"

// Value — for form inputs
const input = document.querySelector("input");
input.value                // "whatever the user typed"
```

---

## Reading and Setting Attributes

```javascript
const link = document.querySelector("a");

link.getAttribute("href")        // "/about"
link.setAttribute("href", "/contact")
link.removeAttribute("target")
link.hasAttribute("disabled")    // true or false

// Common attributes also have direct properties:
link.href      // Full URL (resolved)
link.id
link.className // The entire class string
```

---

## CSS Classes — `classList`

`classList` is the clean way to manage CSS classes:

```javascript
const btn = document.querySelector(".btn");

btn.classList.add("active")            // Add a class
btn.classList.remove("active")         // Remove a class
btn.classList.toggle("active")         // Add if absent, remove if present
btn.classList.contains("active")       // true / false
btn.classList.replace("old", "new")    // Replace one class with another

// Multiple classes at once
btn.classList.add("visible", "animated", "primary");
```

Do not manipulate `className` directly for multi-class management — it replaces the whole string. Always use `classList`.

---

## Reading and Setting Inline Styles

```javascript
const box = document.querySelector(".box");

// Read
box.style.backgroundColor   // "" (empty if not set inline)
box.style.width              // "200px" (if set inline)

// Set — camelCase property names
box.style.backgroundColor = "royalblue";
box.style.width            = "300px";
box.style.fontSize         = "1.5rem";

// Remove inline style
box.style.backgroundColor = "";
```

Inline styles have the highest specificity. For production, prefer adding/removing CSS classes instead of setting inline styles — keeps JS and CSS concerns separate.

---

## Reading Computed Styles

To get the *actual* applied style (from stylesheets, not just inline):

```javascript
const styles = window.getComputedStyle(element);
styles.getPropertyValue("color")       // "rgb(0, 0, 0)"
styles.getPropertyValue("font-size")   // "16px"
```

---

## Traversing the DOM

Moving around the tree from a reference node:

```javascript
const item = document.querySelector(".item");

item.parentElement           // Direct parent
item.parentElement.parentElement // Grandparent

item.children                // HTMLCollection of direct element children
item.firstElementChild       // First child element
item.lastElementChild        // Last child element
item.nextElementSibling      // Next sibling element
item.previousElementSibling  // Previous sibling element

// closest() — walk up the tree to find the nearest matching ancestor
const card = item.closest(".card");  // Finds nearest ancestor with class "card"
```

---

## `data-*` Attributes — Custom Data on Elements

HTML lets you attach custom data to elements with `data-` attributes:

```html
<div class="user-card" data-user-id="42" data-role="admin">Alex</div>
```

```javascript
const card = document.querySelector(".user-card");

card.dataset.userId   // "42"   — camelCase access
card.dataset.role     // "admin"

card.dataset.userId = "99";   // Set it
delete card.dataset.role;     // Remove it
```

`data-*` attributes are the right way to attach metadata to elements for JavaScript to use.

---

## Quick Reference

| Method / Property | Does |
|------------------|------|
| `querySelector(css)` | First matching element or `null` |
| `querySelectorAll(css)` | NodeList of all matches |
| `getElementById(id)` | Element by id |
| `.textContent` | Read/write text content |
| `.innerHTML` | Read/write HTML content |
| `.value` | Read/write input value |
| `.getAttribute(name)` | Get attribute value |
| `.setAttribute(name, val)` | Set attribute value |
| `.classList.add/remove/toggle` | Manage CSS classes |
| `.style.property` | Read/write inline style |
| `.parentElement` | Direct parent |
| `.children` | Child elements |
| `.nextElementSibling` | Next sibling |
| `.closest(css)` | Nearest matching ancestor |
| `.dataset.key` | Read/write `data-*` attributes |

---

## 🧪 Exercises

**Exercise 1 — Select elements**

Given this HTML, write JS to:

```html
<nav>
  <a href="/" class="nav-link active">Home</a>
  <a href="/about" class="nav-link">About</a>
  <a href="/contact" class="nav-link">Contact</a>
</nav>
```

a) Select the active link  
b) Select all nav links as an array  
c) Select the nav element itself  

<details>
<summary>Show answer</summary>

```javascript
// a
const activeLink = document.querySelector(".nav-link.active");

// b
const allLinks = [...document.querySelectorAll(".nav-link")];

// c
const nav = document.querySelector("nav");
```
</details>

---

**Exercise 2 — Read and update**

Select an `<h1>` and:
a) Read its text content  
b) Change it to "Updated Title"  
c) Add the class "highlighted" to it  

<details>
<summary>Show answer</summary>

```javascript
const heading = document.querySelector("h1");

// a
console.log(heading.textContent);

// b
heading.textContent = "Updated Title";

// c
heading.classList.add("highlighted");
```
</details>

---

**Exercise 3 — `data-*` attributes**

Given `<button data-product-id="101" data-action="add-to-cart">Add</button>`:

Read both data attributes and log a message like: `"Adding product 101 to cart"`.

<details>
<summary>Show answer</summary>

```javascript
const btn = document.querySelector("button");
const id     = btn.dataset.productId;
const action = btn.dataset.action;
console.log(`Adding product ${id} to cart`);
```
</details>

---

**Exercise 4 — classList toggle**

Write JS that toggles a class `"dark"` on `document.body` every time a button with id `"theme-toggle"` is clicked. (Hint: you need Module 13 for events — just write the toggle logic for now.)

<details>
<summary>Show answer</summary>

```javascript
const btn = document.getElementById("theme-toggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
```
</details>

---

> **Next:** [Module 12 — DOM Manipulation →](12-dom-manipulation.md)
