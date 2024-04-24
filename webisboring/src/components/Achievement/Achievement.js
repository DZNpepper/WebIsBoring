// React
import React, { useEffect, useState } from 'react';
// Styling
import './Style.scss'; 
// Achievement component
const Achievement = ({ show, message }) => {
  // State to manage whether the component should be rendered.
  const [shouldRender, setShouldRender] = useState(show);

  // Effect to handle the fade-in/out logic
  useEffect(() => {
    if (show) {
      // When show is true, render the component
      setShouldRender(true);
    } else {
      // When show is false, set a timeout to delay
      const timer = setTimeout(() => setShouldRender(false), 600);
      return () => clearTimeout(timer); // Clear the timer on component
    }
  }, [show]); 
  
  // Render the component depending on the shouldRender state.
  return shouldRender ? (
    <div className={`achievement ${show ? 'fade-in' : 'fade-out'}`}>
      <span>{message}</span>
    </div>
  ) : null;
}; 

export default Achievement;
