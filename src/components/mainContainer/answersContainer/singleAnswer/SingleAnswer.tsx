import React from "react";
import './Single-answer.scss'

export interface props {
    answerContent: string
}

const SingleAnswer = ({answerContent}: props) => {

    return (
        <div className='Single-answer'>{answerContent}</div>
    )
}

export default SingleAnswer