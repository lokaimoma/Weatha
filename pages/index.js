import { useEffect, useState } from "react";
import getLocationData from "../services/LocationService";
import fetcher from "../services/Fetcher";

export default function Home() {
  const [query, setQuery] = useState("");
  const [currentLocation, setCurrentLocation] = useState({});

  useEffect(() => {
    getLocationData(setCurrentLocation);
    if ("error" in currentLocation) {
      alert("Error Fetching Location");
    } else if ("latitude" in currentLocation) {
      fetcher(
        `/api/weather/${currentLocation.latitude}/${currentLocation.longitude}`
      ).then((data) => {
        console.log("Data: ", data);
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
