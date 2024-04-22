import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AchievementToast from '../Achievement/Achievement';
import Title from './PSUTitle'; // You'll create this component for the RAM page title
import PSUFeatures from './PSUFeatures'; // Explains the special features of RAM
import PSUDescription from './PSUDescription'; // Detailed introduction or description of RAM
import PSUComponents from './PSUComponents'; // Describes the parts of RAM
import './PSUPage.scss'; // Styling for the RAM page

import Footer from '../Footer/Footer';

import PcCaseImage from '../../assets/images/PCCASE.webp';

const PSUPage = ({ unlockNextComponent }) => {
   // State variables to manage the display of achievement toast
   const [showToast, setShowToast] = useState(false);
   const [toastMessage, setToastMessage] = useState('');
   
   // Hook to trigger an effect after the component has rendered
    useEffect(() => {
        // Ensure the window scrolls to the top on page load
        window.scrollTo(0, 0);
       // Call the unlockNextComponent function to check if the motherboard is unlocked
       const nextComponentName = unlockNextComponent('psu');
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
   const handleContinue = () => navigate('/hdd'); 

   // Hook to access the navigation functionality provided by React Router
   const navigate = useNavigate();

    return (
        <div className="psu-page">
            <Title />
             {/* Parallax background section */}
             <section className="parallax" style={{ backgroundImage: `url(${PcCaseImage})`, position: 'relative' }}>
                </section>
                <PSUDescription />
             {/* Parallax background section */}
             <section className="parallax" style={{ backgroundImage: `url(${PcCaseImage})`, position: 'relative' }}>
                </section>

            <PSUComponents />
             {/* Parallax background section */}
             <section className="parallax" style={{ backgroundImage: `url(${PcCaseImage})`, position: 'relative' }}>
                </section>

            <PSUFeatures />
            <div className="navigation-buttons">
                {/* Button to view progress */}
                <button onClick={handleGoHome}>Go Back to Main Menu</button>
                {/* Button to  CPU page */}
                <button onClick={handleContinue}>Continue to Hard drive</button>
            </div>
            {/* Renders Achievement to unlock next component*/}
            {showToast && <AchievementToast show={showToast} message={toastMessage} />}
            <Footer />
        </div>
    );
};

export default PSUPage;
