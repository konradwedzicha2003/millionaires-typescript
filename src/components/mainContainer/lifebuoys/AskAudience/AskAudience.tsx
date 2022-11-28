import React from "react";
import avatar from "../../../../assets/avatar.png";
import './Ask-audience.scss'

const AskAudience = () => {
    return (
        <div className='ask-audience'>
            <button className='ask-audience__button'/>
            <img className="ask-audience__img ask-audience__img--first" src={avatar} alt="Ask the audience"/>
            <img className="ask-audience__img ask-audience__img--second" src={avatar} alt="Ask the audience"/>
            <img className="ask-audience__img ask-audience__img--third" src={avatar} alt="Ask the audience"/>
        </div>
    )
}

export default AskAudience