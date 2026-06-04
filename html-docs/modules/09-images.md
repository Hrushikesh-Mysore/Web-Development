# Module 09 — Images

> **Previous:** [← Module 08 — Links](08-links.md) | **Next:** [Module 10 — Audio & Video →](10-audio-video.md)

---

## The `<img>` Element

The `<img>` element embeds an image into your page. It is a void element — no closing tag.

```html
<img src="profile.jpg" alt="Photo of John, smiling in front of a bookshelf">
```

Two attributes are always required:
- `src` — the path or URL to the image file
- `alt` — a text description of the image

---

## The `alt` Attribute — More Important Than You Think

`alt` is not optional decoration. It is used by:
- **Screen readers** — they read the alt text aloud to blind users
- **Search engines** — they use it to understand what the image shows
- **Browsers** — displayed when the image fails to load
- **Text-only browsers** — some users turn off images for speed

**How to write good alt text:**

```html
<!-- ❌ Empty alt — screen reader says nothing, user has no idea -->
<img src="award.jpg" alt="">

<!-- ❌ Useless alt — describes the file, not the content -->
<img src="award.jpg" alt="award.jpg">

<!-- ❌ Generic alt — still useless -->
<img src="award.jpg" alt="image">

<!-- ✅ Descriptive alt — tells people what they cannot see -->
<img src="award.jpg" alt="First place trophy from the 2023 National Web Design Competition">
```

**Exception — decorative images:** If an image is purely decorative (like a background swoosh or divider line), use an empty `alt=""`. This tells screen readers to skip it. Do not leave `alt` out entirely — that is different from `alt=""`.

```html
<!-- Decorative image — screen reader skips it -->
<img src="decorative-wave.svg" alt="">
```

---

## Image Dimensions — `width` and `height`

```html
<img src="photo.jpg" alt="Landscape photo" width="800" height="600">
```

Always specify `width` and `height` in HTML when you know them. Here is why: when the browser starts loading the page, it needs to know how much space to reserve for each image. Without dimensions, the page layout shifts suddenly when images finally load — this is called **Cumulative Layout Shift (CLS)**, and it is one of Google's Core Web Vitals.

You do not have to display them at that exact size — CSS can resize them — but the attributes help the browser calculate the aspect ratio and reserve space.

---

## Image Formats

| Format | Best for | Supports transparency |
|--------|---------|----------------------|
| `.jpg` / `.jpeg` | Photos, complex images | No |
| `.png` | Images needing transparency, logos | Yes |
| `.svg` | Icons, logos, illustrations | Yes |
| `.webp` | Photos with better compression than jpg | Yes |
| `.gif` | Short animations | Yes (1-bit) |
| `.avif` | Next-gen, excellent compression | Yes |

**Practical guidance:**
- Profile photos, hero images → `.webp` (with `.jpg` fallback)
- Logos, icons → `.svg`
- Screenshots with text → `.png`
- Animations → `.gif` (or video for longer ones)

---

## `<figure>` and `<figcaption>`

When an image is content (not decoration), wrap it in `<figure>` and add a visible caption with `<figcaption>`.

```html
<figure>
  <img src="bangalore-traffic.jpg" alt="Heavy traffic on MG Road, Bangalore, during rush hour">
  <figcaption>
    Rush hour traffic on MG Road, Bangalore. Photo taken March 2024.
  </figcaption>
</figure>
```

`<figure>` groups the image and caption as a semantic unit. It is not just for images — it can wrap code blocks, charts, quotes, or any content that is referenced from the main text.

---

## Responsive Images — The `srcset` Attribute

Modern devices have wildly different screen sizes and pixel densities. A 1200px-wide image is wasteful on a phone. The `srcset` attribute lets you provide multiple image sizes and let the browser pick the best one.

### By pixel density (for same-size images at different resolutions)

```html
<img
  src="logo.png"
  srcset="logo.png 1x, logo@2x.png 2x, logo@3x.png 3x"
  alt="My company logo"
>
```

High-DPI screens (Retina displays) use the `2x` or `3x` version. Regular screens use the `1x` version.

### By viewport width (different image sizes for different screens)

```html
<img
  src="hero-800.jpg"
  srcset="hero-400.jpg 400w, hero-800.jpg 800w, hero-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1200px"
  alt="Hero image of mountain landscape"
>
```

The `sizes` attribute tells the browser how wide the image will be at different viewport sizes. The browser then picks the most appropriate source from `srcset`.

---

## The `<picture>` Element — Art Direction

`<picture>` lets you serve completely different images for different conditions — different crops for mobile vs desktop, or different formats with fallbacks.

```html
<picture>
  <!-- Use AVIF if supported -->
  <source srcset="hero.avif" type="image/avif">
  <!-- Use WebP if supported -->
  <source srcset="hero.webp" type="image/webp">
  <!-- Fallback for older browsers -->
  <img src="hero.jpg" alt="Mountain landscape at sunrise">
</picture>
```

The browser uses the first `<source>` it can handle, or falls back to `<img>`. This is the modern way to deliver next-gen image formats safely.

---

## Quick Reference

| Attribute / Element | Purpose |
|--------------------|---------|
| `src="..."` | Path to image |
| `alt="..."` | Text description (always include) |
| `width` / `height` | Dimensions — prevents layout shift |
| `<figure>` | Semantic container for image + caption |
| `<figcaption>` | Visible caption for a figure |
| `srcset` | Multiple image sources by size or density |
| `sizes` | How wide the image is at each breakpoint |
| `<picture>` | Art direction / format switching |
| `loading="lazy"` | Defer loading until image is near viewport |

**Bonus:** `loading="lazy"` defers loading off-screen images. Add it to any image below the fold:
```html
<img src="photo.jpg" alt="..." loading="lazy">
```

---

## 🧪 Exercises

**Exercise 1 — Write the alt text**

Write appropriate `alt` text for:

a) Your headshot on a portfolio page  
b) A chart showing website traffic by month  
c) A decorative swirl pattern in the footer  

<details>
<summary>Show answer</summary>

a) `alt="Photo of [Your Name], frontend developer"` — be specific  
b) `alt="Bar chart showing website traffic from Jan–Dec 2024, peaking at 12,000 visits in October"` — describe what the chart shows  
c) `alt=""` — decorative images get empty alt text  
</details>

---

**Exercise 2 — Figure and caption**

Write HTML for an image of a sunset called `sunset-goa.jpg` with the caption "Sunset at Palolem Beach, Goa — December 2023".

<details>
<summary>Show answer</summary>

```html
<figure>
  <img src="sunset-goa.jpg" alt="Golden sunset over Palolem Beach, Goa, with silhouetted palm trees" width="800" height="600">
  <figcaption>Sunset at Palolem Beach, Goa — December 2023.</figcaption>
</figure>
```
</details>

---

**Exercise 3 — Format choice**

What image format would you choose for each:

a) Your company logo (simple, needs to scale to any size)  
b) A product photograph  
c) An icon that needs a transparent background  

<details>
<summary>Show answer</summary>

a) `.svg` — scales infinitely, perfect for logos  
b) `.webp` or `.jpg` — photographic content  
c) `.png` or `.svg` — both support transparency  
</details>

---

**Exercise 4 — Responsive image**

Write an `<img>` tag for a hero image available in three sizes: `hero-sm.jpg` (400px wide), `hero-md.jpg` (800px wide), and `hero-lg.jpg` (1200px wide). The image should display at full width on mobile, 800px on medium screens, and 1200px on large.

<details>
<summary>Show answer</summary>

```html
<img
  src="hero-md.jpg"
  srcset="hero-sm.jpg 400w, hero-md.jpg 800w, hero-lg.jpg 1200w"
  sizes="(max-width: 600px) 100vw, (max-width: 900px) 800px, 1200px"
  alt="Hero image description here"
  width="1200"
  height="600"
>
```
</details>

---

> **Next:** [Module 10 — Audio & Video →](10-audio-video.md)
