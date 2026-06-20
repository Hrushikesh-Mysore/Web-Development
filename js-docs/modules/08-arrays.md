# Module 08 — Arrays

> **Previous:** [← Module 07 — Objects](07-objects.md) | **Next:** [Module 09 — Modern JavaScript →](09-modern-js.md)

**Sources:** [javascript.info — Arrays](https://javascript.info/array) · [javascript.info — Array methods](https://javascript.info/array-methods) · [MDN — Arrays](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays)

---

## What is an Array?

An array is an **ordered list of values**. Each value has a numeric index starting at `0`.

```javascript
const fruits = ["apple", "banana", "mango"];
//               index 0   index 1   index 2

console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "mango"
console.log(fruits.length); // 3
```

Arrays can hold any mix of types — numbers, strings, objects, other arrays. In practice, keep arrays homogeneous (same type) for clarity.

---

## Adding and Removing Items

```javascript
const stack = ["a", "b", "c"];

// End of array
stack.push("d");       // Add to end    → ["a","b","c","d"]
stack.pop();           // Remove from end → ["a","b","c"] returns "d"

// Start of array
stack.unshift("z");    // Add to start  → ["z","a","b","c"]
stack.shift();         // Remove from start → ["a","b","c"] returns "z"
```

`push` and `pop` are O(1) — fast. `shift` and `unshift` are O(n) — they move every element. For large arrays, prefer pushing/popping from the end.

---

## `splice` — Add, Remove, Replace at Any Position

```javascript
const colours = ["red", "green", "blue", "yellow"];

// splice(startIndex, deleteCount, ...itemsToInsert)

// Remove 1 item at index 1
colours.splice(1, 1);
// ["red", "blue", "yellow"]

// Replace 1 item at index 1 with "orange"
colours.splice(1, 1, "orange");
// ["red", "orange", "yellow"]

// Insert without removing (deleteCount = 0)
colours.splice(2, 0, "purple", "pink");
// ["red", "orange", "purple", "pink", "yellow"]
```

---

## `slice` — Copy Part of an Array (Non-Destructive)

```javascript
const nums = [10, 20, 30, 40, 50];

nums.slice(1, 3)    // [20, 30]       — from index 1 up to (not including) 3
nums.slice(2)       // [30, 40, 50]   — from index 2 to end
nums.slice(-2)      // [40, 50]       — last 2 elements
nums.slice()        // [10,20,30,40,50] — shallow copy of the whole array
```

`slice` never modifies the original array. `splice` does.

---

## The Big Five Iteration Methods

These are the most important array methods you will use every day. They all take a **callback function**.

### `forEach` — Do something with each item

```javascript
const prices = [100, 200, 300];

prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: ₹${price}`);
});
// Item 1: ₹100
// Item 2: ₹200
// Item 3: ₹300
```

`forEach` returns `undefined`. Use it for side effects (logging, DOM updates), not for transforming data.

---

### `map` — Transform each item into a new array

```javascript
const prices = [100, 200, 300];

// Apply 10% discount to every price
const discounted = prices.map(price => price * 0.9);
console.log(discounted); // [90, 180, 270]
console.log(prices);     // [100, 200, 300] — original unchanged

// Extract one property from an array of objects
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob",   age: 30 },
  { name: "Priya", age: 28 }
];

const names = users.map(user => user.name);
console.log(names); // ["Alice", "Bob", "Priya"]
```

`map` always returns a **new array** of the same length. Never modifies the original.

---

### `filter` — Keep only items that pass a test

```javascript
const scores = [88, 42, 95, 61, 73, 34];

const passing = scores.filter(score => score >= 60);
console.log(passing); // [88, 95, 61, 73]

// Filter objects
const users = [
  { name: "Alice", active: true },
  { name: "Bob",   active: false },
  { name: "Priya", active: true }
];

const activeUsers = users.filter(user => user.active);
console.log(activeUsers); // [{ name: "Alice" }, { name: "Priya" }]
```

`filter` always returns a **new array**, possibly shorter. Keeps items where the callback returns truthy.

---

### `reduce` — Boil an array down to a single value

```javascript
const numbers = [1, 2, 3, 4, 5];

// Sum all numbers
const total = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(total); // 15

// Find the maximum value
const max = numbers.reduce((acc, curr) => curr > acc ? curr : acc, -Infinity);
console.log(max); // 5

// Group objects by a property
const people = [
  { name: "Alice", dept: "Engineering" },
  { name: "Bob",   dept: "Design" },
  { name: "Priya", dept: "Engineering" }
];

const byDept = people.reduce((groups, person) => {
  const dept = person.dept;
  groups[dept] = groups[dept] ?? [];
  groups[dept].push(person.name);
  return groups;
}, {});

console.log(byDept);
// { Engineering: ["Alice", "Priya"], Design: ["Bob"] }
```

`reduce(callback, initialValue)` — the callback receives the running accumulator and the current item. The initial value is where the accumulator starts.

---

### `find` and `findIndex` — Find the first match

```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Priya" }
];

const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: "Bob" }

const idx = users.findIndex(u => u.id === 2);
console.log(idx); // 1

// Returns undefined / -1 if not found
const missing = users.find(u => u.id === 99); // undefined
```

---

## Other Useful Methods

```javascript
const nums = [3, 1, 4, 1, 5, 9, 2, 6];

// Checking
nums.includes(5)            // true
nums.some(n => n > 8)       // true — at least one is > 8
nums.every(n => n > 0)      // true — all are > 0

// Sorting (mutates the array!)
nums.sort((a, b) => a - b); // [1,1,2,3,4,5,6,9] — ascending
nums.sort((a, b) => b - a); // [9,6,5,4,3,2,1,1] — descending

// Flattening
[[1, 2], [3, 4], [5]].flat()     // [1,2,3,4,5]
[[1, [2, 3]], [4]].flat(2)       // [1,2,3,4] — 2 levels deep

// Joining to a string
["a", "b", "c"].join(", ")      // "a, b, c"
["a", "b", "c"].join("")        // "abc"

// Concatenating arrays (non-destructive)
[1, 2].concat([3, 4], [5])     // [1,2,3,4,5]
```

---

## Array Destructuring

```javascript
const rgb = [255, 128, 0];
const [r, g, b] = rgb;
console.log(r, g, b); // 255 128 0

// Skip elements with commas
const [first, , third] = [10, 20, 30];
console.log(first, third); // 10 30

// Rest in destructuring
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]

// Swap two variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1
```

---

## Spread with Arrays

```javascript
const a = [1, 2, 3];
const b = [4, 5, 6];

// Combine arrays
const combined = [...a, ...b]; // [1,2,3,4,5,6]

// Copy an array
const copy = [...a];
copy.push(99);
console.log(a); // [1,2,3] — original untouched

// Spread into function arguments
Math.max(...a); // 3 — same as Math.max(1, 2, 3)
```

---

## Chaining Array Methods

One of the most powerful patterns in modern JS:

```javascript
const orders = [
  { id: 1, product: "Laptop", price: 75000, shipped: true },
  { id: 2, product: "Mouse",  price: 800,   shipped: false },
  { id: 3, product: "Keyboard", price: 2500, shipped: true },
  { id: 4, product: "Monitor",  price: 18000, shipped: false },
];

// Get the total value of all shipped orders
const shippedTotal = orders
  .filter(order => order.shipped)          // Keep only shipped
  .map(order => order.price)               // Extract prices
  .reduce((total, price) => total + price, 0); // Sum them

console.log(shippedTotal); // 77500 (75000 + 2500)
```

Read it top to bottom: filter → map → reduce. Each method returns an array that the next method works on.

---

## Quick Reference

| Method | Returns | Mutates? | Use for |
|--------|---------|---------|---------|
| `push(item)` | New length | Yes | Add to end |
| `pop()` | Removed item | Yes | Remove from end |
| `shift()` | Removed item | Yes | Remove from start |
| `unshift(item)` | New length | Yes | Add to start |
| `splice(i, n)` | Removed items | Yes | Add/remove at position |
| `slice(a, b)` | New array | No | Copy a portion |
| `forEach(fn)` | `undefined` | No | Side effects per item |
| `map(fn)` | New array | No | Transform each item |
| `filter(fn)` | New array | No | Keep matching items |
| `reduce(fn, init)` | Single value | No | Aggregate |
| `find(fn)` | First match or `undefined` | No | Find one item |
| `includes(val)` | Boolean | No | Check existence |
| `some(fn)` | Boolean | No | Any match? |
| `every(fn)` | Boolean | No | All match? |
| `sort(fn)` | Same array | Yes | Sort in place |
| `flat(depth)` | New array | No | Flatten nested |
| `join(sep)` | String | No | Convert to string |

---

## 🧪 Exercises

**Exercise 1 — `map` and `filter`**

Given this array of products:

```javascript
const products = [
  { name: "Shirt",  price: 599,  inStock: true },
  { name: "Shoes",  price: 2499, inStock: false },
  { name: "Hat",    price: 399,  inStock: true },
  { name: "Jacket", price: 3999, inStock: true }
];
```

a) Create an array of names of all in-stock products.  
b) Create an array of prices with a 15% discount applied.

<details>
<summary>Show answer</summary>

```javascript
// a) Names of in-stock products
const inStockNames = products
  .filter(p => p.inStock)
  .map(p => p.name);
// ["Shirt", "Hat", "Jacket"]

// b) All prices with 15% discount
const discountedPrices = products.map(p => +(p.price * 0.85).toFixed(2));
// [509.15, 2124.15, 339.15, 3399.15]
```
</details>

---

**Exercise 2 — `reduce`**

Use `reduce` to count how many times each word appears in this array:

```javascript
const words = ["apple", "banana", "apple", "cherry", "banana", "apple"];
```

Expected result: `{ apple: 3, banana: 2, cherry: 1 }`

<details>
<summary>Show answer</summary>

```javascript
const counts = words.reduce((acc, word) => {
  acc[word] = (acc[word] ?? 0) + 1;
  return acc;
}, {});

console.log(counts); // { apple: 3, banana: 2, cherry: 1 }
```
</details>

---

**Exercise 3 — Chain methods**

From the products array above, get the **total price of all in-stock items** using chained array methods.

<details>
<summary>Show answer</summary>

```javascript
const total = products
  .filter(p => p.inStock)
  .map(p => p.price)
  .reduce((sum, price) => sum + price, 0);

console.log(total); // 4997
```
</details>

---

**Exercise 4 — Destructuring**

Use array destructuring to extract the first, second, and the rest of this array into separate variables:

```javascript
const colours = ["red", "green", "blue", "yellow", "purple"];
```

<details>
<summary>Show answer</summary>

```javascript
const [first, second, ...rest] = colours;
console.log(first);  // "red"
console.log(second); // "green"
console.log(rest);   // ["blue", "yellow", "purple"]
```
</details>

---

> **Next:** [Module 09 — Modern JavaScript →](09-modern-js.md)
