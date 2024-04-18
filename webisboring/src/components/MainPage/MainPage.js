import React, { useState } from 'react';
import './MainPage.scss';
import componentsData from '../../data/componentsData';
import Title from '../Title/Title';
import Achievement from '../Achievement/Achievement.js'; 

const MainPage = () => {
    const [unlockedIds, setUnlockedIds] = useState([componentsData[0].id]);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const handleComponentClick = (index) => {
        const nextIndex = index + 1;
        if (nextIndex < componentsData.length && !unlockedIds.includes(componentsData[nextIndex].id)) {
            setUnlockedIds(prevUnlockedIds => [...prevUnlockedIds, componentsData[nextIndex].id]);
            setToastMessage(`You've unlocked: ${componentsData[nextIndex].name}!`);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
        }
    };

    return (
        <section className="main-page">
            <Title center />
            <section className="components-grid">
                {componentsData.map((component, index) => (
                    <article
                        key={component.id}
                        className={`component-item ${unlockedIds.includes(component.id) ? '' : 'locked'} ${window.innerWidth > 768 ? 'parallax' : ''}`}
                        style={{ backgroundImage: `url(${component.image})`, position: 'relative' }}
                        onClick={() => handleComponentClick(index)}
                    >
                        <div className="overlay" style={{ position: 'absolute', width: '100%', height: '100%', top: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: unlockedIds.includes(component.id) ? 'transparent' : 'rgba(0, 0, 0, 0.5)' }}>
                            {unlockedIds.includes(component.id) ? (
                                <span className="overlay">{component.name}</span>
                            ) : (
                                <div className="lock-icon"></div>
                            )}
                        </div>
                    </article>
                ))}
            </section>
            {showToast && <Achievement show={showToast} message={toastMessage} onClose={() => setShowToast(false)} />}
        </section>
    );
};

export default MainPage;
