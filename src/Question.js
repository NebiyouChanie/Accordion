import React, { useState } from 'react'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

function Question(props) {

    const [showAnswer,setShowAnswer]=useState(false)
    const revealAnswer = ()=>{
        setShowAnswer(!showAnswer)
    }
    return (
        <div id="question" className="question">
            <div className="indQues">
                <p>{props.Q}</p>
                <button className="buttons" onClick={revealAnswer}>
                    <span>{showAnswer? <FaArrowUp /> : <FaArrowDown/>}</span>
                </button>     
            </div>
            {showAnswer?<div className="answer"><p>{props.A}</p></div>:null}  
        </div>
  )
}


export default Question;
