import React from 'react';
import './hero.css';

const Hero = (props) => {
    return (
        <div className="hero-container">
            <div className="hero-inner">
                <h1>{props.title}</h1>
            </div>
        </div>
    );
};

export default Hero;