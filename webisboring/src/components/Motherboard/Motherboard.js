import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AchievementToast from '../Achievement/Achievement';
import Title from './MotherboardTitle';
import MotherboardComponents from './MotherboardComponents'; 
import MotherboardTypes from './MotherboardTypes';
import MotherboardFeatures from './MotherboardFeatures';

import './Motherboard.scss'; // Importing the stylesheet for styling

const MotherboardPage = ({ unlockNextComponent }) => {
    // State variables to manage the display of achievement toast
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    
    // Hook to trigger an effect after the component has rendered
    useEffect(() => {
        // Call the unlockNextComponent function to check if the motherboard is unlocked
        const nextComponentName = unlockNextComponent('motherboard');
        if (nextComponentName) {
            // If the motherboard is unlocked, set the toast message
            setToastMessage(`Achievement Unlocked: ${nextComponentName}!`);
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
            {/* Render the MotherboardIntroduction component */}
           <Title text="The Motherboard" />            {/* Render the MotherboardComponents component */}
            <MotherboardComponents />
            {/* Render the MotherboardTypes component */}
            <MotherboardTypes />
            {/* Render the MotherboardFeatures component */}
            <MotherboardFeatures />
            <div className="navigation-buttons">
                {/* Button to go back to the main menu */}
                <button onClick={handleGoHome}>Go Back to Main Menu</button>
                {/* Button to continue to the CPU page */}
                <button onClick={handleContinue}>Continue to CPU</button>
            </div>
            {/* Render the AchievementToast component if showToast is true */}
            {showToast && <AchievementToast show={showToast} message={toastMessage} />}
        </div>
    );
};

export default MotherboardPage;
