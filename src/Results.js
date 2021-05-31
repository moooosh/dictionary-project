import React from "react";
import Definition from "./Definition.js"
import Phonetic from "./Phonetic.js"
import "./Results.css";

export default function Results (props) {
if(props.results) {
    return (
        <div className="Results">
            <section className="word">
          <h2><strong>{props.results.word}</strong></h2>
          {props.results.phonetics.map(function(phonetic, index) {
              return (
                  <div key={index}>
<Phonetic phonetic={phonetic} />
</div>
              );
          })}
          </section>
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