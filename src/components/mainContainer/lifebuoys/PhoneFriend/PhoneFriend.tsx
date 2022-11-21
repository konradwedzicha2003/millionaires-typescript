import React from "react";
import telephone from "../../../../assets/telephone.png";
import './Phone-friend.scss'

const PhoneFriend = () => {
    return (
        <div className='Phone-friend'>
            <button className='Phone-friend__button' />
            <img src={telephone} alt="Phone your friend"/>
        </div>
    )
}

export default PhoneFriend