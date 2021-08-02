import style from "../styles/QueryList.module.css";

const QueryList = ({ queryList }) => {
  return (
    queryList.length > 0 && (
      <div className={style.listContainer}>
        <h5>Recent</h5>
        {queryList.map((query) => (
          <>
            <div
              key={query.query}
              className={`${style.queryContainer} ${style.slideIn}`}
            >
              <p>{query.query}</p>
              <p>{query.temp}</p>
            </div>
          </>
        ))}
      </div>
    )
  );
};

export default QueryList;
