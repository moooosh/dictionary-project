import React from "react"


export default function Phonetic (props) {
  
    return (
        <div className="Phonetics">
       <p>{props.phonetic.text}</p>       
<a href="{props.phonetic.audio}" alt="sound" target="_blank" rel="noreferrer">Listen</a> 
        </div>
        );
}