import React from 'react'
import { Button } from '../Buttons/Button';
import './ContentTeaser.css'

const SIZES = ['one-col', 'two-col','three-col','four-col']
const HEADERSIZES = ['small', 'medium','large']

export const ContentTeaser = ({
	contentTeasersize,
	header,
    headerSize,
	text,
    buttonPath,
    buttonText
}) => {
	const CheckContentTeaserSize = SIZES.includes(contentTeasersize) ? contentTeasersize : SIZES[0];
    const CheckHeaderSize = HEADERSIZES.includes(headerSize) ? headerSize : HEADERSIZES[0];
  return (
		<div className= {`contentTeaser ${CheckContentTeaserSize}`}>
			<p className={`teaserHeader ${CheckHeaderSize}`}>{header}</p>
            <p className='teaserText'> {text}</p>
            <Button path={buttonPath} buttonStyle='btn--noFill'>
				<span>{buttonText}</span>
			</Button>
		</div>
    
	)
}