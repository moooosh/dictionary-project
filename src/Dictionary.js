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

        let pexelsApi = "563492ad6f917000010000013efe4e3bb3ec495cbc8d2598cb4d0855"
        let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`
        let headers = { Authorization: `Bearer ${pexelsApi}` };
        axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleResponse(response) {
       setResult(response.data[0])
    }

    function handlePexelsResponse(response) {
        console.log(response);
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