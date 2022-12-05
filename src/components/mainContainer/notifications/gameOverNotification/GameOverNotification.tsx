import React from "react";
import './Game-over-notification.scss'
import {useSelector} from "react-redux";
import {getCurrentQuestionIndex} from "../../../../store/selectors/questionsAndAnswers/questionsAndAnswers";
import {getPrizes} from "../../../../store/selectors/prizes/prizes";
import {getIsGameOver} from "../../../../store/selectors/gameOver/gameOver";
import {useResetGame} from "../../../../hooks/useResetGame";

const GameOverNotification = () => {

    const currentQuestionIndex = useSelector(getCurrentQuestionIndex)
    const prizes = useSelector(getPrizes)
    const isGameOver = useSelector(getIsGameOver)

    return (
        <div className={`${isGameOver ? 'game-over-notification--shown' : 'hidden'}`}>
            <p>
                {currentQuestionIndex === 0 ? 'Nie no serio nawet 100 cebulionów nie wygrałeś?': ''}
                {currentQuestionIndex > 0 && currentQuestionIndex < 8 ? `Wygrałeś ${prizes[currentQuestionIndex].number}usd gratki ` : ''}
                {currentQuestionIndex > 7 && currentQuestionIndex < 10 ? `Wygrałeś ${prizes[currentQuestionIndex].number}usd tu sie zaczynają poważne pieniądze` : ''}
                {currentQuestionIndex > 9 ? ` ${prizes[currentQuestionIndex].number}usd no dobra teraz to możesz nawet przegrać za tyle to ułożysz se życie na nowo ` : ''}
            </p>
            <button onClick={useResetGame}>Ja chce jeszcze raz!</button>
        </div>
    )
}

export default GameOverNotification