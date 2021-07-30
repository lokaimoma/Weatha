import { getHourlyForcast } from "../services/OpenWeatherService";

export default async function fetchHourlyForecast(latitude, longitude) {
  const result = await getHourlyForcast(latitude, longitude);
  result.hourly.map((weatherData) => {
    weatherData["hour"] = new Date(parseInt(weatherData.dt) * 1000).getHours();
  });
  return result;
}
