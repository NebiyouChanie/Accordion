import React from 'react'
import data from './data';
import Question from './Question';

function Questions() {
    
  return (
        <>
         {data.map((question)=>{
            const {Q,A}=question;
            return (<Question Q={Q} A={A} />)
         })}
        </>
  )
}


export default Questions;
