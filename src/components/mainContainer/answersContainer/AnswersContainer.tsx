import React from "react";
import './Answers-container.scss'
import SingleAnswer from "./singleAnswer/SingleAnswer";
import { useSelector } from "react-redux";

type Answer = {
    answer: string
}

type StoreData = {
    data: {question: string, answers: Answer[]}[],
}

const AnswersContainer = () => {

    const answers: Answer[] = useSelector((state: StoreData) => state.data[0].answers)

    return (
        <ul className='Answers-container'>
            <div className='Answers-container__line'/>
            <div className='Answers-container__line'/>

            {answers.map((el: Answer) => {
                return <SingleAnswer answerContent={el.answer}/>
            })}
        </ul>
    )
}

export default AnswersContainer