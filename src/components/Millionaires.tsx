import React from "react";
import Logo from "./main-container/left-section/Logo/Logo";
import Question from "./main-container/left-section/Question/Question";
import Answers from "./main-container/left-section/Answers/Answers";
import Lifebuoys from "./main-container/right-section/Lifebuoys/Lifebuoys";
import Prizes from "./main-container/right-section/Prizes/Prizes";

const Millionaires = () => {
    return (
        <main className='main-container'>
            <section className='left-section'>
                <Logo/>
                <Question/>
                <Answers/>
            </section>
            <section className='right-section'>
                <Lifebuoys/>
                <Prizes/>
            </section>
        </main>
    )
}

export default Millionaires