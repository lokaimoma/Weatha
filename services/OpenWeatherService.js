const BASE_URL = "https://api.openweathermap.org/data/2.5";
const CURRENT_WEATHER_URL = `${BASE_URL}/weather?appid=${process.env.API_KEY}&units=metric`;
const ONE_CALL_URL = `${BASE_URL}/onecall?appid=${process.env.API_KEY}&units=metric`;

export default async function getCurrentWeather(latitude, longitude) {
  const result = await fetch(
    `${CURRENT_WEATHER_URL}&lat=${latitude}&lon=${longitude}`
  );

  const json = await result.json();
  return {
    coord: json.coord,
    weather: json.weather,
    main: json.main,
    dt: json.dt,
    timezone: json.timezone,
    cityName: json.name,
  };
}

export async function getCurrentWeatherWithCityName(cityName) {
  const result = await fetch(`${CURRENT_WEATHER_URL}&q=${cityName}`);

  const json = await result.json();
  return {
    coord: json.coord,
    weather: json.weather,
    main: json.main,
    dt: json.dt,
    timezone: json.timezone,
    cityName: json.name,
  };
}

export async function getHourlyForcast(latitude, longitude) {
  const result = await fetch(
    `${ONE_CALL_URL}&lat=${latitude}&lon=${longitude}&exclude=current,minutely,daily,alerts`
  );

  const json = await result.json();
  return {
    timezone: json.timezone_offset,
    hourly: json.hourly.map((weatherData) => ({
      dt: weatherData.dt,
      temperatur: weatherData.temp,
      feelsLike: weatherData.feels_like,
      pressure: weatherData.pressure,
      humidity: weatherData.humidity,
      windSpeed: weatherData.wind_speed,
      weather: weatherData.weather,
    })),
  };
}
