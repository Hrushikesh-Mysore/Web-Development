# Module 12 — Tables

> **Previous:** [← Module 11 — Semantic Layout](11-semantic-layout.md) | **Next:** [Module 13 — Forms & Buttons →](13-forms.md)

---

## What Are Tables For?

Tables are for **tabular data** — information that has a natural row-and-column structure where the relationship between a row and a column header gives the cell its meaning.

Examples of good use cases:
- A schedule showing times vs. days
- A comparison chart of product features
- Financial data with categories and values
- Sports standings with teams and stats

**Do not use tables for page layout.** In the early 2000s developers used tables to position content on screen. That approach is long dead. Use CSS Flexbox or Grid for layout. Tables are for data only.

---

## Basic Table Structure

```html
<table>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
  </tr>
</table>
```

- `<table>` — the container for the whole table
- `<tr>` — table row
- `<td>` — table data cell (regular cell)

---

## Table Headers — `<th>`

Header cells use `<th>` instead of `<td>`. They are bold and centred by default, but more importantly they carry semantic meaning — they label a column or row.

```html
<table>
  <tr>
    <th>Name</th>
    <th>Role</th>
    <th>Location</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>Frontend Developer</td>
    <td>Bangalore</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>Designer</td>
    <td>Mumbai</td>
  </tr>
</table>
```

### The `scope` Attribute

`scope` tells screen readers whether a `<th>` is a header for a **column** or a **row**. Always include it.

```html
<table>
  <tr>
    <th scope="col">Name</th>
    <th scope="col">Role</th>
    <th scope="col">Location</th>
  </tr>
  <tr>
    <th scope="row">Alice</th>
    <td>Frontend Developer</td>
    <td>Bangalore</td>
  </tr>
  <tr>
    <th scope="row">Bob</th>
    <td>Designer</td>
    <td>Mumbai</td>
  </tr>
</table>
```

---

## Structural Grouping — `<thead>`, `<tbody>`, `<tfoot>`

Split your table into logical sections. This helps screen readers, allows CSS to style sections separately, and lets browsers scroll the body while keeping headers fixed.

```html
<table>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Revenue (₹)</th>
      <th scope="col">Expenses (₹)</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>January</td>
      <td>1,20,000</td>
      <td>80,000</td>
    </tr>
    <tr>
      <td>February</td>
      <td>1,35,000</td>
      <td>75,000</td>
    </tr>
    <tr>
      <td>March</td>
      <td>1,50,000</td>
      <td>90,000</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>4,05,000</td>
      <td>2,45,000</td>
    </tr>
  </tfoot>
</table>
```

- `<thead>` — column headers
- `<tbody>` — the main data rows (can appear multiple times for grouped data)
- `<tfoot>` — summary row(s) like totals or averages

---

## Spanning Cells — `colspan` and `rowspan`

Cells can span multiple columns or rows.

### `colspan` — Span across columns

```html
<table>
  <tr>
    <th scope="col">Name</th>
    <th scope="col" colspan="2">Contact</th>  <!-- spans 2 columns -->
  </tr>
  <tr>
    <td>Alice</td>
    <td>alice@email.com</td>
    <td>+91 98765 43210</td>
  </tr>
</table>
```

### `rowspan` — Span across rows

```html
<table>
  <tr>
    <th scope="row">Frontend</th>
    <td>HTML</td>
  </tr>
  <tr>
    <td rowspan="2">CSS</td>  <!-- spans 2 rows -->
  </tr>
  <tr>
    <td>JavaScript</td>
  </tr>
</table>
```

> **Tip:** Count your cells carefully when using `colspan`/`rowspan`. A common mistake is having rows with unequal numbers of cells, which breaks the table layout.

---

## Caption — `<caption>`

Every data table should have a `<caption>`. It is like the title or heading of the table. It goes immediately after the opening `<table>` tag.

```html
<table>
  <caption>Q1 2024 Financial Summary</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>₹1,20,000</td>
    </tr>
  </tbody>
</table>
```

Screen readers announce the caption before reading the table. It helps users decide if they want to navigate into it. Visually, you can style or hide it with CSS, but always include it in the HTML.

---

## Column Grouping — `<colgroup>` and `<col>`

`<colgroup>` lets you apply attributes or CSS classes to entire columns without targeting every cell individually.

```html
<table>
  <caption>Weekly Schedule</caption>
  <colgroup>
    <col>                          <!-- Time column, no special style -->
    <col span="5" class="weekday"> <!-- Mon–Fri columns -->
    <col span="2" class="weekend"> <!-- Sat–Sun columns -->
  </colgroup>
  <thead>
    <tr>
      <th>Time</th>
      <th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th>
      <th>Sat</th><th>Sun</th>
    </tr>
  </thead>
  <!-- tbody rows here -->
</table>
```

Then in CSS:
```css
.weekend { background-color: #f0f0f0; }
```

This saves you from adding a class to every single `<td>` in the weekend columns.

---

## A Complete Accessible Table

```html
<table>
  <caption>Top Programming Languages — 2024 Popularity Index</caption>

  <colgroup>
    <col class="col-rank">
    <col class="col-language">
    <col class="col-score">
  </colgroup>

  <thead>
    <tr>
      <th scope="col">Rank</th>
      <th scope="col">Language</th>
      <th scope="col">Score (%)</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1</td>
      <td>Python</td>
      <td>28.3</td>
    </tr>
    <tr>
      <td>2</td>
      <td>JavaScript</td>
      <td>17.1</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Java</td>
      <td>15.8</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th scope="row" colspan="2">Top 3 Combined</th>
      <td>61.2</td>
    </tr>
  </tfoot>
</table>
```

---

## Quick Reference

| Element / Attribute | Purpose |
|--------------------|---------|
| `<table>` | Table container |
| `<caption>` | Table title (goes first inside `<table>`) |
| `<thead>` | Header row group |
| `<tbody>` | Data row group |
| `<tfoot>` | Summary row group |
| `<tr>` | Table row |
| `<th scope="col/row">` | Header cell — labels a column or row |
| `<td>` | Data cell |
| `colspan="n"` | Cell spans n columns |
| `rowspan="n"` | Cell spans n rows |
| `<colgroup>` / `<col>` | Apply styles to whole columns |

---

## 🧪 Exercises

**Exercise 1 — When to use a table?**

Should you use a table for each of these? Why or why not?

a) A grid of product cards in a shop  
b) A weekly class timetable  
c) A three-column page layout  
d) A comparison of three phone models across six features  

<details>
<summary>Show answer</summary>

a) **No** — this is layout, not tabular data. Use CSS Grid.  
b) **Yes** — time slots vs. days of the week is naturally tabular.  
c) **No** — page layout is CSS's job, not tables.  
d) **Yes** — phones as rows, features as columns (or vice versa) is classic tabular data.  
</details>

---

**Exercise 2 — Build a simple table**

Create a table showing three of your favourite books with columns: Title, Author, Year Published. Include a caption and proper `<thead>` / `<tbody>`.

<details>
<summary>Show answer</summary>

```html
<table>
  <caption>My Favourite Books</caption>
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
      <th scope="col">Year Published</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Atomic Habits</td>
      <td>James Clear</td>
      <td>2018</td>
    </tr>
    <tr>
      <td>The Alchemist</td>
      <td>Paulo Coelho</td>
      <td>1988</td>
    </tr>
    <tr>
      <td>Deep Work</td>
      <td>Cal Newport</td>
      <td>2016</td>
    </tr>
  </tbody>
</table>
```
</details>

---

**Exercise 3 — `colspan` in action**

Create a table with a header row where "Contact Details" spans two columns — "Email" and "Phone". Add one data row with sample values.

<details>
<summary>Show answer</summary>

```html
<table>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col" colspan="2">Contact Details</th>
    </tr>
    <tr>
      <th scope="col"></th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>alice@example.com</td>
      <td>+91 98765 43210</td>
    </tr>
  </tbody>
</table>
```
</details>

---

**Exercise 4 — Add accessibility**

This table is missing key accessibility features. Identify and fix them:

```html
<table>
  <tr>
    <td>Language</td>
    <td>Year Created</td>
  </tr>
  <tr>
    <td>Python</td>
    <td>1991</td>
  </tr>
</table>
```

<details>
<summary>Show answer</summary>

Missing: `<caption>`, `<thead>`/`<tbody>`, `<th>` with `scope` instead of `<td>` for headers.

```html
<table>
  <caption>Programming Languages and Their Creation Years</caption>
  <thead>
    <tr>
      <th scope="col">Language</th>
      <th scope="col">Year Created</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Python</td>
      <td>1991</td>
    </tr>
  </tbody>
</table>
```
</details>

---

> **Next:** [Module 13 — Forms & Buttons →](13-forms.md)
