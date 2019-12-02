import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faNodeJs, faPhp} from '@fortawesome/free-brands-svg-icons'
import { ReactComponent as Mysql } from '../../assets/brands/mysql-6.svg';
import { ReactComponent as MongoDB } from '../../assets/brands/mongodb-icon.svg';

import './about.css';


export default class About extends Component {
    render() {
        const { title, subTitle, text, location } = this.props;
        console.log(location.pathname)
        return (
            <div className="page-content">
                <div className="landing">
                    <h2>{ subTitle }</h2>
                    <h1>{ title }</h1>  
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
        );
    }
}