import React, { useState } from 'react';
import './MainPage.scss';
import componentsData from '../../data/componentsData';
import Title from '../Title/Title';
import Achievement from '../Achievement/Achievement.js'; 

const MainPage = () => {
    // State variables to manage unlocked components and toast message
    const [unlockedIds, setUnlockedIds] = useState([componentsData[0].id]);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    // Handler function for component click
    const handleComponentClick = (index) => {
        const nextIndex = index + 1;
        // Check if the next component is unlockable
        if (nextIndex < componentsData.length && !unlockedIds.includes(componentsData[nextIndex].id)) {
            // Update unlocked components and show achievement toast
            setUnlockedIds(prevUnlockedIds => [...prevUnlockedIds, componentsData[nextIndex].id]);
            setToastMessage(`You've unlocked: ${componentsData[nextIndex].name}!`);
            setShowToast(true);
            // Hide toast after 3 seconds
            setTimeout(() => setShowToast(false), 3000);
        }
    };

    return (
        <section className="main-page">
            <Title center />
            <section className="components-grid">
                {/* Map through componentsData to render component items */}
                {componentsData.map((component, index) => (
                    <article
                        key={component.id} // Unique key for each component
                        className={`component-item ${unlockedIds.includes(component.id) ? '' : 'locked'} ${window.innerWidth > 768 ? 'parallax' : ''}`}
                        style={{ backgroundImage: `url(${component.image})`, position: 'relative' }}
                        onClick={() => handleComponentClick(index)} // Handle click event
                    >
                        {/* Overlay for locked/unlocked state */}
                        <div className="overlay" style={{ position: 'absolute', width: '100%', height: '100%', top: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: unlockedIds.includes(component.id) ? 'transparent' : 'rgba(0, 0, 0, 0.5)' }}>
                            {unlockedIds.includes(component.id) ? (
                                <span className="overlay">{component.name}</span> // Display component name if unlocked
                            ) : (
                                <div className="lock-icon"></div> // Display lock icon if locked
                            )}
                        </div>
                    </article>
                ))}
            </section>
            {/* Render achievement toast if showToast state is true */}
            {showToast && <Achievement show={showToast} message={toastMessage} onClose={() => setShowToast(false)} />}
        </section>
    );
};

export default MainPage;
