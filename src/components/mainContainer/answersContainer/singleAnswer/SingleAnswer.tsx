import React from "react";
import './Single-answer.scss'

export interface SingleAnswerProps {
    answerContent: string,
    isCorrect: boolean,
}

const SingleAnswer = ({answerContent, isCorrect}: SingleAnswerProps) => {

    return (
        <li key={answerContent} className='Single-answer'>
            <div className='Single-answer__squares Single-answer__squares--first'/>
            <div className='Single-answer__squares Single-answer__squares--second'/>
            <button value={`${isCorrect}`} className='Single-answer__onclick'>
                <div className='Single-answer__onclick-squares Single-answer__onclick-squares--first'/>
                <div className='Single-answer__onclick-squares Single-answer__onclick-squares--second'/>
                </button>
            <div className='Single-answer__line'/>
            <span className='Single-answer__content'>
                    <div className='Single-answer__dot-letter-box'>
                        <div className='Single-answer__dot'/>
                        <div className='Single-answer__letter'>A:</div>
                    </div>
                    <p>{answerContent}</p>
                </span>
        </li>
    )
}

export default SingleAnswer