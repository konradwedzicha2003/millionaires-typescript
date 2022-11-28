import React, { useState } from "react";
import './Single-answer.scss'
import store from "../../../../store/store";
import {answersLetters} from "../../../../data/questionsAndAnswers/questionsAndAnswers";

export interface SingleAnswerProps {
    answerContent: string,
    isCorrect: boolean,
    index: number
    isDisabled: boolean,
    setIsAnswerDisabled: React.Dispatch<React.SetStateAction<boolean>>
}

const SingleAnswer = ({answerContent, isCorrect, isDisabled, index, setIsAnswerDisabled}: SingleAnswerProps) => {

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
        isCorrect
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
            isPending ? 'single-answer single-answer--checking' : 'single-answer'} ${
            showAnswer ? isCorrect ? 'single-answer--correct' : 'single-answer--incorrect' : ''}`}
        >
            <div className='single-answer__squares single-answer__squares--first'/>
            <div className='single-answer__squares single-answer__squares--second'/>
            <button
                onClick={checkAnswer}
                className='single-answer__onclick'
                disabled={isDisabled}
            >
                <div className='single-answer__onclick-squares single-answer__onclick-squares--first'/>
                <div className='single-answer__onclick-squares single-answer__onclick-squares--second'/>
                </button>
            <div className='single-answer__line'/>
            <span className='single-answer__content'>
                <div className='single-answer__dot-letter-box'>
                    <div className='single-answer__dot'/>
                    <div className='single-answer__letter'>{answersLetters[index].letter}:</div>
                </div>
                <p>{answerContent}</p>
                </span>
        </li>
    )
}

export default SingleAnswer