import React, { useState } from "react";
import axios from "axios"

export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    
    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiUrl).then(handleResponse)
    }

    function handleResponse(response) {
       console.log(response.data[0])
        
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