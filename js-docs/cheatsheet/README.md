# ⚡ JavaScript Cheat Sheet

> The 20% of JavaScript you use 80% of the time. One page. No fluff.
> Primary source: [javascript.info](https://javascript.info) · Reference: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## Variables

```javascript
const name = "Alex";        // Immutable binding — use by default
let   count = 0;            // Reassignable — use when value changes
// Never use var
```

---

## Data Types

```javascript
// Primitives
42          // number
"hello"     // string
true        // boolean
null        // intentional empty
undefined   // unintentional empty
Symbol()    // unique id

// Reference
{}          // object
[]          // array (also an object)
function(){} // function (also an object)

typeof "hi"      // "string"
typeof null      // "object"  ← JS bug — null is NOT an object
Array.isArray([]) // true     ← correct way to check for arrays
```

---

## Operators

```javascript
// Always use strict equality
a === b    // equal value AND type
a !== b    // not equal

// Logical
a && b     // AND — returns first falsy or last value
a || b     // OR  — returns first truthy or last value
a ?? b     // Nullish — returns b only if a is null/undefined
!a         // NOT

// The six falsy values
false, 0, "", null, undefined, NaN
// Everything else is truthy (including [], {}, "0")
```

---

## Control Flow

```javascript
if (score >= 90) return "A";
if (score >= 75) return "B";
return "C";

// Ternary
const label = score >= 60 ? "Pass" : "Fail";

// Optional chaining — safe property access
user?.address?.city       // undefined instead of TypeError
user?.getName?.()         // call method only if it exists
```

---

## Loops

```javascript
for (let i = 0; i < 5; i++) { }            // Classic
for (const item of array) { }              // Array values ← use this most
for (const key in object) { }              // Object keys

while (condition) { }
do { } while (condition);                  // Always runs at least once

break;     // Exit loop
continue;  // Skip to next iteration
```

---

## Functions

```javascript
// Declaration (hoisted)
function add(a, b) { return a + b; }

// Arrow (concise, no own `this`)
const add = (a, b) => a + b;
const double = n => n * 2;
const greet = () => "Hello!";

// Default parameters
function greet(name = "Guest") { return `Hello, ${name}!`; }

// Rest — collect remaining args
function sum(...nums) { return nums.reduce((a, b) => a + b, 0); }

// Spread — expand into individual values
Math.max(...[3, 1, 4, 1, 5]); // 5
```

---

## Objects

```javascript
const user = { name: "Alex", age: 28 };

user.name          // dot notation
user["name"]       // bracket notation (use for dynamic keys)
"name" in user     // true — check existence
delete user.age    // remove property

// Shorthand
const { name, age } = user;                   // Destructure
const name = "Alex"; const obj = { name };    // Shorthand property

// Spread
const copy    = { ...user };
const updated = { ...user, age: 29 };

// Useful methods
Object.keys(obj)     // ["name", "age"]
Object.values(obj)   // ["Alex", 28]
Object.entries(obj)  // [["name","Alex"], ["age",28]]
```

---

## Arrays

```javascript
// Mutating methods
arr.push(item)      // Add to end
arr.pop()           // Remove from end
arr.unshift(item)   // Add to start
arr.shift()         // Remove from start
arr.splice(i, n)    // Remove/replace at position
arr.sort((a,b) => a-b) // Sort ascending (mutates!)

// Non-mutating methods — return new array
arr.slice(a, b)           // Copy portion
arr.map(fn)               // Transform each item
arr.filter(fn)            // Keep matching items
arr.reduce(fn, init)      // Aggregate to single value
arr.find(fn)              // First match or undefined
arr.findIndex(fn)         // Index of first match or -1
arr.flat(depth)           // Flatten nested arrays
[...a, ...b]              // Combine arrays

// Checking
arr.includes(val)         // Boolean
arr.some(fn)              // Any match?
arr.every(fn)             // All match?
arr.join(", ")            // To string

// Destructuring
const [first, second, ...rest] = arr;
```

---

## Template Literals & Modern Syntax

```javascript
`Hello, ${name}! Score: ${score * 2}`    // Template literal
`Multi
 line`                                    // Newlines preserved

[...new Set(array)]                       // Unique values
const [a, b] = [b, a];                   // Swap variables
x ??= "default"                           // Assign if null/undefined
x ||= "default"                           // Assign if falsy
```

---

## The DOM

```javascript
// Selecting
document.querySelector(".card")          // First match
document.querySelectorAll(".card")        // NodeList of all
document.getElementById("hero")          // By id (fastest)

// Reading
el.textContent                           // Plain text
el.innerHTML                             // HTML string
el.value                                 // Input value
el.dataset.userId                        // data-user-id attribute

// Writing
el.textContent = "New text"
el.classList.add("active")
el.classList.remove("active")
el.classList.toggle("active")
el.setAttribute("href", "/new")

// Creating & inserting
const div = document.createElement("div")
div.textContent = "Hello"
parent.appendChild(div)
parent.append(div, "or plain text")
el.before(newEl) / el.after(newEl)
el.remove()

// Traversal
el.parentElement
el.children
el.nextElementSibling
el.closest(".card")                      // Nearest matching ancestor
```

---

## Events

```javascript
el.addEventListener("click", handler)
el.removeEventListener("click", handler)

// Event object
el.addEventListener("click", (e) => {
  e.preventDefault()      // Stop default (link follow, form submit)
  e.stopPropagation()     // Stop bubbling up
  e.target                // Element that triggered event
  e.key                   // Key name for keyboard events
})

// Common events
"click" "dblclick" "mouseenter" "mouseleave"
"keydown" "keyup"
"input" "change" "focus" "blur" "submit"
"DOMContentLoaded" "load" "resize" "scroll"

// Event delegation — one listener for many children
list.addEventListener("click", (e) => {
  const item = e.target.closest(".item")
  if (!item) return
  // handle item click
})
```

---

## Async JavaScript

```javascript
// setTimeout / setInterval
const id = setTimeout(() => { }, 2000)
clearTimeout(id)
const id2 = setInterval(() => { }, 1000)
clearInterval(id2)

// Promise
const p = new Promise((resolve, reject) => {
  // async work
  resolve(value)   // or reject(new Error("msg"))
})

p.then(val => { })
 .catch(err => { })
 .finally(() => { })

Promise.all([p1, p2, p3])         // Wait for all, fail fast
Promise.allSettled([p1, p2, p3])  // Wait for all, get all results

// async / await
async function loadData() {
  try {
    const res  = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    return data
  } catch (err) {
    console.error(err.message)
  } finally {
    hideSpinner()
  }
}

// Fetch — POST
const res = await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
})
```

---

## Error Handling

```javascript
try {
  riskyOperation()
} catch (err) {
  console.error(err.name, err.message, err.stack)
  if (err instanceof TypeError) { /* handle */ }
  else throw err   // re-throw what you can't handle
} finally {
  cleanup()        // always runs
}

// Custom errors
class AppError extends Error {
  constructor(message, type) {
    super(message)
    this.name = "AppError"
    this.type = type
  }
}

throw new AppError("Not found", "404")
```

---

## `localStorage`

```javascript
localStorage.setItem("key", JSON.stringify(value))
const value = JSON.parse(localStorage.getItem("key") ?? "null")
localStorage.removeItem("key")
localStorage.clear()
```

---

## Useful Patterns

```javascript
// Safe fetch wrapper
async function safeFetch(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

// Debounce
function debounce(fn, ms) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), ms)
  }
}

// Group array by property
const byType = items.reduce((acc, item) => {
  acc[item.type] = acc[item.type] ?? []
  acc[item.type].push(item)
  return acc
}, {})

// Unique array values
const unique = [...new Set(array)]

// Range array
const range = Array.from({ length: 10 }, (_, i) => i + 1)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Render list to DOM efficiently
const frag = document.createDocumentFragment()
items.forEach(item => {
  const li = document.createElement("li")
  li.textContent = item
  frag.appendChild(li)
})
ul.appendChild(frag)
```

---

*Full documentation → [Back to README](../README.md)*
