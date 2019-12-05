import React from 'react';

import SocialLinks from '../socialLinks/SocialLinks';

import './footer.css';

const Footer = props => {
    return (
        <div className="footer">
            <div className="name">
                Андрей Чеботарь &copy; 2019
            </div>
            <div className="contactInfo">
                <SocialLinks />
                <address>
                    <a href="mailto:andreyoneup@gmail.com">andreyoneup@gmail.com</a>
                </address>
            </div>
        </div>
    );
};

export default Footer;