import { getCurrentWeatherWithCityName } from "../services/OpenWeatherService";
export default async function fetchWeatherByCityname(cityname) {
  const result = await getCurrentWeatherWithCityName(cityname);
  const date = new Date(parseInt(result.dt) * 1000);
  result["dateTime"] = date.toLocaleString();
  return result;
}
