import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faDiscord } from '@fortawesome/free-brands-svg-icons';
import '../assets/css/footor.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className='motto'>Made For Kings and Queens</p>
        <div className="keywords">
          <span>Classic Beverages</span>
          <span>Site Feedback</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    
        <div className="social-link"> 
         <span className='icons'><FontAwesomeIcon icon={faInstagram} /></span> 
         <span className='icons'><FontAwesomeIcon icon={faFacebook} /></span> 
         <span className='icons'><FontAwesomeIcon icon={faDiscord} /></span> 
        </div>    
    </footer>
  );

  
};

export default Footer;
