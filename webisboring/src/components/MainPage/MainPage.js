import React from 'react';
import './MainPage.scss'; // Import SCSS styles
import componentsData from '../../data/componentsData'; // Import componentsData
import Title from '../Title';

const MainPage = () => {
  return (
    // Main container section
    <section className="main-page">
      {/* Title */}
      <Title />
      {/* Components Grid */}
      <section className="components-grid">
        {/* Map through componentsData and render each component */}
        {componentsData.map((component) => (
          <article
            key={component.id}
            className={`component-item ${window.innerWidth > 768 ? 'parallax' : ''}`} // Apply parallax class conditionally
            style={{ backgroundImage: `url(${component.image})` }} // Set background image dynamically
          >
            {/* Overlay with component name */}
            <div className="overlay">
              <span className="component-name">{component.name}</span> {/* Display component name */}
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default MainPage;
