import React, { useEffect, useState } from 'react';
import AchievementToast from '../Achievement/Achievement';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for potential future routing needs

const PcCasePage = ({ unlockNextComponent }) => {
    const [showToast, setShowToast] = useState(false); // Tracks visibility of the toast
    const [toastMessage, setToastMessage] = useState(''); // Stores the toast message
    const navigate = useNavigate(); // Navigation hook, not currently used but available for future routing actions

   useEffect(() => {
        // Call unlockNextComponent to attempt to unlock the next component and retrieve its name
        const nextComponentName = unlockNextComponent('pc-case');

        // If there is a next component to unlock, configure and display the toast
        if (nextComponentName) {
            setToastMessage(`Achievement Unlocked: ${nextComponentName}!`); // Set the toast message
            setShowToast(true); // Show the toast
            setTimeout(() => setShowToast(false), 3000);
        }
    }, [navigate, unlockNextComponent]);

    return (
        <div>
            <h1>PC Case</h1>
            <p>Detailed information about the PC Case component.</p>
            {/* Render the AchievementToast component only if showToast is true */}
            {showToast && <AchievementToast show={showToast} message={toastMessage} />}
        </div>
    );
};

export default PcCasePage;