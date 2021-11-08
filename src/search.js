const SearchBar = () => (
    <div>
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden"></span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search"
                name="s"
                autoComplete="off"
            />
            <button data-testid="searchbar" type="submit">search</button>
        </form>
    </div>
);

export default SearchBar;
