import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.scss';
import componentsData from '../../data/componentsData';

const MainPage = () => {
  return (
    <section className="main-page">
      {/* Heading */}
      <h2>Choose a Component to Explore:</h2>
      {/* Components Grid */}
      <section className="components-grid">
        {componentsData.map((component) => (
          <Link
            key={component.id}
            to={`/components/${component.id}`}
            className="component-item parallax"
            style={{ backgroundImage: `url(${component.image})` }}
          >
            {/* Overlay with component name */}
            <span className="overlay">
              <span className="component-name">{component.name}</span>
            </span>
          </Link>
        ))}
      </section>
    </section>
  );
};

export default MainPage;
