import React, { useEffect } from 'react';

import './projects.css';
import Hero from '../../components/hero';
import Img from 'react-image';

import school_thumbnail from '../../assets/project_thumbnail/1school_thumbnail2.png';
import notesApp_thumbnail from '../../assets/project_thumbnail/notesApp_thumbnail2.png';
import portfolio_thumbnail from '../../assets/project_thumbnail/portfolio_thumbnail2.png';
import timetable_thumbnail from '../../assets/project_thumbnail/timetable_thumbnail2.png';
import loanCalculator_thumbnail from '../../assets/project_thumbnail/loan-calculator_thumbnail.png';

import school_thumbnail_overlay from '../../assets/project_thumbnail/1school_thumbnail2-overlay.png';
import notes_app_overlay from '../../assets/project_thumbnail/notesApp_thumbnail2-overlay.png';
import portfolio_overlay from '../../assets/project_thumbnail/portfolio_thumbnail2-overlay.png';
import timetable_overlay from '../../assets/project_thumbnail/timetable_thumbnail2-overlay.png';
import loanCalculator_overlay from '../../assets/project_thumbnail/loan-calculator-overlay.png';

// Documentation
import tz_portfolio from '../../assets/documentation/tz_portfolio.pdf';
import tz_timetable from '../../assets/documentation/tz_timetable.pdf';
import rp_timetable from '../../assets/documentation/rp_timetable.pdf';
import trebovaniya_timetable from '../../assets/documentation/trebovaniya_timetable.pdf';
import tz_loanCalculator from '../../assets/documentation/tz_loan-calculator.pdf';

// Diagramms
import ganntDiagramm from '../../assets/diagrams/ganttDiagramm-thumb (1).png';
import variantDiagramm from '../../assets/diagrams/variantDiagramm.png (1).png';
import functionalScheme from '../../assets/diagrams/functionalScheme (1).png';
import diagrammClass from '../../assets/diagrams/diagrammClass-thumb.png';
import diagrammDeyat from '../../assets/diagrams/digrammDeyatelnosti-thumb.png';
import digrammPosl from '../../assets/diagrams/diagrammaPosledov-thumb.png';
import structureScheme from '../../assets/diagrams/structureScheme (2).png';

import ganntDiagramm_overlay from '../../assets/diagrams/ganttDiagramm.png';
import variantDiagramm_overlay from '../../assets/diagrams/variantDiagramm.png';
import functionalScheme_overlay from '../../assets/diagrams/functionalScheme.png';
import diagrammClass_overlay from '../../assets/diagrams/diagrammClass.png';
import diagrammDeyat_overlay from '../../assets/diagrams/digrammDeyatelnosti.png';
import digrammPosl_overlay from '../../assets/diagrams/diagrammaPosledov.png';
import structureScheme_overlay from '../../assets/diagrams/structureScheme_overlay.png';

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
                        Web-приложение для заметок, разработанное по паттерну проектирования AJAX на чистом JavaScript, PHP, MySQL.                        
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
                      <a href="https://github.com/AndreyCJ/College-Timetables" target="_blank" rel="noopener noreferrer">
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
                        <a href="https://github.com/AndreyCJ/College-Timetables" target="_blank" rel="noopener noreferrer">
                          Расписание колледжа
                        </a>
                      </h1>
                      <p>
                        Прогрессивное web-приложение для просмотра расписания занятий, звонов, замен.
                      </p>
                      <p>Документация:</p>
                      <ul>
                        <li><a href={tz_timetable} rel="noopener noreferrer" target="_blank">Техническое задание для web-приложения "Расписание колледжа"</a></li>
                        <li><a href={rp_timetable} rel="noopener noreferrer" target="_blank">Руководство пользователя для web-приложения "Расписание колледжа"</a></li>
                        <li><a href={trebovaniya_timetable} rel="noopener noreferrer" target="_blank">Требования заказчика для web-приложения "Расписание колледжа"</a></li>
                      </ul>
                      <div className="gallery gallery-digramms">
                        <p>Для web-приложения "Расписание колледжа" были разработанны следующие диаграммы и схемы:</p>
                        <ul>
                          <li><a href={ganntDiagramm} rel="noopener noreferrer" target="_blank">Диаграмма Гантта</a></li>
                          <li><a href={variantDiagramm} rel="noopener noreferrer" target="_blank">Диаграмма вариантов использования</a></li>
                          <li><a href={functionalScheme} rel="noopener noreferrer" target="_blank">Функциональная схема</a></li>
                          <li><a href={diagrammDeyat} rel="noopener noreferrer" target="_blank">Диаграмма деятельности приложения</a></li>
                          <li><a href={diagrammClass} rel="noopener noreferrer" target="_blank">Диаграмма классов</a></li>
                          <li><a href={digrammPosl} rel="noopener noreferrer" target="_blank">Диаграмма последовательности</a></li>
                          <li><a href={structureScheme} rel="noopener noreferrer" target="_blank">Структурная схема</a></li>
                        </ul>
                        <a href={ganntDiagramm} rel="noopener noreferrer" target="_blank">
                          <Img
                              src={ganntDiagramm}
                              alt="TimetableApp"
                              loader={
                                <img src={ganntDiagramm_overlay} alt="TimetableApp"/>
                              }
                              style={{
                                opacity: 1,
                                marginBottom: "16px"
                              }}
                            /> 
                        </a>
                          <div className="flexbox">
                            <a href={variantDiagramm} rel="noopener noreferrer" target="_blank">
                              <Img
                                  src={variantDiagramm}
                                  alt="TimetableApp"
                                  loader={
                                    <img src={variantDiagramm_overlay} alt="TimetableApp"/>
                                  }
                                  style={{
                                    opacity: 1,
                                    marginTop: "2px",
                                    marginBottom: "2px",
                                    
                                  }}
                                /> 
                            </a>
                            <a href={functionalScheme} rel="noopener noreferrer" target="_blank">
                              <Img
                                  src={functionalScheme}
                                  alt="TimetableApp"
                                  loader={
                                    <img src={functionalScheme_overlay} alt="TimetableApp"/>
                                  }
                                  style={{
                                    opacity: 1,
                                    marginTop: "2px",
                                    marginBottom: "2px",
                                    
                                  }}
                                /> 
                            </a>
                            <a href={diagrammDeyat} rel="noopener noreferrer" target="_blank">
                              <Img
                                  src={diagrammDeyat}
                                  alt="TimetableApp"
                                  loader={
                                    <img src={diagrammDeyat_overlay} alt="TimetableApp"/>
                                  }
                                  style={{
                                    opacity: 1,
                                    marginTop: "2px",
                                    marginBottom: "2px",
                                    
                                  }}
                                /> 
                            </a>
                            <a href={diagrammClass} rel="noopener noreferrer" target="_blank">
                              <Img
                                  src={diagrammClass}
                                  alt="TimetableApp"
                                  loader={
                                    <img src={diagrammClass_overlay} alt="TimetableApp"/>
                                  }
                                  style={{
                                    opacity: 1,
                                    marginTop: "2px",
                                    marginBottom: "2px",
                                    
                                  }}
                                /> 
                            </a>
                            <a href={digrammPosl} rel="noopener noreferrer" target="_blank">
                              <Img
                                  src={digrammPosl}
                                  alt="TimetableApp"
                                  loader={
                                    <img src={digrammPosl_overlay} alt="TimetableApp"/>
                                  }
                                  style={{
                                    opacity: 1,
                                    marginTop: "2px",
                                    marginBottom: "2px",
                                    
                                  }}
                                /> 
                            </a>
                            <a href={structureScheme} rel="noopener noreferrer" target="_blank">
                              <Img
                                  src={structureScheme_overlay}
                                  alt="TimetableApp"
                                  loader={
                                    <img src={structureScheme_overlay} alt="TimetableApp"/>
                                  }
                                  style={{
                                    opacity: 1,
                                    marginTop: "2px",
                                    marginBottom: "2px",
                                    
                                  }}
                                /> 
                            </a>
                          </div>
                          
                      </div>
                      <div className="project_item__links">
                        <div className="link">
                          <a href="https://github.com/AndreyCJ/College-Timetables" target="_blank" rel="noopener noreferrer">GitHub</a>
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
                            src={loanCalculator_thumbnail}
                            alt="NotesApp"
                            loader={
                              <img
                                src={loanCalculator_overlay}
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
                        <a href="https://andreycj.github.io/loan-calculator2/" target="_blank" rel="noopener noreferrer">
                          Налоговый калькулятор
                        </a>
                      </h1>
                      <p>
                        Web-приложение "Налоговый калькулятор" предназначено для расчета величины налога на доходы физических лиц (НДФД) за 1 месяц.                        
                      </p>
                      <p>Документация:</p>
                      <ul>
                        <li><a href={tz_loanCalculator} rel="noopener noreferrer" target="_blank">Техническое задание для web-приложения "Налоговый калькулятор"</a></li>
                      </ul>
                      <div className="project_item__links">
                        <div className="link">
                          <a href="https://github.com/AndreyCJ/loan-calculator2" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                        <div className="link">
                          <a href="https://andreycj.github.io/loan-calculator2/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                      </div>
                    </div>
                  </div>
                
                <div className="project_item">
                  <div className="project_item__img">
                    <a href="https://github.com/AndreyCJ/Portfolio" target="_blank" rel="noopener noreferrer">
                      
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
                    <p>Документация:</p>
                    <ul>
                      <li><a href={tz_portfolio} rel="noopener noreferrer" target="_blank">Техническое задание для сайта портфолио</a></li>
                    </ul>
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
