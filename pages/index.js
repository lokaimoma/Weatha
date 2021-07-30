import { useEffect, useState } from "react";
import { Image } from "next/image";
import SearchBar from "../components/SearchBar";
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
      <section>
        <h5 className="logo">weatha</h5>
        <div className="weatherContent">
          <div className="weatherSummary">
            <h1 className="tempearature"></h1>
            <div className="dateTimeLoc">
              <h2 className="location"></h2>
              <p className="dateTime"></p>
            </div>
            <div className="weatherRep">
              {/* <Image /> */}
              <p className="weatherDescription"></p>
            </div>
          </div>
        </div>
      </section>
      <aside>
        <SearchBar />
      </aside>
    </div>
  );
}
