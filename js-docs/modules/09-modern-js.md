# Module 09 — Modern JavaScript (ES6+)

> **Previous:** [← Module 08 — Arrays](08-arrays.md) | **Next:** [Module 10 — Strings & Numbers →](10-strings-numbers.md)

**Sources:** [javascript.info — Destructuring](https://javascript.info/destructuring-assignment) · [javascript.info — Rest/spread](https://javascript.info/rest-parameters-spread) · [javascript.info — Optional chaining](https://javascript.info/optional-chaining) · [MDN — ES6 Features](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## Why "Modern JavaScript"?

JavaScript got a massive upgrade in 2015 (ES6 / ES2015) and has had annual updates since. These features are now universally supported in all modern browsers. You have already met many of them — `let`, `const`, arrow functions, destructuring. This module collects the remaining ones you need before diving into the browser.

---

## Template Literals — Strings with Superpowers

Backtick strings that can embed expressions and span multiple lines:

```javascript
const name = "Priya";
const score = 94;

// Old way — string concatenation
console.log("Hello, " + name + "! You scored " + score + "%.");

// Template literal — far cleaner
console.log(`Hello, ${name}! You scored ${score}%.`);

// Any expression works inside ${}
console.log(`${score >= 90 ? "Excellent" : "Good"} work!`);
console.log(`Result: ${2 ** 10}`); // Result: 1024

// Multi-line strings — no \n needed
const html = `
  <div class="card">
    <h2>${name}</h2>
    <p>Score: ${score}%</p>
  </div>
`;
```

---

## Rest Parameters — Collect Extra Arguments

The `...rest` syntax in a function definition collects all remaining arguments into an array:

```javascript
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3));           // 6
console.log(sum(10, 20, 30, 40));    // 100

// Rest must be the last parameter
function log(label, ...values) {
  console.log(label + ":", values.join(", "));
}

log("Scores", 88, 72, 95, 61); // Scores: 88, 72, 95, 61
```

---

## Spread Syntax — Expand an Iterable

The same `...` syntax used when *calling* functions or *building* arrays/objects expands an iterable into individual items:

```javascript
// Spread into a function call
const nums = [3, 1, 4, 1, 5, 9];
Math.max(...nums);  // 9 — same as Math.max(3, 1, 4, 1, 5, 9)

// Spread into an array
const a = [1, 2, 3];
const b = [4, 5, 6];
const combined = [...a, 0, ...b]; // [1,2,3,0,4,5,6]

// Spread into an object
const defaults = { theme: "light", size: "medium" };
const custom   = { size: "large", colour: "blue" };
const merged   = { ...defaults, ...custom };
// { theme: "light", size: "large", colour: "blue" }
```

**Rest vs Spread — same syntax, opposite direction:**
- **Rest** collects multiple values → one array: `(...args)` in a function definition
- **Spread** expands one array → multiple values: `(...arr)` everywhere else

---

## Short-circuit Assignment Operators

Convenient ways to set a value only if the current one is falsy/nullish:

```javascript
// ||= — assign only if current value is falsy
let name = "";
name ||= "Guest";   // name is now "Guest" (was falsy)

let title = "Admin";
title ||= "User";   // title stays "Admin" (was truthy)

// ??= — assign only if current value is null or undefined
let count = 0;
count ??= 10;  // count stays 0 — 0 is not null/undefined

let value = null;
value ??= 42;  // value is now 42

// &&= — assign only if current value is truthy
let user = { isAdmin: true };
user.isAdmin &&= false; // sets to false only because isAdmin was truthy
```

---

## Modules — `import` and `export`

Modern JavaScript uses modules to split code into separate files:

```javascript
// math.js — export functions
export function add(a, b) { return a + b; }
export function multiply(a, b) { return a * b; }
export const PI = 3.14159;

// Named export — one default export per file
export default function subtract(a, b) { return a - b; }
```

```javascript
// app.js — import them
import subtract, { add, multiply, PI } from './math.js';
// default import    named imports

console.log(add(2, 3));      // 5
console.log(multiply(4, 5)); // 20
console.log(subtract(10, 4));// 6

// Import everything as a namespace
import * as MathUtils from './math.js';
console.log(MathUtils.add(1, 2)); // 3
```

In HTML, use `type="module"` to enable modules:

```html
<script type="module" src="app.js"></script>
```

Modules are automatically in strict mode, and variables are scoped to the module — not global.

---

## Useful Patterns Collected

### Swapping variables

```javascript
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1
```

### Getting unique values from an array

```javascript
const dupes = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(dupes)];
console.log(unique); // [1, 2, 3, 4]
```

### Safely accessing deeply nested data

```javascript
const data = await fetch(url).then(r => r.json());
const city = data?.user?.address?.city ?? "Unknown";
```

### Dynamic object property

```javascript
const key = "theme";
const settings = { [key]: "dark" };  // { theme: "dark" }
```

### One-liner: check and call

```javascript
// Call a function only if it exists
callback?.();

// Access a method only if the object exists
user?.getName?.();
```

---

## Quick Reference

| Feature | Syntax | Does |
|---------|--------|------|
| Template literal | `` `Hello ${name}` `` | Embed expressions in strings |
| Rest params | `function f(...args)` | Collect extra args into array |
| Spread | `[...arr]` or `{...obj}` | Expand into individual values |
| `||=` | `x ||= default` | Assign if x is falsy |
| `??=` | `x ??= default` | Assign if x is null/undefined |
| Named export | `export function f()` | Export for named import |
| Default export | `export default f` | Export for default import |
| Named import | `import { f } from '.'` | Import a named export |
| Default import | `import f from '.'` | Import the default export |

---

## 🧪 Exercises

**Exercise 1 — Template literals**

Rewrite this using a template literal:

```javascript
const item = "Coffee";
const price = 250;
const qty = 3;
const msg = "You ordered " + qty + "x " + item + " for ₹" + (price * qty) + " total.";
```

<details>
<summary>Show answer</summary>

```javascript
const msg = `You ordered ${qty}x ${item} for ₹${price * qty} total.`;
```
</details>

---

**Exercise 2 — Rest parameters**

Write a function `average(...nums)` that takes any number of arguments and returns their average.

<details>
<summary>Show answer</summary>

```javascript
function average(...nums) {
  return nums.reduce((sum, n) => sum + n, 0) / nums.length;
}

console.log(average(10, 20, 30));     // 20
console.log(average(100, 200, 0, 50)); // 87.5
```
</details>

---

**Exercise 3 — Unique values**

Remove all duplicate values from this array using `Set` and spread:

```javascript
const tags = ["js", "css", "html", "js", "css", "react", "html"];
```

<details>
<summary>Show answer</summary>

```javascript
const uniqueTags = [...new Set(tags)];
console.log(uniqueTags); // ["js", "css", "html", "react"]
```
</details>

---

**Exercise 4 — Spread merge**

Merge these two objects with `update` overriding values in `base`:

```javascript
const base   = { fontSize: 16, fontFamily: "sans-serif", colour: "black" };
const update = { fontSize: 18, colour: "navy" };
```

<details>
<summary>Show answer</summary>

```javascript
const merged = { ...base, ...update };
// { fontSize: 18, fontFamily: "sans-serif", colour: "navy" }
```
</details>

---

> **Next:** [Module 10 — Strings & Numbers →](10-strings-numbers.md)
