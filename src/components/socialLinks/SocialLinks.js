import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './socialLinks.css';

const SocialLinks = props => {
    let labels;
    if (props.withLabels === true) {
        labels = {
            github: <span>{'Github'}</span>
        };
    } else {
        labels = '';
    }

    return (
        <div className="social">
            <a href="https://github.com/AndreyCJ" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} />{labels.github}</a>
        </div>
    );
};

export default SocialLinks;