# Module 15 — Microdata & Structured Data

> **Previous:** [← Module 14 — Debugging](14-debugging.md) | **Next:** [🏁 Final Project →](../project/README.md)

---

## What is Microdata?

You have spent 14 modules writing HTML that humans can read. Microdata is HTML that **machines** can read.

When Google crawls your page, it sees words. It can guess what they mean — but guessing is not reliable. Microdata lets you *tell* Google exactly what your content is: "this text is a person's name", "this number is a price", "this date is when this article was published."

Google, Bing, and other search engines use this information to display **rich results** — those enhanced search snippets with star ratings, prices, event dates, and recipe info that stand out above normal results.

```
Normal result:
  John Doe — Frontend Developer
  johndoe.com

Rich result (with Microdata):
  John Doe — Frontend Developer       ⭐⭐⭐⭐⭐  (4.9 from 38 reviews)
  johndoe.com · Available for hire · Bangalore, India
```

Same page. More information. More clicks.

---

## The Three Microdata Attributes

Microdata uses exactly three HTML attributes. That is the entire API.

| Attribute | Goes on | Does |
|-----------|---------|------|
| `itemscope` | A container element | Declares "this element describes a thing" |
| `itemtype` | Same element as `itemscope` | Specifies *what kind* of thing (a URL from Schema.org) |
| `itemprop` | Child elements | Names a property of the thing |

```html
<div itemscope itemtype="https://schema.org/Person">
  <h1 itemprop="name">John Doe</h1>
  <p itemprop="jobTitle">Frontend Developer</p>
</div>
```

The browser reads this as:
> "There is a **Person** here. Their **name** is 'John Doe'. Their **jobTitle** is 'Frontend Developer'."

---

## Schema.org — The Dictionary of Things

`itemtype` points to a URL on [schema.org](https://schema.org). Schema.org is a vocabulary maintained by Google, Microsoft, Yahoo, and Yandex. It defines hundreds of types — `Person`, `Organization`, `Product`, `Recipe`, `Event`, `Article`, `JobPosting`, and many more.

Each type has a list of properties you can use. You do not have to use all of them — just the ones that are relevant to your content.

**Common types you will use:**

| Type | URL | Used for |
|------|-----|---------|
| `Person` | `https://schema.org/Person` | People, author bios, contact pages |
| `Organization` | `https://schema.org/Organization` | Companies, nonprofits |
| `Product` | `https://schema.org/Product` | Items for sale |
| `Review` | `https://schema.org/Review` | User or critic reviews |
| `Recipe` | `https://schema.org/Recipe` | Cooking recipes |
| `Event` | `https://schema.org/Event` | Concerts, meetups, conferences |
| `Article` | `https://schema.org/Article` | News or blog articles |
| `BreadcrumbList` | `https://schema.org/BreadcrumbList` | Navigation breadcrumbs |
| `WebSite` | `https://schema.org/WebSite` | Site-level information |

---

## A Full Person Example

This is what you will use in your résumé project:

```html
<section itemscope itemtype="https://schema.org/Person">

  <img
    itemprop="image"
    src="images/profile.jpg"
    alt="Photo of John Doe"
  >

  <h1 itemprop="name">John Doe</h1>
  <p itemprop="jobTitle">Frontend Developer</p>

  <address>
    <span itemprop="addressLocality">Bangalore</span>,
    <span itemprop="addressCountry">India</span>
  </address>

  <p itemprop="description">
    I build fast, accessible, and beautiful websites.
    Currently open to freelance and full-time opportunities.
  </p>

  <a itemprop="email" href="mailto:john@example.com">john@example.com</a>

  <a itemprop="url" href="https://johndoe.com">johndoe.com</a>

  <a itemprop="sameAs" href="https://github.com/johndoe">GitHub</a>
  <a itemprop="sameAs" href="https://linkedin.com/in/johndoe">LinkedIn</a>

</section>
```

Notice a few things:
- `itemprop` goes on the element whose **text content or attribute value** holds the data
- For links, the `href` value is the property value — not the link text
- For images, the `src` value is the property value
- `sameAs` can be repeated — it links to other profiles that represent the same person

---

## Nested Items — Items Inside Items

Properties can themselves be things. A `Person` can have a `worksFor` property that is an `Organization`.

```html
<div itemscope itemtype="https://schema.org/Person">
  <h1 itemprop="name">Jane Smith</h1>

  <div itemprop="worksFor" itemscope itemtype="https://schema.org/Organization">
    <span itemprop="name">Acme Corp</span>
    <a itemprop="url" href="https://acmecorp.com">acmecorp.com</a>
  </div>

</div>
```

The inner `<div>` is both:
- An `itemprop="worksFor"` of the outer Person
- An `itemscope itemtype` declaring a new Organization

This nesting can go as deep as your content requires.

---

## Recipe Example — Rich Results in Action

Google actively uses Recipe microdata for rich snippets in search. Here is how it looks:

```html
<article itemscope itemtype="https://schema.org/Recipe">

  <h1 itemprop="name">Classic Mango Lassi</h1>

  <img
    itemprop="image"
    src="mango-lassi.jpg"
    alt="Glass of mango lassi with mint garnish"
  >

  <p itemprop="description">
    A creamy, sweet yoghurt drink blended with ripe mangoes.
    Ready in 5 minutes.
  </p>

  <meta itemprop="prepTime" content="PT5M"> <!-- ISO 8601: 5 minutes -->
  <span>Prep time: 5 minutes</span>

  <meta itemprop="recipeYield" content="2">
  <span>Serves: 2</span>

  <span itemprop="recipeCategory">Beverage</span>
  <span itemprop="recipeCuisine">Indian</span>

  <h2>Ingredients</h2>
  <ul>
    <li itemprop="recipeIngredient">1 cup ripe mango, chopped</li>
    <li itemprop="recipeIngredient">1 cup plain yoghurt</li>
    <li itemprop="recipeIngredient">½ cup cold milk</li>
    <li itemprop="recipeIngredient">2 tbsp sugar</li>
    <li itemprop="recipeIngredient">¼ tsp cardamom powder</li>
  </ul>

  <h2>Instructions</h2>
  <ol>
    <li itemprop="recipeInstructions">Add all ingredients to a blender.</li>
    <li itemprop="recipeInstructions">Blend until completely smooth.</li>
    <li itemprop="recipeInstructions">Pour into glasses and serve immediately.</li>
  </ol>

</article>
```

---

## The `<meta>` Trick for Hidden Values

Sometimes the machine-readable value you need is different from what you want to display. Use `<meta>` with `itemprop` and `content` inside the item to provide data without rendering it.

```html
<div itemscope itemtype="https://schema.org/Product">
  <span itemprop="name">Handmade Ceramic Mug</span>

  <!-- Rating displayed as text, but also machine-readable -->
  <div itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
    <span itemprop="ratingValue">4.8</span> out of
    <span itemprop="bestRating">5</span> stars
    (<span itemprop="reviewCount">124</span> reviews)
  </div>

  <!-- Price in a format search engines understand -->
  <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
    <meta itemprop="priceCurrency" content="INR">
    <span itemprop="price">599</span>
    <meta itemprop="availability" content="https://schema.org/InStock">
    <span>In stock</span>
  </div>
</div>
```

---

## Event Example

```html
<div itemscope itemtype="https://schema.org/Event">

  <h2 itemprop="name">Bangalore Frontend Meetup — May 2024</h2>

  <time itemprop="startDate" datetime="2024-05-18T18:00">
    18 May 2024, 6:00 PM
  </time>

  <div itemprop="location" itemscope itemtype="https://schema.org/Place">
    <span itemprop="name">91springboard Koramangala</span>
    <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
      <span itemprop="streetAddress">Koramangala 4th Block</span>,
      <span itemprop="addressLocality">Bangalore</span>
    </div>
  </div>

  <p itemprop="description">
    A monthly gathering of frontend developers in Bangalore.
    Talks, demos, and networking.
  </p>

  <a itemprop="url" href="https://meetup.com/blr-frontend">Register</a>

</div>
```

---

## Testing Your Microdata

After adding Microdata, test it with Google's official tool:

🔗 [search.google.com/test/rich-results](https://search.google.com/test/rich-results)

Paste your URL or HTML and it shows:
- Which structured data it found
- Any errors or warnings
- A preview of how rich results might look

Also useful:
🔗 [validator.schema.org](https://validator.schema.org) — Schema.org's own validator

---

## Microdata vs JSON-LD

You may encounter **JSON-LD** — another way to add structured data. It puts all the data in a `<script>` tag rather than mixing it with HTML attributes.

```html
<!-- JSON-LD approach — data is separate from HTML -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "John Doe",
  "jobTitle": "Frontend Developer",
  "email": "john@example.com"
}
</script>
```

**Google recommends JSON-LD** for new projects — it is easier to maintain and does not clutter your HTML. Microdata is the older standard and remains fully supported.

For this course we use Microdata because:
- It teaches you to think about semantic HTML — the data lives *in* the markup
- You can see exactly which element holds which value
- It works without any JavaScript

In a production project, either approach is valid. JSON-LD is the industry preference today.

---

## Quick Reference

| Attribute | Where it goes | What it does |
|-----------|--------------|-------------|
| `itemscope` | Container element | Opens a new item description |
| `itemtype="https://schema.org/..."` | Same as `itemscope` | Declares the type of item |
| `itemprop="propertyName"` | Child of the item | Names the property; value = text content, `href`, `src`, or `content` |
| `content="value"` | On `<meta itemprop="...">` | Provides hidden machine-readable value |

---

## 🧪 Exercises

**Exercise 1 — Decode this markup**

What does this Microdata say to a search engine?

```html
<div itemscope itemtype="https://schema.org/Person">
  <span itemprop="name">Priya Sharma</span>
  <span itemprop="jobTitle">UX Designer</span>
  <a itemprop="url" href="https://priya.design">priya.design</a>
</div>
```

<details>
<summary>Show answer</summary>

It declares a **Person** with:
- **name**: Priya Sharma
- **jobTitle**: UX Designer
- **url**: https://priya.design

Search engines can now confidently display this information in rich results and knowledge graphs.
</details>

---

**Exercise 2 — Add Microdata to a product**

Add the correct Microdata attributes to this product card. The product is a book called "Learning HTML" priced at ₹499, in stock.

```html
<div>
  <h2>Learning HTML</h2>
  <p>₹499</p>
  <p>In Stock</p>
</div>
```

<details>
<summary>Show answer</summary>

```html
<div itemscope itemtype="https://schema.org/Product">
  <h2 itemprop="name">Learning HTML</h2>

  <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
    <meta itemprop="priceCurrency" content="INR">
    <span itemprop="price">499</span>
    <meta itemprop="availability" content="https://schema.org/InStock">
    <p>In Stock</p>
  </div>
</div>
```
</details>

---

**Exercise 3 — Nested organisation**

Write Microdata for a person named "Arjun Mehta" who is a "Software Engineer" working for an organisation called "TechCo" at `https://techco.in`.

<details>
<summary>Show answer</summary>

```html
<div itemscope itemtype="https://schema.org/Person">
  <span itemprop="name">Arjun Mehta</span>
  <span itemprop="jobTitle">Software Engineer</span>

  <div itemprop="worksFor" itemscope itemtype="https://schema.org/Organization">
    <span itemprop="name">TechCo</span>
    <a itemprop="url" href="https://techco.in">techco.in</a>
  </div>
</div>
```
</details>

---

**Exercise 4 — Résumé ready**

Look at the résumé project template in `project/solution/index.html`. Identify three places where you could add Microdata and write the attributes you would use. No need to write the full HTML — just list the elements, their `itemtype`, and the `itemprop` values you would add.

<details>
<summary>Show answer</summary>

Three good places:

**1. The profile header section:**
```
itemtype: https://schema.org/Person
itemprop values: name, jobTitle, image, email, url, sameAs, addressLocality
```

**2. Each work experience entry:**
```
itemprop="worksFor" + nested itemtype: https://schema.org/Organization
itemprop values on org: name, url
itemprop on dates: startDate, endDate (using <meta> or <time>)
```

**3. Each project card (if framed as a CreativeWork):**
```
itemtype: https://schema.org/CreativeWork
itemprop values: name, description, url
```
</details>

---

## 🎉 You Have Finished All 15 Modules

Here is what you now know:

- How HTML is structured and why semantics matter
- How to build an entire page from skeleton to content
- How to use text, lists, links, images, audio, and video
- How to lay out a page with semantic elements
- How to build accessible tables and forms
- How to debug and validate your code
- How to mark up content for search engines with Microdata

**One thing left: build the project.**

→ [Go to the Final Project →](../project/README.md)

---

> **[← Module 14 — Debugging](14-debugging.md)** | **[🏁 Final Project →](../project/README.md)**
