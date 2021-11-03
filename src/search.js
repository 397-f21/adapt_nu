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
        <button type="search building name">search</button>
    </form>
);

export default SearchBar;
