import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'


function Card(props) {
  return (
    <>
      <div className='card'>
        <Link className='card-link' to={props.path}>
            <div className='card-img-wrapper'>
              <img className='card-img' alt='Travel' src={props.src}/>
            </div>
            <div className='card-content'>
              <div className='card-header-section'>
                <h3 className='card-header'>{props.header}</h3> 
                <img alt='CTA arrow' src='/Icons/CTA-arrow.svg' className='CTA'/>
              </div>
                <p className='card-text'>{props.text}</p>
            </div>
        </Link>
      </div>
    </>
  );
}

export default Card;