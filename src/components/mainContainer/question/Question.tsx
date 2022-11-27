import React from "react";
import './Question.scss'
import { useSelector } from "react-redux";
import { getCurrentQuestion } from "../../../store/selectors/questionsAndAnswers";

const Question = () => {

    const question = useSelector(getCurrentQuestion)

    return (
        <div className='Question'>
            <div className='Question__squares'/>
            <div className='Question__squares'/>
            <div className="Question__line"/>
            <div className='Question__content'>
                <p>{question}</p>
            </div>
        </div>
    )
}

export default Question