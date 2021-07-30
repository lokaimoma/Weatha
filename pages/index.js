import { useEffect, useState } from "react";
import getLocationData from "../services/LocationService";
import getWeatherByLatLng from "../useCases/GetWeatherByLatLng";

export default function Home() {
  const [query, setQuery] = useState("");
  const [currentLocation, setCurrentLocation] = useState({});

  useEffect(() => {
    getLocationData(setCurrentLocation);
    if ("error" in currentLocation) {
      alert("Error Fetching Location");
    } else if ("latitude" in currentLocation) {
      getWeatherByLatLng(currentLocation.latitude, currentLocation.longitude)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          alert("Error accessing server");
          console.log(error);
        });
    }
    // TODO: Stop spinners
  }, [currentLocation.latitude]);

  return (
    <div>
      <p>Under development</p>
    </div>
  );
}
