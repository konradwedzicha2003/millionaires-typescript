import React, { useState } from "react";
import './Single-answer.scss'
import store from "../../../../store/store";
import { Answer } from "../../../../store/reducers/questionsAndAnswers/questionsAndAnswers";
import {answersLetters} from "../../../../data/questionsAndAnswers/questionsAndAnswers";

export interface SingleAnswerProps {
    answerContent: string,
    correctAnswer: Answer | undefined,
    value: number,
    index: number
    isDisabled: boolean,
    setIsAnswerDisabled: React.Dispatch<React.SetStateAction<boolean>>
}

const SingleAnswer = ({answerContent, correctAnswer, value, isDisabled, index, setIsAnswerDisabled}: SingleAnswerProps) => {

    const [isPending, setIsPending] = useState(false)
    const [showAnswer, setShowAnswer] = useState(false)

    const checkAnswer = () => {
        setIsAnswerDisabled(true)
        setIsPending(true)
        setTimeout(markAnswer, 2000)
    }

    const markAnswer = () => {
        setIsPending(false)
        setShowAnswer(true)
        value === correctAnswer?.value
            ? setTimeout(nextQuestion, 2000)
            : gameOver()
    }

    const nextQuestion = () => {
        setShowAnswer(false)
        setIsAnswerDisabled(false)
        store.dispatch({type: "answerCorrect"})
    }

    const gameOver = () => {
        setIsAnswerDisabled(true)
    }

    return (
        <li className={`${
            isPending ? 'Single-answer Single-answer--checking' : 'Single-answer'} ${
            showAnswer ? value === correctAnswer?.value ? 'Single-answer--correct' : 'Single-answer--incorrect' : ''}`}
        >
            <div className='Single-answer__squares Single-answer__squares--first'/>
            <div className='Single-answer__squares Single-answer__squares--second'/>
            <button
                onClick={checkAnswer}
                value={value}
                className='Single-answer__onclick'
                disabled={isDisabled}
            >
                <div className='Single-answer__onclick-squares Single-answer__onclick-squares--first'/>
                <div className='Single-answer__onclick-squares Single-answer__onclick-squares--second'/>
            </button>
            <div className='Single-answer__line'/>
            <span className='Single-answer__content'>
                <div className='Single-answer__dot-letter-box'>
                    <div className='Single-answer__dot'/>
                    <div className='Single-answer__letter'>{answersLetters[index].letter}:</div>
                </div>
                <p>{answerContent}</p>
            </span>
        </li>
    )
}

export default SingleAnswer