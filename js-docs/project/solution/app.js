/* ============================================================
   WEATHER DASHBOARD — REFERENCE SOLUTION
   Uses: async/await, Fetch, DOM manipulation, localStorage,
         error handling, array methods, template literals
   ============================================================ */

'use strict';

// ─── Constants ───────────────────────────────────────────────

const GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_URL   = 'https://api.open-meteo.com/v1/forecast';

const WEATHER_CODES = {
  0:  { label: 'Clear sky',        emoji: '☀️'  },
  1:  { label: 'Mainly clear',     emoji: '🌤️' },
  2:  { label: 'Partly cloudy',    emoji: '⛅'  },
  3:  { label: 'Overcast',         emoji: '☁️'  },
  45: { label: 'Foggy',            emoji: '🌫️' },
  48: { label: 'Icy fog',          emoji: '🌫️' },
  51: { label: 'Light drizzle',    emoji: '🌦️' },
  53: { label: 'Drizzle',          emoji: '🌦️' },
  55: { label: 'Heavy drizzle',    emoji: '🌧️' },
  61: { label: 'Slight rain',      emoji: '🌧️' },
  63: { label: 'Moderate rain',    emoji: '🌧️' },
  65: { label: 'Heavy rain',       emoji: '🌧️' },
  71: { label: 'Slight snow',      emoji: '🌨️' },
  73: { label: 'Moderate snow',    emoji: '❄️'  },
  80: { label: 'Rain showers',     emoji: '🌦️' },
  85: { label: 'Snow showers',     emoji: '🌨️' },
  95: { label: 'Thunderstorm',     emoji: '⛈️' },
  99: { label: 'Heavy thunderstorm', emoji: '⛈️' },
};

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// ─── Custom Errors ───────────────────────────────────────────

class CityNotFoundError extends Error {
  constructor(city) {
    super(`City "${city}" not found. Check the spelling and try again.`);
    this.name = 'CityNotFoundError';
  }
}

class NetworkError extends Error {
  constructor(status) {
    super(`Network request failed (HTTP ${status}). Please try again.`);
    this.name = 'NetworkError';
  }
}

// ─── DOM References ──────────────────────────────────────────

const searchInput   = document.getElementById('search-input');
const searchBtn     = document.getElementById('search-btn');
const loadingEl     = document.getElementById('loading');
const errorEl       = document.getElementById('error');
const weatherEl     = document.getElementById('weather');
const currentEl     = document.getElementById('current-weather');
const forecastEl    = document.getElementById('forecast-grid');

// ─── API Functions ───────────────────────────────────────────

/**
 * Convert a city name string to { latitude, longitude, name, country }
 * Throws CityNotFoundError if the city cannot be found.
 */
async function geocodeCity(city) {
  const url = `${GEOCODING_URL}?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;
  const res = await fetch(url);

  if (!res.ok) throw new NetworkError(res.status);

  const data = await res.json();

  if (!data.results?.length) {
    throw new CityNotFoundError(city);
  }

  const { name, country, latitude, longitude } = data.results[0];
  return { name, country, latitude, longitude };
}

/**
 * Fetch current weather + 7-day forecast for given coordinates.
 */
async function fetchWeather(latitude, longitude) {
  const params = new URLSearchParams({
    latitude,
    longitude,
    current_weather: true,
    daily: 'temperature_2m_max,temperature_2m_min,weathercode',
    timezone: 'auto',
  });

  const res = await fetch(`${WEATHER_URL}?${params}`);

  if (!res.ok) throw new NetworkError(res.status);

  return res.json();
}

// ─── Render Functions ────────────────────────────────────────

function getWeatherInfo(code) {
  return WEATHER_CODES[code] ?? { label: 'Unknown', emoji: '🌡️' };
}

function renderCurrent({ temperature, weathercode }, cityName, country) {
  const { label, emoji } = getWeatherInfo(weathercode);

  currentEl.innerHTML = `
    <div>
      <p class="current__city">${cityName}</p>
      <p class="current__country">${country}</p>
      <p class="current__condition">${emoji} ${label}</p>
    </div>
    <div>
      <p class="current__temp">${Math.round(temperature)}<span class="current__unit">°C</span></p>
    </div>
  `;
}

function renderForecast({ time, temperature_2m_max, temperature_2m_min, weathercode }) {
  // Build all 7 cards using map, then inject once
  const cards = time.map((dateStr, i) => {
    const date  = new Date(dateStr);
    const day   = i === 0 ? 'Today' : DAYS[date.getDay()];
    const { emoji } = getWeatherInfo(weathercode[i]);
    const high  = Math.round(temperature_2m_max[i]);
    const low   = Math.round(temperature_2m_min[i]);

    return `
      <div class="forecast-card">
        <p class="forecast-card__day">${day}</p>
        <p class="forecast-card__emoji">${emoji}</p>
        <p class="forecast-card__high">${high}°</p>
        <p class="forecast-card__low">${low}°</p>
      </div>
    `;
  });

  forecastEl.innerHTML = cards.join('');
}

// ─── UI State Helpers ────────────────────────────────────────

function showLoading() {
  loadingEl.hidden = false;
  errorEl.hidden   = true;
  weatherEl.hidden = true;
  errorEl.textContent = '';
}

function showError(message) {
  loadingEl.hidden = true;
  errorEl.hidden   = false;
  weatherEl.hidden = true;
  errorEl.textContent = message;
}

function showWeather() {
  loadingEl.hidden = false;
  errorEl.hidden   = true;
  loadingEl.hidden = true;
  weatherEl.hidden = false;
}

// ─── Main Search Handler ─────────────────────────────────────

async function handleSearch() {
  const city = searchInput.value.trim();
  if (!city) {
    searchInput.focus();
    return;
  }

  showLoading();
  searchBtn.disabled = true;

  try {
    // Step 1 — geocode
    const location = await geocodeCity(city);

    // Step 2 — weather
    const weather = await fetchWeather(location.latitude, location.longitude);

    // Step 3 — render
    renderCurrent(weather.current_weather, location.name, location.country);
    renderForecast(weather.daily);
    showWeather();

    // Step 4 — persist
    localStorage.setItem('lastCity', city);

  } catch (err) {
    if (err instanceof CityNotFoundError || err instanceof NetworkError) {
      showError(err.message);
    } else {
      showError('An unexpected error occurred. Please try again.');
      console.error('Unexpected error:', err);
    }
  } finally {
    searchBtn.disabled = false;
  }
}

// ─── Event Listeners ─────────────────────────────────────────

searchBtn.addEventListener('click', handleSearch);

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleSearch();
});

// ─── Initialise ──────────────────────────────────────────────

(function init() {
  const lastCity = localStorage.getItem('lastCity');
  if (lastCity) {
    searchInput.value = lastCity;
    handleSearch();
  }
})();
