import HourlyWeatherListItem from "./HourlyWeatherListItem";

const HourlyWeatherList = ({ hourlyData }) => {
  return (
    <div>
      {hourlyData.hourly.map((weatherData) => (
        <HourlyWeatherListItem
          key={weatherData.hour}
          hour={weatherData.hour}
          weatherIcon={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          temperature={weatherData.temperature}
        />
      ))}
    </div>
  );
};

export default HourlyWeatherList;
