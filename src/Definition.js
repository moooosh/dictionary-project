import React from "react";

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
                <em>{definition.example}</em>
            </p> </div>
    );
})}


        </div>
    )

    
}