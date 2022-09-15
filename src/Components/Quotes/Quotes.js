import React from 'react'
import './Quotes.css'

function Quotes(props) {
  return (
    <>
        <div className='quote'>
            <img src='/Icons/icon_quote.svg' alt='Quote icon' className='icon'/>
            <h3 className='text'>{props.text}</h3>
            <div className='source'>
                <img src='/Icons/quote-dash.svg' alt='quote indicator'/>
                <p>{props.source}</p>
            </div>
        </div>
    </>
  )
}

export default Quotes