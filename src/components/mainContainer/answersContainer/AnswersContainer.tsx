import React from "react";
import './Answers-container.scss'
import SingleAnswer from "./singleAnswer/SingleAnswer";
import { useSelector } from "react-redux";
import {getCurrentAnswers} from "../../../store/selectors/questionsAndAnswers/questionsAndAnswers";
import {Answer} from "../../../store/reducers/questionsAndAnswers/questionsAndAnswers";

const AnswersContainer = () => {

    const answers = useSelector(getCurrentAnswers)

    return (
        <ul className='Answers-container'>
            <div className='Answers-container__line'/>
            <div className='Answers-container__line'/>

            {answers.map((el: Answer) => {
                return <SingleAnswer key={el.answer} isCorrect={el.isCorrect} answerContent={el.answer}/>
            })}
        </ul>
    )
}

export default AnswersContainer