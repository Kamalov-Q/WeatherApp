/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Coordinates } from "@/api/types";
import { weatherAPI } from "@/api/weather";
import { useQuery } from "@tanstack/react-query";

export const WEATHER_KEYS = {
  weather: (coordinates: Coordinates) => ["weather", coordinates],
  forecast: (coordinates: Coordinates) => ["forecast", coordinates],
  location: (coordinates: Coordinates) => ["location", coordinates],
} as const;

export function useWeatherQuery(coordinares: Coordinates | null) {
  return useQuery({
    queryKey: WEATHER_KEYS.weather(coordinares ?? { lat: 0, lon: 0 }),
    queryFn: () => {
      coordinares ? weatherAPI.getCurrentWeather(coordinares) : null;
    },
    enabled: !!coordinares,
  });
}

export function useForeCastQuery(coordinares: Coordinates | null) {
  return useQuery({
    queryKey: WEATHER_KEYS.forecast(coordinares ?? { lat: 0, lon: 0 }),
    queryFn: () => {
      coordinares ? weatherAPI.getForeCast(coordinares) : null;
    },
    enabled: !!coordinares,
  });
}

export function useReverseGeoCodeQuery(coordinares: Coordinates | null) {
  return useQuery({
    queryKey: WEATHER_KEYS.location(coordinares ?? { lat: 0, lon: 0 }),
    queryFn: () => {
      coordinares ? weatherAPI.reverseGeoCode(coordinares) : null;
    },
    enabled: !!coordinares,
  });
}
