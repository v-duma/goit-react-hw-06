import css from "./SearchBox.module.css";
export const SearchBox = ({ filter, handleFilterChange }) => {
  return (
    <div className={css.search_div}>
      <label>Find contacts by name</label>

      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        className={css.search_input}
      />
    </div>
  );
};
