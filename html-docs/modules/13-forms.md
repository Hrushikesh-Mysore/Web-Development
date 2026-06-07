# Module 13 — Forms & Buttons

> **Previous:** [← Module 12 — Tables](12-tables.md) | **Next:** [Module 14 — Debugging →](14-debugging.md)

---

## Why Forms Matter

Forms allow users to send data to websites and web applications. Every login form, search bar, sign-up flow, checkout page, and contact form is built using these HTML elements.
- Well-designed forms help users complete tasks quickly and accurately.  
- Poorly designed forms can lead to errors, confusion, and abandoned submissions.
In this module, we will explore the core HTML form elements used to collect user input:

---

## The `<form>` Element

```html
<form action="/submit" method="post">
  <!-- inputs go here -->
</form>
```

The `<form>` element defines a form. Most form controls, such as inputs, buttons, and labels, are placed inside it.
- `action` — specifies where the form data is sent when the form is submitted
- `method` — specifies how the form data is sent to the server:
  - `get` — appended to the URL
  - `post` — sent in the request body

> [!note]
> Use `method="get"` for searches (the query appears in the URL, so it is bookmarkable).  
> 
> Use `method="post"` when submitting data that changes server state or should not appear in the URL, such as logins, registrations, and contact forms.



---

## Labels — Always Use Them

```html
<label for="username">Username</label>
<input type="text" id="username" name="username">
```

`<label>` connects visually and programmatically to its input via matching `for` and `id` values. This means:
- Clicking the label focuses the input (bigger click target — helpful on mobile)
- Screen readers announce the label when the input is focused
- The relationship is clear in the HTML

**Never have an input without a label.** Placeholders are not a substitute — they disappear when the user starts typing and are low contrast by default.

---

## Text Inputs

### `type="text"` — Single-line text

```html
<label for="name">Full Name</label>
<input type="text" id="name" name="name" placeholder="e.g. John Doe">
```

### `type="email"` — Email address

```html
<label for="email">Email Address</label>
<input type="email" id="email" name="email">
```

Mobile browsers show the email keyboard (with `@`). The browser also does basic format validation.

### `type="password"` — Hidden text

```html
<label for="password">Password</label>
<input type="password" id="password" name="password" minlength="8">
```

Characters are masked as the user types.

### `type="tel"` — Phone number

```html
<label for="phone">Phone Number</label>
<input type="tel" id="phone" name="phone" placeholder="+91 98765 43210">
```

Mobile browsers show the numeric keypad.

### `type="url"` — Web address

```html
<label for="website">Your Website</label>
<input type="url" id="website" name="website" placeholder="https://yoursite.com">
```

### `type="number"` — Numeric input

```html
<label for="age">Age</label>
<input type="number" id="age" name="age" min="18" max="120">
```

> [!tip]
> `type="number"` is intended for numeric values that can be incremented or decremented, such as age or quantity. 
> Phone numbers, PINs, and ZIP codes are usually better represented as text inputs.
### `type="search"` — Search field

```html
<label for="search">Search</label>
<input type="search" id="search" name="q" placeholder="Search...">
```

Shows a clear button (×) when text is entered in most browsers.

---
### The `name` Attribute

The `name` attribute identifies a form control when the form is submitted. Without a `name`, the control's value is not included in the submitted form data.

```html
<input type="text" id="username" name="username">
```

When this form is submitted:

```html
<input type="text" name="username" value="john">
```

the browser sends:

```text
username=john
```

>[!warning]
> An input without a `name` attribute is not included in the submitted form data.

---
## Dates and Times

```html
<!-- Date picker -->
<label for="dob">Date of Birth</label>
<input type="date" id="dob" name="dob">

<!-- Month picker -->
<input type="month" name="month">

<!-- Time picker -->
<input type="time" name="time">

<!-- Date and time -->
<input type="datetime-local" name="meeting-time">
```

Browser support and appearance vary, but these provide native date pickers on most modern browsers without any JavaScript.

---

## `<textarea>` — Multi-line Text

```html
<label for="message">Your Message</label>
<textarea id="message" name="message" rows="5" cols="40" placeholder="Write your message here..."></textarea>
```

- `rows` — visible height in lines
- `cols` — visible width in characters
- Resize with CSS: `resize: vertical` (allow vertical only) or `resize: none`

Note: `<textarea>` has both an opening and closing tag, unlike `<input>`.

---

## `<select>` — Dropdown

```html
<label for="country">Country</label>
<select id="country" name="country">
  <option value="">-- Select a country --</option>
  <option value="in">India</option>
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
</select>
```

The first empty `<option>` acts as a placeholder prompt.

### `<optgroup>` — Group options

```html
<select name="city">
  <optgroup label="Karnataka">
    <option value="blr">Bangalore</option>
    <option value="mys">Mysore</option>
  </optgroup>
  <optgroup label="Maharashtra">
    <option value="mum">Mumbai</option>
    <option value="pun">Pune</option>
  </optgroup>
</select>
```

### Allow multiple selections

```html
<select name="skills" multiple size="4">
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
  <option value="git">Git</option>
</select>
```

`multiple` allows selecting multiple options (Ctrl+click or Cmd+click). `size` controls how many options are visible at once.

---

## Checkboxes and Radio Buttons

### Checkboxes — multiple selections allowed

```html
<fieldset>
  <legend>Skills (select all that apply)</legend>

  <label>
    <input type="checkbox" name="skills" value="html"> HTML
  </label>
  <label>
    <input type="checkbox" name="skills" value="css"> CSS
  </label>
  <label>
    <input type="checkbox" name="skills" value="js"> JavaScript
  </label>
</fieldset>
```

Here the `<label>` wraps the input — an alternative to `for`/`id`. Both approaches work.

### Radio Buttons — one selection from a group

```html
<fieldset>
  <legend>Experience Level</legend>

  <label>
    <input type="radio" name="level" value="beginner"> Beginner
  </label>
  <label>
    <input type="radio" name="level" value="intermediate"> Intermediate
  </label>
  <label>
    <input type="radio" name="level" value="advanced"> Advanced
  </label>
</fieldset>
```

All radio buttons in a group share the same `name`. That is what links them — only one can be selected at a time.

---

## `<fieldset>` and `<legend>`

`<fieldset>` groups related form controls. `<legend>` gives the group a title. Essential for checkboxes and radio buttons, and useful for any logical form section.

```html
<fieldset>
  <legend>Personal Information</legend>

  <label for="fname">First Name</label>
  <input type="text" id="fname" name="first-name">

  <label for="lname">Last Name</label>
  <input type="text" id="lname" name="last-name">
</fieldset>
```

---

## Buttons

```html
<!-- Submit the form -->
<button type="submit">Send Message</button>

<!-- Reset all fields -->
<button type="reset">Clear Form</button>

<!-- Does nothing by default — use with JavaScript -->
<button type="button">Click Me</button>
```

Always specify `type` on buttons inside forms. Without `type`, buttons default to `type="submit"` and will submit the form if clicked — often not what you want for non-submit buttons.

`<button>` is preferred over `<input type="submit">` because it can contain HTML (icons, formatted text).

---

## Built-in Validation Attributes

HTML5 provides native validation without JavaScript:

```html
<input type="email" required>                   <!-- Must not be empty -->
<input type="text" required minlength="3">       <!-- At least 3 chars -->
<input type="text" maxlength="50">              <!-- At most 50 chars -->
<input type="number" min="0" max="100">         <!-- Between 0 and 100 -->
<input type="text" pattern="[A-Za-z]{3,}">      <!-- Must match regex -->
```

- `pattern` uses a regular expression (regex) to define a required format. This pattern requires at least three alphabetic characters.

Browsers display error messages automatically if validation fails. Style them with the `:invalid` and `:valid` CSS pseudo-classes.

---

## A Complete Contact Form

```html
<form action="/contact" method="post">
  <fieldset>
    <legend>Send Me a Message</legend>

    <div>
      <label for="contact-name">Name <span aria-hidden="true">*</span></label>
      <input type="text" id="contact-name" name="name" required autocomplete="name">
    </div>

    <div>
      <label for="contact-email">Email <span aria-hidden="true">*</span></label>
      <input type="email" id="contact-email" name="email" required autocomplete="email">
    </div>

    <div>
      <label for="subject">Subject</label>
      <select id="subject" name="subject">
        <option value="">-- Choose a topic --</option>
        <option value="work">Work Enquiry</option>
        <option value="collab">Collaboration</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div>
      <label for="message">Message <span aria-hidden="true">*</span></label>
      <textarea id="message" name="message" rows="5" required></textarea>
    </div>

    <button type="submit">Send Message</button>
  </fieldset>
</form>
```

> [!tip]
> When using visual indicators such as `*`, mark them with
> `aria-hidden="true"` so screen readers do not announce them unnecessarily.

---
## The `autocomplete` Attribute

The `autocomplete` attribute provides a hint to the browser about the type of information expected in a field. Browsers may use this information to offer autofill suggestions.

```html
<input type="text" autocomplete="name">
<input type="email" autocomplete="email">
<input type="tel" autocomplete="tel">
```

---
## Form Best Practices

- Always associate inputs with labels.
- Use the most appropriate input type.
- Group related controls with `<fieldset>` and `<legend>`.
- Validate important data with HTML attributes.
- Always specify `type` on buttons.
- Never rely on placeholders as labels.

---
## Quick Reference

| Element / Attribute | Purpose |
|--------------------|---------|
| `<form action method>` | Form container |
| `<label for="id">` | Links label to input |
| `<input type="text/email/password/...">` | Single-line input |
| `<textarea rows cols>` | Multi-line input |
| `<select>` + `<option>` | Dropdown |
| `<optgroup label>` | Group dropdown options |
| `<input type="checkbox">` | Multiple-choice |
| `<input type="radio">` | Single-choice from group |
| `<fieldset>` + `<legend>` | Group related controls |
| `<button type="submit/reset/button">` | Form buttons |
| `required` | Field must not be empty |
| `minlength / maxlength` | Character count limits |
| `min / max` | Numeric/date range limits |
| `pattern` | Regex validation |
| `autocomplete` | Browser auto-fill hint |

---

## Exercises

**Exercise 1 — Label connection**

What is wrong with this code?

```html
<label>Email</label>
<input type="email" id="email" name="email">
```

<details>
<summary>Show answer</summary>

The `<label>` is missing its `for` attribute connecting it to the input's `id`. Without it, clicking the label does not focus the input, and screen readers may not associate them.

Fixed:
```html
<label for="email">Email</label>
<input type="email" id="email" name="email">
```
</details>

---

**Exercise 2 — Choose the input type**

What `type` attribute would you use for:

a) A person's age (a number between 0 and 120)  
b) A password  
c) A date of birth  
d) A website URL  
e) A phone number  

<details>
<summary>Show answer</summary>

a) `type="number"` with `min="0" max="120"`  
b) `type="password"`  
c) `type="date"`  
d) `type="url"`  
e) `type="tel"`  
</details>

---

**Exercise 3 — Build a registration form**

Create a simple sign-up form with fields for: full name (required), email (required), password (required, min 8 characters), and a submit button.

<details>
<summary>Show answer</summary>

```html
<form action="/register" method="post">
  <div>
    <label for="fullname">Full Name</label>
    <input type="text" id="fullname" name="name" required autocomplete="name">
  </div>

  <div>
    <label for="reg-email">Email Address</label>
    <input type="email" id="reg-email" name="email" required autocomplete="email">
  </div>

  <div>
    <label for="reg-password">Password</label>
    <input type="password" id="reg-password" name="password" required minlength="8">
  </div>

  <button type="submit">Create Account</button>
</form>
```
</details>

---

**Exercise 4 — Radio buttons**

Create a fieldset asking "What is your preferred learning style?" with three radio button options of your choice. Make sure they are properly grouped and labelled.

<details>
<summary>Show answer</summary>

```html
<fieldset>
  <legend>What is your preferred learning style?</legend>

  <label>
    <input type="radio" name="learning-style" value="reading"> Reading docs and articles
  </label>
  <label>
    <input type="radio" name="learning-style" value="video"> Watching video tutorials
  </label>
  <label>
    <input type="radio" name="learning-style" value="practice"> Building projects by doing
  </label>
</fieldset>
```
</details>

---

> **Next:** [Module 14 — Debugging →](14-debugging.md)
