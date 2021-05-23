import React from "react";
import Definition from "./Definition.js"
import "./Results.css";

export default function Results (props) {
    console.log(props.results)
if(props.results) {
    return (
        <div className="Results">
            <div className="word">
          <h2><strong>{props.results.word}</strong></h2></div>
          {props.results.meanings.map(function(definition, index) {
              return (
                  <div key={index}>
                      <Definition meaning={definition} />
                
                    </div>
              );
          })}
        </div>
    );
} else {
    return null;
}
}