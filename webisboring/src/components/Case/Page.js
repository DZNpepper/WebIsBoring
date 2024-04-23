// React
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import AchievementToast from '../Achievement/Achievement.js';
import Title from './Title.js';
import Footer from '../Footer/Footer.js';
// Sections
import Description from './Description.js';
import Types from './Types.js';
import Features from './Features.js';
import Components from './Components.js';
// Images
import Case1 from '../../assets/images/Case1.webp';
import Case2 from '../../assets/images/Case2.webp';
import Case3 from '../../assets/images/Case3.webp';
import Case4 from '../../assets/images/Case4.webp';
// Styling
import './Style.scss';

const Case = ({ unlockNextComponent }) => {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const navigate = useNavigate();
    // Achievements
    useEffect(() => {
        // Ensure the window scrolls to the top on page load
       window.scrollTo(0, 0);
        const nextComponentName = unlockNextComponent('pc-case');
        if (nextComponentName) {
            setToastMessage(`You have unlocked the next section: ${nextComponentName}!`);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        }
    }, [unlockNextComponent]);
    // Navigation functions
    const handleGoHome = () => navigate('/main-page');
    const handleContinue = () => navigate('/motherboard');

    return (
        <div className={`pc-case-page ${showToast ? 'is-active' : ''}`}>
            {/* Introduction */}
            <Title text="PC Case" />
            {/* Parallax section */}
            <section className="parallax" style={{ backgroundImage: `url(${Case1})`, position: 'relative' }}>
            </section>
            {/* Description section */}
            <Description />
            {/* Parallax section */}
            <section className="parallax" style={{ backgroundImage: `url(${Case2})`, position: 'relative' }}>
            </section>
            {/* Types section*/}
            <Types />
            {/* Parallax section */}
            <section className="parallax" style={{ backgroundImage: `url(${Case3})`, position: 'relative' }}>
            </section>
            {/* Features section */}
            <Features />
            {/* Parallax section */}
            <section className="parallax" style={{ backgroundImage: `url(${Case4})`, position: 'relative' }}>
            </section>
            {/* Components section*/}
            <Components />
            {/* Navigation buttons */}
            <div className="navigation-buttons">
                <button onClick={handleGoHome}>View progress</button>
                <button onClick={handleContinue}>Continue</button>
            </div>
            {/* Rendering for Pop-up */}
            {showToast && <AchievementToast show={showToast} message={toastMessage} />} 
            {/* Footer component */}
            <Footer />
        </div>
    );
};

export default Case;
