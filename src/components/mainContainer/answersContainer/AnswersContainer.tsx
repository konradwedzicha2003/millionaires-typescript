import React, {useState} from "react";
import './Answers-container.scss'
import SingleAnswer from "./singleAnswer/SingleAnswer";
import { useSelector } from "react-redux";
import {getCurrentAnswers, getCurrentCorrectAnswer} from "../../../store/selectors/questionsAndAnswers";
import { Answer } from "../../../store/reducers/questionsAndAnswers/questionsAndAnswers";

const AnswersContainer = () => {
    const [isDisabled, setIsAnswerDisabled] = useState(false)
    const answers = useSelector(getCurrentAnswers)
    const correctAnswer = useSelector(getCurrentCorrectAnswer)

    return (
        <ul className='Answers-container'>
            <div className='Answers-container__line'/>
            <div className='Answers-container__line'/>
            {answers.map((el: Answer, index) => {
                return <SingleAnswer
                    key={el.answer}
                    correctAnswer={correctAnswer}
                    value={el.value}
                    answerContent={el.answer}
                    isDisabled={isDisabled}
                    setIsAnswerDisabled={setIsAnswerDisabled}
                    index={index}
                />
            })}
        </ul>
    )
}

export default AnswersContainer