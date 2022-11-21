import React from "react";
import './Prizes.scss'
import SinglePrize from "./SinglePrize/SinglePrize";
import {useSelector} from "react-redux";

const Prizes = () => {

    const prizes = useSelector((state: any) => state.prizes)

    return (
        <ol className='Prizes'>
            {prizes.map((el: any,index: number) => {
                return <SinglePrize prizeAmount={el.number} index={index}/>
            })}
        </ol>
    )
}

export default Prizes