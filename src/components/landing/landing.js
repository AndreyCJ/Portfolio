import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faVk, faCodepen } from '@fortawesome/free-brands-svg-icons'

import './landing.css';

export default class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={require('../../assets/avatar3.jpg')} className="avatar" alt="avatar" />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>
                                HTML/CSS | JavaScript | React | NodeJS | Express | PHP | MySQL | MongoDB
                            </p>

                            <div className="social-links">
                                <a href="https://github.com/AndreyCJ" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                                <a href="https://vk.com/id147196025" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faVk} /></a>
                                <a href="https://codepen.io/AndreyCJ" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faCodepen} /></a>
                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}