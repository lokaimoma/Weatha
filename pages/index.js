import { useEffect, useState } from "react";
import getLocationData from "../services/LocationService";
import getWeatherByLatLng from "../useCases/GetWeatherByLatLng";

export default function Home() {
  const [query, setQuery] = useState("");
  const [currentLocation, setCurrentLocation] = useState({});

  useEffect(() => {
    const result = getLocationData();
    if (result.error) {
      alert("Error getting location data");
    } else {
      setCurrentLocation(result);
      getWeatherByLatLng(currentLocation.latitude, currentLocation.longitude)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // TODO: Stop spinners
  }, [currentLocation]);

  return (
    <div>
      <p>Under development</p>
    </div>
  );
}
