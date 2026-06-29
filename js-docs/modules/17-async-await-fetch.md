# Module 17 — Async/Await & Fetch

> **Previous:** [← Module 16 — Promises](16-promises.md) | **Next:** [Module 18 — Error Handling →](18-error-handling.md)

**Sources:** [javascript.info — Async/await](https://javascript.info/async-await) · [javascript.info — Fetch](https://javascript.info/fetch) · [MDN — async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) · [MDN — Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

---

## `async/await` — Promises with Better Syntax

`async/await` is not a new feature — it is **syntactic sugar over Promises**. Under the hood it is still Promises. But it reads like synchronous code, which is much easier to reason about.

```javascript
// With Promises
function loadUser(id) {
  return fetch(`/api/users/${id}`)
    .then(res => res.json())
    .then(user => {
      console.log(user.name);
      return user;
    })
    .catch(err => console.error(err));
}

// With async/await — same thing, reads top to bottom
async function loadUser(id) {
  const res  = await fetch(`/api/users/${id}`);
  const user = await res.json();
  console.log(user.name);
  return user;
}
```

---

## `async` Functions

Adding `async` before a function makes it always return a Promise, even if you return a plain value:

```javascript
async function greet() {
  return "Hello!";
}

// Returns a Promise, not "Hello!" directly
greet().then(msg => console.log(msg)); // "Hello!"

// With await, you can unwrap it:
const msg = await greet(); // "Hello!" — only valid inside another async function
```

---

## `await` — Pause Until the Promise Settles

`await` can only be used **inside an `async` function** (or at the top level of a module). It pauses execution of that function until the Promise resolves:

```javascript
async function fetchData() {
  console.log("Starting...");

  const result = await someAsyncOperation(); // Pauses here
  // Code below only runs once the promise above resolves

  console.log("Done:", result);
  return result;
}
```

The rest of your program is not blocked — only this `async` function is paused.

---

## The Fetch API — Requesting Data from a Server

`fetch` makes HTTP requests and returns a Promise:

```javascript
async function getPost(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  // Response is not the data yet — it is the HTTP response object
  // You need to call .json() to extract the body (also returns a Promise)
  const post = await response.json();

  return post;
}

const post = await getPost(1);
console.log(post.title);
```

### The two-step pattern

```javascript
const response = await fetch(url); // Step 1: get the response headers
const data     = await response.json(); // Step 2: read and parse the body
```

Both steps are Promises. Both need `await`. Forgetting the second `await` is one of the most common Fetch mistakes.

---

## Checking for HTTP Errors

`fetch` only rejects on **network failure** (no internet, DNS error). An HTTP 404 or 500 response is considered a "successful" fetch — you have to check manually:

```javascript
async function getUser(id) {
  const response = await fetch(`https://api.example.com/users/${id}`);

  if (!response.ok) {
    // response.ok is true for 200–299, false for 4xx/5xx
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json();
}
```

Always check `response.ok`. Always.

---

## POST Requests — Sending Data

```javascript
async function createPost(data) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)  // Convert object to JSON string
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}

const newPost = await createPost({
  title: "My new post",
  body:  "Content here.",
  userId: 1
});
console.log("Created:", newPost.id);
```

---

## A Complete Fetch Pattern with Loading and Error States

```javascript
async function loadWeather(city) {
  const loadingEl = document.getElementById("loading");
  const contentEl = document.getElementById("content");
  const errorEl   = document.getElementById("error");

  // Reset state
  loadingEl.hidden = false;
  contentEl.hidden = true;
  errorEl.hidden   = true;
  errorEl.textContent = "";

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current_weather=true`
    );

    if (!response.ok) throw new Error(`Server error: ${response.status}`);

    const data = await response.json();
    const temp = data.current_weather.temperature;

    contentEl.textContent = `${city}: ${temp}°C`;
    contentEl.hidden = false;

  } catch (err) {
    errorEl.textContent = `Failed to load weather: ${err.message}`;
    errorEl.hidden = false;

  } finally {
    loadingEl.hidden = true;
  }
}
```

This is the complete real-world pattern:
1. Show loading state
2. Try to fetch
3. Check `response.ok`
4. Parse and render data
5. Catch and display errors
6. Always hide loading in `finally`

---

## `async/await` with `Promise.all`

```javascript
async function loadDashboard(userId) {
  // Run all three fetches in parallel — not one after the other
  const [user, posts, followers] = await Promise.all([
    fetch(`/api/users/${userId}`).then(r => r.json()),
    fetch(`/api/users/${userId}/posts`).then(r => r.json()),
    fetch(`/api/users/${userId}/followers`).then(r => r.json())
  ]);

  return { user, posts, followers };
}
```

---

## Working with Public APIs

Good free APIs to practise with:

```javascript
// JSONPlaceholder — fake REST API for testing
fetch("https://jsonplaceholder.typicode.com/todos/1")

// Open-Meteo — free weather (no API key needed)
fetch("https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current_weather=true")

// REST Countries — country data
fetch("https://restcountries.com/v3.1/name/india")

// The Dog API — random dog images (a classic)
fetch("https://dog.ceo/api/breeds/image/random")
```

---

## Quick Reference

| Syntax | Does |
|--------|------|
| `async function f() {}` | Function returns a Promise |
| `await promise` | Wait for Promise to resolve (in async fn only) |
| `fetch(url)` | GET request — returns Response Promise |
| `fetch(url, { method, headers, body })` | Request with options |
| `response.ok` | `true` for 200–299 HTTP status |
| `response.status` | Numeric HTTP status code |
| `response.json()` | Parse body as JSON — returns Promise |
| `response.text()` | Parse body as text — returns Promise |
| `JSON.stringify(obj)` | Object → JSON string (for request body) |
| `JSON.parse(str)` | JSON string → object |

---

## 🧪 Exercises

**Exercise 1 — First fetch**

Write an `async` function `getTodo(id)` that fetches a todo from `https://jsonplaceholder.typicode.com/todos/${id}` and returns the parsed JSON. Call it with `1` and log the result.

<details>
<summary>Show answer</summary>

```javascript
async function getTodo(id) {
  const res  = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

getTodo(1).then(todo => console.log(todo));
// { userId: 1, id: 1, title: "delectus aut autem", completed: false }
```
</details>

---

**Exercise 2 — Render to the DOM**

Extend `getTodo` to render the title and completed status into a `<div id="todo">` on the page.

<details>
<summary>Show answer</summary>

```javascript
async function renderTodo(id) {
  const div = document.getElementById("todo");
  div.textContent = "Loading…";

  try {
    const res  = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const todo = await res.json();

    div.innerHTML = `
      <h3>${todo.title}</h3>
      <p>Status: ${todo.completed ? "✅ Done" : "⏳ Pending"}</p>
    `;
  } catch (err) {
    div.textContent = `Error: ${err.message}`;
  }
}

renderTodo(1);
```
</details>

---

**Exercise 3 — Parallel fetches**

Fetch todos with IDs 1, 2, and 3 in parallel and log all three titles.

<details>
<summary>Show answer</summary>

```javascript
async function fetchMultiple() {
  const todos = await Promise.all([1, 2, 3].map(id =>
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(r => r.json())
  ));

  todos.forEach(todo => console.log(todo.title));
}

fetchMultiple();
```
</details>

---

**Exercise 4 — POST request**

Write a function `createTodo(title)` that sends a POST to `https://jsonplaceholder.typicode.com/todos` with `{ title, completed: false, userId: 1 }` and logs the created object.

<details>
<summary>Show answer</summary>

```javascript
async function createTodo(title) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false, userId: 1 })
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const created = await res.json();
  console.log("Created:", created);
  return created;
}

createTodo("Learn async/await");
```
</details>

---

> **Next:** [Module 18 — Error Handling →](18-error-handling.md)
