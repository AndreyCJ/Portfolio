import React, {Component} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './projects.css';
import Hero from '../../components/hero';

import school_thumbnail from '../../assets/project_thumbnail/1school_thumbnail2.png';
import notesApp_thumbnail from '../../assets/project_thumbnail/notesApp_thumbnail2.png';
import portfolio_thumbnail from '../../assets/project_thumbnail/portfolio_thumbnail2.png';

import school_thumbnail__lowres from '../../assets/project_thumbnail/1school_thumbnail2-lowres.png';
import notesApp_thumbnail__lowres from '../../assets/project_thumbnail/notesApp_thumbnail2-lowres.png';
import  portfolio_thumbnail__lowres from '../../assets/project_thumbnail/portfolio_thumbnail2-lowres.png';

export default class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0
        };
    };

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Hero title={this.props.title}/>
                <div className="page-content">
                  <div className="content">
                    <div className="projects-wrapper">
                      <div className="project_item">
                        <div className="project_item__img">
                          <a href="https://1school-wptheme.000webhostapp.com/" target="_blank" rel="noopener noreferrer">
                          <LazyLoadImage
                            alt={school_thumbnail}
                            effect="blur"
                            height={"100%"}
                            src={school_thumbnail} // use normal <img> attributes as props
                            wrapperClassName="project_item__img"
                            width={"100%"}
                            placeholderSrc={school_thumbnail__lowres}
                          />
                            {/* <img style={{width: '100%'}} src={school_thumbnail} alt="1school Wordpress Theme"/> */}
                          </a>
                        </div>
                        <div className="project_item__description">
                            <h1>
                              <a href="https://1school-wptheme.000webhostapp.com/" target="_blank" rel="noopener noreferrer">
                                1shcool
                              </a>
                            </h1>
                          <p>
                            Wordpress тема с поддержкой настраемового слайдера, постов, поиска по сайту.
                          </p>
                          <div className="project_item__links">
                            <div className="link">
                              <a href="https://github.com/AndreyCJ/1school_WpTheme" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                            <div className="link">
                              <a href="https://1school-wptheme.000webhostapp.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="project_item">
                        <div className="project_item__img">
                          <a href="https://vanillajsnotesapp.000webhostapp.com/" target="_blank" rel="noopener noreferrer">
                            <LazyLoadImage
                              alt={notesApp_thumbnail}
                              effect="blur"
                              height={"100%"}
                              src={notesApp_thumbnail} // use normal <img> attributes as props
                              wrapperClassName="project_item__img"
                              width={"100%"}
                              placeholderSrc={notesApp_thumbnail__lowres}
                            />
                          </a>
                        </div>
                        <div className="project_item__description">
                          <h1>
                            <a href="https://vanillajsnotesapp.000webhostapp.com/" target="_blank" rel="noopener noreferrer">
                              NotesApp
                            </a>
                          </h1>
                          <p>
                            Приложение для заметок, разработанное по паттерну проектирования AJAX на чистом JavaScript, PHP, MySQL.
                          </p>
                          <div className="project_item__links">
                            <div className="link">
                              <a href="https://github.com/AndreyCJ/NotesApp" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                            <div className="link">
                              <a href="https://vanillajsnotesapp.000webhostapp.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="project_item">
                        <div className="project_item__img">
                          <a href="https://github.com/AndreyCJ/Portfolio" target="_blank" rel="noopener noreferrer">
                            <LazyLoadImage
                              alt={portfolio_thumbnail}
                              effect="blur"
                              height={"100%"}
                              src={portfolio_thumbnail} // use normal <img> attributes as props
                              wrapperClassName="project_item__img"
                              width={"100%"}
                              placeholderSrc={portfolio_thumbnail__lowres}
                            />
                          </a>
                        </div>
                        <div className="project_item__description">
                          <h1>
                            <a href="https://github.com/AndreyCJ/Portfolio" target="_blank" rel="noopener noreferrer">
                              Portfolio
                            </a>
                          </h1>
                          <p>
                            Сайт-портфолио, написанный с использованием React.js библиотеки.
                          </p>
                          <div className="project_item__links">
                            <div className="link">
                              <a href="https://github.com/AndreyCJ/Portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        );
    };
};