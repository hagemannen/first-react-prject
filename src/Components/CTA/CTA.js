import React from 'react'
import './CTA.css'
import { Button } from '../Buttons/Button'

const SIZES = ['one-col', 'two-col','three-col','four-col']

export const CTA = ({
CTAsize,
icon,
iconAlt,
iconLabel,
header,
text,
buttonPath,
buttonText}) => {
	const CheckCTASize = SIZES.includes(CTAsize) ? CTAsize : SIZES[0];
  return (
    <>
			<div className={`CTA ${CheckCTASize}`}>
				<div className='CTA-icon'>
					<img src={icon} alt={iconAlt}/>
					<span>{iconLabel}</span>
				</div>
				<h2 className='CTA-header'>{header}</h2>
				<span className='CTA-text'>{text}</span>
				<Button path={buttonPath} buttonStyle='btn--fill'>
					<span>{buttonText}</span>
				</Button>
			</div>
    </>
  )
};
 