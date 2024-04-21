import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Importing images
import AchievementToast from '../Achievement/Achievement.js';
import PcCaseIntroduction from './PcCaseTitle.js';
import PcCaseDescription from './PcCaseDescription.js';
import PcCaseTypes from './PcCaseTypes.js';
import PcCaseFeatures from './PcCaseFeatures.js';
import PcCaseComponents from './PcCaseComponents.js';
import Footer from '../Footer/Footer';
import PcCaseImage from '../../assets/images/PCCASE.webp';
import PcCaseImage2 from '../../assets/images/PCCASE2.webp';
import './PcCasePage.scss';

const PcCasePage = ({ unlockNextComponent }) => {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const navigate = useNavigate();

    // Achievements
    useEffect(() => {
        const nextComponentName = unlockNextComponent('pc-case');
        if (nextComponentName) {
            setToastMessage(`Achievement Unlocked: ${nextComponentName}!`);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        }
    }, [unlockNextComponent]);
    // Navigation functions
    const handleGoHome = () => navigate('/main-page');
    const handleContinue = () => navigate('/motherboard');

    return (
        <div className={`pc-case-page ${showToast ? 'is-active' : ''}`}>
            {/* Introduction section  */}
            <PcCaseIntroduction />
            {/* Parallax background section */}
            <section className="parallax" style={{ backgroundImage: `url(${PcCaseImage})` }}, //position: 'relative'
            </section>
            {/* Description section */}
            <PcCaseDescription />
            {/* Second parallax background section */}
            <section className="parallax" style={{ backgroundImage: `url(${PcCaseImage2})` }}>
            </section>
            {/* Types section*/}
            <PcCaseTypes />
            {/* Third parallax background section */}
            <section className="parallax" style={{ backgroundImage: `url(${PcCaseImage})` }}>
            </section>
            {/* Features section */}
            <PcCaseFeatures />
            {/* Fourth parallax background section */}
            <section className="parallax" style={{ backgroundImage: `url(${PcCaseImage})` }}>
            </section>
            {/* Components section*/}
            <PcCaseComponents />
            {/* Navigation buttons */}
            <div className="navigation-buttons">
                <button onClick={handleGoHome}>View progress</button>
                <button onClick={handleContinue}>Continue</button>
            </div>
            {/* Conditional rendering for achievement toast */}
            {showToast && <AchievementToast show={showToast} message={toastMessage} />} 
            {/* Footer component */}
            <Footer />
        </div>
    );
};

export default PcCasePage;
