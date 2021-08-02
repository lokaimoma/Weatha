import Image from "next/image";
import HourlyWeatherListItem from "./HourlyWeatherListItem";
import style from "../styles/HourlyList.module.css";

const HourlyWeatherList = ({ hourlyData }) => {
  return (
    <div className={style.flexContainer}>
      <div
        className={`${style.nav} ${style.navLeft}`}
        onClick={() => {
          document.getElementById("weather-list").scrollBy({
            left: -50,
            behavior: "smooth",
          });
        }}
      >
        <Image
          src="/left-chevron.svg"
          width={30}
          height={30}
          alt={"Scroll Left"}
        />
      </div>
      <div id="weather-list" className={style.weatherList}>
        {hourlyData.hourly.map((weatherData) => (
          <HourlyWeatherListItem
            key={weatherData.dt}
            hour={weatherData.hour}
            weatherIcon={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            temperature={`${Math.round(weatherData.temperature)} °C`}
          />
        ))}
      </div>
      <div
        className={`${style.nav} ${style.navRight}`}
        onClick={() => {
          document.getElementById("weather-list").scrollBy({
            left: +50,
            behavior: "smooth",
          });
        }}
      >
        <Image
          src="/right-chevron.svg"
          width={30}
          height={30}
          alt={"Scroll right"}
        />
      </div>
    </div>
  );
};

export default HourlyWeatherList;
