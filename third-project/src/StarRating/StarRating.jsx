import React from 'react'
import { useState } from 'react';
import {FaStar} from 'react-icons/fa'
export default function StarRating({noOfStars=5}) {
    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);
    function handleClick(getIndex){
        setRating(getIndex);
    }
    function handleMouseEnter(getIndex){
        setHover(getIndex);
        
    }
    function handleMouseLeave(){
        setHover(rating);
    }
  return (
    
    <>
        <div className="flex gap-2"> {/* Stars ek row mein dikhane ke liye flex use kiya */}
            {Array.from({ length: noOfStars }).map((_, index) => {
                const starIndex = index + 1;
                return (
                    <FaStar
                        key={starIndex}
                        className={starIndex <= (hover || rating) ? 'text-[#fff700]' : 'text-black'}
                        onClick={() => handleClick(starIndex)}
                        onMouseEnter={() => handleMouseEnter(starIndex)}
                        onMouseLeave={handleMouseLeave}
                        size={40}
                        
                    />
                );
            })}
        </div>

        
    </>    
  )
}
