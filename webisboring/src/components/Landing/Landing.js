import React from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import Title from '../Title/Title';
// Images
import Image from '../../assets/images/Case3.webp';
// Styling
import './Style.scss';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <Title text="The Web is Boring" />
      <p>Discover the components of computers. Select the first component to learn how to build a PC.</p>
      <img src={Image} alt="Computer Case" className="landing-image" />
      <div className="enter-site">
        <p>Ready to explore how a computer is built? Click below to begin your journey!</p>
        <button onClick={() => navigate('/main-page')}>Explore</button>
      </div>
    </div>
  );
};

export default Landing;
