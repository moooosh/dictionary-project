import userEvent from "@testing-library/user-event";
import React from "react"
import "./Phonetic.css"

export default function Phonetic (props) {
    console.log(props.phonetic);



    return (
        <div className="Phonetics">
          <button type="click">
              <img src="./soundicon.png" />
              </button>
<a href="{props.phonetic.audio}" target="_blank" rel="no_referrer">Listen</a> 
 <br/><em>{props.phonetic.text}</em>
        </div>)
}