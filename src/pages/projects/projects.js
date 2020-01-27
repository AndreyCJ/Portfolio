import React from 'react';

import './projects.css';
import Hero from '../../components/hero';
import Img from 'react-image';
import VisibilitySensor from 'react-visibility-sensor';

import school_thumbnail from '../../assets/project_thumbnail/1school_thumbnail2.png';
import notesApp_thumbnail from '../../assets/project_thumbnail/notesApp_thumbnail2.png';
import portfolio_thumbnail from '../../assets/project_thumbnail/portfolio_thumbnail2.png';

import school_thumbnail_overlay from '../../assets/project_thumbnail/1school_thumbnail2-overlay.png';
import notes_app_overlay from '../../assets/project_thumbnail/notesApp_thumbnail2-overlay.png';
import portfolio_overlay from '../../assets/project_thumbnail/portfolio_thumbnail2-overlay.png';


const Projects = (props) => {
    return (
      <div>
        <Hero title={props.title}/>
          <div className="page-content">
            <div className="content">
              <div className="projects-wrapper">
                  <div className="project_item">
                    <div className="project_item__img">
                      <a href="https://1school-wptheme.000webhostapp.com/" target="_blank" rel="noopener noreferrer">
                        <VisibilitySensor>
                          <Img
                            alt="Wordpress School theme"
                            src={school_thumbnail}
                            loader={
                              <img
                                src={school_thumbnail_overlay}
                                alt="Wordpress School theme"
                                className={'loader'}
                                style={{
                                  opacity: 1,
                                  marginTop: "2px",
                                  marginBottom: "2px"
                                }}
                              />
                            }
                          />
                        </VisibilitySensor>
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
                        <VisibilitySensor>
                          <Img
                            src={notesApp_thumbnail}
                            alt="NotesApp"
                            loader={
                              <img
                                src={notes_app_overlay}
                                alt="Wordpress School theme"
                                className={'loader'}
                                style={{
                                  opacity: 1,
                                  marginTop: "2px",
                                  marginBottom: "2px"
                                }}
                              />
                            }
                          />
                        </VisibilitySensor> 
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
                {/* <VisibilitySensor>
                  <div className="project_item">
                    <div className="project_item__img">
                      <a href="https://vanillajsnotesapp.000webhostapp.com/" target="_blank" rel="noopener noreferrer">
                        <Img
                          src={notesApp_thumbnail}
                          alt="NotesApp"
                          loader={
                            <img src={notes_app_overlay} alt="Wordpress School theme"/>
                          }
                        /> 
                      </a>
                    </div>
                    <div className="project_item__description">
                      <h1>
                        <a href="https://vanillajsnotesapp.000webhostapp.com/" target="_blank" rel="noopener noreferrer">
                          Расписание колледжа
                        </a>
                      </h1>
                      <p>
                        Приложение для просмотра расписания занятий, звонов, замен в виде прогрессивного web-приложения. 
                      </p>
                      <div className="project_item__links">
                        <div className="link">
                          <a href="https://github.com/AndreyCJ/NotesApp" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </VisibilitySensor> */}
                <div className="project_item">
                  <div className="project_item__img">
                    <a href="https://github.com/AndreyCJ/Portfolio" target="_blank" rel="noopener noreferrer">
                      <VisibilitySensor>
                        <Img
                          src={portfolio_thumbnail}
                          alt="My Portfolio"
                          loader={
                            <img
                              src={portfolio_overlay}
                              alt="Wordpress School theme"
                              className={'loader'}
                              style={{
                                opacity: 1,
                                marginTop: "2px",
                                marginBottom: "2px"
                              }}
                            />
                          }
                        />
                      </VisibilitySensor>
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

export default Projects;
