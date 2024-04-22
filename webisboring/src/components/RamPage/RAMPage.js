import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AchievementToast from '../Achievement/Achievement';
import Title from './RAMTitle'; // You'll create this component for the RAM page title
import RAMFeatures from './RAMFeatures'; // Explains the special features of RAM
import RAMDescription from './RAMDescription'; // Detailed introduction or description of RAM
import RAMComponents from './RAMComponents'; // Describes the parts of RAM
import './RAMPage.scss'; // Styling for the RAM page
import Footer from '../Footer/Footer';

import PcCaseImage from '../../assets/images/PCCASE.webp';

const RAMPage = ({ unlockNextComponent }) => {
   // State variables to manage the display of achievement toast
   const [showToast, setShowToast] = useState(false);
   const [toastMessage, setToastMessage] = useState('');
   
   // Hook to trigger an effect after the component has rendered
    useEffect(() => {
        // Ensure the window scrolls to the top on page load
        window.scrollTo(0, 0);
       // Call the unlockNextComponent function to check if the motherboard is unlocked
       const nextComponentName = unlockNextComponent('ram');
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
   const handleContinue = () => navigate('/psu'); 

   // Hook to access the navigation functionality provided by React Router
   const navigate = useNavigate();

    return (
        <div className="ram-page">
            <Title text="Random Access Memory (RAM)" />
             {/* Parallax background section */}
             <section className="parallax" style={{ backgroundImage: `url(${PcCaseImage})`, position: 'relative' }}>
                </section>
                <RAMDescription />
             {/* Parallax background section */}
             <section className="parallax" style={{ backgroundImage: `url(${PcCaseImage})`, position: 'relative' }}>
                </section>

            <RAMComponents />
             {/* Parallax background section */}
             <section className="parallax" style={{ backgroundImage: `url(${PcCaseImage})`, position: 'relative' }}>
                </section>

            <RAMFeatures />
            <div className="navigation-buttons">
                {/* Button to view progress */}
                <button onClick={handleGoHome}>Go Back to Main Menu</button>
                {/* Button to  CPU page */}
                <button onClick={handleContinue}>Continue to Power Supply</button>
            </div>
            {/* Renders Achievement to unlock next component*/}
            {showToast && <AchievementToast show={showToast} message={toastMessage} />}
            <Footer />
        </div>
    );
};

export default RAMPage;
