import React from 'react'
import './Gif.css'

const SIZES = ['one-col', 'two-col','three-col','four-col']

export const Gif = ({
	Gifsize,
	src,
	alt
}) => {
	const CheckGifSize = SIZES.includes(Gifsize) ? Gifsize : SIZES[0];
  return (
		<div className= {`Gif ${CheckGifSize}`}>
			<div className='gifcontainer'>
				<img src={src} alt={alt}/>
			</div>
			
		</div>
    
	)
}
