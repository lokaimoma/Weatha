import fetcher from "./Fetcher";

export default function searchHandler(
  setWeatherData,
  setHourlyforecast,
  setIsFetching,
  setErrorOccured,
  query,
  queryList,
  setQueryList
) {
  setIsFetching(true);
  setErrorOccured(false);
  fetcher(`/api/weatherData/current/${query}`)
    .then((data) => {
      setWeatherData(data);
      if (queryList.length < 5) {
        setQueryList(
          Array.from(
            new Set([...queryList, { query, temp: `${data.main.temp} °C` }])
          )
        );
      } else {
        setQueryList(
          Array.from(
            new Set([
              queryList[1],
              queryList[2],
              queryList[3],
              queryList[4],
              { query, temp: `${data.main.temp} °C` },
            ])
          )
        );
      }
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
