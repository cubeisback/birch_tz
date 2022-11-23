import React from "react";

const SearchInput = ({query, setQuery}) => {
    return (
            <input 
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Поиск"
            />
    )
}

export default SearchInput;
