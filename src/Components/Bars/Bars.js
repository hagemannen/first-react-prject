import React from 'react'
import  Bar from './Bar';
import './Bars.css'

const SIZES = ['one-col', 'two-col','three-col']


export const Bars = ({
	barSize,
    barHeader1,
    amountText1,
    amount1,
    barHeader2,
    amountText2,
    amount2,
    barHeader3,
    amountText3,
    amount3,
    barHeader4,
    amountText4,
    amount4

}) => {
	const CheckbarsSize = SIZES.includes(barSize) ? barSize : SIZES[0];
  return (
    <div className={`bars ${CheckbarsSize}`}>
        <Bar amount={amount1} barHeader={barHeader1} amountText={amountText1} />
        <Bar amount={amount2} barHeader={barHeader2} amountText={amountText2} />
        <Bar amount={amount3} barHeader={barHeader3} amountText={amountText3} />
        <Bar amount={amount4} barHeader={barHeader4} amountText={amountText4} />
    </div>
  )
}

export default Bars

