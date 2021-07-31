import Image from "next/image";
import style from "../styles/SearchBar.module.css";
import getRandInt from "../services/RandomNumberGenerator";

const SearchBar = ({ query, setQuery, submitHandler }) => {
  const cities = ["Accra,GH", "Fes,MA", "Ontario,CA", "Britol,ENG"];
  return (
    <form className={style.formGroup}>
      <input
        className={style.searchBox}
        type="search"
        placeholder={cities[getRandInt(0, 4)]}
        value={query}
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler;
        }}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className={style.btn}>
        <Image src="/search.svg" width={20} height={20} alt="Search Button" />
      </button>
    </form>
  );
};

export default SearchBar;
