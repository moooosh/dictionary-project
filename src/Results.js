import React from "react";
import Definition from "./Definition.js"

export default function Results (props) {
    console.log(props.results)
if(props.results) {
    return (
        <div className="Results">

          <h3>{props.results.word}</h3>
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