import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AchievementToast from '../Achievement/Achievement';
import Title from './MotherboardTitle';
import MotherboardComponents from './MotherboardComponents'; 
import MotherboardTypes from './MotherboardTypes';
import MotherboardFeatures from './MotherboardFeatures';
import PcCaseImage from '../../assets/images/PCCASE.webp';
import Footer from '../Footer/Footer';

import './Motherboard.scss'; // Importing the styles

const MotherboardPage = ({ unlockNextComponent }) => {
    // State variables to manage the display of achievement toast
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    
    // Hook to trigger an effect after the component has rendered
    useEffect(() => {
        // Ensure the window scrolls to the top on page load
       window.scrollTo(0, 0);
        // Call the unlockNextComponent function to check if the motherboard is unlocked
        const nextComponentName = unlockNextComponent('motherboard');
        if (nextComponentName) {
            // If the motherboard is unlocked, set the toast message
            setToastMessage(`You have unlocked the next section: ${nextComponentName}!`);
            // Show the toast
            setShowToast(true);
            // Hide the toast after 3 seconds
             setTimeout(() => setShowToast(false), 3000);
        }
    }, [unlockNextComponent]); // Depend on unlockNextComponent function for changes

    // Function to navigate back to the main menu
    const handleGoHome = () => navigate('/main-page');
    
    // Function to continue to the CPU page
    const handleContinue = () => navigate('/cpu'); 

    // Hook to access the navigation functionality provided by React Router
    const navigate = useNavigate();

    return (
        <div className="motherboard-page">
            {/* Title component */}
            <Title  />
            {/* Parallax background section */}
            <section className="parallax" style={{ backgroundImage: `url(${PcCaseImage})`, position: 'relative' }}>
            </section>
            <MotherboardComponents />
                      {/* Parallax background section */}
                      <section className="parallax" style={{ backgroundImage: `url(${PcCaseImage})`, position: 'relative' }}>
            </section>
            {/* Types section */}
            <MotherboardTypes />
                      {/* Parallax background section */}
                      <section className="parallax" style={{ backgroundImage: `url(${PcCaseImage})`, position: 'relative' }}>
            </section>
            {/* Features section */}
            <MotherboardFeatures />
            <div className="navigation-buttons">
            <button onClick={handleGoHome}>View progress</button>
            <button onClick={handleContinue}>Continue</button>
            </div>
            {/* Renders Achievement to unlock next component*/}
            {showToast && <AchievementToast show={showToast} message={toastMessage} />}
            <Footer />
        </div>
    );
};

export default MotherboardPage;
