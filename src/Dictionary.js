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
        <div className="dictionary">
        <div className="search-bar">
        <form onSubmit={search}>

            <input 
                    type="search"
                    placeholder="Search for a word...."
                    autoComplete="off"
                    onChange={handleChange}
                    className="search-bar"
                    />
                 
        
        </form>
        
        </div>
        <Results results={result}/>
        
        </div>
       
    )
}