// React
import React from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import Title from '../Title/Title';
//Images
import Image from '../../assets/images/Ciruit.webp';
// Styling
import './Style.scss';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Title and Description */}
      <Title text="The Web is Boring" />
      <p>Discover the components of computers. <br /><br /><br /> Select the first component to learn how to build a PC.</p>

      {/* Scroll Down Indicator */}
      <div className="scroll-down">⟱ Swipe down ⟱</div>

      {/* Image */}
      <img src={Image} alt="Circuit board" className="landing-image" />

      {/* Content for entering the site */}
      <div className="enter-site">
        <p>Ready to explore how a computer is built? Click below to begin your journey!</p>
        {/* Button for navigation */}
        <button onClick={() => navigate('/main-page')}>Explore</button>
      </div>
    </div>
  );
};

export default Landing;
