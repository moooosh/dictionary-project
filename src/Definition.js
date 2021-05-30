import React from "react";
import "./Definitions.css"
import Synonyms from "./Synonyms.js"

export default function Definition (props) {
    console.log(props.definition)
    return (
        <div className="definitions">
<h3>{props.meaning.partOfSpeech}</h3>
{props.meaning.definitions.map(function (definition, index) {
    return (
        <div key={index}>
            <p>
                {definition.definition}
                <br />
                <em> {definition.example}</em>
               
            </p>
            <Synonyms synonyms={definition.synonyms} />
             </div>
           
    );
})}



        </div>

      

    )

    
}