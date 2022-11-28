import React from "react";
import './Single-prize.scss'
import {useSelector} from "react-redux";
import {getCurrentQuestionIndex} from "../../../../store/selectors/questionsAndAnswers/questionsAndAnswers";

export interface SinglePrizeProps {
    prizeAmount: number,
    index: number,
}

const SinglePrize = ({prizeAmount, index}: SinglePrizeProps) => {

    const currentQuestionIndex = useSelector(getCurrentQuestionIndex)

    return (
        <li className={`${
            (index + 1) % 5 === 0 ? 'single-prize single-prize__white-theme' : 'single-prize'} ${
            index < currentQuestionIndex ? 'single-prize--guaranteed-stake' : ''} ${
            currentQuestionIndex === index ? 'single-prize--current-stake' : ''}`}
        >
            <p className='single-prize__number'>{index + 1}</p>
            <span className='single-prize__diamond'/>
            <span className='single-prize__value'>{prizeAmount}</span>
            <span>usd</span>
        </li>
    )
}

export default SinglePrize