const BASE_URL = "https://api.openweathermap.org/data/2.5";
const CURRENT_WEATHER_URL = `${BASE_URL}/weather?appid=${process.env.API_KEY}&units=metric`;
const ONE_CALL_URL = `${BASE_URL}/onecall?appid=${process.env.API_KEY}&units=metric`;

const getCurrentWeather = async (latitude, longitude) => {
  const result = await fetch(
    `${CURRENT_WEATHER_URL}&lat=${latitude}&lon=${longitude}`
  );

  const json = await result.json();
  return {
    coord: json.coord,
    weather: json.weather,
    main: json.main,
    dt: json.dt,
  };
};
