import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faNodeJs, faPhp} from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as Mysql } from '../../assets/brands/mysql-6.svg';
import { ReactComponent as MongoDB } from '../../assets/brands/mongodb-icon.svg';

import SocialLinks from '../../components/socialLinks/SocialLinks';

import './about.css';


export default class About extends Component {
    render() {
        const { title, text } = this.props; // location
        return (
            <div className="aboutPage">
                    

                <div className="page-content">
                    <div className="landing">
                        <div className="personal-info">
                            <address>
                                <h2>{ title } </h2>
                                <a href="mailto:andreyoneup@gmail.com">andreyoneup@gmail.com</a>
                            </address>
                        </div>
                        <div className="about-socialLinks-container">
                            <SocialLinks withLabels={true}/>
                        </div>    
                    </div>

                                  
                    <div className="description">
                        <span>
                            { text }
                        </span>
                        <div className="stack">
                            <div className="technology">
                                <span>{<FontAwesomeIcon icon={faJs} style={{color: '#F1DA4E'}} />}JavaScript</span>
                            </div>
                            <div className="technology">
                                <span>{<FontAwesomeIcon icon={faReact} style={{color: '#61DAFB'}} />}React</span>   
                            </div>
                            <div className="technology"> 
                                <span>{<FontAwesomeIcon icon={faNodeJs} style={{color: '#6DA25E'}} />}NodeJS</span>
                            </div>
                            <div className="technology">
                                <span>{<FontAwesomeIcon icon={faPhp} style={{color: '#5C739F'}} />}PHP</span>
                            </div>
                            <div className="technology">
                                <span><Mysql />MySQL</span>  
                            </div>
                            <div className="technology">
                                <span><MongoDB />MongoDB</span>  
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};