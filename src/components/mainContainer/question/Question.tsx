import React from "react";
import './Question.scss'

const Question = () => {
    return (
        <div className='Question'>
            <div className='Question__squares'/>
            <div className='Question__squares'/>
            <div className="Question__line"/>
            <div className='Question__content'>
                <p>Pytanie</p>
            </div>
        </div>
    )
}

export default Question