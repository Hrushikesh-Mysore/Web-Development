# Module 10 — Strings & Numbers In Depth

> **Previous:** [← Module 09 — Modern JavaScript](09-modern-js.md) | **Next:** [Module 11 — The DOM →](11-dom.md)

**Sources:** [javascript.info — Strings](https://javascript.info/string) · [javascript.info — Numbers](https://javascript.info/number) · [MDN — String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) · [MDN — Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

---

## String Methods

Strings are immutable — every method returns a **new string**, never modifying the original.

### Searching

```javascript
const text = "The quick brown fox jumps over the lazy dog";

text.includes("fox")          // true
text.startsWith("The")        // true
text.endsWith("dog")          // true
text.indexOf("fox")           // 16  — position of first match, -1 if not found
text.lastIndexOf("the")       // 31  — last occurrence
```

### Extracting

```javascript
const str = "Hello, World!";

str.slice(7, 12)       // "World"  — from index 7 to 12 (not including 12)
str.slice(7)           // "World!" — from index 7 to end
str.slice(-6)          // "orld!" — last 6 characters
str.substring(7, 12)   // "World"  — similar to slice, no negative indices
str[0]                 // "H"     — character at index 0
str.charAt(0)          // "H"     — same thing
str.at(-1)             // "!"     — last character (modern, ES2022)
```

### Transforming

```javascript
"hello world".toUpperCase()          // "HELLO WORLD"
"HELLO WORLD".toLowerCase()          // "hello world"
"  trim me  ".trim()                 // "trim me"
"  trim me  ".trimStart()            // "trim me  "
"  trim me  ".trimEnd()              // "  trim me"
"abc".repeat(3)                      // "abcabcabc"
"ha".padStart(5, "*")                // "***ha"  — pad to 5 chars at the start
"42".padStart(6, "0")                // "000042" — useful for IDs
"ha".padEnd(5, "!")                  // "ha!!!"
"hello".replace("l", "r")           // "herlo"  — replaces FIRST match only
"hello".replaceAll("l", "r")        // "herro"  — replaces ALL matches
```

### Splitting

```javascript
"a,b,c,d".split(",")                // ["a","b","c","d"]
"hello".split("")                   // ["h","e","l","l","o"]
"one two three".split(" ")          // ["one","two","three"]
"one two three".split(" ", 2)       // ["one","two"] — limit 2
```

### Template literals for complex strings

```javascript
const name = "Alex";
const items = ["Laptop", "Mouse", "Keyboard"];

const receipt = `
Order for: ${name.toUpperCase()}
Items: ${items.join(", ")}
Total: ${items.length} item(s)
`.trim();
```

---

## Number Methods and Globals

### Checking numbers

```javascript
Number.isInteger(42)      // true
Number.isInteger(42.5)    // false
Number.isFinite(Infinity) // false
Number.isFinite(42)       // true
Number.isNaN(NaN)         // true
Number.isNaN("hello")     // false — more reliable than global isNaN()

Number.MAX_SAFE_INTEGER   // 9007199254740991 (2^53 - 1)
```

### Formatting numbers

```javascript
const n = 3.14159265;

n.toFixed(2)        // "3.14"   — rounds to 2 decimal places (returns STRING)
n.toFixed(0)        // "3"
(1234567).toLocaleString()              // "1,234,567" (locale-dependent)
(1234567).toLocaleString("en-IN")       // "12,34,567" — Indian format
(0.0007654).toPrecision(3)              // "0.000765"

// Always a string — parse back if needed
Number(n.toFixed(2)) // 3.14
parseFloat("3.14")   // 3.14
```

### Parsing strings to numbers

```javascript
parseInt("42px")         // 42   — reads until non-numeric
parseInt("3.99")         // 3    — integer only
parseInt("0xFF", 16)     // 255  — base 16 (hex)
parseFloat("3.14abc")    // 3.14 — reads until non-numeric
Number("42")             // 42
Number("42px")           // NaN  — strict, needs valid number
Number("")               // 0
+"42"                    // 42   — unary + operator, same as Number()
```

---

## `Math` — The Maths Toolkit

```javascript
Math.round(4.5)    // 5    — nearest integer
Math.ceil(4.1)     // 5    — always rounds up
Math.floor(4.9)    // 4    — always rounds down
Math.trunc(4.9)    // 4    — removes decimal (same as floor for positives)
Math.trunc(-4.9)   // -4   — different from floor for negatives!

Math.abs(-42)      // 42   — absolute value
Math.pow(2, 10)    // 1024 — same as 2 ** 10
Math.sqrt(16)      // 4    — square root
Math.min(3, 1, 4, 1, 5) // 1
Math.max(3, 1, 4, 1, 5) // 5

Math.random()      // Random float between 0 (inclusive) and 1 (exclusive)
Math.PI            // 3.141592653589793

// Random integer between min and max (inclusive)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
randomInt(1, 6); // Simulates a dice roll
```

---

## Dates — `Date`

```javascript
const now = new Date();         // Current date and time
const specific = new Date("2024-03-15");        // From string
const fromParts = new Date(2024, 2, 15);        // Year, month (0-indexed!), day

now.getFullYear()   // 2024
now.getMonth()      // 0–11 (January = 0 — the gotcha everyone hits)
now.getDate()       // 1–31
now.getDay()        // 0–6 (Sunday = 0)
now.getHours()      // 0–23
now.getMinutes()    // 0–59
now.getTime()       // Milliseconds since Jan 1, 1970 (Unix timestamp)

// Formatting
now.toLocaleDateString("en-IN") // "15/3/2024"
now.toLocaleString("en-US")     // "3/15/2024, 2:30:00 PM"
now.toISOString()               // "2024-03-15T09:00:00.000Z"
```

> **Month gotcha:** `new Date(2024, 0, 1)` is January 1 because months are **0-indexed**. January = 0, December = 11. Classic JavaScript.

---

## Quick Reference

### String methods

| Method | Returns | Does |
|--------|---------|------|
| `.includes(str)` | Boolean | Contains substring? |
| `.startsWith(str)` | Boolean | Begins with? |
| `.indexOf(str)` | Number | Position of first match |
| `.slice(a, b)` | String | Extract portion |
| `.at(i)` | String | Character at index (supports -1) |
| `.toUpperCase()` | String | All caps |
| `.toLowerCase()` | String | All lowercase |
| `.trim()` | String | Remove surrounding whitespace |
| `.replace(a, b)` | String | Replace first match |
| `.replaceAll(a, b)` | String | Replace all matches |
| `.split(sep)` | Array | Split into array |
| `.padStart(n, ch)` | String | Pad to length from start |

### Number / Math

| | Does |
|--|------|
| `Number.isNaN(x)` | Reliable NaN check |
| `n.toFixed(d)` | String with d decimal places |
| `parseInt(str)` | Parse to integer |
| `parseFloat(str)` | Parse to float |
| `Math.round/ceil/floor` | Rounding |
| `Math.random()` | Float 0–1 |
| `Math.min/max(...arr)` | Min/max from spread |

---

## 🧪 Exercises

**Exercise 1 — String methods**

Given `const email = "  User@Example.COM  "`:

a) Trim whitespace  
b) Convert to lowercase  
c) Check if it includes `"@"`  
d) Do all three in one chained expression  

<details>
<summary>Show answer</summary>

```javascript
const email = "  User@Example.COM  ";

// a
email.trim()            // "User@Example.COM"
// b
email.toLowerCase()     // "  user@example.com  "
// c
email.includes("@")     // true

// d — chained
const cleaned = email.trim().toLowerCase();
const isValid = cleaned.includes("@");
console.log(cleaned, isValid); // "user@example.com" true
```
</details>

---

**Exercise 2 — Number formatting**

Format the number `1234567.891` as:

a) A string with exactly 2 decimal places  
b) Indian locale format  

<details>
<summary>Show answer</summary>

```javascript
const n = 1234567.891;

// a
n.toFixed(2)                        // "1234567.89"

// b
n.toLocaleString("en-IN")           // "12,34,567.891"
```
</details>

---

**Exercise 3 — Random dice**

Write a function `rollDice(sides = 6)` that returns a random integer between 1 and `sides` (inclusive).

<details>
<summary>Show answer</summary>

```javascript
function rollDice(sides = 6) {
  return Math.floor(Math.random() * sides) + 1;
}

console.log(rollDice());    // 1–6
console.log(rollDice(20));  // 1–20
```
</details>

---

**Exercise 4 — Parse and validate**

Write a function `parseAge(input)` that:
- Parses the input string as an integer
- Returns the number if it is between 1 and 120
- Returns `null` otherwise

<details>
<summary>Show answer</summary>

```javascript
function parseAge(input) {
  const age = parseInt(input);
  if (Number.isNaN(age) || age < 1 || age > 120) return null;
  return age;
}

console.log(parseAge("25"));   // 25
console.log(parseAge("abc"));  // null
console.log(parseAge("200"));  // null
console.log(parseAge("25px")); // 25 (parseInt reads until non-digit)
```
</details>

---

> **Next:** [Module 11 — The DOM →](11-dom.md)
