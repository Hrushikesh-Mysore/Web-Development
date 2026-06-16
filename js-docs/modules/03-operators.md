# Module 03 — Operators & Comparisons

> **Previous:** [← Module 02 — Variables & Data Types](02-variables-types.md) | **Next:** [Module 04 — Control Flow →](04-control-flow.md)

---

## Arithmetic Operators

```javascript
let a = 10, b = 3;

a + b   // 13 — addition
a - b   // 7  — subtraction
a * b   // 30 — multiplication
a / b   // 3.3333... — division
a % b   // 1  — modulo (remainder after division)
a ** b  // 1000 — exponentiation (10 to the power 3)
```

**Modulo (`%`) is surprisingly useful** — checking if a number is even, cycling through items, limiting a counter:

```javascript
10 % 2  // 0 — even number
9  % 2  // 1 — odd number
7  % 3  // 1 — (7 = 2×3 + 1, remainder is 1)
```

---

## Increment and Decrement

```javascript
let count = 0;
count++;   // Increment: count is now 1 (postfix — returns old value, then increments)
++count;   // Increment: count is now 2 (prefix — increments first, returns new value)
count--;   // Decrement: count is now 1
--count;   // Decrement: count is now 0
```

In most real code, the distinction between prefix and postfix only matters when you use the expression inside something else:

```javascript
let x = 5;
console.log(x++); // Prints 5 — returns THEN increments
console.log(x);   // Now 6

let y = 5;
console.log(++y); // Prints 6 — increments THEN returns
```

---

## Assignment Operators

```javascript
let n = 10;
n += 5;   // n = n + 5  → 15
n -= 3;   // n = n - 3  → 12
n *= 2;   // n = n * 2  → 24
n /= 4;   // n = n / 4  → 6
n %= 4;   // n = n % 4  → 2
n **= 3;  // n = n ** 3 → 8
```

---

## String Concatenation with `+`

When `+` is used with strings, it concatenates:

```javascript
"Hello" + " " + "World"   // "Hello World"
"Score: " + 42            // "Score: 42" — number converts to string
"5" + 3                   // "53" — not 8! The number becomes a string
```

> ⚠️ **Common gotcha:** `"5" + 3` is `"53"`, not `8`. When one operand is a string, `+` concatenates instead of adding. Every other arithmetic operator converts strings to numbers first: `"5" - 3` is `2`.

---

## Comparison Operators

```javascript
5 > 3    // true  — greater than
5 < 3    // false — less than
5 >= 5   // true  — greater than or equal
5 <= 4   // false — less than or equal
5 == 5   // true  — loose equality
5 === 5  // true  — strict equality
5 != 4   // true  — loose inequality
5 !== 4  // true  — strict inequality
```

---

## `==` vs `===` — The Most Important Distinction in JS

`==` (loose equality) performs **type coercion** before comparing. It converts values to the same type, then compares:

```javascript
0 == false    // true  — false converts to 0
0 == ""       // true  — "" converts to 0
"1" == 1      // true  — "1" converts to 1
null == undefined  // true
null == 0     // false — null only equals null and undefined
```

`===` (strict equality) compares **type AND value**, no conversion:

```javascript
0 === false   // false — different types
"1" === 1     // false — different types
null === undefined  // false — different types
1 === 1       // true
"hi" === "hi" // true
```

**Always use `===` and `!==` unless you have a specific reason not to.** The `==` results are unpredictable enough that most style guides ban it entirely.

---

## Logical Operators

```javascript
// AND — true only if BOTH sides are true
true && true   // true
true && false  // false
false && true  // false

// OR — true if EITHER side is true
true || false  // true
false || false // false

// NOT — flips the boolean
!true   // false
!false  // true
!0      // true  — 0 is falsy, so !0 is true
!"hi"   // false — "hi" is truthy, so !"hi" is false
```

### Short-circuit evaluation — very important!

`&&` and `||` do not just return `true`/`false`. They return **one of their operands**:

```javascript
// && returns the first falsy value, or the last value if all are truthy
console.log(1 && 2 && 3);   // 3   — all truthy, returns last
console.log(1 && 0 && 3);   // 0   — 0 is falsy, stops there
console.log(0 && "hello");  // 0   — first value is falsy

// || returns the first truthy value, or the last value if all are falsy
console.log(0 || "hello");  // "hello" — 0 is falsy, moves to "hello"
console.log(null || 0 || "default"); // "default" — first truthy
console.log(1 || "anything");        // 1 — already truthy
```

**Practical use — default values with `||`:**

```javascript
const userName = inputName || "Guest";
// If inputName is empty/null/undefined, use "Guest"
```

---

## Nullish Coalescing Operator `??`

`??` is similar to `||` but only treats `null` and `undefined` as "empty" — it does not treat `0` or `""` as empty:

```javascript
null ?? "default"       // "default"
undefined ?? "default"  // "default"
0 ?? "default"          // 0      ← preserves 0! || would return "default"
"" ?? "default"         // ""     ← preserves empty string! || would return "default"
"hello" ?? "default"    // "hello"
```

**Use `??` when `0` or `""` are valid values** you want to keep. Use `||` when any falsy value should trigger the fallback.

---

## Quick Reference

| Operator | Meaning | Example |
|----------|---------|---------|
| `+` `-` `*` `/` | Arithmetic | `5 + 3` → `8` |
| `%` | Remainder/modulo | `7 % 3` → `1` |
| `**` | Exponentiation | `2 ** 8` → `256` |
| `++` `--` | Increment/decrement | `x++`, `--y` |
| `+=` `-=` `*=` | Compound assignment | `x += 5` |
| `===` `!==` | Strict equality | Always prefer these |
| `==` `!=` | Loose equality | Avoid — coerces types |
| `&&` | Logical AND | Returns first falsy or last value |
| `\|\|` | Logical OR | Returns first truthy or last value |
| `!` | Logical NOT | Flips boolean |
| `??` | Nullish coalescing | Default only for `null`/`undefined` |

---

## 🧪 Exercises

**Exercise 1 — `===` vs `==`**

Without running the code, predict the result:

```javascript
"5" == 5
"5" === 5
null == undefined
null === undefined
0 == false
0 === false
```

<details>
<summary>Show answer</summary>

```javascript
"5" == 5         // true  — "5" coerces to 5
"5" === 5        // false — different types (string vs number)
null == undefined  // true  — special rule in loose equality
null === undefined // false — different types
0 == false       // true  — false coerces to 0
0 === false      // false — different types (number vs boolean)
```
</details>

---

**Exercise 2 — Short-circuit**

What does each line log?

```javascript
console.log(null || "fallback");
console.log("value" || "fallback");
console.log(0 ?? "fallback");
console.log(null ?? "fallback");
```

<details>
<summary>Show answer</summary>

```javascript
null || "fallback"     // "fallback" — null is falsy
"value" || "fallback"  // "value"    — already truthy, stops here
0 ?? "fallback"        // 0          — ?? only fires for null/undefined, not 0
null ?? "fallback"     // "fallback" — null triggers ??
```
</details>

---

**Exercise 3 — Default values**

Write one line of code using `??` to get a `userName` variable that equals `inputName` if it is not null/undefined, or `"Anonymous"` otherwise.

<details>
<summary>Show answer</summary>

```javascript
const userName = inputName ?? "Anonymous";
```
</details>

---

**Exercise 4 — Predict the output**

```javascript
console.log("5" + 3);
console.log("5" - 3);
console.log(10 % 3);
console.log(2 ** 10);
console.log(!!"hello");
```

<details>
<summary>Show answer</summary>

```javascript
"5" + 3    // "53"  — string + number concatenates
"5" - 3    // 2     — other operators convert string to number
10 % 3     // 1     — remainder of 10/3
2 ** 10    // 1024  — 2 to the power 10
!!"hello"  // true  — double NOT converts to boolean
```
</details>

---

> **Next:** [Module 04 — Control Flow →](04-control-flow.md)
