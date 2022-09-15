import React from "react";
import './BottomScroll.css'

export const BottomScroll = () => {

  const scrollToBottom = () => {
    window.scrollTo(0,
      document.body.scrollHeight)
  };

  return (
    <>
    <button onClick={scrollToBottom} >
      <div className='downCircle'></div>
      <img src='/icons/arrow-down.svg' alt='Scroll down arrow' className='downArrow'/>
    </button>
    </>
  )
};

export default BottomScroll;


