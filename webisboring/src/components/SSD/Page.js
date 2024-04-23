// React
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import AchievementToast from '../Achievement/Achievement';
import Title from './Title';
import Footer from '../Footer/Footer';
// Sections
import Description from './Description';
import Features from './Features';
import Component from './Component';
// Images
import SSD from '../../assets/images/SSD.webp'; 
// Styling
import './Page.scss';

const Page = ({ unlockNextComponent, componentType }) => {
    const [showToast, setShowToast] = useState(false); // State for managing toast visibility
    const [toastMessage, setToastMessage] = useState(''); // State for the toast message content
    const navigate = useNavigate(); // Hook for navigation
    // Effect to check if a component is unlocked and manage scrolling
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on component load
        const nextComponentName = unlockNextComponent(componentType); // Call unlock function
        if (nextComponentName) {
            setToastMessage(`You have completed learning about ${nextComponentName}!`); // Set the message for the toast
            setShowToast(true); // Show the toast
            setTimeout(() => setShowToast(false), 3000); // Hide the toast after 3 seconds
        }
    }, [unlockNextComponent, componentType]); // Dependencies for the effect
    // Main page button
    const handleGoHome = () => navigate('/main-page');
    return (
        <div className={`${componentType}-page`}>
            <Title text={`Learn About ${componentType}`} />
            <Description description={`Everything you need to know about ${componentType}.`} />
            {/* Parallax section */}
            <section className="parallax" style={{ backgroundImage: `url(${SSD})`, position: 'relative' }}>
            </section>
            <Features featuresList={['Speed', 'Efficiency', 'Cost']} />
            {/* Parallax section */}
            <section className="parallax" style={{ backgroundImage: `url(${SSD})`, position: 'relative' }}>
            </section>
            <Component />
            {/* Home Button */}
            <div className="navigation-buttons">
                <button onClick={handleGoHome}>Click if you want to restart</button>
            </div>
            {showToast && <AchievementToast show={showToast} message={toastMessage} />}
            <Footer />
        </div>
    );
};

export default Page;
