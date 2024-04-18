import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Tobias Deane - The Web is boring . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;