import React from "react";
import './GameWonNotification.scss'
import {useSelector} from "react-redux";
import {getIsGameWon} from "../../../../store/selectors/gameWon/gameWon";
import {useResetGame} from "../../../../hooks/useResetGame";

const GameWonNotification = () => {

    const isGameWon = useSelector(getIsGameWon)

    return (
        <div className={`${isGameWon ? 'game-won-notification--shown' : 'hidden'}`}>
            <p>
                Woooooo MILION no dobra to teraz można spokojnie lecieć za granice i kupić 1kg cukru
            </p>
            <button onClick={useResetGame}>To nie wystarczy... potrzebuje więcej!</button>
        </div>
    )
}

export default GameWonNotification