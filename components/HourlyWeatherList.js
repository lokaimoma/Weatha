import HourlyWeatherListItem from "./HourlyWeatherListItem";

const HourlyWeatherList = ({ hourlyWeatherList }) => {
  return (
    <div>
      {hourlyWeatherList.map((weatherData) => (
        <HourlyWeatherListItem
          key={weatherData.hour}
          hour={weatherData.hour}
          weatherIcon={weatherData.icon}
          temperature={weatherData.temperature}
        />
      ))}
    </div>
  );
};

export default HourlyWeatherList;
