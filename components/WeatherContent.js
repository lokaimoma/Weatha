import WeatherSummary from "./WeatherSummary";
import HourlyWeatherList from "./HourlyWeatherList";
const WeatherContent = (props) => {
  return (
    <>
      <WeatherSummary
        temperature={props.temperature}
        dateTime={props.dateTime}
        cityName={props.cityName}
        weatherIcon={props.weatherIcon}
        weatherState={props.weatherState}
      />
      <HourlyWeatherList hourlyData={props.hourlyData} />
    </>
  );
};

export default WeatherContent;
