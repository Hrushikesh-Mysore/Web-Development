# 🏁 Final Project — Weather Dashboard

> **All 18 modules done? Now build something real.**

---

## The Brief

Build a **Weather Dashboard** — a single-page app that:

1. Lets the user search for a city
2. Fetches live weather data from a free public API
3. Displays the current conditions and a 7-day forecast
4. Handles loading states and errors gracefully
5. Remembers the last searched city using `localStorage`

No frameworks. No libraries. Vanilla JavaScript, the DOM, and Fetch. Everything you have learned in this guide.

---

## The API — Open-Meteo

This project uses [Open-Meteo](https://open-meteo.com/) — a free weather API that requires **no API key**.

You will need two calls:

**Step 1 — Geocoding: city name → coordinates**

```
https://geocoding-api.open-meteo.com/v1/search?name=Bangalore&count=1&language=en&format=json
```

Returns: `{ results: [{ name, latitude, longitude, country }] }`

**Step 2 — Weather: coordinates → forecast**

```
https://api.open-meteo.com/v1/forecast
  ?latitude=12.97
  &longitude=77.59
  &current_weather=true
  &daily=temperature_2m_max,temperature_2m_min,weathercode
  &timezone=auto
```

Returns current weather + daily forecast for 7 days.

### Weather Codes

Open-Meteo returns a numeric `weathercode`. Map the key ones:

```javascript
const WEATHER_CODES = {
  0:  { label: "Clear sky",         emoji: "☀️" },
  1:  { label: "Mainly clear",      emoji: "🌤️" },
  2:  { label: "Partly cloudy",     emoji: "⛅" },
  3:  { label: "Overcast",          emoji: "☁️" },
  45: { label: "Foggy",             emoji: "🌫️" },
  48: { label: "Icy fog",           emoji: "🌫️" },
  51: { label: "Light drizzle",     emoji: "🌦️" },
  61: { label: "Slight rain",       emoji: "🌧️" },
  63: { label: "Moderate rain",     emoji: "🌧️" },
  71: { label: "Slight snow",       emoji: "🌨️" },
  80: { label: "Rain showers",      emoji: "🌦️" },
  95: { label: "Thunderstorm",      emoji: "⛈️" },
};

function getWeatherInfo(code) {
  return WEATHER_CODES[code] ?? { label: "Unknown", emoji: "🌡️" };
}
```

---

## Features to Build

### Must-Have (Core)

- [ ] Search input + button — user types a city name
- [ ] Geocoding fetch — convert city name to lat/long
- [ ] Weather fetch — get current + 7-day data
- [ ] Current weather display — city name, temperature, condition, emoji
- [ ] 7-day forecast display — cards showing day, high/low, condition
- [ ] Loading state — show a spinner or "Loading…" while fetching
- [ ] Error state — handle unknown city, network failure, bad response
- [ ] `localStorage` — save last searched city, load it on page start

### Nice-to-Have (Stretch Goals)

- [ ] Unit toggle — °C / °F switch
- [ ] Keyboard support — pressing Enter in the search field submits
- [ ] Multiple recent searches — store last 5 cities in `localStorage`
- [ ] Feels-like temperature, humidity, wind speed (add fields to the API call)
- [ ] Animated emoji based on weather code
- [ ] Dark/light theme toggle saved to `localStorage`

---

## Suggested File Structure

```
weather-app/
├── index.html
├── style.css
└── app.js
```

Keep it in three files. No folders needed for this project size.

---

## Suggested `app.js` Structure

```javascript
// ─── Constants ─────────────────────────────────────────────
const GEOCODING_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL   = "https://api.open-meteo.com/v1/forecast";
const WEATHER_CODES = { /* ...your map... */ };

// ─── DOM References ────────────────────────────────────────
const searchInput = document.getElementById("search-input");
const searchBtn   = document.getElementById("search-btn");
const loadingEl   = document.getElementById("loading");
const errorEl     = document.getElementById("error");
const weatherEl   = document.getElementById("weather");

// ─── API Functions ─────────────────────────────────────────
async function geocodeCity(city) { /* ... */ }
async function fetchWeather(lat, lon) { /* ... */ }

// ─── Render Functions ──────────────────────────────────────
function renderCurrent(data, cityName) { /* ... */ }
function renderForecast(daily) { /* ... */ }

// ─── UI State ──────────────────────────────────────────────
function showLoading() { /* ... */ }
function showError(msg) { /* ... */ }
function showWeather() { /* ... */ }

// ─── Main Handler ──────────────────────────────────────────
async function handleSearch() {
  const city = searchInput.value.trim();
  if (!city) return;

  showLoading();

  try {
    const { latitude, longitude, name } = await geocodeCity(city);
    const weatherData = await fetchWeather(latitude, longitude);
    renderCurrent(weatherData.current_weather, name);
    renderForecast(weatherData.daily);
    showWeather();
    localStorage.setItem("lastCity", city);
  } catch (err) {
    showError(err.message);
  }
}

// ─── Event Listeners ───────────────────────────────────────
searchBtn.addEventListener("click", handleSearch);
searchInput.addEventListener("keydown", e => {
  if (e.key === "Enter") handleSearch();
});

// ─── Init ──────────────────────────────────────────────────
const lastCity = localStorage.getItem("lastCity");
if (lastCity) {
  searchInput.value = lastCity;
  handleSearch();
}
```

---

## Requirements Checklist

### JavaScript Concepts Used
- [ ] `const` / `let` throughout
- [ ] Arrow functions for callbacks
- [ ] Template literals for HTML strings
- [ ] Array methods (`map`, `forEach`) for rendering forecast cards
- [ ] Object destructuring on API responses
- [ ] `async/await` for all API calls
- [ ] `try/catch/finally` around every fetch
- [ ] `response.ok` checked before parsing
- [ ] Custom error thrown for "city not found" case
- [ ] `localStorage.getItem` / `setItem` for persistence

### DOM
- [ ] Elements selected with `querySelector` / `getElementById`
- [ ] `innerHTML` or `createElement` used to render forecast cards
- [ ] `classList.add/remove/toggle` used for UI state
- [ ] `hidden` attribute or CSS classes control visibility

### UX
- [ ] User cannot see the weather section while loading
- [ ] A clear error message appears for bad input or network failure
- [ ] Error clears when a new successful search runs
- [ ] The search input is focused or cleared appropriately after search

---

## Suggested `index.html` Skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weather Dashboard</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header>
    <h1>🌤️ Weather Dashboard</h1>
  </header>

  <main>
    <section class="search-section">
      <input
        type="text"
        id="search-input"
        placeholder="Enter a city name…"
        autocomplete="off"
      >
      <button id="search-btn">Search</button>
    </section>

    <p id="loading" hidden>Loading weather data…</p>
    <p id="error"   hidden class="error-message"></p>

    <section id="weather" hidden>
      <div id="current-weather">
        <!-- Rendered by JS -->
      </div>
      <div id="forecast-grid">
        <!-- 7 cards rendered by JS -->
      </div>
    </section>
  </main>

  <script src="app.js" defer></script>
</body>
</html>
```

---

## Reference Solution

A complete working solution is in [`solution/`](solution/).

- [`solution/index.html`](solution/index.html)
- [`solution/style.css`](solution/style.css)
- [`solution/app.js`](solution/app.js)

**Look at it only after you have attempted your own build.** Even a broken attempt teaches more than reading the solution.

---

> **[← Module 18 — Error Handling](../modules/18-error-handling.md)** | **[⚡ Cheat Sheet →](../cheatsheet/README.md)**
