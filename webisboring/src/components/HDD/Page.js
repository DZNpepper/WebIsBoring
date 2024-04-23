// React
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Component
import AchievementToast from '../Achievement/Achievement';
import Title from './Title'; 
import Footer from '../Footer/Footer';
// Sections
import Features from './Features'; 
import Description from './Description';
import Components from './Components'; 
// Images
import HddImage from '../../assets/images/Hdd.webp';
// Stying
import './Style.scss'; 

const HDD = ({ unlockNextComponent }) => {
   // State variables to manage the display of achievement toast
   const [showToast, setShowToast] = useState(false);
   const [toastMessage, setToastMessage] = useState('');
   // Hook to trigger an effect after the component has rendered
    useEffect(() => {
        // Ensure the window scrolls to the top on page load
        window.scrollTo(0, 0);
       // Call the unlockNextComponent function to check if the motherboard is unlocked
       const nextComponentName = unlockNextComponent('hdd');
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
   // Function to continue to the next page
   const handleContinue = () => navigate('/ssd'); 
   // Hook to access the navigation
   const navigate = useNavigate();
    return (
        <div className="hdd-page">
            <Title />
            {/* Parallax section */}
            <section className="parallax" style={{ backgroundImage: `url(${HddImage})`, position: 'relative' }}>
            </section>
            <Description />
            {/* Parallax section */}
            <section className="parallax" style={{ backgroundImage: `url(${HddImage})`, position: 'relative' }}>
            </section>
            <Components />
            {/* Parallax section */}
            <section className="parallax" style={{ backgroundImage: `url(${HddImage})`, position: 'relative' }}>
            </section>
            <Features />
             {/* Buttons */}
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

export default HDD;
