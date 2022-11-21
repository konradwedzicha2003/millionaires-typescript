import React from "react";
import './Single-prize.scss'

export interface SinglePrizeProps {
    prizeAmount: string,
    index: number,
}

const SinglePrize = ({prizeAmount, index}: SinglePrizeProps) => {
    return (
        <li key={prizeAmount} className={`${(index + 1) % 5 === 0 ? 'Single-prize Single-prize__white-theme' : 'Single-prize'}`}>
            <p className='Single-prize__number'>{index + 1}</p>
            <span className='Single-prize__diamond'/>
            <span className='Single-prize__value'>{prizeAmount}</span>
            <span>usd</span>
        </li>
    )
}

export default SinglePrize