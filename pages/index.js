import { useEffect, useState } from "react";
import getLocationData from "../services/LocationService";

export default function Home() {
  const [query, setQuery] = useState("");
  const [currentLocation, setCurrentLocation] = useState({});

  useEffect(() => {
    const result = getLocationData();
    if (result.error) {
      alert("Error getting location data");
    } else {
      setCurrentLocation(result);
      // Make Call To API
    }
    // TODO: Stop spinners
  }, [currentLocation]);

  return (
    <div>
      <p>Under development</p>
    </div>
  );
}
