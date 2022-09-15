import React from 'react'
import Card from '../Components/Cards/Card';
import './Home.css'
import Quotes from '../Components/Quotes/Quotes';
import {CTA} from '../Components/CTA/CTA';
import { Gif } from '../Components/Gif/Gif';
import { ContentTeaser } from '../Components/ContentTeaser/ContentTeaser';
import Hero from '../Components/Hero/Hero';
import BottomScroll from '../Components/BottomScroll/BottomScroll';
import { Video } from '../Components/Video/Video';
import Bars from '../Components/Bars/Bars';


function Home() {


  return (
	<>
	<div className='home'>
		<div className='scroll'>
		<BottomScroll/>
        </div>
		<Hero
		header='Reinventing packaging'
		headerSize='large'
		text='Introducing the most sustainable material category for packaging on the market, with the lowest costs and carbon footprint to date'
		buttonPath='/Packing'
		buttonText='Read more'
		imageSrc='/Images/Cup.png'
		imageAlt='Refour cup'
		/>
		<div className='homeContainer container'>
			<ContentTeaser
			contentTeasersize='two-col'
			header='Putting our health and planet first'
			headerSize='small'
			text='Refour is more than packaging. We are the greenest solution on the planet, paving a path towards a better future. With the lowest cost and the best performing features, we put a sustainable material into reach of all corporations that want to act now to help restore and renew our planet. We are not paper, nor plastic, and we do not mix materials. We are 100% recyclable.'
			buttonPath='/Planet'
			buttonText='Read more'
			/>
			<Bars
			barSize='two-col'
			barHeader1 ='recyclable'
			amountText1='100'
			amount1='a100'
			barHeader2='lower carben footprint'
			amountText2='80'
			amount2='a80'
			barHeader3='lower cost'
			amountText3='60'
			amount3='a60'
			barHeader4='less material-user'
			amountText4='50'
			amount4='a50'
			
			/>
			<Video
				Videosize='four-col'
				videoSrc='/Videos/stockVideo.mp4'
			/>
			<Gif
			Gifsize='four-col'
			src='/Images/gif-placeholder.png'
			/>
			<div className='card'>
				<Card
					src='/Images/card-1.png'
					header='Sustainability'
					text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
					path='/Sustainability'
				/>
			</div>
			<div className='card'>
				<Card
					src='/Images/card-2.png'
					header='Material'
					text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
					path='/Material'
				/>
			</div>
			<div className='card'>
				<Card
					src='/Images/card-1.png'
					header='End Application'
					text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
					path='/EndApplication'
				/>
			</div>
			<div className='card'>
				<Card
					src='/Images/card-2.png'
					header='Cost'
					text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
					path='/Cost'
				/>
			</div>
			<div className='quotes'>
				<Quotes
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam purus, lacinia vitae tortor ut, mollis tincidunt urna.'
				source='Kildens navn'
				/>
			</div>
			<CTA 
			CTAsize='two-col'
			icon='/Icons/Config_1.svg'
			iconAlt='sustainability symbol'
			iconLabel='Sustainability'
			header='how much can your company save with Refour'
			buttonPath='/Sustainability'
			buttonText='read more'
			/>
				<CTA 
			CTAsize='two-col'
			icon='/Icons/Config_2.svg'
			iconAlt='Material symbol'
			iconLabel='Material'
			header='how much can your company save with Refour'
			buttonPath='/Material'
			buttonText='read more'
			/>
				<CTA 
			CTAsize='four-col'
			header='Do you have any questions'
			text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy'
			buttonPath='/Contact'
			buttonText='read more'
			/>
		</div>
	</div>
	</>
  )
}

export default Home
