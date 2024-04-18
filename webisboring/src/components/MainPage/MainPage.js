import React from 'react';
import './MainPage.scss';
import { Link } from 'react-router-dom';
import componentsData from '../../data/componentsData';
import Title from '../Title/Title';

const MainPage = () => {
    return (
        // Main container for the MainPage component
        <section className="main-page">
            {/* Title component with centered text */}
            <Title center />

            {/* Grid container for displaying component cards */}
            <section className="components-grid">
                {componentsData.map((component) => (
                    // Each component is rendered as an article
                    <article
                        key={component.id} // Unique key for each component to help React identify which items have changed, are added, or are removed
                        className={`component-item ${component.unlocked ? '' : 'locked'} ${window.innerWidth > 768 ? 'parallax' : ''}`} // Class name determined by unlocked state and window width
                        style={{ backgroundImage: `url(${component.image})`, position: 'relative' }} // Inline style for background image and positioning
                    >
                        {/* Overlay div that changes appearance based on whether the component is unlocked */}
                        <div className="overlay" style={{ position: 'absolute', width: '100%', height: '100%', top: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: component.unlocked ? 'transparent' : 'rgba(0, 0, 0, 0.5)' }}>
                            {component.unlocked ? (
                                // If unlocked, display a clickable link with the component's name
                                <Link to={`/${component.id}`} className="overlay">{component.name}</Link>
                            ) : (
                                // If locked, display a lock icon
                                <div className="lock-icon"></div>
                            )}
                        </div>
                    </article>
                ))}
            </section>
        </section>
    );
};

export default MainPage;
