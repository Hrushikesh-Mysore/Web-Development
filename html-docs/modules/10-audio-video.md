# Module 10 — Audio & Video

> **Previous:** [← Module 09 — Images](09-images.md) | **Next:** [Module 11 — Semantic Layout →](11-semantic-layout.md)

---

## Native Media in HTML5

Before HTML5, embedding video required Flash or other third-party plugins. That era is gone. `<video>` and `<audio>` are now native HTML elements with broad browser support. No plugins. No nonsense.

---

## `<video>`

```html
<video src="intro.mp4" controls>
  Your browser does not support video. 
  <a href="intro.mp4">Download the video</a>.
</video>
```

The text inside `<video>` (between the opening and closing tags) is **fallback content** — shown only if the browser cannot play the video. Always provide fallback content.

### Key Attributes

```html
<video 
  src="intro.mp4"
  controls          ← Shows play/pause/volume/fullscreen UI
  autoplay          ← Starts playing automatically (see note below)
  muted             ← No audio (required for autoplay in most browsers)
  loop              ← Plays again from the start when it ends
  poster="thumbnail.jpg"  ← Image shown before the video plays
  width="800"
  height="450"
>
```

> **Autoplay note:** Browsers block `autoplay` unless the video is also `muted`. This is to prevent websites from blasting audio at users. Background/ambient videos (like hero sections) use `autoplay muted loop`. A video a user explicitly plays uses `controls` instead.

### Multiple Formats with `<source>`

Different browsers support different video formats. Provide multiple sources and the browser picks the first one it can play:

```html
<video controls poster="thumbnail.jpg" width="800" height="450">
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
  <p>
    Your browser does not support HTML video. 
    <a href="video.mp4">Download the video instead</a>.
  </p>
</video>
```

**Format recommendations:**
- `.mp4` (H.264) — universal support, use as your base
- `.webm` (VP9) — better compression, supported in modern browsers

---

## Subtitles and Captions — `<track>`

Always provide captions for video. It is required for accessibility and often legally mandated for public content.

```html
<video controls>
  <source src="lecture.mp4" type="video/mp4">
  <track
    kind="subtitles"
    src="subtitles-en.vtt"
    srclang="en"
    label="English"
    default
  >
  <track
    kind="subtitles"
    src="subtitles-hi.vtt"
    srclang="hi"
    label="Hindi"
  >
</video>
```

Tracks use the `.vtt` (WebVTT) format. A simple `.vtt` file looks like this:

```
WEBVTT

00:00:01.000 --> 00:00:04.000
Welcome to this HTML tutorial.

00:00:05.000 --> 00:00:08.000
In this video, we cover the <code>video</code> element.
```

### `<track>` `kind` values

| Value | Purpose |
|-------|---------|
| `subtitles` | Translation of dialogue (spoken words) |
| `captions` | Subtitles + non-speech sounds (for deaf users) |
| `descriptions` | Visual descriptions (for blind users) |
| `chapters` | Chapter titles for navigation |
| `metadata` | Data used by scripts, not shown to users |

---

## `<audio>`

The `<audio>` element works almost identically to `<video>`, just without the visual. It has no `poster` or dimension attributes.

```html
<audio controls>
  <source src="podcast.ogg" type="audio/ogg">
  <source src="podcast.mp3" type="audio/mpeg">
  <p>Your browser does not support audio. 
    <a href="podcast.mp3">Download the audio</a>.
  </p>
</audio>
```

### Key Attributes

```html
<audio 
  controls       ← Play/pause/volume UI
  autoplay       ← Starts automatically (also blocked without muted)
  muted          ← Silent
  loop           ← Repeats
  preload="auto" ← auto | metadata | none
>
```

**`preload` values:**
- `none` — do not download anything until the user clicks play
- `metadata` — download only the duration and track info
- `auto` — download the whole file (default in most browsers)

Use `preload="metadata"` on audio files to show the duration without downloading the full file immediately.

---

## Embedding YouTube / Vimeo — `<iframe>`

For third-party hosted video, use an `<iframe>`. YouTube, Vimeo, and similar services provide embed codes.

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Video title for accessibility"
  allowfullscreen
  loading="lazy"
>
</iframe>
```

**Always include a `title` attribute** on `<iframe>` elements — screen readers use it to describe the embedded content.

---

## Quick Reference

| Element / Attribute | Purpose |
|---------------------|---------|
| `<video controls>` | Video player with browser UI |
| `<audio controls>` | Audio player with browser UI |
| `<source src type>` | Alternative media sources |
| `<track kind src srclang>` | Subtitles, captions, descriptions |
| `autoplay muted` | Autoplaying background video |
| `loop` | Repeat media when it ends |
| `poster` | Thumbnail shown before video plays |
| `preload="metadata"` | Load duration only |
| `<iframe title>` | Embed external video (YouTube, Vimeo) |

---

## 🧪 Exercises

**Exercise 1 — Build a video player**

Write HTML for a video called `demo.mp4` that:
- Shows playback controls
- Has a poster image called `demo-thumb.jpg`
- Includes a WebM alternative source
- Has English subtitles from `subtitles.vtt`
- Has a fallback download link

<details>
<summary>Show answer</summary>

```html
<video controls poster="demo-thumb.jpg" width="800" height="450">
  <source src="demo.webm" type="video/webm">
  <source src="demo.mp4" type="video/mp4">
  <track kind="subtitles" src="subtitles.vtt" srclang="en" label="English" default>
  <p>
    Your browser does not support video. 
    <a href="demo.mp4">Download the video</a>.
  </p>
</video>
```
</details>

---

**Exercise 2 — Background video**

Write HTML for a muted looping background video (`bg.mp4`). No controls needed.

<details>
<summary>Show answer</summary>

```html
<video src="bg.mp4" autoplay muted loop>
  <!-- No controls, no fallback text needed for decorative background video -->
</video>
```
</details>

---

**Exercise 3 — Audio player**

Create an audio player for a file called `episode-42.mp3` with an OGG alternative, controls shown, and `preload` set to load only metadata.

<details>
<summary>Show answer</summary>

```html
<audio controls preload="metadata">
  <source src="episode-42.ogg" type="audio/ogg">
  <source src="episode-42.mp3" type="audio/mpeg">
  <p>Your browser does not support audio. <a href="episode-42.mp3">Download the episode</a>.</p>
</audio>
```
</details>

---

**Exercise 4 — Which kind of track?**

Match the scenario to the correct `<track>` `kind` value:

a) Translating English dialogue to French  
b) Describing a car explosion scene for blind users  
c) Labelling sections like "Introduction" and "Conclusion"  
d) Providing text for both dialogue and sound effects for deaf users  

<details>
<summary>Show answer</summary>

a) `subtitles` — translation of spoken dialogue  
b) `descriptions` — visual descriptions for blind users  
c) `chapters` — navigation labels  
d) `captions` — includes dialogue plus sound effects  
</details>

---

> **Next:** [Module 11 — Semantic Layout →](11-semantic-layout.md)
