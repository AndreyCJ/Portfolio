import React from 'react';
import './hero.css';

const Hero = (props) => {
    let subTitle;
    if (props.subTitle) {
        subTitle = <h2>{props.subTitle}</h2>
    }
    return (
        <div className="hero-container">
            <div className="hero-inner">
                <div className="title-container">
                    <h1>{props.title}</h1>
                    {subTitle}
                </div>
                <div className="socialLinks-container">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Hero;