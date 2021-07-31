import fetcher from "./Fetcher";

export default function searchHandler(
  setWeatherData,
  setHourlyforecast,
  setIsFetching,
  setErrorOccured,
  query
) {
  setIsFetching(true);
  setErrorOccured(false);
  fetcher(`/api/weatherData/current/${query}`)
    .then((data) => {
      setWeatherData(data);
      fetcher(`/api/weatherData/hourly/${data.coord.lat}/${data.coord.lon}`)
        .then((data) => {
          setHourlyforecast(data);
          setIsFetching(false);
        })
        .catch((error) => {
          setErrorOccured(true);
          setIsFetching(false);
          console.log(error);
        });
    })
    .catch((error) => {
      setErrorOccured(true);
      setIsFetching(false);
      console.log(error);
    });
}
