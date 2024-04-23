//React
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//Components
import AchievementToast from '../Achievement/Achievement';
import Title from './Title'; 
import Features from './Features'; 
import Description from './Description'; 
import Components from './Components'; 
import Footer from '../Footer/Footer';
// Styling 
import './Page.scss';
//Images
import Ram from '../../assets/images/Ram.webp';

const Page = ({ unlockNextComponent }) => {
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

   // 
   const handleGoHome = () => navigate('/main-page');
   const handleContinue = () => navigate('/psu'); 

   // Hook to access the navigation functionality provided by React Router
   const navigate = useNavigate();

    return (
        <div className="ram-page">
            <Title text="Random Access Memory (RAM)" />
            {/* Parallax background section */}
            <section className="parallax" style={{ backgroundImage: `url(${Ram})`, position: 'relative' }}>
            </section>
            <Description />
             {/* Parallax background section */}
             <section className="parallax" style={{ backgroundImage: `url(${Ram})`, position: 'relative' }}>
            </section>
            <Components />
             {/* Parallax background section */}
             <section className="parallax" style={{ backgroundImage: `url(${Ram})`, position: 'relative' }}>
            </section>
            <Features />
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

export default Page;
