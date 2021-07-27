const SearchBar = ({ query, setQuery, submitHandler }) => {
  return (
    <form>
      <input
        type="search"
        value={query}
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler;
        }}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>🔍</button>
    </form>
  );
};

export default SearchBar;
