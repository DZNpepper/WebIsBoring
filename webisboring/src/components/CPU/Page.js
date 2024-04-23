// React
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Sections
import AchievementToast from '../Achievement/Achievement';
import Title from './Title';
import Footer from '../Footer/Footer';
// Pages
import Features from './Features';
import Description from './Description';
import Components from './Components';
// Images 
import CpuImage from '../../assets/images/CPU.webp';
import CPU1 from '../../assets/images/CPU1.webp';
import CPU2 from '../../assets/images/CPU2.webp';
// Stying
import './Style.scss';

const CPU = ({ unlockNextComponent }) => {
    // Variables to manage the display of Pop-up 
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    // Hook to trigger an effect after rendering
    useEffect(() => {
        // Ensure the window scrolls to the top on page load
        window.scrollTo(0, 0);
        // Call the unlockNextComponent function to check if the motherboard is unlocked
        const nextComponentName = unlockNextComponent('cpu');
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
    const handleContinue = () => navigate('/gpu'); 
    // Hook to access the navigation functionality provided by React Router
    const navigate = useNavigate();
    return (
        <div className="cpu-page">
            <Title />
             {/* Parallax section */}
            <section className="parallax" style={{ backgroundImage: `url(${CpuImage})`, position: 'relative' }}>
            </section>
            <Description />
            {/* Parallax section */}
            <section className="parallax" style={{ backgroundImage: `url(${CPU1})`, position: 'relative' }}>
            </section>
            {/* CPU section */}
            <Components />
            {/* Parallax section */}
            <section className="parallax" style={{ backgroundImage: `url(${CPU2})`, position: 'relative' }}>
            </section>
            {/* CPU section*/}
            <Features />
            {/* Buttons*/}
            <div className="navigation-buttons">
            <button onClick={handleGoHome}>View progress</button>
            <button onClick={handleContinue}>Continue</button>
            </div>
            {/* Renders Achievement to unlock next component*/}
            {showToast && <AchievementToast show={showToast} message={toastMessage} />}
            {/* Footer*/}
            <Footer />
        </div>
    );
};

export default CPU;
