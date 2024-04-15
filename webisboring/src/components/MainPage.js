import React from 'react';
import componentsData from '../data/componentsData';

const MainPage = () => {
  return (
    <div className="main-page">
      <h2>Choose a Component to Explore:</h2>
      <ul>
        {componentsData.map((component, index) => (
          <li key={index}>
            <a href={`/component/${component.id}`}>{component.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
