export const API_CONFIG = {
  BASE_URL: "http://api.openweathermap.org/data/3.0",
  GEO_CODING_API: "http://api.openweathermap.org/geo/1.0",
  API_KEY: import.meta.env.VITE_OPENWEATHER_API_KEY,
  DEFAULT_PARAMS : {
    units: "metric",
    appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
  }
};
