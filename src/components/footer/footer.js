import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faVk, faCodepen } from '@fortawesome/free-brands-svg-icons';

import './footer.css';

class Footer extends Component {
    render () {
        return (
            <div className="footer">
                <div className="name">
                    Андрей Чеботарь &copy; 2019
                </div>
                <div className="social">
                    <a href="https://github.com/AndreyCJ" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://vk.com/id147196025" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faVk} /></a>
                    <a href="https://codepen.io/AndreyCJ" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faCodepen} /></a>
                </div>
            </div>
        );
    };
};

export default Footer;