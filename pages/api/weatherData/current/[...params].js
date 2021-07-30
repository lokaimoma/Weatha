import getWeatherByLatLng from "../../../../useCases/GetWeatherByLatLng";

export default function getWEatherByLatitudeLongitude(req, res) {
  const { params } = req.query;
  getWeatherByLatLng(params[0], params[1])
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(error.status).json({ error });
    });
}
