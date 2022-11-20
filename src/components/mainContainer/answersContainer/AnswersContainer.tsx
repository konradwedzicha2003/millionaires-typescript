import React from "react";
import './Answers-container.scss'
import SingleAnswer from "./singleAnswer/SingleAnswer";
import {questionAndAnswers} from "../../../data/questionsAndAnswers/questionsAndAnswers";

export interface answerContentProps {
    answerContent: string
}

const AnswersContainer = ({answerContent}: answerContentProps) => {

    const answers = questionAndAnswers[0].answers

    return (
        <div className='Answers-container'>
            <div className='line line__answer-through-bigger-resolution'/>
            <div className='line line__answer-through-bigger-resolution'/>
            <SingleAnswer/>
        </div>
    )
}

export default AnswersContainer