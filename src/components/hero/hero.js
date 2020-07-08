import React from 'react';
import './hero.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Hero = (props) => {
    let subTitle;
    if (props.subTitle) {
        subTitle = <h2>{props.subTitle}</h2>
    }
    return (
        <div className="hero-container">
            <div className="hero-inner">
                <div className="title-container">
                    <div>
                      <h1>{props.title}</h1>
                      {subTitle}
                    </div>
                </div>
                <div className="socialLinks-container">
                    {props.children}
                    <div className="link link--hero-btn">
                    <a href="https://github.com/AndreyCJ/" target="_blank" rel="noopener noreferrer">
                      {<FontAwesomeIcon icon={faGithub} />} Github profile
                    </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;