import { long } from "webidl-conversions";
import getCurrentWeather from "../services/OpenWeatherService";


async function getWeatherByLatLng(latitude, longitude) {
    const result = await getCurrentWeather(latitude, longitude)
    const date = new Date(parseInt(result.dt) * 1000);
    const hour = date.getHours()
    result["hour"] = hour
    return result
}