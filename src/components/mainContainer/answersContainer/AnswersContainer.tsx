import React from "react";
import './Answers-container.scss'
import SingleAnswer from "./singleAnswer/SingleAnswer";
import {useSelector, useDispatch} from "react-redux";

const AnswersContainer = () => {

    const answers = useSelector((state:any) => state.data[0].answers)

    return (
        <ul className='Answers-container'>
            {/*<div className='line line__answer-through-bigger-resolution'/>*/}
            {/*<div className='line line__answer-through-bigger-resolution'/>*/}

            {answers.map((el: any) => {
                return <SingleAnswer answerContent={el.answer}/>
            })}
        </ul>
    )
}

export default AnswersContainer