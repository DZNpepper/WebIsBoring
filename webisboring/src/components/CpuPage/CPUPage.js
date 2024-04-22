import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AchievementToast from '../Achievement/Achievement';

import Title from '../CpuPage/CPUTitle';
import CPUFeatures from './CPUFeatures';
import CPUDescription from './CPUDescription';
import CPUComponents from './CPUComponents';
import PcCaseImage from '../../assets/images/PCCASE.webp';

import Footer from '../Footer/Footer';

import './CPUPage.scss';

const CPUPage = ({ unlockNextComponent }) => {
    // State variables to manage the display of achievement toast
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    
    // Hook to trigger an effect after the component has rendered
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
    
    // Function to continue to the CPU page
    const handleContinue = () => navigate('/gpu'); 

    // Hook to access the navigation functionality provided by React Router
    const navigate = useNavigate();

    return (
        <div className="cpu-page">
            <Title />
             {/* Parallax background section */}
            <section className="parallax" style={{ backgroundImage: `url(${PcCaseImage})`, position: 'relative' }}>
                </section>
                <CPUDescription />

 {/* Parallax background section */}
 <section className="parallax" style={{ backgroundImage: `url(${PcCaseImage})`, position: 'relative' }}>
                </section>
            {/* CPU components section */}
            <CPUComponents />

            {/* Parallax background section */}
            <section className="parallax" style={{ backgroundImage: `url(${PcCaseImage})`, position: 'relative' }}>
                </section>

            {/* Features of the CPU */}
            <CPUFeatures />

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

export default CPUPage;
