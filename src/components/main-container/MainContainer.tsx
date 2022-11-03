import React from "react";
import Logo from "./logo/Logo";
import Question from "./question/Question";
import Answers from "./answers/Answers";
import Lifebuoys from "./lifebuoys/Lifebuoys";
import Prizes from "./prizes/Prizes";

const MainContainer = () => {
    return (
        <main className='main-container'>
            <section className='main-container__left'>
                <Logo/>
                <Question/>
                <Answers/>
            </section>
            <section className='main-container__right'>
                <Lifebuoys/>
                <Prizes/>
            </section>
        </main>
    )
}

export default MainContainer