import React from 'react';
import './hero.css';

const Hero = (props) => {
    return (
        <div className="hero-container">
            <h1>{props.title}</h1>
        </div>
    );
}

export default Hero;