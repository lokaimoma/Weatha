import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherContent from "../components/WeatherContent";
import getLocationData from "../services/LocationService";
import fetcher from "../services/Fetcher";
import style from "../styles/index.module.css";

export default function Home() {
  const [query, setQuery] = useState("");
  const [currentLocation, setCurrentLocation] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const [hourlyForeCast, setHourlyForeCast] = useState({});
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
          setWeatherData(data);
          fetcher(
            `/api/weatherData/hourly/${currentLocation.latitude}/${currentLocation.longitude}`
          )
            .then((data) => {
              setHourlyForeCast(data);
              setIsFetching(false);
            })
            .catch((error) => {
              setErrorOccured(true);
              setIsFetching(false);
              console.log(error);
            });
        })
        .catch((error) => {
          setIsFetching(false);
          console.log(error);
          setErrorOccured(true);
        });
    }
    // TODO: Stop spinners
  }, [currentLocation.latitude]);

  return (
    <div className={style.gridContainer}>
      <section className={style.flexContainer}>
        <h5 className={style.logo}>weatha</h5>
        <div>
          {isFetching && <p>Loading</p>}
          {errorOccured && <p>Error</p>}
          {!isFetching && !errorOccured && (
            <WeatherContent
              cityName={weatherData.cityName}
              temperature={`${weatherData.main.temp} °C`}
              dateTime={weatherData.dateTime}
              weatherIcon={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              weatherState={weatherData.weather[0].description}
              hourlyData={hourlyForeCast}
            />
          )}
        </div>
      </section>
      <aside className={style.sideBar}>
        <SearchBar query={query} setQuery={setQuery} submitHandler={() => {}} />
      </aside>
    </div>
  );
}
