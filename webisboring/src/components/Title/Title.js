// React
import React from 'react';
// Styling
import './Style.scss';
// Title component
const Title = ({ text, center }) => { 
  const titleClass = center ? 'title' : '';
  return (
    <h1 className={titleClass}>{text}</h1>
  );
};

export default Title; 
