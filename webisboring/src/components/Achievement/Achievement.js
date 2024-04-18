import React, { useEffect, useState } from 'react';
import './Achievement.scss'; 

const Achievement = ({ show, message, onClose }) => {
  const [shouldRender, setShouldRender] = useState(show);

  useEffect(() => {
    if (show) {
      setShouldRender(true);
    } else {
      setTimeout(() => setShouldRender(false), 600); // Match this delay with fade-out duration in CSS
    }
  }, [show]);

  return shouldRender ? (
    <div className={`achievement ${show ? 'fade-in' : 'fade-out'}`}>
      <span>{message}</span>
    </div>
  ) : null;
};

export default Achievement;
