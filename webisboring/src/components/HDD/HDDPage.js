import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AchievementToast from '../Achievement/Achievement';
import Title from './HDDTitle'; // You'll create this component for the HDD page title
import HDDFeatures from './HDDFeatures'; // Explains the special features of HDDs
import HDDDescription from './HDDDescription'; // Detailed introduction or description of HDD
import HDDComponents from './HDDComponents'; // Describes the parts of HDD
import './HDDPage.scss'; // Styling for the HDD page
import PcCaseImage from '../../assets/images/PCCASE.webp';
import Footer from '../Footer/Footer';

const HDDPage = ({ unlockNextComponent }) => {
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
   
   // Function to continue to the CPU page
   const handleContinue = () => navigate('/ssd'); 

   // Hook to access the navigation functionality provided by React Router
   const navigate = useNavigate();

    return (
        <div className="hdd-page">
            <Title />
  {/* Parallax background section */}
  <section className="parallax" style={{ backgroundImage: `url(${PcCaseImage})`, position: 'relative' }}>
                </section>
                <HDDDescription />
  {/* Parallax background section */}
  <section className="parallax" style={{ backgroundImage: `url(${PcCaseImage})`, position: 'relative' }}>
                </section>

            <HDDComponents />
  {/* Parallax background section */}
  <section className="parallax" style={{ backgroundImage: `url(${PcCaseImage})`, position: 'relative' }}>
                </section>

            <HDDFeatures />

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

export default HDDPage;
