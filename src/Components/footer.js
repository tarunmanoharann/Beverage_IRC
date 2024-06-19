import React from 'react';
import { FaXTwitter,FaFacebook,FaInstagram } from "react-icons/fa6";
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
         <span className='icons'><FaInstagram /></span> 
         <span className='icons'><FaFacebook /></span> 
         <span className='icons'><FaXTwitter /></span> 
        </div>    
    </footer>
  );

  
};

export default Footer;
