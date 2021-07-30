import getCurrentWeather from "../services/OpenWeatherService";

export default async function getWeatherByLatLng(latitude, longitude) {
  const result = await getCurrentWeather(latitude, longitude);
  const date = new Date(parseInt(result.dt) * 1000);
  const hour = date.getHours();
  result["hour"] = hour;
  result["dateTime"] = date.toLocaleString();
  console.log(result);
  return result;
}
