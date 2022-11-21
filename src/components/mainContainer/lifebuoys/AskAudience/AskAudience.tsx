import React from "react";
import avatar from "../../../../assets/avatar.png";
import './Ask-audience.scss'

const AskAudience = () => {
    return (
        <div className='Ask-audience'>
            <button className='Ask-audience__button'/>
            <img className="Ask-audience__img Ask-audience__img--first" src={avatar} alt="Ask the audience"/>
            <img className="Ask-audience__img Ask-audience__img--second" src={avatar} alt="Ask the audience"/>
            <img className="Ask-audience__img Ask-audience__img--third" src={avatar} alt="Ask the audience"/>
        </div>
    )
}

export default AskAudience