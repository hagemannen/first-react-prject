import React from 'react'
import { ContentTeaser } from '../ContentTeaser/ContentTeaser'
import './Hero.css'

export const Hero = ({
	  header,
    headerSize,
	  text,
    buttonPath,
    buttonText,
    imageSrc,
    imageAlt
}) => {
  return (
    <>
      <div className='hero'>
        <div className='heroContainer'>
          <ContentTeaser className='teaser' header={header} headerSize={headerSize} text={text} buttonPath={buttonPath} buttonText={buttonText}/>
          <div className='imgContainer'>
            <img className='heroImg' src={imageSrc} alt={imageAlt}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero