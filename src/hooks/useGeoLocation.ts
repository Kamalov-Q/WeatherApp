import { Coordinates } from "@/api/types";
import { useEffect, useState } from "react";

interface GeoLocationState {
  coordinates: Coordinates | null;
  error: string | null;
  isLoading: boolean;
}

export function useGeoLocation() {
  const [locationData, setLocationData] = useState<GeoLocationState>({
    coordinates: null,
    error: null,
    isLoading: false,
  });


  const getLocation = () => {
    setLocationData((prev) => ({ ...prev, isLoading: true, error: null }));

    if (!navigator.geolocation) {
      setLocationData({
        coordinates: null,
        error: "Geolocation is not supported by your browser",
        isLoading: false,
      });
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      setLocationData({
        coordinates: {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        },
        error: null,
        isLoading: false,
      });
    }, (error) => {
      let errMessage: string;

      switch (error.code) {
        case error.PERMISSION_DENIED:
          errMessage = "Location permission denied. Please enable location permission to use this feature";
          break;
        case error.POSITION_UNAVAILABLE:
          errMessage = "Location information is unavailable";
          break;
        case error.TIMEOUT:
          errMessage = "Location request timeout";
          break;
        default: errMessage = "An unknown error occurred";
      }
      setLocationData({
        error: errMessage,
        isLoading: false,
        coordinates: null,
      })
    },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    )
  };

  useEffect(() => {
    getLocation();
  }, [])

  return {
    ...locationData, getLocation
  }

}


