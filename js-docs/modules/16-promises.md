# Module 16 — Promises

> **Previous:** [← Module 15 — Callbacks & Timers](15-callbacks-timers.md) | **Next:** [Module 17 — Async/Await & Fetch →](17-async-await-fetch.md)

**Sources:** [javascript.info — Promise basics](https://javascript.info/promise-basics) · [javascript.info — Promise chaining](https://javascript.info/promise-chaining) · [javascript.info — Promise API](https://javascript.info/promise-api) · [MDN — Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

---

## What is a Promise?

A Promise is an object representing a value that is not available yet — but will be at some point in the future.

Think of ordering food at a restaurant. You get a ticket (the Promise). The food is not ready yet, but you have a guarantee it will either arrive (resolved) or you will be told it is unavailable (rejected).

```javascript
const promise = new Promise((resolve, reject) => {
  // Asynchronous work happens here
  setTimeout(() => {
    const success = true;

    if (success) {
      resolve("Data loaded!"); // Fulfil the promise
    } else {
      reject(new Error("Failed to load")); // Reject the promise
    }
  }, 1000);
});
```

A Promise has three states:
- **Pending** — the async work is still in progress
- **Fulfilled** — the work succeeded, `resolve()` was called
- **Rejected** — the work failed, `reject()` was called

---

## `.then()`, `.catch()`, `.finally()`

```javascript
promise
  .then((result) => {
    console.log("Success:", result); // "Data loaded!"
    return result.toUpperCase();     // Return a value for the next .then()
  })
  .then((upper) => {
    console.log(upper);              // "DATA LOADED!"
  })
  .catch((error) => {
    console.error("Error:", error.message); // Catches any rejection
  })
  .finally(() => {
    console.log("Always runs — success or failure");
    // Good for hiding loading spinners
  });
```

---

## Promise Chaining

Each `.then()` returns a new Promise, so they chain:

```javascript
fetchUser(1)
  .then(user    => fetchOrders(user.id))   // Returns a promise
  .then(orders  => fetchProduct(orders[0].productId)) // Returns a promise
  .then(product => console.log(product))   // Has the final value
  .catch(err    => console.error(err));    // One catch handles all errors
```

Compare to callback hell from Module 15 — this is the same logic, flat and readable.

---

## `Promise.all` — Run in Parallel, Wait for All

```javascript
// Start all three at the same time — do not wait for each in sequence
const [users, products, orders] = await Promise.all([
  fetch("/api/users").then(r => r.json()),
  fetch("/api/products").then(r => r.json()),
  fetch("/api/orders").then(r => r.json())
]);

// If ANY promise rejects, Promise.all rejects immediately
```

**When to use:** When you need multiple independent things and want to wait for all of them.

---

## `Promise.allSettled` — Run in Parallel, Get All Results

```javascript
const results = await Promise.allSettled([
  fetch("/api/users").then(r => r.json()),
  fetch("/api/broken-endpoint").then(r => r.json()), // This will fail
]);

results.forEach(result => {
  if (result.status === "fulfilled") {
    console.log("Success:", result.value);
  } else {
    console.log("Failed:", result.reason.message);
  }
});
```

**When to use:** When you want all results regardless of which ones fail.

---

## `Promise.race` — First One Wins

```javascript
// Implement a timeout for any promise
function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout!")), ms)
  );
  return Promise.race([promise, timeout]);
}

withTimeout(fetch("/api/data"), 5000)
  .then(r => r.json())
  .catch(err => console.error(err.message));
```

---

## Quick Reference

| Method | Does |
|--------|------|
| `new Promise((resolve, reject) => {})` | Create a promise |
| `.then(fn)` | Handle success |
| `.catch(fn)` | Handle failure |
| `.finally(fn)` | Always runs |
| `Promise.all([...])` | Wait for all — fails fast |
| `Promise.allSettled([...])` | Wait for all — gives all results |
| `Promise.race([...])` | First to settle wins |
| `Promise.resolve(val)` | Create an already-resolved promise |
| `Promise.reject(err)` | Create an already-rejected promise |

---

## 🧪 Exercises

**Exercise 1 — Build a promise**

Write a function `delay(ms)` that returns a Promise that resolves after `ms` milliseconds.

<details>
<summary>Show answer</summary>

```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(1000).then(() => console.log("1 second passed!"));
```
</details>

---

**Exercise 2 — Promise chain**

You have these two functions that return Promises. Chain them: get the user, then get their posts.

```javascript
function getUser(id) {
  return Promise.resolve({ id, name: "Alex" });
}
function getPosts(userId) {
  return Promise.resolve([{ id: 1, title: "Post A" }, { id: 2, title: "Post B" }]);
}
```

<details>
<summary>Show answer</summary>

```javascript
getUser(1)
  .then(user    => getPosts(user.id))
  .then(posts   => console.log("Posts:", posts))
  .catch(err    => console.error(err));
```
</details>

---

**Exercise 3 — `Promise.all`**

Fetch users and products in parallel and log both when ready. Use the functions from Exercise 2 plus a `getProducts()` that returns `Promise.resolve([{ id: 1, name: "Widget" }])`.

<details>
<summary>Show answer</summary>

```javascript
function getProducts() {
  return Promise.resolve([{ id: 1, name: "Widget" }]);
}

Promise.all([getUser(1), getProducts()])
  .then(([user, products]) => {
    console.log("User:", user);
    console.log("Products:", products);
  })
  .catch(err => console.error(err));
```
</details>

---

> **Next:** [Module 17 — Async/Await & Fetch →](17-async-await-fetch.md)
