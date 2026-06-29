# Module 14 — Forms & Validation

> **Previous:** [← Module 13 — Events](13-events.md) | **Next:** [Module 15 — Callbacks & Timers →](15-callbacks-timers.md)

**Sources:** [javascript.info — Form properties](https://javascript.info/form-elements) · [javascript.info — Focus/blur](https://javascript.info/focus-blur) · [MDN — Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)

---

## Reading Form Values

```javascript
// Text inputs, password, email, url, tel
const name  = document.getElementById("name").value;
const email = document.getElementById("email").value;

// Checkbox
const agreed = document.getElementById("terms").checked; // true/false

// Radio button — find the checked one in the group
const selectedGender = document.querySelector("input[name='gender']:checked")?.value;

// Select dropdown
const country = document.getElementById("country").value; // Selected option's value

// Textarea
const message = document.getElementById("message").value;
```

---

## Handling Form Submission

Always call `event.preventDefault()` on form submit — otherwise the browser navigates away and you never see the data:

```javascript
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop page reload

  const data = {
    name:    form.elements["name"].value.trim(),
    email:   form.elements["email"].value.trim(),
    message: form.elements["message"].value.trim()
  };

  console.log("Form data:", data);
  // Then: validate, send to server, update UI
});
```

`form.elements["name"]` is a clean way to access a form input by its `name` attribute.

---

## Client-Side Validation

JavaScript validation gives immediate feedback before anything is sent to a server:

```javascript
form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors(); // Remove any previous error messages

  const name  = form.elements["name"].value.trim();
  const email = form.elements["email"].value.trim();

  let isValid = true;

  if (name.length < 2) {
    showError("name", "Name must be at least 2 characters.");
    isValid = false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    showError("email", "Please enter a valid email address.");
    isValid = false;
  }

  if (!isValid) return; // Stop here if validation failed

  // All valid — proceed
  submitData({ name, email });
});

function showError(fieldName, message) {
  const field = form.elements[fieldName];
  field.classList.add("invalid");

  const error = document.createElement("p");
  error.className     = "error-message";
  error.textContent   = message;
  field.after(error);
}

function clearErrors() {
  form.querySelectorAll(".error-message").forEach(el => el.remove());
  form.querySelectorAll(".invalid").forEach(el => el.classList.remove("invalid"));
}
```

---

## Real-Time Validation with `input` Event

Validate as the user types for immediate feedback:

```javascript
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

emailInput.addEventListener("input", () => {
  const val = emailInput.value.trim();
  if (val && !val.includes("@")) {
    emailError.textContent = "Please include an @ symbol.";
  } else {
    emailError.textContent = "";
  }
});
```

---

## Quick Reference

| Property / Method | Does |
|-----------------|------|
| `input.value` | Current text value |
| `input.checked` | Boolean for checkbox/radio |
| `select.value` | Value of selected option |
| `form.elements["name"]` | Access input by name attribute |
| `e.preventDefault()` | Stop form submission/page reload |
| `input.focus()` | Programmatically focus an input |

---

## 🧪 Exercises

**Exercise 1 — Read and log**

Write a submit handler for `<form id="login-form">` that logs the `username` and `password` field values, then clears them.

<details>
<summary>Show answer</summary>

```javascript
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const { username, password } = e.target.elements;
  console.log("Username:", username.value);
  console.log("Password:", password.value);
  username.value = "";
  password.value = "";
  username.focus();
});
```
</details>

---

**Exercise 2 — Validate a password**

On submit of `#signup-form`, check that the `password` field is at least 8 characters. If not, display an error message next to the field and stop submission.

<details>
<summary>Show answer</summary>

```javascript
document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const passwordInput = e.target.elements["password"];
  const existing = document.querySelector(".pw-error");
  if (existing) existing.remove();

  if (passwordInput.value.length < 8) {
    const err = document.createElement("p");
    err.className   = "pw-error";
    err.textContent = "Password must be at least 8 characters.";
    err.style.color = "red";
    passwordInput.after(err);
    return;
  }

  console.log("Form is valid — submitting...");
});
```
</details>

---

> **Next:** [Module 15 — Callbacks & Timers →](15-callbacks-timers.md)
