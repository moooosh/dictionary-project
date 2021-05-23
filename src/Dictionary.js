import React, { useState } from "react";
import axios from "axios"
import Results from "./Results";
import "./Dictionary.css"

export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    const [result, setResult] = useState(null);
    
    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiUrl).then(handleResponse)
    }

    function handleResponse(response) {

       setResult(response.data[0])
        console.log(response.data[0].meanings[0].definitions[0].definition)
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
                    className="search-bar"
                    />
                 
                    <input type="submit"
                    placeholder="Submit"
                    className="search-button" />
        </form>

        <Results results={result}/>
        </div>

       
    )
}