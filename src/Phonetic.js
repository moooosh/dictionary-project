import React from "react"
import "./Phonetic.css"

export default function Phonetic (props) {
  
    return (
        <div className="Phonetics">
          <button type="click">
              <img src="./soundicon.png" alt="sound"/>
              </button>
<a href="{props.phonetic.audio}" alt="sound" target="_blank" rel="noreferrer">Listen</a> 
 <br/><em>{props.phonetic.text}</em>
        </div>)
}