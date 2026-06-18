# Module 04 — The Cascade, Specificity & Inheritance

> **Previous:** [← Module 03 — Pseudo-classes & Pseudo-elements](03-pseudo.md) | **Next:** [Module 05 — The Box Model →](05-box-model.md)

---

## Why Does CSS Behave This Way?

Every CSS beginner hits a moment where they write a rule and nothing happens. Or something changes that they did not expect. Almost always the cause is one of three things:

1. **The Cascade** — which stylesheet wins
2. **Specificity** — which rule wins when two rules target the same element
3. **Inheritance** — properties that pass down to child elements automatically

Understand these three things and CSS stops feeling like magic. Or chaos, depending on your current mood.

---

## The Cascade

The cascade is CSS's algorithm for deciding which rule applies when multiple rules target the same element and property.

It works in this order (each step only matters if the previous step is a tie):

1. **Origin** — who wrote the rule (browser defaults, user, developer)
2. **Importance** — is `!important` involved?
3. **Specificity** — how specific is the selector?
4. **Source order** — which rule comes later in the code?

For everyday development, you mainly deal with specificity and source order.

---

## Specificity — Who Wins a Conflict?

When two rules target the same element and the same property, the one with **higher specificity** wins.

Specificity is a score made of three numbers: `(ID, CLASS, TYPE)`

```
Selector            ID  CLASS  TYPE   Score
────────────────────────────────────────────
p                    0     0     1    (0,0,1)
.intro               0     1     0    (0,1,0)
#hero                1     0     0    (1,0,0)
p.intro              0     1     1    (0,1,1)
nav a                0     0     2    (0,0,2)
nav a.active         0     1     2    (0,1,2)
#hero .intro a       1     1     1    (1,1,1)
```

Higher ID count wins. If tied on ID, higher CLASS count wins. If tied on CLASS, higher TYPE count wins.

### Practical Example

```html
<p class="intro" id="lead">Hello</p>
```

```css
p       { color: black; }   /* (0,0,1) */
.intro  { color: blue; }    /* (0,1,0) */
#lead   { color: red; }     /* (1,0,0) */
```

The paragraph will be **red** because `#lead` has the highest specificity.

---

## Source Order — The Last Rule Wins a Tie

When specificity is identical, the rule that appears **later** in the CSS wins:

```css
p { color: navy; }
p { color: hotpink; }   /* This wins — same specificity, later in the file */
```

This is why the **order of your CSS rules matters**. It is also why you should put general styles before specific ones, and why utility/override classes go last.

---

## `!important` — The Nuclear Option

```css
p { color: navy !important; }

/* This CANNOT override the rule above, even with higher specificity */
#lead { color: red; }
```

`!important` overrides all specificity and cascade rules. It sounds useful. It is not. Using `!important` is a sign that your specificity is out of control, and it creates a debt that is painful to pay back later. Using `!important` to beat another `!important` is how you end up with code that nobody can maintain.

**Only use `!important` in two cases:**
1. Utility classes that must always win (e.g. `.hidden { display: none !important; }`)
2. Overriding third-party CSS you cannot edit

---

## Specificity Calculation Practice

```css
a                       /* (0,0,1) */
a:hover                 /* (0,1,1) — :hover is a pseudo-class = class level */
.nav a                  /* (0,1,1) */
.nav a:hover            /* (0,2,1) */
#nav a                  /* (1,0,1) */
```

> **Note:** `::before` and `::after` are pseudo-elements — they count as TYPE (the third column), same as a regular element.

---

## Inheritance — Styles That Pass Down

Some CSS properties are automatically **inherited** by child elements. Others are not.

### Properties that inherit by default

```css
body {
  color: #333;          /* ALL text on the page gets this colour */
  font-family: sans-serif; /* ALL text uses this font */
  font-size: 16px;      /* ALL text starts at 16px */
  line-height: 1.5;     /* ALL text uses this line height */
}
```

You set these once on `body` and every element inherits them unless overridden. This is one of CSS's most useful features.

**Commonly inherited properties:** `color`, `font-family`, `font-size`, `font-weight`, `font-style`, `line-height`, `letter-spacing`, `text-align`, `text-transform`, `visibility`, `cursor`

### Properties that do NOT inherit by default

```css
div {
  border: 1px solid black;  /* Child elements do NOT get a border */
  padding: 20px;             /* Child elements do NOT get padding */
  background-color: blue;    /* Background does NOT pass to children */
  width: 500px;              /* Width does NOT pass to children */
}
```

**Commonly non-inherited:** `margin`, `padding`, `border`, `background`, `width`, `height`, `display`, `position`, `top/right/bottom/left`, `overflow`

### Controlling Inheritance Manually

```css
/* Force inheritance on a non-inheriting property */
.child {
  border: inherit;     /* Takes the border from the parent */
}

/* Stop inheritance on an inheriting property */
.special {
  color: initial;      /* Resets to browser default (usually black) */
}

/* Use the parent's value (same as inherit for inherited properties, 
   initial for non-inherited ones) */
.element {
  color: unset;
}
```

---

## The Computed Value — What Actually Applies

After all cascade, specificity, and inheritance rules are resolved, every element has a **computed value** for every CSS property. You can see these in DevTools under the "Computed" tab.

This is what the browser actually uses to render the element.

---

## CSS Custom Properties (Variables) and the Cascade

CSS variables work beautifully with the cascade and inheritance:

```css
:root {
  --color-primary: royalblue;
  --spacing-unit: 1rem;
}

/* Override in a specific context */
.dark-section {
  --color-primary: lightblue;
}

button {
  background-color: var(--color-primary);
  padding: var(--spacing-unit);
}
```

Inside `.dark-section`, buttons get `lightblue`. Everywhere else, they get `royalblue`. The cascade applies to variable definitions too.

---

## Quick Reference

| Concept | One-liner |
|---------|-----------|
| Cascade | The algorithm for resolving conflicts between rules |
| Specificity | Score based on selector type: `(ID, CLASS, TYPE)` |
| Source order | Later rules beat earlier rules at equal specificity |
| `!important` | Overrides everything — use very sparingly |
| Inheritance | Some properties auto-pass from parent to child elements |
| `inherit` | Force a property to use the parent's value |
| `initial` | Reset to browser default value |
| `unset` | Inherit if inheritable, otherwise initial |

---

## 🧪 Exercises

**Exercise 1 — Specificity scores**

Calculate the specificity of each selector:

a) `h1`  
b) `.hero`  
c) `#main`  
d) `article p.intro`  
e) `#sidebar .widget h3`  

<details>
<summary>Show answer</summary>

a) `h1` → (0,0,1)  
b) `.hero` → (0,1,0)  
c) `#main` → (1,0,0)  
d) `article p.intro` → (0,1,2)  
e) `#sidebar .widget h3` → (1,1,1)  
</details>

---

**Exercise 2 — Who wins?**

Both rules target the same `<h2>`. What colour does it get?

```css
.section h2 { color: green; }   /* (0,1,1) */
h2.title    { color: purple; }  /* (0,1,1) */
```

<details>
<summary>Show answer</summary>

**Purple** — both selectors have the same specificity (0,1,1), so source order decides. `h2.title` comes later in the file, so it wins.
</details>

---

**Exercise 3 — Inheritance test**

Given this CSS:

```css
body {
  color: #333;
  font-family: Arial, sans-serif;
  padding: 20px;
}
```

Which of these properties does a `<p>` inside `<body>` automatically receive? Which does it not?

<details>
<summary>Show answer</summary>

- `color: #333` → **Inherited** — the `<p>` gets dark grey text
- `font-family: Arial, sans-serif` → **Inherited** — the `<p>` uses Arial
- `padding: 20px` → **NOT inherited** — the `<p>` does not get any padding from the body
</details>

---

**Exercise 4 — Fix the specificity problem**

A developer wrote this CSS but the button in the nav still shows the default browser style. Why? How would you fix it without using `!important`?

```css
button {
  background: royalblue;
  color: white;
  border: none;
}

/* This overrides the rule above */
nav ul li button {
  background: transparent;
  color: #333;
  border: 1px solid #333;
}
```

<details>
<summary>Show answer</summary>

The `nav ul li button` rule has higher specificity `(0,0,4)` than just `button` `(0,0,1)`. So the nav button always shows the second style, even though the first rule came first.

To fix without `!important`, match or exceed the specificity of the overriding rule — or add a class:

```css
/* Option 1: Add a class to the button you want styled */
.btn-primary {
  background: royalblue;
  color: white;
  border: none;
}

/* Option 2: Increase the specificity of the first rule to win */
.hero button {
  background: royalblue;
  color: white;
  border: none;
}
```
</details>

---

> **Next:** [Module 05 — The Box Model →](05-box-model.md)
