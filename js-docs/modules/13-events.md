# Module 13 — Events

> **Previous:** [← Module 12 — DOM Manipulation](12-dom-manipulation.md) | **Next:** [Module 14 — Forms & Validation →](14-forms.md)

**Sources:** [javascript.info — Introduction to Events](https://javascript.info/introduction-browser-events) · [javascript.info — Bubbling](https://javascript.info/bubbling-and-capturing) · [javascript.info — Event delegation](https://javascript.info/event-delegation) · [MDN — Introduction to events](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events)

---

## What is an Event?

An event is something that happens in the browser — a click, a keypress, a page load, a mouse movement, a form submission. JavaScript can listen for these and run code in response.

---

## `addEventListener` — The Right Way

```javascript
const btn = document.querySelector("#myBtn");

btn.addEventListener("click", function() {
  console.log("Button was clicked!");
});

// With arrow function
btn.addEventListener("click", () => {
  console.log("Clicked!");
});

// Named function — easier to remove later
function handleClick() {
  console.log("Clicked!");
}
btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick); // Must pass the same function reference
```

> **Never use inline HTML event handlers** in real projects (`onclick="doThing()"` in HTML). They mix HTML and JS, are harder to manage, and are impossible to remove cleanly.

---

## The Event Object

Every event handler receives an **event object** with information about what happened:

```javascript
document.querySelector("a").addEventListener("click", (event) => {
  event.preventDefault();        // Stop the default action (following the link)
  console.log(event.type);       // "click"
  console.log(event.target);     // The element that was clicked
  console.log(event.currentTarget); // The element the listener is attached to
  console.log(event.clientX, event.clientY); // Mouse position
});
```

---

## Common Event Types

```javascript
// Mouse events
element.addEventListener("click",       handler); // Single click
element.addEventListener("dblclick",    handler); // Double click
element.addEventListener("mouseenter",  handler); // Mouse enters element
element.addEventListener("mouseleave",  handler); // Mouse leaves element
element.addEventListener("mousemove",   handler); // Mouse moves over element
element.addEventListener("contextmenu", handler); // Right-click

// Keyboard events
document.addEventListener("keydown",  e => console.log("Down:", e.key));
document.addEventListener("keyup",    e => console.log("Up:", e.key));
// e.key: "Enter", "Escape", "ArrowUp", "a", " " etc.

// Form events
input.addEventListener("input",  e => console.log("Value:", e.target.value));
input.addEventListener("change", handler); // Fires on blur after value changed
input.addEventListener("focus",  handler); // Element gains focus
input.addEventListener("blur",   handler); // Element loses focus
form.addEventListener("submit",  e => { e.preventDefault(); /* handle */ });

// Document/window events
document.addEventListener("DOMContentLoaded", handler); // HTML parsed and DOM ready
window.addEventListener("load",   handler);   // Everything including images loaded
window.addEventListener("resize", handler);   // Viewport size changed
window.addEventListener("scroll", handler);   // Page scrolled
```

---

## Event Bubbling

When an event fires on an element, it **bubbles up** through all its ancestors. A click on a `<button>` inside a `<div>` also triggers click handlers on the `<div>`, `<body>`, and `<html>`.

```javascript
document.querySelector("button").addEventListener("click", () => {
  console.log("Button clicked");
});

document.querySelector("div").addEventListener("click", () => {
  console.log("Div clicked");  // Also fires when the button is clicked!
});
```

### Stop bubbling with `stopPropagation`

```javascript
button.addEventListener("click", (e) => {
  e.stopPropagation(); // Event stops here — div never hears about it
  console.log("Button only");
});
```

---

## Event Delegation — One Listener for Many Elements

Instead of adding a listener to every item, add one listener to their parent. Use `event.target` to determine what was clicked:

```javascript
// ❌ Inefficient — listener on every item
document.querySelectorAll(".menu-item").forEach(item => {
  item.addEventListener("click", handleItemClick);
});

// ✅ Delegation — one listener on the parent
document.querySelector(".menu").addEventListener("click", (e) => {
  const item = e.target.closest(".menu-item"); // Find the clicked item
  if (!item) return; // Click was not on an item

  console.log("Clicked:", item.dataset.action);
});
```

**Why delegation is better:**
- Works for elements added to the DOM after the listener is set up
- Far fewer event listeners — better performance
- Single place to manage the logic

---

## Real-World Patterns

### Toggle a modal

```javascript
const modal   = document.querySelector(".modal");
const openBtn = document.querySelector("#open-modal");
const closeBtn = document.querySelector("#close-modal");

openBtn.addEventListener("click", () => {
  modal.classList.add("visible");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("visible");
});

// Close when clicking backdrop (outside the modal box)
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("visible");
});
```

### Keyboard shortcuts

```javascript
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
  if (e.key === "Enter" && e.ctrlKey) submitForm();
  if (e.key === "/" && !e.ctrlKey) focusSearchBar();
});
```

### Debounce — rate-limit frequent events

```javascript
// Without debounce — fires hundreds of times per second
window.addEventListener("resize", () => updateLayout());

// With debounce — fires only after the user stops resizing for 300ms
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

window.addEventListener("resize", debounce(() => updateLayout(), 300));
```

---

## Quick Reference

| Event | Fires when |
|-------|-----------|
| `click` | Element is clicked |
| `dblclick` | Element is double-clicked |
| `mouseenter` | Mouse enters element (no bubbling) |
| `mouseleave` | Mouse leaves element (no bubbling) |
| `keydown` | Key is pressed |
| `keyup` | Key is released |
| `input` | Input value changes |
| `change` | Input loses focus after change |
| `focus` / `blur` | Focus gained / lost |
| `submit` | Form is submitted |
| `DOMContentLoaded` | HTML parsed, DOM ready |
| `load` | Everything loaded |
| `scroll` | Page scrolled |
| `resize` | Viewport resized |

| Method / Property | Does |
|------------------|------|
| `addEventListener(event, fn)` | Attach a handler |
| `removeEventListener(event, fn)` | Remove a handler |
| `event.preventDefault()` | Stop default browser action |
| `event.stopPropagation()` | Stop bubbling |
| `event.target` | Element that triggered the event |
| `event.currentTarget` | Element the listener is on |
| `event.key` | Key name for keyboard events |

---

## 🧪 Exercises

**Exercise 1 — Click counter**

Create a button with id `"counter-btn"` and a `<p>` with id `"count"`. Every click increments a counter and updates the paragraph's text content.

<details>
<summary>Show answer</summary>

```javascript
let count = 0;
const btn   = document.getElementById("counter-btn");
const display = document.getElementById("count");

btn.addEventListener("click", () => {
  count++;
  display.textContent = `Clicks: ${count}`;
});
```
</details>

---

**Exercise 2 — Keyboard listener**

Log a message every time the user presses `Enter` in a text input (`#search-input`).

<details>
<summary>Show answer</summary>

```javascript
document.getElementById("search-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Searching for:", e.target.value);
  }
});
```
</details>

---

**Exercise 3 — Event delegation**

Given a `<ul id="todo-list">` that will have `<li>` items with a "delete" button inside each, write a single delegated event listener on the `<ul>` that removes the `<li>` when its delete button is clicked.

<details>
<summary>Show answer</summary>

```javascript
document.getElementById("todo-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.closest("li").remove();
  }
});
```
</details>

---

**Exercise 4 — prevent default**

Prevent all `<a>` tags in `.nav` from navigating, and log their `href` instead.

<details>
<summary>Show answer</summary>

```javascript
document.querySelector(".nav").addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return;

  e.preventDefault();
  console.log("Would navigate to:", link.getAttribute("href"));
});
```
</details>

---

> **Next:** [Module 14 — Forms & Validation →](14-forms.md)
