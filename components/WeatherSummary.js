import Image from "next/image";
import style from "../styles/WeatherSummary.module.css";

const WeatherSummary = (props) => {
  return (
    <div className={style.flexContainer}>
      <h2 className={style.temperature}>{props.temperature}</h2>
      <div>
        <h3 className={style.cityName}>{props.cityName}</h3>
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
