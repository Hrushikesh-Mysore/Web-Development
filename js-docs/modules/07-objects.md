# Module 07 — Objects

> **Previous:** [← Module 06 — Functions](06-functions.md) | **Next:** [Module 08 — Arrays →](08-arrays.md)

**Sources:** [javascript.info — Objects](https://javascript.info/object) · [javascript.info — Object methods, this](https://javascript.info/object-methods) · [javascript.info — Destructuring assignment](https://javascript.info/destructuring-assignment) · [MDN — JavaScript object basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics)

---

## What is an Object?

An object is a collection of **key–value pairs**. It groups related data and behaviour together.

```javascript
const user = {
  name: "Priya Sharma",
  age: 28,
  city: "Bangalore",
  isLoggedIn: true
};
```

Each key–value pair is called a **property**. Keys are strings (or symbols). Values can be anything — strings, numbers, booleans, arrays, other objects, functions.

> [!Note] 
> In the given example there are 4 properties.
> 
> The key can also be a number, like 0 but it will be converted to string when called.


---

## Creating Objects

An empty object (“empty cabinet”) can be created using one of two syntaxes:

```javascript
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
```

In this module, we focus on creation of objects using object literals
  
```javascript
// Object literal — the most common way
const product = {
  name: "Wireless Mouse",
  price: 799,
  inStock: true
};

// Empty object, properties added later
const config = {};
config.theme = "dark";
config.language = "en";
```


---

## Reading and Writing Properties

There are 2 ways of accessing the properties of an Object
1. The dot operator
2. Square brackets
```javascript
const user = { name: "Alex", age: 25 };

// Dot notation — clean, use when you know the key name
console.log(user.name);  // "Alex"
user.age = 26;           // Update
user.email = "alex@example.com";  // Add new property

// Bracket notation — use when the key is dynamic or has special characters
const key = "name";
console.log(user[key]);  // "Alex" — same as user.name

const data = { "first-name": "Alex" };
console.log(data["first-name"]); // "Alex" — dot notation would fail here
```

> [!Note]
> use of square brackets is more powerful, than using the dot operator. Using the square brackets we can create, keys with multiple words, but they need to be enclosed with quotes to access them and at initialization.
> Another use of using square brackets is to change the name we can concatenate strings in the square brackets to modify key name.

---
## Checking and Deleting Properties

```javascript
const user = { name: "Alex", age: 25 };

// Check if property exists
"name" in user    // true
"email" in user   // false

// Delete a property
delete user.age;
console.log(user); // { name: "Alex" }
```

---

## Methods — Functions Inside Objects

When a function is stored as an object property, it is called a **method**:

```javascript
const calculator = {
  value: 0,

  add(n) {
    this.value += n;
    return this;  // Return this for chaining
  },

  subtract(n) {
    this.value -= n;
    return this;
  },

  result() {
    return this.value;
  }
};

calculator.add(10).add(5).subtract(3);
console.log(calculator.result()); // 12
```

---

## `this` — The Object the Method Belongs To

Inside a method, `this` refers to the object the method was called on:

```javascript
const person = {
  name: "Ravi",
  greet() {
    console.log("Hi, I am " + this.name);
  }
};

person.greet(); // "Hi, I am Ravi"
```

`this` is one of the trickier parts of JavaScript. The key rule: **`this` is determined by how the function is called, not where it is defined**.

```javascript
const user = {
  name: "Alex",
  greet() {
    console.log(this.name);
  }
};

user.greet();        // "Alex" — called on user, so this = user

const fn = user.greet;
fn();                // undefined — called without an object, this = global (or undefined in strict mode)
```

> **Arrow functions do not have their own `this`** — they inherit `this` from the surrounding scope. This makes them unsuitable for methods, but very useful for callbacks inside methods.

---

## Object Destructuring — Unpack Properties Cleanly

Instead of accessing properties one by one, destructuring lets you extract multiple at once:

```javascript
const user = { name: "Alex", age: 28, city: "Bangalore" };

// Without destructuring
const name = user.name;
const age = user.age;

// With destructuring — much cleaner
const { name, age } = user;
console.log(name, age); // "Alex" 28

// Rename during destructuring
const { name: userName, age: userAge } = user;
console.log(userName, userAge); // "Alex" 28

// Default values
const { name, role = "viewer" } = user;
console.log(role); // "viewer" — not in the object, uses default
```

**Destructuring in function parameters** — extremely common pattern:

```javascript
// Instead of accessing config.theme, config.lang every time:
function setup({ theme = "light", lang = "en", debug = false }) {
  console.log(theme, lang, debug);
}

setup({ theme: "dark", lang: "hi" });
// "dark" "hi" false
```

---

## Computed Property Names

```javascript
const field = "name";
const user = {
  [field]: "Alex",         // Key is the value of the variable 'field'
  ["user_" + 1]: "first"  // Computed
};

console.log(user.name);    // "Alex"
console.log(user.user_1);  // "first"
```

---

## Shorthand Properties

When the variable name matches the property key:

```javascript
const name = "Alex";
const age = 28;

// Old way
const user = { name: name, age: age };

// Shorthand — same result, less repetition
const user = { name, age };
```

---

## Spread Operator with Objects — Copy and Merge

```javascript
const defaults = { theme: "light", lang: "en", notifications: true };
const userPrefs = { theme: "dark", lang: "hi" };

// Merge — later properties override earlier ones
const config = { ...defaults, ...userPrefs };
console.log(config);
// { theme: "dark", lang: "hi", notifications: true }

// Copy an object (shallow copy)
const original = { a: 1, b: 2 };
const copy = { ...original };
copy.a = 99;
console.log(original.a); // 1 — original unchanged
```

---

## Optional Chaining `?.`

Safely access deeply nested properties without crashing if something is `null` or `undefined`:

```javascript
const user = {
  profile: {
    address: {
      city: "Bangalore"
    }
  }
};

// Without optional chaining — crashes if any level is null
console.log(user.profile.address.city);    // "Bangalore"
console.log(user.settings.theme);          // ❌ TypeError — settings is undefined

// With optional chaining — returns undefined instead of crashing
console.log(user.settings?.theme);         // undefined — safe
console.log(user.profile?.address?.city);  // "Bangalore"
console.log(user.profile?.phone?.mobile);  // undefined — safe
```

Also works for methods:

```javascript
user.greet?.();  // Calls greet() only if it exists — no error if it doesn't
```

---

## `Object.keys()`, `Object.values()`, `Object.entries()`

```javascript
const scores = { Alice: 95, Bob: 72, Priya: 88 };

Object.keys(scores)    // ["Alice", "Bob", "Priya"]
Object.values(scores)  // [95, 72, 88]
Object.entries(scores) // [["Alice", 95], ["Bob", 72], ["Priya", 88]]

// Loop over an object cleanly
for (const [name, score] of Object.entries(scores)) {
  console.log(`${name}: ${score}`);
}
```

---

## Quick Reference

| Syntax                 | Does                                    |
| ---------------------- | --------------------------------------- |
| `{ key: value }`       | Create an object                        |
| `obj.key`              | Read/write with dot notation            |
| `obj["key"]`           | Read/write with bracket notation        |
| `"key" in obj`         | Check if property exists                |
| `delete obj.key`       | Remove a property                       |
| `{ name, age }`        | Shorthand when var name = property name |
| `{ ...obj }`           | Shallow copy / spread into new object   |
| `obj?.prop`            | Optional chaining — safe access         |
| `const { a, b } = obj` | Destructure properties                  |
| `Object.keys(obj)`     | Array of all keys                       |
| `Object.values(obj)`   | Array of all values                     |
| `Object.entries(obj)`  | Array of `[key, value]` pairs           |

---

## Exercises

**Exercise 1 — Build an object**

Create a `book` object with properties: `title` (string), `author` (string), `year` (number), `available` (boolean). Then log each property using dot notation.

<details>
<summary>Show answer</summary>

```javascript
const book = {
  title: "Atomic Habits",
  author: "James Clear",
  year: 2018,
  available: true
};

console.log(book.title);
console.log(book.author);
console.log(book.year);
console.log(book.available);
```
</details>

---

**Exercise 2 — Destructuring**

Destructure `name`, `price`, and `category` from this object. If `category` is not present, default to `"uncategorised"`.

```javascript
const product = { name: "Keyboard", price: 2499 };
```

<details>
<summary>Show answer</summary>

```javascript
const { name, price, category = "uncategorised" } = product;
console.log(name);     // "Keyboard"
console.log(price);    // 2499
console.log(category); // "uncategorised"
```
</details>

---

**Exercise 3 — Optional chaining**

Write code that safely accesses `user.address.pincode`. If any part of the chain is null/undefined, log `"No pincode found"` instead of crashing.

<details>
<summary>Show answer</summary>

```javascript
const pincode = user?.address?.pincode ?? "No pincode found";
console.log(pincode);
```
</details>

---

**Exercise 4 — Merge objects**

Merge these two objects. If both have the same key, the `update` values should win:

```javascript
const original = { name: "Alex", role: "viewer", active: true };
const update   = { role: "admin", lastSeen: "2024-03-15" };
```

<details>
<summary>Show answer</summary>

```javascript
const merged = { ...original, ...update };
console.log(merged);
// { name: "Alex", role: "admin", active: true, lastSeen: "2024-03-15" }
// role is "admin" because update comes after original
```
</details>

---

> **Next:** [Module 08 — Arrays →](08-arrays.md)
