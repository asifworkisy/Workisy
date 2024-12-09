import React, { useState } from 'react';
import "./percentage.css"

const Percentage = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const isHovered = (percent) => {
    return rangeValue === percent;
  };

  return (
    <div >
    
      <input 
        type="range" 
        min="0" 
        max="100" 
        step="10" 
        value={rangeValue} 
        onChange={(i)=>setRangeValue(parseInt(i.target.value, 10))} 
        className="range" 
      />
      
      <div className="percentage-labels">
        {[0,60, 70, 80, 90, 100].map((percent) => (
          <div 
            key={percent} 
            className={`label ${isHovered(percent) ? 'hovered' : ''}`}>
            {percent}%
          </div>
        ))}
      </div>
    </div>
  );
};

export default Percentage;
