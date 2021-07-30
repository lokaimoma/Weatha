import WeatherSummary from "./WeatherSummary";
const WeatherContent = (props) => {
  return (
    <WeatherSummary
      temperature={props.temperature}
      dateTime={props.dateTime}
      cityName={props.cityName}
      weatherIcon={props.weatherIcon}
      weatherState={props.weatherDescription}
    />
  );
};

export default WeatherContent;
