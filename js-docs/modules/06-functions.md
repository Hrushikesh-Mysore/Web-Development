# Module 06 — Functions

> **Previous:** [← Module 05 — Loops](05-loops.md) | **Next:** [Module 07 — Objects →](07-objects.md)

**Sources:** [javascript.info — Functions](https://javascript.info/function-basics) · [javascript.info — Function expressions](https://javascript.info/function-expressions) · [javascript.info — Arrow functions](https://javascript.info/arrow-functions-basics) · [MDN — Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

---

## What is a Function?

A function is a reusable block of code with a name. You define it once, call it as many times as you need.

Without functions, every time you needed the same logic you would copy-paste code. That is a maintenance nightmare — change the logic once and you have to find and update every copy.

```javascript
// Without a function — copy-pasted logic
console.log("Hello, Alice! Welcome.");
console.log("Hello, Bob! Welcome.");
console.log("Hello, Priya! Welcome.");

// With a function — defined once, called many times
function greet(name) {
  console.log("Hello, " + name + "! Welcome.");
}

greet("Alice");
greet("Bob");
greet("Priya");
```

---

## Function Declaration

```javascript
function functionName(parameter1, parameter2) {
  // function body
  return result;
}
```

A real example:

```javascript
function add(a, b) {
  return a + b;
}

const result = add(3, 7);
console.log(result); // 10
```

- **Parameters** (`a`, `b`) are the inputs listed in the definition
- **Arguments** (`3`, `7`) are the actual values passed when calling
- **`return`** sends a value back to the caller
- If there is no `return`, the function returns `undefined`

---

## Parameters, Defaults, and Return

```javascript
// Default parameter values — used when the argument is not provided
function greet(name = "Guest") {
  return "Hello, " + name + "!";
}

console.log(greet("Alex"));   // "Hello, Alex!"
console.log(greet());         // "Hello, Guest!" — uses the default

// Multiple return values — use an object or array
function getMinMax(numbers) {
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
}

const { min, max } = getMinMax([3, 1, 7, 2, 9]);
console.log(min, max); // 1 9
```

---

## Function Expressions

A function stored in a variable:

```javascript
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 5)); // 20
```

Function expressions are not hoisted — you cannot call them before the line they are defined on. Function declarations are hoisted (usable before their definition in the file).

```javascript
// ✅ Works — declaration is hoisted
sayHello();
function sayHello() { console.log("Hello!"); }

// ❌ Fails — expression is NOT hoisted
sayBye(); // ReferenceError
const sayBye = function() { console.log("Bye!"); };
```

---

## Arrow Functions — Modern Syntax

Arrow functions are the concise modern syntax, introduced in ES6:

```javascript
// Traditional function expression
const double = function(n) { return n * 2; };

// Arrow function — same thing, less typing
const double = (n) => { return n * 2; };

// Shorter: single parameter, drop the parentheses
const double = n => { return n * 2; };

// Shortest: single expression, drop the braces and return keyword
const double = n => n * 2;
```

Multi-parameter arrow functions:

```javascript
const add = (a, b) => a + b;
const greet = (name, time) => `Good ${time}, ${name}!`;
```

No-parameter arrow functions:

```javascript
const getRandom = () => Math.random();
const sayHi = () => console.log("Hi!");
```

Arrow functions returning an object literal — wrap the object in parentheses:

```javascript
// ❌ Wrong — JS thinks the { } is the function body
const makeUser = name => { name: name };

// ✅ Right — parentheses tell JS it's an object, not a body
const makeUser = name => ({ name: name });
```

---

## Scope — Where Variables Live

**Local scope:** Variables declared inside a function only exist inside that function:

```javascript
function calculate() {
  const result = 42;  // Only exists inside calculate()
  console.log(result); // Works fine
}

calculate();
console.log(result); // ❌ ReferenceError — result doesn't exist out here
```

**Outer scope access:** Functions can access variables from their outer scope:

```javascript
const siteName = "My Portfolio";  // Outer scope

function showTitle() {
  console.log(siteName);  // ✅ Can access outer variable
}

showTitle(); // "My Portfolio"
```

**Scope chain:** JS looks for a variable in the current scope, then the next outer scope, then the next, until it reaches the global scope or throws an error.

```javascript
const x = "global";

function outer() {
  const x = "outer";

  function inner() {
    const x = "inner";
    console.log(x); // "inner" — closest scope wins
  }

  inner();
  console.log(x); // "outer"
}

outer();
console.log(x); // "global"
```

---

## Functions as Values

In JavaScript, functions are **first-class values** — they can be stored in variables, passed as arguments, and returned from other functions. This is a core feature that unlocks a huge amount of power.

```javascript
// Pass a function as an argument
function applyTwice(fn, value) {
  return fn(fn(value));
}

const double = n => n * 2;
console.log(applyTwice(double, 3)); // 12 — doubled twice: 3→6→12

// Return a function from a function
function makeMultiplier(factor) {
  return n => n * factor;
}

const triple = makeMultiplier(3);
const times10 = makeMultiplier(10);

console.log(triple(5));  // 15
console.log(times10(5)); // 50
```

---

## Callbacks — Functions Passed to Other Functions

A **callback** is a function passed as an argument to be called later:

```javascript
// setTimeout takes a callback and a delay in milliseconds
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

// Array methods take callbacks — covered fully in Module 08
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num * 2));
// 2, 4, 6, 8, 10
```

You will use callbacks constantly from Module 08 onwards.

---

## Quick Reference

| Syntax | Name | Key trait |
|--------|------|-----------|
| `function name() {}` | Declaration | Hoisted — usable before it appears |
| `const name = function() {}` | Expression | Not hoisted |
| `const name = () => {}` | Arrow function | Concise, no own `this` |
| `(a, b = 10) => {}` | Default parameter | Used when argument is missing |
| `return value` | Return | Sends value back to caller |

---

## 🧪 Exercises

**Exercise 1 — Write a function**

Write a function `celsiusToFahrenheit(c)` that converts Celsius to Fahrenheit using the formula `(c × 9/5) + 32`. Call it with `0`, `100`, and `37`.

<details>
<summary>Show answer</summary>

```javascript
function celsiusToFahrenheit(c) {
  return (c * 9 / 5) + 32;
}

console.log(celsiusToFahrenheit(0));   // 32
console.log(celsiusToFahrenheit(100)); // 212
console.log(celsiusToFahrenheit(37));  // 98.6
```
</details>

---

**Exercise 2 — Arrow function**

Rewrite this as an arrow function:

```javascript
function square(n) {
  return n * n;
}
```

<details>
<summary>Show answer</summary>

```javascript
const square = n => n * n;

// Or with explicit return:
const square = n => { return n * n; };
```
</details>

---

**Exercise 3 — Default parameters**

Write a function `createSlug(title, separator = "-")` that converts a title to a URL slug. `"Hello World"` → `"hello-world"`. Test with both one and two arguments.

<details>
<summary>Show answer</summary>

```javascript
function createSlug(title, separator = "-") {
  return title.toLowerCase().split(" ").join(separator);
}

console.log(createSlug("Hello World"));        // "hello-world"
console.log(createSlug("Hello World", "_"));   // "hello_world"
```
</details>

---

**Exercise 4 — Scope**

What does this print, and why?

```javascript
const value = "global";

function outer() {
  const value = "outer";
  function inner() {
    console.log(value);
  }
  inner();
}

outer();
console.log(value);
```

<details>
<summary>Show answer</summary>

Prints `"outer"` then `"global"`.

- `inner()` looks for `value` in its own scope — not found. Goes to `outer`'s scope — found: `"outer"`. Prints `"outer"`.
- The last `console.log(value)` is in global scope — finds `"global"`. Prints `"global"`.

The `value` inside `outer()` is a completely separate variable from the global one.
</details>

---

> **Next:** [Module 07 — Objects →](07-objects.md)
