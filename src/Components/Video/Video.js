import React from 'react'
import './Video.css'

const SIZES = ['one-col', 'two-col','three-col','four-col']

export const Video = ({
    Videosize,
    videoSrc
}) => {
	const CheckVideoSize = SIZES.includes(Videosize) ? Videosize : SIZES[0];
	return (
		<>
		<div className={`video ${CheckVideoSize}`}>
			<div className='videoContainer'>
				<div className='videoBorder'>
					<div className='videoCorners'>
						<video src={videoSrc} loop autoPlay muted  className='videoPlayer'/>
					</div>
				</div>
			</div>
			
		</div>
		</>
  )
};
