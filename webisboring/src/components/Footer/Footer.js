//React
import React from 'react';
//Styling
import './Style.scss';
// Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Tobias Deane - The Web is boring <br></br> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
