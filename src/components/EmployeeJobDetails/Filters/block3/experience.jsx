import React, { useState } from 'react';
import "./exp.css"

const Experience = () => {
 
  const [scrollValue, setScrollValue] = useState(1);

  
  const handleScroll = (event) => {
    setScrollValue(Number(event.target.value)); 
  };

  return (
    <div className="container">
     
      <input
        type="range"
        min="1"
        max="5"
        value={scrollValue}
        onChange={handleScroll}
        className="scroll-bar"
      />
      
     
      <div className="numbers">
        {
        [1, 2, 3, 4, 5].map((num)=>{

            if(num===5)
            {
                return(

                    <div
                    key={num}
                    className={`number ${scrollValue === num ? 'highlight' : ''}`}
                >
                    {num}{">"}
            </div>
                )
            }
            return(
                <div
                    key={num}
                    className={`number ${scrollValue === num ? 'highlight' : ''}`}
                >
                    {num}
               </div>
            )
        })
        
        }
      </div>
    </div>
  );
};

export default Experience;
