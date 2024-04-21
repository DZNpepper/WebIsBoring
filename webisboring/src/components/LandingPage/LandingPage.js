import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import './LandingPage.scss';
import Title from '../Title/Title';

const LandingPage = () => {
  // Initialize the navigate function from react-router-dom
  const navigate = useNavigate();

  return (
    <div>
      <Parallax pages={2} style={{ top: '0', left: '0' }}>
        {/* First ParallaxLayer */}
        <ParallaxLayer offset={0} speed={0.5} className="landing-page">
          {/* Title and Description */}
          <Title />
          <p>Discover the components of computers. <br></br>  <br></br> <br></br> Select the first component to learn how to build a PC.</p>
          {/* Scroll Down Indicator */}
          <div className="scroll-down">⟱ Swipe down ⟱</div>
        </ParallaxLayer>
        {/* Second ParallaxLayer */}
        <ParallaxLayer offset={1} speed={0.5} className="landing-page">
          {/* Content for entering the site */}
          <div className="enter-site">
            <p>Ready to explore how a computer is built? Click below to begin your journey!</p>
            {/* Button for navigation */}
            <button onClick={() => navigate('/main-page')}>Explore</button>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default LandingPage;
