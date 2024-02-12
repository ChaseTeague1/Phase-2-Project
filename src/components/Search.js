import React from "react";

function Search({setCategory, selectedCategory, categories, searchInput, setSearchInput}){
    return (
        <div className="search-bar">
            {
                categories.map(category => (
                    <button 
                    className={selectedCategory === category ? "selected" : "category-button"}
                    onClick={() => setCategory(category)}
                    key={category}>{category}
                    </button>
                ))
            }
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