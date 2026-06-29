# Module 15 — Callbacks & Timers

> **Previous:** [← Module 14 — Forms](14-forms.md) | **Next:** [Module 16 — Promises →](16-promises.md)

**Sources:** [javascript.info — setTimeout/setInterval](https://javascript.info/settimeout-setinterval) · [javascript.info — Callbacks](https://javascript.info/callbacks) · [MDN — setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)

---

## Synchronous vs Asynchronous

**Synchronous code** runs line by line. Each line waits for the previous one to finish.

**Asynchronous code** starts something that takes time, then moves on without waiting. When the operation finishes, a callback runs.

```javascript
// Synchronous — blocks
console.log("1");
// Imagine this takes 3 seconds...
console.log("2"); // Waits until above finishes
console.log("3");

// Asynchronous — non-blocking
console.log("1");
setTimeout(() => console.log("2"), 3000); // Starts, doesn't block
console.log("3"); // Runs immediately
// Output: 1, 3, 2
```

---

## `setTimeout` — Run Once After a Delay

```javascript
// setTimeout(callback, delayInMilliseconds, ...args)
const timerId = setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

// Cancel before it fires
clearTimeout(timerId);
```

Passing arguments:

```javascript
setTimeout((name, score) => {
  console.log(`${name} scored ${score}!`);
}, 1000, "Alex", 95);
```

---

## `setInterval` — Run Repeatedly

```javascript
let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log("Tick:", count);

  if (count >= 5) {
    clearInterval(intervalId); // Stop after 5 ticks
    console.log("Done!");
  }
}, 1000);
```

Always store the ID and call `clearInterval` when done — otherwise it runs forever.

---

## The Callback Pattern

Before Promises, asynchronous operations were chained with callbacks:

```javascript
function fetchUser(userId, onSuccess, onError) {
  setTimeout(() => {
    if (userId === 1) {
      onSuccess({ id: 1, name: "Alex" });
    } else {
      onError(new Error("User not found"));
    }
  }, 500);
}

fetchUser(
  1,
  (user) => console.log("Got user:", user.name),
  (err)  => console.log("Error:", err.message)
);
```

This works, but nesting multiple callbacks creates **callback hell**:

```javascript
// Callback hell — hard to read, hard to debug
fetchUser(1, (user) => {
  fetchOrders(user.id, (orders) => {
    fetchProduct(orders[0].productId, (product) => {
      // Now we're 3 levels deep and it only gets worse
    }, handleError);
  }, handleError);
}, handleError);
```

This is why Promises and `async/await` were invented.

---

## Quick Reference

| Function | Does |
|---------|------|
| `setTimeout(fn, ms)` | Run `fn` once after `ms` milliseconds |
| `clearTimeout(id)` | Cancel a scheduled timeout |
| `setInterval(fn, ms)` | Run `fn` every `ms` milliseconds |
| `clearInterval(id)` | Stop a running interval |

---

## 🧪 Exercises

**Exercise 1 — Countdown**

Write a countdown from 5 to 0 using `setInterval`, logging each number. When it reaches 0, log "Go!" and stop the interval.

<details>
<summary>Show answer</summary>

```javascript
let count = 5;

const id = setInterval(() => {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(id);
    console.log("Go!");
  }
}, 1000);
```
</details>

---

**Exercise 2 — Debounce from scratch**

Write a `debounce(fn, delay)` function that returns a debounced version of `fn` that only fires after the user stops calling it for `delay` ms.

<details>
<summary>Show answer</summary>

```javascript
function debounce(fn, delay) {
  let timerId;
  return function(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn.apply(this, args), delay);
  };
}

const debouncedSearch = debounce((query) => {
  console.log("Searching for:", query);
}, 300);

// Simulate fast typing
debouncedSearch("j");
debouncedSearch("ja");
debouncedSearch("jav"); // Only this one actually fires (after 300ms)
```
</details>

---

> **Next:** [Module 16 — Promises →](16-promises.md)
