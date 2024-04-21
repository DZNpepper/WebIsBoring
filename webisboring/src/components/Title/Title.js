import React from 'react';
import './Title.scss';

const Title = ({ text, center }) => { 
  const titleClass = center ? 'title' : '';
  return (
    <h1 className={titleClass}>{text}</h1>
  );
};

export default Title;
