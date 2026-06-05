# 🌐 Web Development

> A complete beginner-to-intermediate reference for the three core languages of the web.
> Plain English. Real code. Built on MDN, javascript.info, and nothing else.

---

## 📚 What's Inside

Three self-contained documentation sets — work through them in order. Each one builds directly on the previous.

| # | Folder | Language | Modules | Final Project |
|---|--------|----------|---------|--------------|
| 1 | [`html-docs/`](html-docs/) | HTML | 15 | Personal Résumé Page |
| 2 | [`css-docs/`](css-docs/) | CSS | 16 | Styled Résumé |
| 3 | [`js-docs/`](js-docs/) | JavaScript | 18 | Weather Dashboard |

---

## 🗂️ Repository Tree

```
web-development/
│
├── README.md                          ← You are here
│
├── html-docs/                         ── 🏗️  HTML
│   ├── README.md
│   ├── modules/
│   │   ├── 01-html-basics.md
│   │   ├── 02-document-structure.md
│   │   ├── 03-metadata.md
│   │   ├── 04-headings-paragraphs.md
│   │   ├── 05-emphasis-importance.md
│   │   ├── 06-lists.md
│   │   ├── 07-advanced-text.md
│   │   ├── 08-links.md
│   │   ├── 09-images.md
│   │   ├── 10-audio-video.md
│   │   ├── 11-semantic-layout.md
│   │   ├── 12-tables.md
│   │   ├── 13-forms.md
│   │   ├── 14-debugging.md
│   │   └── 15-microdata.md
│   ├── project/
│   │   ├── README.md
│   │   └── solution/
│   │       └── index.html
│   └── cheatsheet/
│       └── README.md
│
├── css-docs/                          ── 🎨  CSS
│   ├── README.md
│   ├── modules/
│   │   ├── 01-what-is-css.md
│   │   ├── 02-selectors.md
│   │   ├── 03-pseudo.md
│   │   ├── 04-cascade.md
│   │   ├── 05-box-model.md
│   │   ├── 06-values-units.md
│   │   ├── 07-sizing.md
│   │   ├── 08-backgrounds-borders.md
│   │   ├── 09-text-fonts.md
│   │   ├── 10-overflow-display.md
│   │   ├── 11-images-media-forms.md
│   │   ├── 12-debugging.md
│   │   ├── 13-positioning.md
│   │   ├── 14-flexbox.md
│   │   ├── 15-grid.md
│   │   └── 16-responsive.md
│   ├── project/
│   │   ├── README.md
│   │   └── solution/
│   │       └── style.css
│   └── cheatsheet/
│       └── README.md
│
└── js-docs/                           ── ⚡  JavaScript
    ├── README.md
    ├── modules/
    │   ├── 01-what-is-js.md
    │   ├── 02-variables-types.md
    │   ├── 03-operators.md
    │   ├── 04-control-flow.md
    │   ├── 05-loops.md
    │   ├── 06-functions.md
    │   ├── 07-objects.md
    │   ├── 08-arrays.md
    │   ├── 09-modern-js.md
    │   ├── 10-strings-numbers.md
    │   ├── 11-dom.md
    │   ├── 12-dom-manipulation.md
    │   ├── 13-events.md
    │   ├── 14-forms.md
    │   ├── 15-callbacks-timers.md
    │   ├── 16-promises.md
    │   ├── 17-async-await-fetch.md
    │   └── 18-error-handling.md
    ├── project/
    │   ├── README.md
    │   └── solution/
    │       ├── index.html
    │       ├── style.css
    │       └── app.js
    └── cheatsheet/
        └── README.md
```

---

## 🚀 Where to Start

**Never written a line of code before?**
→ Start at [`html-docs/modules/01-html-basics.md`](html-docs/modules/01-html-basics.md)

**Know HTML and want to learn CSS?**
→ Start at [`css-docs/modules/01-what-is-css.md`](css-docs/modules/01-what-is-css.md)

**Know HTML and CSS and want JavaScript?**
→ Start at [`js-docs/modules/01-what-is-js.md`](js-docs/modules/01-what-is-js.md)

**Need a quick lookup?**
→ [`html-docs/cheatsheet/`](html-docs/cheatsheet/README.md) · [`css-docs/cheatsheet/`](css-docs/cheatsheet/README.md) · [`js-docs/cheatsheet/`](js-docs/cheatsheet/README.md)

---

## 📖 Sources

All content is written against the official references — nothing outdated, nothing made up.

- [MDN Web Docs](https://developer.mozilla.org) — HTML and CSS
- [javascript.info](https://javascript.info) — JavaScript (primary)
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript) — JavaScript (gaps and API details)

---

## 📊 Coverage Honest

This guide is designed to take you from zero to being able to build real projects and learn a framework like React. It is not a complete language reference. Here is exactly what that means.

### What is covered

| Area | Coverage |
|------|---------|
| HTML — structure, semantics, accessibility, microdata | ✅ Comprehensive |
| CSS — box model, layout, Flexbox, Grid, responsive | ✅ Comprehensive |
| JS — core language, ES6+, DOM, events, async, fetch, errors | ✅ Comprehensive |

### What is intentionally not covered — JavaScript gaps

These topics were left out because they sit beyond the beginner-to-intermediate scope this guide targets. They are listed here so you know exactly where to go next, not because they are unimportant.

**Language features**

| Topic | Where to learn it |
|-------|------------------|
| `class` syntax, OOP, `extends`, `super` | [javascript.info — Classes](https://javascript.info/classes) |
| Closures in depth, IIFE | [javascript.info — Closures](https://javascript.info/closure) |
| `this` binding — `call`, `apply`, `bind` | [javascript.info — this](https://javascript.info/object-methods) |
| Prototypes and the prototype chain | [javascript.info — Prototypes](https://javascript.info/prototypes) |
| Regular expressions | [javascript.info — RegExp](https://javascript.info/regular-expressions) |
| Generators and iterators | [MDN — Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators) |
| `WeakMap`, `WeakSet` | [MDN — WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) |
| `Proxy` and `Reflect` | [MDN — Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) |

**Browser APIs**

| Topic | Where to learn it |
|-------|------------------|
| `History API` — client-side routing | [MDN — History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) |
| `Intersection Observer` — scroll effects | [MDN — Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) |
| `MutationObserver` — watching DOM changes | [MDN — MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) |
| `Clipboard API` | [MDN — Clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) |
| `Geolocation API` | [MDN — Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) |
| `Canvas API` | [MDN — Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) |
| `WebSockets` | [MDN — WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) |
| `Web Workers` | [MDN — Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) |
| `Service Workers` / PWA | [MDN — Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) |

**Newer ES2022–ES2024 features**

| Feature | MDN link |
|---------|---------|
| Top-level `await` | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await) |
| `Array.toSorted()`, `toReversed()`, `toSpliced()` — non-mutating array methods | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted) |
| `Object.hasOwn()` | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) |
| `Error` cause — `new Error('msg', { cause })` | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause) |
| `Promise.any()` | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any) |

### The honest coverage number

> This guide covers **~90% of what you use daily** and **~65–70% of JavaScript as a complete language.**
> The three most important gaps to fill before learning React are **Classes**, **Closures in depth**, and **Regular Expressions** — in that order.

---

## 📋 Module Structure

Every single module across all three docs follows the same format so you always know what to expect:

```
📖  Concept explained in plain English
💡  Why it matters in practice
🔧  Code examples — written to be typed, not just read
⚠️  Common mistakes and how to avoid them
📋  Quick reference table
🧪  Exercises with hidden answers
```

---

*Build things. Break things. Look things up. That is the whole process. 🛠️*
