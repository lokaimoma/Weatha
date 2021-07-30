import { useEffect, useState } from "react";
import { Image } from "next/image";
import SearchBar from "../components/SearchBar";
import WeatherContent from "../components/WeatherContent";
import getLocationData from "../services/LocationService";
import fetcher from "../services/Fetcher";

export default function Home() {
  const [query, setQuery] = useState("");
  const [currentLocation, setCurrentLocation] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [errorOccured, setErrorOccured] = useState(false);

  useEffect(() => {
    getLocationData(setCurrentLocation);
    if ("error" in currentLocation) {
      alert("Error Fetching Location");
    } else if ("latitude" in currentLocation) {
      fetcher(
        `/api/weatherData/current/${currentLocation.latitude}/${currentLocation.longitude}`
      )
        .then((data) => {
          console.log(data);
          setWeatherData(data);
          setIsFetching(false);
        })
        .catch((error) => {
          setIsFetching(false);
          setErrorOccured(true);
          console.log(error);
        });
    }
    // TODO: Stop spinners
  }, [currentLocation.latitude]);

  return (
    <div>
      <section>
        <h5 className="logo">weatha</h5>
        {isFetching && <p>Loading</p>}
        {errorOccured && <p>Error</p>}
        {!isFetching && !errorOccured && (
          <WeatherContent
            cityName={weatherData.cityName}
            temperature={`${weatherData.main.temp} °C`}
            dateTime={weatherData.dateTime}
            weatherIcon={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            weatherState={weatherData.weather[0].description}
          />
        )}
      </section>
      <aside>
        <SearchBar query={query} setQuery={setQuery} submitHandler={() => {}} />
      </aside>
    </div>
  );
}
