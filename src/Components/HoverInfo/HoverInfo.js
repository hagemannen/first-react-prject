import React from 'react'
import './HoverInfo.css'

function HoverInfo() {
  return (
    <>
    <div className='hoverInfo'> 
        <div className='circle'></div>
        <img src='/icons/icon-earth.svg' alt='earth icon' className='earthIcon'/>
        <div className='infoContainer'>
            <p className='header'> <span className=' coloredWord'>lorem</span> ipsum dolar sit</p>
            <div className='info-1'>
                <span className='discription'>
                <img src='/Icons/icon-trees.svg' alt='tree'/>
                <p>Trees cut down this year </p>
                </span>
                <h3 className='counter'>152.124.156</h3>
            </div>
            <div className='info-2'>
                <span className='discription'>
                <img src='/Icons/icon-co2.svg' alt='tree'/>
                <p>CO<sub>2</sub> emissions this year </p>
                </span>
                <h3 className='counter'>254.241.245</h3>
            </div>
        </div>


    
    </div>
    </>

  )
}

export default HoverInfo