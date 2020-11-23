import React, { useState } from 'react';

function Search({ searchStr }) {
    const [search, setSearch] = useState("");
    
    function handleSubmit(evt) {
        evt.preventDefault();
        searchStr(search);
    }

    function handleChange(evt) {
        setSearch(evt.target.value);
    }

    return (
        <div className='Search'>
            <form className="form-inline" onSubmit={handleSubmit}>
                <input 
                className="form-control" 
                name="search"
                placeholder="What are you looking for?"
                value={search}
                onChange={handleChange}
                />
                <button className="btn" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Search