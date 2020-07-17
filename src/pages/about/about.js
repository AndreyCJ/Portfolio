import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faNodeJs, faPhp} from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Mysql } from '../../assets/brands/mysql-6.svg';
import { ReactComponent as MongoDB } from '../../assets/brands/mongodb-icon.svg';

import Blinker from '../../components/blinker';
import './about.css';

export default class About extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()  
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  scrollToBottom = () => {
    window.scrollTo(0, this.myRef.current.offsetTop);
  };

  render() {
    const { title, subTitle } = this.props; // location
    return (
      <div className="aboutPage">
        <div className="showcase">
          <div className="page-content page-content--big">
            <div className="landing">
              <div className="personal-info">
                <h2>{ title }</h2>
                <h1>{ subTitle }.<Blinker /></h1>
              </div>
            </div>
                            
            <div className="description">
              <div className="stack">
                <div className="technology">
                  <span>
                    {<FontAwesomeIcon icon={faJs} style={{color: '#F1DA4E'}} />}JavaScript
                  </span>
                </div>
                <div className="technology">
                  <span>
                    {<FontAwesomeIcon icon={faReact} style={{color: '#61DAFB'}} />}React
                  </span>   
                </div>
                <div className="technology"> 
                  <span>
                    {<FontAwesomeIcon icon={faNodeJs} style={{color: '#6DA25E'}} />}NodeJS
                  </span>
                </div>
                <div className="technology">
                  <span>
                    {<FontAwesomeIcon icon={faPhp} style={{color: '#5C739F'}} />}PHP
                  </span>
                </div>
                <div className="technology">
                  <span>
                    <Mysql />MySQL
                  </span>  
                </div>
                <div className="technology">
                  <span>
                    <MongoDB />MongoDB
                  </span>  
                </div>  
              </div>
            </div>
            <div className="link">
              <Link to='/portfolio'>Мои проекты</Link>
            </div>
          </div>
            <div className="link scroll-to" onClick={() => this.scrollToBottom()}>
              <button className="bounce">
                Подробнее{<FontAwesomeIcon icon={faAngleDoubleDown} style={{paddingTop: '8px', fontSize: '1.5rem'}}/>}
              </button>
            </div>
        </div>
        
        <div className="moreDetails">
          <div className="content" >
            <h1>О себе</h1>
            <span ref={this.myRef}>
              Front-end web-разработчик. Основной стек технологий, который я использую: JavaScript, React, NodeJS, PHP, MySQL, MongoDB.
              Уверенное знание JavaScript/ES6, а в частности ReactJS, методологии БЭМ, HTML/CSS адаптивной верстки.
              Умение работать с системой контроля версий Git.
              Есть опыт работы в созданнии сайтов с использованием CMS Wordpress, разработки REST API для web-приложений.
            </span>
            <span className="mt1">
              Вы можете связаться со мной по адресу <a className="bold" href="mailto:andreyoneup@gmail.com">andreyoneup@gmail.com</a>
            </span>
          </div>
        </div>

      </div>
    );
  };
};