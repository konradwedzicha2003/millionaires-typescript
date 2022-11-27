import React from "react";
import './Prizes.scss'
import SinglePrize from "./SinglePrize/SinglePrize";
import {useSelector} from "react-redux";
import {AllPrizes} from "../../../store/reducers/prizes/prizes";

type Prize = { number: number }

const Prizes = () => {

    const prizes = useSelector((state: AllPrizes) => state.prizes)

    return (
        <ol className='Prizes'>
            {prizes.map((el: Prize,index: number) => {
                return <SinglePrize
                    key={el.number}
                    prizeAmount={el.number}
                    index={index}/>
            })}
        </ol>
    )
}

export default Prizes