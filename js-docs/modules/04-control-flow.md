# Module 04 — Control Flow

> **Previous:** [← Module 03 — Operators & Comparisons](03-operators.md) | **Next:** [Module 05 — Loops →](05-loops.md)

**Sources:** [javascript.info — if/else](https://javascript.info/ifelse) · [javascript.info — switch](https://javascript.info/switch) · [MDN — Making decisions in your code](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals)

---

## `if`, `else if`, `else`

The most fundamental control structure. Run code only when a condition is true.

```javascript
const temperature = 28;

if (temperature > 35) {
  console.log("It's dangerously hot.");
} else if (temperature > 25) {
  console.log("It's warm outside.");
} else if (temperature > 15) {
  console.log("It's pleasant.");
} else {
  console.log("Grab a jacket.");
}
// → "It's warm outside."
```

The condition inside `if ()` is converted to a boolean. Any truthy value runs the block. Any falsy value skips it.

```javascript
const user = null;

if (user) {
  console.log("User exists:", user.name);
} else {
  console.log("No user found.");
}
// → "No user found." because null is falsy
```

---

## Truthy and Falsy in Conditions

Any value can be used as a condition. The six **falsy** values evaluate as `false`:

```javascript
if (0)         { } // never runs
if ("")        { } // never runs
if (null)      { } // never runs
if (undefined) { } // never runs
if (NaN)       { } // never runs
if (false)     { } // never runs
```

Everything else is **truthy**:

```javascript
if ("hello")   { } // runs
if (42)        { } // runs
if ([])        { } // runs — empty array is truthy
if ({})        { } // runs — empty object is truthy
```

---

## The Ternary Operator `?:`

A compact one-line alternative to `if/else` for simple assignments:

```javascript
// Syntax: condition ? valueIfTrue : valueIfFalse

const age = 20;
const status = age >= 18 ? "adult" : "minor";
// status is "adult"

// Equivalent if/else:
let status;
if (age >= 18) {
  status = "adult";
} else {
  status = "minor";
}
```

Use ternary when assigning one value from two choices. For anything more complex — multi-line logic, multiple conditions — use `if/else`. Chaining ternaries is clever but unreadable.

```javascript
// ❌ Too clever — use if/else
const label = score > 90 ? "A" : score > 75 ? "B" : score > 60 ? "C" : "F";

// ✅ Readable
let label;
if (score > 90)      label = "A";
else if (score > 75) label = "B";
else if (score > 60) label = "C";
else                 label = "F";
```

---

## `switch` — Multiple Exact Matches

When you need to compare one value against many specific values:

```javascript
const day = "Monday";

switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  case "Monday":
    console.log("Back to work.");
    break;
  case "Friday":
    console.log("Almost there!");
    break;
  default:
    console.log("Regular weekday.");
}
// → "Back to work."
```

**Critical: the `break` statement.** Without it, execution "falls through" to the next case:

```javascript
switch ("Monday") {
  case "Monday":
    console.log("Monday");
    // No break — falls through!
  case "Tuesday":
    console.log("Tuesday");
    break;
}
// Prints: "Monday" AND "Tuesday" — probably not what you wanted
```

Sometimes fall-through is intentional (grouping cases like Saturday/Sunday above). Usually it is a bug. Always include `break` unless you deliberately want fall-through.

`switch` uses strict equality (`===`) for comparison — no type coercion.

---

## Early Return Pattern — Cleaner than Nested `if`

Instead of nesting conditions deeply, return early when something is invalid:

```javascript
// ❌ Deeply nested — hard to read
function getDiscount(user) {
  if (user) {
    if (user.isPremium) {
      if (user.yearsActive > 2) {
        return 0.3;
      } else {
        return 0.2;
      }
    } else {
      return 0.1;
    }
  } else {
    return 0;
  }
}

// ✅ Early returns — flat and readable
function getDiscount(user) {
  if (!user) return 0;
  if (!user.isPremium) return 0.1;
  if (user.yearsActive > 2) return 0.3;
  return 0.2;
}
```

This is one of the most impactful readability habits you can develop.

---

## Logical Operators in Conditions

```javascript
const age = 25;
const hasId = true;

// AND — both must be true
if (age >= 18 && hasId) {
  console.log("Welcome!");
}

// OR — at least one must be true
if (age < 13 || age > 65) {
  console.log("Special pricing applies.");
}

// NOT — invert the condition
if (!hasId) {
  console.log("ID required.");
}
```

---

## Quick Reference

| Syntax | Use for |
|--------|---------|
| `if (cond) {}` | Run code when condition is true |
| `if (cond) {} else {}` | Two paths |
| `if {} else if {} else {}` | Multiple paths |
| `cond ? a : b` | Pick one of two values (ternary) |
| `switch (val) { case x: break; }` | Match one value against many exact cases |
| `default:` | Fallback in switch |
| `break` | Stop a switch case from falling through |

---

## 🧪 Exercises

**Exercise 1 — Grade classifier**

Write a function `getGrade(score)` that returns:
- `"A"` for 90+
- `"B"` for 75–89
- `"C"` for 60–74
- `"F"` for below 60

<details>
<summary>Show answer</summary>

```javascript
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 75) return "B";
  if (score >= 60) return "C";
  return "F";
}

console.log(getGrade(95));  // "A"
console.log(getGrade(82));  // "B"
console.log(getGrade(45));  // "F"
```
</details>

---

**Exercise 2 — Ternary practice**

Rewrite this using a ternary operator:

```javascript
let message;
if (itemsInCart > 0) {
  message = "Proceed to checkout";
} else {
  message = "Your cart is empty";
}
```

<details>
<summary>Show answer</summary>

```javascript
const message = itemsInCart > 0 ? "Proceed to checkout" : "Your cart is empty";
```
</details>

---

**Exercise 3 — Switch statement**

Write a `switch` that takes a `statusCode` number and logs a message:
- `200` → `"OK"`
- `404` → `"Not Found"`
- `500` → `"Server Error"`
- anything else → `"Unknown Status"`

<details>
<summary>Show answer</summary>

```javascript
function describeStatus(statusCode) {
  switch (statusCode) {
    case 200:
      console.log("OK");
      break;
    case 404:
      console.log("Not Found");
      break;
    case 500:
      console.log("Server Error");
      break;
    default:
      console.log("Unknown Status");
  }
}
```
</details>

---

**Exercise 4 — Truthy/falsy guard**

Write a function `greetUser(name)` that:
- If `name` is falsy (empty, null, undefined), logs `"Hello, Guest!"`
- Otherwise logs `"Hello, [name]!"`

<details>
<summary>Show answer</summary>

```javascript
function greetUser(name) {
  if (!name) {
    console.log("Hello, Guest!");
    return;
  }
  console.log("Hello, " + name + "!");
}

greetUser("Alex");   // Hello, Alex!
greetUser("");       // Hello, Guest!
greetUser(null);     // Hello, Guest!
```
</details>

---

> **Next:** [Module 05 — Loops →](05-loops.md)
