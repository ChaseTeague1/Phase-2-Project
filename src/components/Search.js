import React from "react";

function Search({searchInput, setSearchInput}){
    return (
        <div className="search-bar">
            <input 
            className="search-input"
            type="text" 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search recipe..."
            />
        </div>
    )
}

export default Search;