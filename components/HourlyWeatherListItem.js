import Image from "next/image";
import style from "../styles/HourlyListItem.module.css";

const HourlyWeatherListItem = (props) => {
  return (
    <div className={style.listItem}>
      <h3>{props.hour}</h3>
      <Image
        className={style.weatherIcon}
        src={props.weatherIcon}
        width={50}
        height={50}
        alt="Weather Icon"
      />
      <h5>{props.temperature}</h5>
    </div>
  );
};

export default HourlyWeatherListItem;
