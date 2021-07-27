import { Image } from "next/image";

const WeatherSummary = (props) => {
  return (
    <div>
      <h2>{props.temperature}°</h2>
      <div>
        <h3>{props.cityName}</h3>
        <p>{props.dateTime}</p>
      </div>
      <div>
        <Image
          src={props.weatherIcon}
          width={50}
          height={50}
          alt="Weather Icon"
        />
        <p>{props.weatherState}</p>
      </div>
    </div>
  );
};

export default WeatherSummary;
props;
