import React, {useState} from "react";
import './Answers-container.scss'
import SingleAnswer from "./singleAnswer/SingleAnswer";
import { useSelector } from "react-redux";
import {getCurrentAnswers} from "../../../store/selectors/questionsAndAnswers/questionsAndAnswers";
import {Answer} from "../../../store/reducers/questionsAndAnswers/questionsAndAnswers";

const AnswersContainer = () => {

    const [isDisabled, setIsAnswerDisabled] = useState(false)
    const answers = useSelector(getCurrentAnswers)

    return (
        <ul className='answers-container'>
            <div className='answers-container__line'/>
            <div className='answers-container__line'/>
                {answers.map((el: Answer, index) => {
                    return <SingleAnswer
                        key={el.answer}
                        isCorrect={el.isCorrect}
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