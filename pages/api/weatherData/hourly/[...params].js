import fetchHourlyForecast from "../../../../useCases/GetHourlyForeCast";

export default function getHourlyForcast(req, res) {
  const { params } = req.query;
  fetchHourlyForecast(params[0], params[1])
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
}
