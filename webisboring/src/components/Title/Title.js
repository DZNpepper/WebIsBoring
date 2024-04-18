import React from 'react';
import './Title.scss'; // Import SCSS styles

const TitleComponent = ({ center }) => {
  const titleClass = center ? 'title-center' : '';
  return (
    <h1 className={titleClass}>The Web is Boring</h1>
  );
};


export default TitleComponent;
