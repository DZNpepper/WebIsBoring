import React, { useEffect, useState } from 'react';
import AchievementToast from '../Achievement/Achievement'; 

const PcCasePage = ({ unlocked }) => {
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (unlocked) {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000); // Show the toast for 3 seconds
        }
    }, [unlocked]);

    return (
        <div>
            <h1>PC Case</h1>
            <p>Detailed information about the PC Case component.</p>
            {showToast && <AchievementToast show={showToast} message="Achievement Unlocked: PC Case!" />}
        </div>
    );
};

export default PcCasePage;
