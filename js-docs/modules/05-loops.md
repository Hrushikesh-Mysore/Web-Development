# Module 05 — Loops

> **Previous:** [← Module 04 — Control Flow](04-control-flow.md) | **Next:** [Module 06 — Functions →](06-functions.md)

**Sources:** [javascript.info — Loops](https://javascript.info/while-for) · [MDN — Looping code](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops)

---

## Why Loops?

Loops let you run the same code multiple times without writing it multiple times. Without loops, printing numbers 1 to 100 would be 100 lines of code. With a loop, it is 3.

---

## `while` Loop — Repeat While True

```javascript
let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}
// 1, 2, 3, 4, 5
```

The condition is checked **before** each iteration. If it is false from the start, the body never runs.

Use `while` when you do not know how many iterations you will need:

```javascript
// Keep asking until the user gives a valid name
let name = "";
while (name.trim() === "") {
  name = prompt("Enter your name:") ?? "";
}
console.log("Hello,", name);
```

---

## `do...while` — Always Run At Least Once

```javascript
let input;

do {
  input = prompt("Enter a number greater than 0:");
} while (Number(input) <= 0);

console.log("You entered:", input);
```

The body runs **first**, then the condition is checked. Guarantees at least one execution.

---

## `for` Loop — The Most Common Loop

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 0, 1, 2, 3, 4
```

The three parts inside `for (...)`:

```
for (initialisation; condition; step)
     ───────────────  ─────────  ────
     let i = 0        i < 5      i++
     Runs once        Checked    Runs after
     at start         before     each iteration
                      each run
```

### Counting up and down

```javascript
// Counting up: 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Counting down: 10 to 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Every other number: 0, 2, 4, 6, 8
for (let i = 0; i <= 8; i += 2) {
  console.log(i);
}
```

---

## `for...of` — Iterate Over Values

The cleanest way to loop through arrays (and other iterables):

```javascript
const fruits = ["apple", "banana", "mango", "kiwi"];

for (const fruit of fruits) {
  console.log(fruit);
}
// apple, banana, mango, kiwi
```

Use `for...of` when you need each **value** and do not care about the index. It is more readable than a manual `for` loop for arrays.

```javascript
const scores = [88, 72, 95, 61, 84];
let total = 0;

for (const score of scores) {
  total += score;
}

console.log("Average:", total / scores.length); // 80
```

---

## `for...in` — Iterate Over Object Keys

```javascript
const person = { name: "Alex", age: 28, city: "Bangalore" };

for (const key in person) {
  console.log(key, "→", person[key]);
}
// name → Alex
// age → 28
// city → Bangalore
```

`for...in` is for **objects**. Do not use it for arrays — use `for...of` or `.forEach()` instead.

---

## `break` and `continue`

### `break` — Exit the loop immediately

```javascript
// Find the first even number
const numbers = [1, 3, 7, 4, 9, 2];

for (const num of numbers) {
  if (num % 2 === 0) {
    console.log("First even:", num); // First even: 4
    break;  // Stop — we found what we needed
  }
}
```

### `continue` — Skip this iteration, move to the next

```javascript
// Print only odd numbers
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;  // Skip even numbers
  console.log(i);
}
// 1, 3, 5, 7, 9
```

---

## Nested Loops

Loops inside loops — the outer loop runs once, the inner loop completes fully, then the outer advances:

```javascript
// A multiplication table
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} × ${j} = ${i * j}`);
  }
}
// 1×1=1, 1×2=2, 1×3=3
// 2×1=2, 2×2=4, 2×3=6
// 3×1=3, 3×2=6, 3×3=9
```

⚠️ Nested loops multiply complexity. Three levels of nesting is usually a sign to refactor.

---

## Infinite Loop — The Bug to Avoid

```javascript
// ❌ This runs forever — the condition never becomes false
while (true) {
  console.log("Help!");
  // Missing: something that makes the condition false
}

// The fix: always make sure your loop has an exit condition
let x = 0;
while (x < 5) {
  console.log(x);
  x++;  // ← This must be here, or x never reaches 5
}
```

If your browser freezes while testing loops, you probably have an infinite loop. Close the tab.

---

## Quick Reference

| Loop | Use it when |
|------|------------|
| `for` | You know the number of iterations, or need the index |
| `while` | You loop until a condition changes |
| `do...while` | You always need at least one run |
| `for...of` | Iterating over array values (most common for arrays) |
| `for...in` | Iterating over object keys |
| `break` | Exit loop early |
| `continue` | Skip current iteration |

---

## 🧪 Exercises

**Exercise 1 — Sum with a loop**

Write a `for` loop that calculates the sum of all numbers from 1 to 100.

<details>
<summary>Show answer</summary>

```javascript
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum); // 5050
```
</details>

---

**Exercise 2 — `for...of` with an array**

You have an array of product prices: `[29.99, 9.99, 49.99, 14.99]`. Use `for...of` to calculate the total cost.

<details>
<summary>Show answer</summary>

```javascript
const prices = [29.99, 9.99, 49.99, 14.99];
let total = 0;

for (const price of prices) {
  total += price;
}

console.log("Total: $" + total.toFixed(2)); // Total: $104.96
```
</details>

---

**Exercise 3 — `continue` in practice**

Print all numbers from 1 to 20 that are **not** divisible by 3.

<details>
<summary>Show answer</summary>

```javascript
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}
// 1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20
```
</details>

---

**Exercise 4 — `for...in` an object**

Given `const car = { brand: "Toyota", model: "Camry", year: 2022 }`, use `for...in` to print each property as `"brand: Toyota"`, `"model: Camry"`, etc.

<details>
<summary>Show answer</summary>

```javascript
const car = { brand: "Toyota", model: "Camry", year: 2022 };

for (const key in car) {
  console.log(key + ": " + car[key]);
}
```
</details>

---

> **Next:** [Module 06 — Functions →](06-functions.md)
