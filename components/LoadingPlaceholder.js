import style from "../styles/shimmer.module.css";

const LoadingPlaceholder = () => {
  return (
    <>
      <div className={style.flexContainer}>
        <temperature
          className={`${style.shimmerBackground} ${style.temperature}`}
        ></temperature>
        <div className={style.container}>
          <text className={`${style.shimmerBackground} ${style.text}`}></text>
          <text className={`${style.shimmerBackground} ${style.text}`}></text>
        </div>
        <div className={style.container}>
          <photo
            className={`${style.shimmerBackground} ${style.photo}`}
          ></photo>
          <text className={`${style.shimmerBackground} ${style.text}`}></text>
        </div>
      </div>

      <div className={style.tileContainer}>
        <tile className={`${style.shimmerBackground} ${style.tile}`}></tile>
        <tile className={`${style.shimmerBackground} ${style.tile}`}></tile>
        <tile className={`${style.shimmerBackground} ${style.tile}`}></tile>
        <tile className={`${style.shimmerBackground} ${style.tile}`}></tile>
        <tile className={`${style.shimmerBackground} ${style.tile}`}></tile>
      </div>
    </>
  );
};

export default LoadingPlaceholder;
