import fetchWeatherByCityname from "../../../../useCases/getWeatherByCityname";

export default function getWeatherByCityName(req, res) {
  const { cityName } = req.query;
  fetchWeatherByCityname(cityName)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(error.status).json({ error });
    });
}
