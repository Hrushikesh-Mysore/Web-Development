# Module 18 — Error Handling

> **Previous:** [← Module 17 — Async/Await & Fetch](17-async-await-fetch.md) | **Next:** [🏁 Final Project →](../project/README.md)

**Sources:** [javascript.info — Error handling, try/catch](https://javascript.info/try-catch) · [javascript.info — Custom errors](https://javascript.info/custom-errors) · [MDN — Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

---

## Why Error Handling Matters

Every program that runs in the real world encounters unexpected situations — a network request that fails, a user who types letters into a number field, an API that returns a different shape than you expected. Without error handling, these situations crash your entire application and leave the user staring at a broken page.

Good error handling means your app fails gracefully — it tells the user something went wrong, logs what happened, and keeps running.

---

## `try / catch / finally`

The fundamental error handling structure:

```javascript
try {
  // Code that might throw an error
  const result = riskyOperation();
  console.log(result);

} catch (error) {
  // Runs if anything in the try block throws
  console.error("Something went wrong:", error.message);

} finally {
  // ALWAYS runs — whether try succeeded or catch fired
  // Perfect for cleanup: hide loading spinners, close connections
  hideLoadingSpinner();
}
```

A real example:

```javascript
function parseUserInput(input) {
  try {
    const data = JSON.parse(input); // Throws SyntaxError if input is invalid JSON
    return data;
  } catch (error) {
    console.error("Invalid JSON:", error.message);
    return null;
  }
}

parseUserInput('{"name":"Alex"}'); // { name: "Alex" }
parseUserInput("not json at all"); // null — error caught, no crash
```

---

## The Error Object

When JavaScript throws an error, it creates an **Error object**. The `catch` block receives it:

```javascript
try {
  null.property; // TypeError: Cannot read properties of null
} catch (error) {
  console.log(error.name);    // "TypeError"
  console.log(error.message); // "Cannot read properties of null (reading 'property')"
  console.log(error.stack);   // Full stack trace — invaluable for debugging
}
```

### Built-in Error Types

| Type | When it occurs |
|------|---------------|
| `Error` | Generic base error |
| `TypeError` | Wrong type used — `null.property`, calling a non-function |
| `ReferenceError` | Using a variable that does not exist |
| `SyntaxError` | Invalid JavaScript syntax — usually from `JSON.parse` |
| `RangeError` | Number out of valid range — `new Array(-1)` |
| `URIError` | Malformed URI passed to `decodeURI()` |

---

## Throwing Errors

You can throw errors yourself with `throw`. Throw when something is genuinely wrong and the caller needs to know:

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return a / b;
}

try {
  divide(10, 0);
} catch (err) {
  console.error(err.message); // "Cannot divide by zero."
}
```

You can throw anything — a string, a number, an object — but **always throw an `Error` instance**. Only `Error` objects have a `.stack` trace, which is essential for debugging.

---

## Custom Error Classes

For larger applications, create specific error types so you can handle different failures differently:

```javascript
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name    = "ValidationError";
    this.field   = field;
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name       = "NetworkError";
    this.statusCode = statusCode;
  }
}

// Use them
function validateAge(age) {
  if (typeof age !== "number") {
    throw new ValidationError("Age must be a number.", "age");
  }
  if (age < 0 || age > 150) {
    throw new ValidationError("Age must be between 0 and 150.", "age");
  }
  return age;
}

// Handle them by type
try {
  validateAge("twenty");
} catch (err) {
  if (err instanceof ValidationError) {
    console.log(`Field "${err.field}" failed: ${err.message}`);
  } else {
    // Unknown error — re-throw it, do not swallow it
    throw err;
  }
}
```

---

## Error Handling in Async Code

### With `async/await` — use `try/catch`

```javascript
async function loadUserData(userId) {
  try {
    const res = await fetch(`/api/users/${userId}`);

    if (!res.ok) {
      throw new NetworkError(`Request failed`, res.status);
    }

    const user = await res.json();
    return user;

  } catch (err) {
    if (err instanceof NetworkError) {
      console.error(`Network error ${err.statusCode}: ${err.message}`);
    } else {
      // Unexpected error — log and re-throw
      console.error("Unexpected error:", err);
      throw err;
    }
    return null;
  }
}
```

### With Promises — use `.catch()`

```javascript
fetch("/api/data")
  .then(res => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  })
  .then(data => render(data))
  .catch(err => {
    showErrorMessage(err.message);
  });
```

---

## The Re-throw Pattern

Do not swallow errors you do not know how to handle. Catch what you can fix, re-throw the rest:

```javascript
async function saveData(data) {
  try {
    await db.save(data);
  } catch (err) {
    if (err instanceof ValidationError) {
      // We know how to handle this — show user feedback
      showFormError(err.field, err.message);
    } else {
      // We do not know what this is — let it bubble up
      throw err;
    }
  }
}
```

---

## Global Error Handlers — The Last Line of Defence

Catch unhandled errors that slip through everything else:

```javascript
// Unhandled synchronous errors
window.onerror = function(message, source, lineno, colno, error) {
  console.error("Unhandled error:", message);
  // Log to an error monitoring service (Sentry, etc.)
  // Return true to suppress the browser's default error display
};

// Unhandled Promise rejections
window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);
  event.preventDefault(); // Suppress default console error
});
```

These are safety nets — not replacements for proper error handling in your code.

---

## A Complete Error Handling Strategy

Put it all together — this is what production-quality async code looks like:

```javascript
class AppError extends Error {
  constructor(message, type = "general") {
    super(message);
    this.name = "AppError";
    this.type = type;
  }
}

async function fetchWeather(city) {
  const loadingEl = document.getElementById("loading");
  const resultEl  = document.getElementById("result");
  const errorEl   = document.getElementById("error");

  // Reset UI
  loadingEl.hidden = false;
  resultEl.hidden  = true;
  errorEl.hidden   = true;

  try {
    if (!city?.trim()) {
      throw new AppError("Please enter a city name.", "validation");
    }

    const url = `https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current_weather=true`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new AppError(`Weather service unavailable (${res.status}).`, "network");
    }

    const data = await res.json();
    const temp = data.current_weather.temperature;

    resultEl.textContent = `${city}: ${temp}°C`;
    resultEl.hidden = false;

  } catch (err) {
    if (err instanceof AppError) {
      errorEl.textContent = err.message;
    } else {
      // Unexpected — show a generic message, log the real error
      errorEl.textContent = "An unexpected error occurred. Please try again.";
      console.error("Unexpected:", err);
    }
    errorEl.hidden = false;

  } finally {
    loadingEl.hidden = true;
  }
}
```

---

## Quick Reference

| Syntax | Does |
|--------|------|
| `try { } catch (err) { }` | Catch errors in a block |
| `finally { }` | Always runs after try/catch |
| `throw new Error("msg")` | Manually throw an error |
| `err.name` | Error type name |
| `err.message` | Human-readable description |
| `err.stack` | Stack trace (for debugging) |
| `err instanceof TypeError` | Check the error type |
| `class MyError extends Error` | Custom error class |
| `window.addEventListener("unhandledrejection", fn)` | Catch missed Promise rejections |

---

## 🧪 Exercises

**Exercise 1 — Basic try/catch**

Write a function `safeDivide(a, b)` that returns `a / b`, but catches a division by zero and returns `null` with a `console.warn` message instead of crashing.

<details>
<summary>Show answer</summary>

```javascript
function safeDivide(a, b) {
  try {
    if (b === 0) throw new Error("Cannot divide by zero.");
    return a / b;
  } catch (err) {
    console.warn(err.message);
    return null;
  }
}

console.log(safeDivide(10, 2));  // 5
console.log(safeDivide(10, 0));  // null (warns in console)
```
</details>

---

**Exercise 2 — Custom error class**

Create a `ValidationError` class with a `field` property. Write a `validateEmail(email)` function that throws a `ValidationError` if the email does not include `"@"`.

<details>
<summary>Show answer</summary>

```javascript
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name  = "ValidationError";
    this.field = field;
  }
}

function validateEmail(email) {
  if (!email.includes("@")) {
    throw new ValidationError("Invalid email address.", "email");
  }
  return true;
}

try {
  validateEmail("notanemail");
} catch (err) {
  if (err instanceof ValidationError) {
    console.log(`"${err.field}" error: ${err.message}`);
    // "email" error: Invalid email address.
  }
}
```
</details>

---

**Exercise 3 — Async error handling**

Write an `async` function `safeFetch(url)` that fetches the URL, checks `response.ok`, and returns the parsed JSON. If anything fails (network error or bad status), it should return `{ error: err.message }` instead of throwing.

<details>
<summary>Show answer</summary>

```javascript
async function safeFetch(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    return await res.json();
  } catch (err) {
    return { error: err.message };
  }
}

// Usage
const data = await safeFetch("https://jsonplaceholder.typicode.com/todos/1");
if (data.error) {
  console.error("Fetch failed:", data.error);
} else {
  console.log(data);
}
```
</details>

---

**Exercise 4 — `finally` cleanup**

Write a function `loadWithSpinner(fetchFn)` that:
1. Shows a `<div id="spinner">` before the fetch
2. Runs the provided `fetchFn` (which returns a Promise)
3. Hides the spinner when done — whether it succeeded or failed

<details>
<summary>Show answer</summary>

```javascript
async function loadWithSpinner(fetchFn) {
  const spinner = document.getElementById("spinner");
  spinner.hidden = false;

  try {
    const result = await fetchFn();
    return result;
  } catch (err) {
    console.error("Load error:", err.message);
    throw err; // Re-throw so the caller still knows it failed
  } finally {
    spinner.hidden = true; // Always hides, no matter what
  }
}

// Usage
const data = await loadWithSpinner(() =>
  fetch("https://jsonplaceholder.typicode.com/posts/1").then(r => r.json())
);
console.log(data.title);
```
</details>

---

## 🎉 You Have Finished All 18 Modules

Here is what you now know:

**Part 1 — The Language:**
variables, types, operators, control flow, loops, functions, objects, arrays, modern ES6+ syntax, string and number methods

**Part 2 — The Browser:**
selecting and reading DOM elements, creating and inserting elements, handling events, event delegation, processing forms and validation

**Part 3 — Asynchronous JavaScript:**
the callback pattern, Promises and chaining, `async/await`, the Fetch API, working with real APIs, and handling errors at every level

**One thing left — build the project.**

→ [Go to the Final Project →](../project/README.md)

---

> **[← Module 17 — Async/Await & Fetch](17-async-await-fetch.md)** | **[🏁 Final Project →](../project/README.md)**
