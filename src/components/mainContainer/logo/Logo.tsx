import React from "react";
import './Logo.scss'
import logo from '../../../assets/logo.png'

const Logo = () => {
    return (
        <div className="Logo">
            <img className="Logo__img" src={logo} alt="Logo milionerzy"/>
            <div className="Logo__animation-box"/>
        </div>
    )
}

export default Logo