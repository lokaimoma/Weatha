import getHours from "../services/DateTimeService";
import { getHourlyForcast } from "../services/OpenWeatherService";

export default async function fetchHourlyForecast(latitude, longitude) {
  const result = await getHourlyForcast(latitude, longitude);
  result.hourly.map((weatherData) => {
    weatherData["hour"] = getHours(weatherData.dt);
  });
  return result;
}
