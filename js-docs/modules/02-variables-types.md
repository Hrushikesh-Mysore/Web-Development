# Module 02 — Variables & Data Types

> **Previous:** [← Module 01 — What is JavaScript?](01-what-is-js.md) | **Next:** [Module 03 — Operators & Comparisons →](03-operators.md)

---

## Variables — Named Boxes for Data

A variable is a named container for a value. You give it a name, put something in it, and refer to it by name later.

```javascript
let message = "Hello, world!";
console.log(message); // Hello, world!
```

Think of it like a labelled box. The label is the variable name. The contents are the value.

---

## `let`, `const`, and `var`

JavaScript has three keywords for declaring variables. Two are modern and useful. One is old and mostly a trap.

### `let` — Use for values that will change

```javascript
let score = 0;
score = score + 10;  // Reassignment is fine
score = 100;         // Fine again
console.log(score);  // 100
```

### `const` — Use for values that will NOT change

```javascript
const PI = 3.14159;
const siteName = "My Portfolio";
const MAX_RETRIES = 3;

PI = 3; // ❌ TypeError: Assignment to constant variable
```

`const` does not mean the value is frozen forever — it means the *variable binding* cannot be reassigned. An object or array stored in `const` can still have its contents changed (more on that in Module 07 and 08).

> **Rule of thumb:** Use `const` by default. Switch to `let` only when you know the value needs to change. Never use `var`.

### `var` — The old way. Do not use it.

```javascript
var oldStyle = "avoid this";
```

`var` has confusing scoping rules (function-scoped instead of block-scoped), can be re-declared without error, and gets "hoisted" in ways that cause subtle bugs. Every modern JavaScript guide tells you to avoid it. This one is no different.

---

## The Seven Primitive Data Types

A **primitive** is a single, simple value — not a collection of things.

### 1. `number` — All numbers (integer and decimal)

```javascript
let age = 25;
let price = 9.99;
let temperature = -12;
let bigNum = 1_000_000;  // Underscores for readability — valid JS
```

Special number values:
```javascript
Infinity          // e.g. 1 / 0
-Infinity         // e.g. -1 / 0
NaN               // "Not a Number" — result of invalid maths e.g. "hello" * 2
```

### 2. `string` — Text

```javascript
let single = 'Single quotes work fine';
let double = "Double quotes work fine";
let backtick = `Backticks are template literals — more on these later`;

// Strings can be combined (concatenated)
let greeting = "Hello, " + "world!";

// Length
console.log("hello".length); // 5
```

### 3. `boolean` — True or False

```javascript
let isLoggedIn = true;
let hasError = false;

// Booleans come from comparisons:
let isAdult = age >= 18;  // true or false depending on age
```

### 4. `null` — Intentional emptiness

```javascript
let selectedUser = null;  // "There is no user selected — on purpose"
```

`null` is an explicit, intentional "nothing". You assign it yourself to mean "empty".

### 5. `undefined` — Unintentional emptiness

```javascript
let x;
console.log(x);  // undefined — declared but never assigned

function doSomething() {
  // no return statement
}
console.log(doSomething()); // undefined
```

`undefined` means a variable exists but has never been given a value. JavaScript assigns it automatically.

### 6. `bigint` — Very large integers

```javascript
const hugeNumber = 9007199254740991n;  // The 'n' suffix makes it a BigInt
```

Needed when working with numbers larger than `Number.MAX_SAFE_INTEGER` (2⁵³ - 1). Rarely needed in everyday code.

### 7. `symbol` — Unique identifiers

```javascript
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false — every symbol is unique
```

Used as unique object property keys. Advanced usage — not needed for a while.

---

## `typeof` — Check What Type Something Is

```javascript
typeof 42           // "number"
typeof "hello"      // "string"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object"  ← Famous JS bug — null is NOT an object
typeof {}           // "object"
typeof []           // "object"  ← Arrays are also objects
typeof function(){} // "function"
```

> **The `null` quirk:** `typeof null` returning `"object"` is a decades-old bug in JavaScript that was never fixed because fixing it would break too many websites. Just know about it.

---

## The One Non-Primitive: `object`

Everything that is not a primitive is an **object** — a collection of properties. Objects, arrays, functions — all objects. We cover these fully in Modules 07 and 08.

```javascript
// A simple object — key/value pairs
const person = {
  name: "Alex",
  age: 28
};

// An array — ordered list
const colours = ["red", "green", "blue"];
```

---

## Type Conversion

JavaScript sometimes converts types automatically (**implicit conversion** or **coercion**). It also lets you convert manually (**explicit conversion**).

### Explicit conversion

```javascript
// To number
Number("42")       // 42
Number("3.14")     // 3.14
Number("")         // 0
Number("hello")    // NaN
Number(true)       // 1
Number(false)      // 0
Number(null)       // 0
Number(undefined)  // NaN

// To string
String(42)         // "42"
String(true)       // "true"
String(null)       // "null"
(42).toString()    // "42"

// To boolean
Boolean(0)         // false  ← "falsy"
Boolean("")        // false  ← "falsy"
Boolean(null)      // false  ← "falsy"
Boolean(undefined) // false  ← "falsy"
Boolean(NaN)       // false  ← "falsy"
Boolean("hello")   // true   ← any non-empty string is truthy
Boolean(42)        // true   ← any non-zero number is truthy
Boolean({})        // true   ← empty objects are truthy (!)
Boolean([])        // true   ← empty arrays are truthy (!)
```

### The six falsy values — memorise these

```javascript
false
0
""        // empty string
null
undefined
NaN
```

Everything else is **truthy**. This matters enormously in conditionals (Module 04).

---

## Naming Variables — Rules and Conventions

**Rules (must follow):**
- Can only contain letters, digits, `_`, and `$`
- Cannot start with a digit
- Cannot use reserved words (`let`, `class`, `return`, `function`, etc.)
- Case-sensitive: `name` and `Name` are different variables

**Conventions (should follow):**
- Use `camelCase` for variable names: `firstName`, `userScore`, `isLoggedIn`
- Use `UPPER_SNAKE_CASE` for constants: `MAX_SIZE`, `API_URL`
- Use descriptive names — `userAge` beats `n`, `u`, or `x`

```javascript
// ❌ Bad names
let a = 25;
let data = "John";
let x2 = true;

// ✅ Good names
let userAge = 25;
let userName = "John";
let isAuthenticated = true;
```

---

## Quick Reference

| Keyword | Reassignable? | Scope | Use it for |
|---------|--------------|-------|-----------|
| `const` | No | Block | Everything by default |
| `let` | Yes | Block | Values that need to change |
| `var` | Yes | Function | Nothing — avoid it |

| Type | Example | `typeof` returns |
|------|---------|-----------------|
| Number | `42`, `3.14`, `NaN` | `"number"` |
| String | `"hello"`, `'hi'` | `"string"` |
| Boolean | `true`, `false` | `"boolean"` |
| Null | `null` | `"object"` (bug!) |
| Undefined | `undefined` | `"undefined"` |
| Object | `{}`, `[]` | `"object"` |
| Function | `function(){}` | `"function"` |

---

## 🧪 Exercises

**Exercise 1 — `const` vs `let`**

Which keyword should you use for each, and why?

a) A user's current score in a game  
b) The value of Pi (3.14159)  
c) The number of items in a shopping cart  
d) The app's API endpoint URL  

<details>
<summary>Show answer</summary>

a) `let score` — score changes as the user plays  
b) `const PI = 3.14159` — Pi never changes  
c) `let cartCount` — items are added and removed  
d) `const API_URL = "..."` — URLs do not change at runtime  
</details>

---

**Exercise 2 — `typeof` quiz**

Without running the code, predict what `typeof` returns for each:

```javascript
typeof 0
typeof "0"
typeof false
typeof null
typeof undefined
typeof {}
```

<details>
<summary>Show answer</summary>

```javascript
typeof 0          // "number"
typeof "0"        // "string"   ← it's in quotes — it's text, not a number
typeof false      // "boolean"
typeof null       // "object"   ← the famous JS bug
typeof undefined  // "undefined"
typeof {}         // "object"
```
</details>

---

**Exercise 3 — Truthy or falsy?**

Which of these are truthy and which are falsy?

```javascript
0
"0"
""
" "
[]
null
-1
```

<details>
<summary>Show answer</summary>

| Value | Truthy/Falsy | Why |
|-------|-------------|-----|
| `0` | Falsy | Zero is one of the six falsy values |
| `"0"` | **Truthy** | Non-empty string — the value happens to be "0" but it's still text |
| `""` | Falsy | Empty string |
| `" "` | **Truthy** | A space is still a non-empty string |
| `[]` | **Truthy** | Empty array is truthy — surprises people every time |
| `null` | Falsy | Falsy by definition |
| `-1` | **Truthy** | Any non-zero number |
</details>

---

**Exercise 4 — Fix the bugs**

Find and fix all the problems:

```javascript
var 1stName = "John";
const age = 30;
age = 31;
let user name = "Alex";
```

<details>
<summary>Show answer</summary>

```javascript
// 1. Variable names can't start with a digit
// 2. var should be let or const
let firstName = "John";  // Fixed: renamed + use let/const

// 3. const can't be reassigned — use let
let age = 30;
age = 31;  // Now works

// 4. Variable names can't have spaces
let userName = "Alex";  // Fixed: camelCase
```
</details>

---

> **Next:** [Module 03 — Operators & Comparisons →](03-operators.md)
