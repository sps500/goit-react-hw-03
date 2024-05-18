import css from "./searchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={css.search_style}>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBox;
