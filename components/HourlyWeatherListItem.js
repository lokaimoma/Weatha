import Image from "next/image";
import style from "../styles/HourlyListItem.module.css";

const HourlyWeatherListItem = (props) => {
  return (
    <div className={style.listItem}>
      <h3>{props.hour}</h3>
      <Image
        src={props.weatherIcon}
        width="70px"
        height="70px"
        alt="Weather Icon"
      />
      <h5>{props.temperature}</h5>
    </div>
  );
};

export default HourlyWeatherListItem;
