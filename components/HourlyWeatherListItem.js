import Image from "next/image";
const HourlyWeatherListItem = (props) => {
  return (
    <div>
      <h3>{props.hour}</h3>
      <Image
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
