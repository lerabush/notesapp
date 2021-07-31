import React from 'react';

const Search=({handleSearchNote})=>{
    return <div className="search">
        <p className="search-icon" ><img  src="search.png"/></p>
        <input onChange={(event)=>handleSearchNote(event.target.value)} type="text" placeholder="Type to search..."/>
    </div>;
}
export default Search;