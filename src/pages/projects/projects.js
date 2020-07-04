import React, { useEffect } from 'react';

import './projects.css';
import Hero from '../../components/hero';
import Img from 'react-image';

import school_thumbnail from '../../assets/project_thumbnail/1school_thumbnail2.png';
import notesApp_thumbnail from '../../assets/project_thumbnail/notesApp_thumbnail2.png';
import timetable_thumbnail from '../../assets/project_thumbnail/timetable_thumbnail2.png';

import school_thumbnail_overlay from '../../assets/project_thumbnail/1school_thumbnail2-overlay.png';
import notes_app_overlay from '../../assets/project_thumbnail/notesApp_thumbnail2-overlay.png';
import timetable_overlay from '../../assets/project_thumbnail/timetable_thumbnail2-overlay.png';

const Projects = (props) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
      <div>
        <Hero title={props.title}/>
          <div className="page-content">
            <div className="content">
              <div className="projects-wrapper"> 

                  <div className="project_item">
                    <div className="project_item__img">
                      <a href="https://college-timetable.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <Img
                          src={timetable_thumbnail}
                          alt="TimetableApp"
                          loader={
                            <img src={timetable_overlay} alt="TimetableApp"/>
                          }
                          style={{
                            opacity: 1,
                            marginTop: "2px",
                            marginBottom: "2px"
                          }}
                        /> 
                      </a>
                    </div>
                    <div className="project_item__description">
                      <h1>
                        <a href="https://college-timetable.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                          Расписание занятий
                        </a>
                      </h1>
                      <p>
                        Прогрессивное web-приложение для просмотра расписания занятий, звонов, замен. Разработанное с использованием React, Node, Express, MongoDB.
                      </p>
                      <div className="project_item__links">
                        <div className="link">
                          <a href="https://github.com/AndreyCJ/college-timetable-app" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                        <div className="link">
                          <a href="https://college-timetable.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="project_item">
                    <div className="project_item__img">
                      <a href="https://1school-wptheme.000webhostapp.com/" target="_blank" rel="noopener noreferrer">
                        
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
                        
                      </a>
                    </div>
                    <div className="project_item__description">
                        <h1>
                          <a href="https://1school-wptheme.000webhostapp.com/" target="_blank" rel="noopener noreferrer">
                            1shcool
                          </a>
                        </h1>
                      <p>
                        Wordpress сайт с поддержкой настраемового слайдера, постов, поиска по сайту, виджетов.
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
                         
                      </a>
                    </div>
                    <div className="project_item__description">
                      <h1>
                        <a href="https://vanillajsnotesapp.000webhostapp.com/" target="_blank" rel="noopener noreferrer">
                          NotesApp
                        </a>
                      </h1>
                      <p>
                        SPA приложение для заметок, разработанное с применением техники асинхронного рендеринга AJAX на чистом JavaScript, PHP, MySQL.                        
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
      
              </div>
            </div>
        </div>
    </div>
  );
};

export default Projects;
