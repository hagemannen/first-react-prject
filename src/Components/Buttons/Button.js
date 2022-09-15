import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--fill', 'btn--noFill'];

export const Button = ({
    path,
    children,
    type,
    onClick,
    buttonStyle,

}) => {
    const CheckButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    return(
        <div className='btn-container'>
            <Link to={path} className='btn' >
                <button className={`btn ${CheckButtonStyle}`}
                onClick={onClick}
                type={type}>
                    {children}
                </button>
            </Link>
        </div>
    )
};