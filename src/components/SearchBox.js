import React from "react";


function SearchBox({ query, setQuery, search}) {


    return <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                        onChange={(event) => (setQuery(event.target.value))}
                        value={query}
                        onKeyPress={search}
                    ></input>
                </div>

}

export default SearchBox