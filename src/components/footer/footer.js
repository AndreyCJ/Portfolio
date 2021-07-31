import React from 'react';

import SocialLinks from '../socialLinks/SocialLinks';

import './footer.css';

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="name">
        Андрей Чеботарь &copy; {new Date().getFullYear()}
      </div>
      <div className="contactInfo">
        <SocialLinks />
        <address>
          <a href="mailto:andrey.chebotar.me@gmail.com">
            andrey.chebotar.me@gmail.com
          </a>
        </address>
      </div>
    </div>
  );
};

export default Footer;
