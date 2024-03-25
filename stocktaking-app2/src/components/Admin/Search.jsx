function Search({ value, onChange }) {
  return (
    <div id="search">
      <i className="bx bx-search-alt-2 bx-md"></i>
      <input
        name="search"
        type="search"
        value={value}
        placeholder="Search Cloth"
        onChange={onChange}
      />
    </div>
  );
}

export default Search;
