const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search"
            name="s"
            autocomplete="off"
        />
        <button type="submit">search</button>
    </form>
);

export default SearchBar;
