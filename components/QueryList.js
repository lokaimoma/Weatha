import style from "../styles/QueryList.module.css";

const QueryList = ({ queryList }) => {
  return (
    queryList.length > 0 && (
      <div className={style.listContainer} s>
        {queryList.map((query) => (
          <>
            <div className={`${style.queryContainer} ${style.slideIn}`}>
              <p>{query}</p>
              <hr className={style.hr} />
            </div>
          </>
        ))}
      </div>
    )
  );
};

export default QueryList;
