import React from "react";
import './Answers-container.scss'
import SingleAnswer from "./singleAnswer/SingleAnswer";
import {questionAndAnswers} from "../../../data/questionsAndAnswers/questionsAndAnswers";

const AnswersContainer = () => {

    const answers = questionAndAnswers[0].answers
    console.log(typeof answers[0].answer)
    return (
        <div className='Answers-container'>
            {/*<div className='line line__answer-through-bigger-resolution'/>*/}
            {/*<div className='line line__answer-through-bigger-resolution'/>*/}

            {answers.map(el => {
                return <SingleAnswer answerContent={el.answer}/>
            })}
        </div>
    )
}

export default AnswersContainer