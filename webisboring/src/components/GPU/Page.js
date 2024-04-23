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
//Images
import GPU from '../../assets/images/Gpu.webp';
import GPU2 from '../../assets/images/Gpu2.webp';
// Styling
import './Style.scss'; 

const Page = ({ unlockNextComponent }) => {
   // State variables to manage the display of achievement toast
   const [showToast, setShowToast] = useState(false);
   const [toastMessage, setToastMessage] = useState('');
   // Hook to trigger an effect after the component has rendered
    useEffect(() => {
       // Ensure the window scrolls to the top on page load
       window.scrollTo(0, 0);
       // Call the unlockNextComponent function to check if the motherboard is unlocked
       const nextComponentName = unlockNextComponent('gpu');
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
   const handleContinue = () => navigate('/ram'); 
   // Hook to access the navigation functionality provided by React Router
   const navigate = useNavigate();
    return (
        <div className="gpu-page">
            {/* Title  */}
            <Title />
             {/* Parallax background section */}
            <section className="parallax" style={{ backgroundImage: `url(${GPU})`, position: 'relative' }}>
            </section>
            <Description />
            {/* Parallax background section */}
            <section className="parallax" style={{ backgroundImage: `url(${GPU2})`, position: 'relative' }}>
            </section>
            <Components />
            <section className="parallax" style={{ backgroundImage: `url(${GPU2})`, position: 'relative' }}>
            </section>
            <Features />
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

export default Page;
