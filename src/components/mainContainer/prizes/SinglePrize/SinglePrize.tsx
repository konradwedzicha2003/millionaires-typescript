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
            (index + 1) % 5 === 0 ? 'Single-prize Single-prize__white-theme' : 'Single-prize'} ${
            index < currentQuestionIndex ? 'Single-prize--guaranteed-stake' : ''} ${
            currentQuestionIndex === index ? 'Single-prize--current-stake' : ''}`}
        >
            <p className='Single-prize__number'>{index + 1}</p>
            <span className='Single-prize__diamond'/>
            <span className='Single-prize__value'>{prizeAmount}</span>
            <span>usd</span>
        </li>
    )
}

export default SinglePrize