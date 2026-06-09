# Module 01 — What is JavaScript?

> **Previous:** [Home](../README.md) | **Next:** [Module 02 — Variables & Data Types →](02-variables-types.md)

**Sources:** [javascript.info — Introduction](https://javascript.info/intro) · [MDN — What is JavaScript?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript)

---

## What JavaScript Actually Is

JavaScript is a **programming language** that runs inside web browsers. When you open a webpage, the browser downloads three things:

- The **HTML** — the structure and content
- The **CSS** — the visual presentation
- The **JavaScript** — the behaviour and interactivity

Unlike HTML and CSS which are just descriptions, JavaScript is real code that *runs* and *does things*. It can read and change the page, respond to user actions, send and receive data from servers, do calculations, store information — anything you can imagine a program doing.

JavaScript was created in 1995 by Brendan Eich in just 10 days. He made some quirky design decisions in those 10 days that we are still living with today. You will meet them. They are charming in a "what were you thinking?" kind of way.

---

## How JavaScript Runs

Every modern browser has a built-in **JavaScript engine** that reads and runs your code:

| Browser | JS Engine |
|---------|-----------|
| Chrome, Edge | V8 |
| Firefox | SpiderMonkey |
| Safari | JavaScriptCore |

The engine reads your code, compiles it to machine code behind the scenes, and runs it — all in milliseconds. You do not need to install anything. The browser is your entire development environment.

---

## Adding JavaScript to a Page

### Method 1 — Inline `<script>` tag

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <h1>Hello</h1>

  <script>
    alert('JavaScript is running!');
  </script>
</body>
```

The `<script>` tag can go anywhere in HTML, but placing it just before `</body>` is the convention — the HTML loads first, then the script runs.

### Method 2 — External `.js` file (the right way for real projects)

```html
<!-- In the HTML file -->
<script src="app.js" defer></script>
```

```javascript
// In app.js
alert('Loaded from an external file!');
```

The `defer` attribute tells the browser: *download the script in the background, but only run it after the HTML has finished loading*. Always use `defer` for external scripts.

**Why external files?**
- One JS file can be used across many HTML pages
- Browser caches it — faster repeat visits
- Keeps your HTML clean and readable

---

## The Browser Console — Your Best Friend

Open it now. Press `F12` (or `Cmd+Option+I` on Mac) → click the **Console** tab.

The console is a live JavaScript environment. You can type any JavaScript directly and run it immediately. Throughout this documentation, *use the console constantly* — it is the fastest feedback loop you have.

```javascript
// Try typing these in the console right now:
1 + 1
"Hello" + " " + "World"
Math.random()
new Date()
```

### The three most important console methods

```javascript
console.log("Hello, world!");        // Print a value — your main debugging tool
console.error("Something broke!");   // Red error message
console.warn("Watch out for this");  // Yellow warning
```

`console.log()` is used in almost every piece of JavaScript code ever written. Get comfortable with it.

---

## `alert`, `prompt`, `confirm` — Quick Browser Popups

These are browser-specific functions, useful for learning but almost never used in real production code:

```javascript
// Show a message — blocks the page until dismissed
alert("Hello! I am a popup.");

// Ask the user for input — returns the string they typed, or null if cancelled
let name = prompt("What is your name?");
console.log("Hello, " + name);

// Ask a yes/no question — returns true (OK) or false (Cancel)
let isReady = confirm("Are you ready to learn JavaScript?");
console.log(isReady); // true or false
```

---

## `"use strict"` — Modern Mode

```javascript
'use strict';

// All your code below this line runs in strict mode
```

Added at the very top of your JS file or function, `'use strict'` enables **strict mode** — a stricter interpretation of JavaScript that:
- Prevents using undeclared variables
- Catches silent errors and makes them throw instead
- Disables some confusing old behaviours

Modern JavaScript (ES6 modules, classes) enables strict mode automatically. For learning scripts, add it manually at the top.

---

## JavaScript vs Java — Not the Same Thing

People confuse these constantly. They are not related. Java is to JavaScript what Car is to Carpet. The name was a 1995 marketing decision to capitalise on Java's popularity at the time.

| JavaScript | Java |
|-----------|------|
| Runs in browsers | Runs on servers (mostly) |
| Interpreted/JIT | Compiled |
| Dynamic typing | Static typing |
| Prototype-based OOP | Class-based OOP |
| Created in 10 days | Created over years |

---

## Quick Reference

| Concept | Detail |
|---------|--------|
| `<script>` tag | Embeds JS directly in HTML |
| `<script src="file.js" defer>` | Loads external JS after HTML |
| `console.log()` | Print to browser console |
| `alert()` | Browser popup message |
| `prompt()` | Browser input popup |
| `confirm()` | Browser yes/no popup |
| `'use strict'` | Enable strict mode |
| `F12` | Open browser DevTools |

---

## 🧪 Exercises

**Exercise 1 — Hello, Console**

Open your browser console and type a `console.log` that prints your name and the current year. (No peeking at how to get the current year — just print it as a number for now.)

<details>
<summary>Show answer</summary>

```javascript
console.log("John Doe — 2024");

// Or build it up:
console.log("Name: John Doe");
console.log("Year: 2024");
```
</details>

---

**Exercise 2 — Script tag placement**

Write the minimal HTML for a page that loads an external JavaScript file called `main.js`. The script should only run after the page HTML has loaded.

<details>
<summary>Show answer</summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <h1>My Page</h1>

  <script src="main.js" defer></script>
</body>
</html>
```

The `defer` attribute ensures the script runs only after the HTML is fully parsed.
</details>

---

**Exercise 3 — The console is your playground**

Open the browser console and find the answers to these using JavaScript:

a) What is `9 * 9`?  
b) What does `typeof "hello"` return?  
c) What does `typeof 42` return?  
d) What does `typeof true` return?

<details>
<summary>Show answer</summary>

```javascript
9 * 9           // 81
typeof "hello"  // "string"
typeof 42       // "number"
typeof true     // "boolean"
```

`typeof` tells you the data type of any value. You will use it more in Module 02.
</details>

---

**Exercise 4 — `prompt` greeting**

Write a small script (in a `<script>` tag or the console) that:
1. Asks the user for their name using `prompt`
2. Shows an `alert` that says "Hello, [name]! Welcome to JavaScript."

<details>
<summary>Show answer</summary>

```javascript
let name = prompt("What is your name?");
alert("Hello, " + name + "! Welcome to JavaScript.");
```
</details>

---

> **Next:** [Module 02 — Variables & Data Types →](02-variables-types.md)
