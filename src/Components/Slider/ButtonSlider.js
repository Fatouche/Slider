import React from 'react';
import leftArrow from './icons/left-arrow.svg';
import rightArrow from './icons/right-arrow.svg';

export default function ButtonSlider({ direction, moveSlide }) {
    return (
        <button 
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <img src={ direction === "next" ? rightArrow : leftArrow } alt='icon arrow' />
        </button>
    )
}
