import React from "react";
import './Bar.css'

const AMOUNTS =['a0','a10', 'a20', 'a30', 'a40', 'a50', 'a60','a70','a80','a90','a100']

export const Bar = ({
    amount,
    barHeader,
    amountText,
}) => {
    const CheckAmount = AMOUNTS.includes(amount) ? amount : AMOUNTS[0];
  return (
        <div className='bar'>
            <div className="textBox">
            <p className='barHeader'>{barHeader}</p>
            <p className='amountText'>{amountText}%</p>
            </div>
            <div className="emptyBar">
            <div className={`amount ${CheckAmount}`}></div>
            </div>
        </div>
  )
}

export default Bar