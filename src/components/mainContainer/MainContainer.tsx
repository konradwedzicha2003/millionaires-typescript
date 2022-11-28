import React from "react";
import Logo from "./logo/Logo";
import Question from "./question/Question";
import AnswersContainer from "./answersContainer/AnswersContainer";
import Lifebuoys from "./lifebuoys/Lifebuoys";
import Prizes from "./prizes/Prizes";
import './Main-container.scss'

const MainContainer = () => {
    return (
        <main className='main-container'>
            <section className='main-container__left'>
                <Logo/>
                <Question/>
                <AnswersContainer/>
            </section>
            <section className='main-container__right'>
                <Lifebuoys/>
                <Prizes/>
            </section>
        </main>
    )
}

export default MainContainer