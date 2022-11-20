import React from "react";
import './Single-answer.scss'

export interface SingleAnswerProps {
    answerContent: string
}

const SingleAnswer = ({answerContent}: SingleAnswerProps) => {

    return (
        <li key={answerContent} className='Single-answer'>{answerContent}</li>
    )
}

export default SingleAnswer