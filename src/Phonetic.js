import userEvent from "@testing-library/user-event";
import React from "react"
import "./Phonetic.css"

export default function Phonetic (props) {
    console.log(props.phonetic);

function playSound (event) {
 event.preventDefault();
 soundURL=`https://lex-audio.useremarkable.com/mp3/${word}_us_1.mp3`
}

it is the props.phonetic.audio which finds word to userEvent...


    return (
        <div className="Phonetics">
          <button type="click" onClick={playSound}>
              <img src="./soundicon.png" />
              </button>
<a href="{props.phonetic.audio}" target="_blank" >Listen</a> 
 <br/><em>{props.phonetic.text}</em>
        </div>)
}