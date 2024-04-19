import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AchievementToast from '../Achievement/Achievement';
import PcCaseIntroduction from './PcCaseIntroduction.js';
import PcCaseTypes from './PcCaseTypes.js';
import PcCaseFeatures from './PcCaseFeatures.js';
import PcCaseComponents from './PcCaseComponents.js';

import './PcCasePage.scss';

// Component representing the page for PC case
const PcCasePage = ({ unlockNextComponent }) => {
    // State variables for showing achievement toast
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const navigate = useNavigate();

    // Effect hook to unlock the next component and show achievement toast
    useEffect(() => {
        const nextComponentName = unlockNextComponent('pc-case');
        if (nextComponentName) {
            setToastMessage(`Achievement Unlocked: ${nextComponentName}!`);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        }
    }, [navigate, unlockNextComponent]);

    // Event handler to navigate to the main page
    const handleGoHome = () => navigate('/main-page');
    
    // Event handler to continue to the motherboard page
    const handleContinue = () => navigate('/motherboard');

    // CSS classes for the page
    const pageClasses = `pc-case-page ${showToast ? 'is-active' : ''}`;

    return (
        <div className={pageClasses}>
            {/* Components for PC case introduction, types, features, and components */}
            <PcCaseIntroduction />
            <PcCaseTypes />
            <PcCaseFeatures />
            <PcCaseComponents />
            {/* Navigation buttons */}
            <div className="navigation-buttons">
                <button onClick={handleGoHome}>Go Back to Main Menu</button>
                <button onClick={handleContinue}>Continue to Motherboard</button>
            </div>
            {/* Achievement toast */}
            {showToast && <AchievementToast show={showToast} message={toastMessage} />}
        </div>
    );
};

export default PcCasePage;
