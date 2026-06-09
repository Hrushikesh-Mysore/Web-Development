# ⚡ Learn JavaScript — From Zero to Async

> **Plain English. Real code. No fluff.**  
> Built on **javascript.info** (the best beginner resource on the internet) + **MDN** (the definitive reference).

[![javascript.info](https://img.shields.io/badge/Primary%20Source-javascript.info-yellow)](https://javascript.info)
[![MDN](https://img.shields.io/badge/Reference-MDN%20Web%20Docs-blue?logo=mozilla)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Modules](https://img.shields.io/badge/Modules-18-green)](#-learning-path)
[![Level](https://img.shields.io/badge/Level-Beginner%20→%20Intermediate-orange)](#)
[![Prerequisite](https://img.shields.io/badge/Prerequisite-HTML%20%2B%20CSS%20Docs-lightgrey)](#)

---

## 👋 Welcome

HTML gives a page structure. CSS gives it style. JavaScript gives it a **brain**.

Every time a button does something, a form validates input, a page loads new content without refreshing, a countdown timer ticks — that is JavaScript. It is the only programming language that runs directly in every browser, which means anything you learn here works immediately, everywhere, with zero setup beyond a text editor.

This guide is built on two sources used together:

- **javascript.info** — Written by Ilya Kantor, this is widely considered the best free JavaScript tutorial for beginners. It explains *why* things work, not just *what* to type.
- **MDN Web Docs** — Mozilla's reference. Accurate, exhaustive, and authoritative. Used here to fill in technical details, browser compatibility notes, and API references.

**Prerequisite:** You should be comfortable with HTML and CSS. JavaScript manipulates HTML and the browser — understanding what it is manipulating makes the learning much faster.

---

## 🗺️ Learning Path

### Part 1 — The JavaScript Language

| # | Module | Topics | Time |
|---|--------|---------|------|
| 01 | [What is JavaScript?](modules/01-what-is-js.md) | How JS works, `<script>`, the console | ~20 min |
| 02 | [Variables & Data Types](modules/02-variables-types.md) | `let`, `const`, `var`, primitives, `typeof` | ~25 min |
| 03 | [Operators & Comparisons](modules/03-operators.md) | Arithmetic, comparison, logical, `==` vs `===` | ~25 min |
| 04 | [Control Flow](modules/04-control-flow.md) | `if/else`, ternary, `switch`, truthy/falsy | ~25 min |
| 05 | [Loops](modules/05-loops.md) | `while`, `for`, `for...of`, `break`, `continue` | ~25 min |
| 06 | [Functions](modules/06-functions.md) | Declaration, expression, arrow functions, scope | ~30 min |
| 07 | [Objects](modules/07-objects.md) | Object literals, methods, `this`, destructuring | ~30 min |
| 08 | [Arrays](modules/08-arrays.md) | CRUD, iteration methods, destructuring, spread | ~35 min |
| 09 | [Modern JavaScript (ES6+)](modules/09-modern-js.md) | Template literals, rest/spread, optional chaining, nullish | ~25 min |
| 10 | [Strings & Numbers In Depth](modules/10-strings-numbers.md) | String methods, Number methods, Math, dates | ~25 min |

### Part 2 — JavaScript in the Browser

| # | Module | Topics | Time |
|---|--------|---------|------|
| 11 | [The DOM](modules/11-dom.md) | Selecting, traversing, reading, and modifying elements | ~35 min |
| 12 | [DOM Manipulation](modules/12-dom-manipulation.md) | Creating, inserting, removing, cloning elements | ~30 min |
| 13 | [Events](modules/13-events.md) | `addEventListener`, event object, bubbling, delegation | ~35 min |
| 14 | [Forms & Validation](modules/14-forms.md) | Form events, input handling, validation | ~30 min |

### Part 3 — Asynchronous JavaScript

| # | Module | Topics | Time |
|---|--------|---------|------|
| 15 | [Callbacks & Timers](modules/15-callbacks-timers.md) | `setTimeout`, `setInterval`, callback pattern | ~25 min |
| 16 | [Promises](modules/16-promises.md) | Promise basics, chaining, `.catch`, `Promise.all` | ~30 min |
| 17 | [Async/Await & Fetch](modules/17-async-await-fetch.md) | `async/await`, Fetch API, working with JSON APIs | ~35 min |
| 18 | [Error Handling](modules/18-error-handling.md) | `try/catch`, error types, async errors, custom errors | ~25 min |

---

## 🏁 Final Project

Build an interactive **Weather Dashboard** — a real app that fetches live data from a public API, renders it in the DOM, and handles loading/error states gracefully.

→ [Project Brief & Checklist](project/README.md)  
→ [Reference Solution](project/solution/)

---

## ⚡ Quick Reference

→ [JavaScript Cheat Sheet](cheatsheet/README.md) — The 20% of JS you use 80% of the time.

---

## 📚 Module Structure

Every module follows the same pattern:

```
📖 Concept explained in plain English
💡 Why it matters in practice
🔧 Code examples — written to be typed, not just read
⚠️  Common mistakes and how to avoid them
📋 Quick reference table
🧪 Exercises with hidden answers
```

---

## 🔗 Sources

- [javascript.info](https://javascript.info) — Primary learning source
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) — Reference and gaps
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) — API details

---

## 🚀 How to Use This Repo

1. Work through modules in order — each one builds on the last
2. Open VS Code and a browser side by side — type every example yourself
3. Use the browser console (`F12 → Console`) to experiment freely
4. Do the exercises before checking the answers — that is where the learning happens
5. Build the final project before considering yourself done

> **The single best habit you can develop:** Every time you learn something new, open the console and break it on purpose. See what the error says. That is how you get fast at debugging.

---

*JavaScript will frustrate you. Then it will click. Then you will not be able to stop. 🚀*
