import React, { useState } from "react";


export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    
    function search(event) {
        event.preventDefault();
        alert(`You have searched for ${keyword}`);
    }
    
    function handleChange(event) {
    setKeyword(event.target.value)
    }
    
    return (
        <div className="search-bar">
        <form onSubmit={search}>

            <input 
                    type="search"
                    placeholder="Search a word..."
                    autoComplete="off"
                    onChange={handleChange}
                    />
                 
                    <input type="submit"
                    placeholder="Submit"
                    className="search-button" />
        </form>
        </div>
    )
}