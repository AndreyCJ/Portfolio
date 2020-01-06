import React from 'react';

import './projects.css';
import Hero from '../../components/hero';
import LazyImage from '../../components/lazyImage';

import school_thumbnail from '../../assets/project_thumbnail/1school_thumbnail2.png';
import notesApp_thumbnail from '../../assets/project_thumbnail/notesApp_thumbnail2.png';
import portfolio_thumbnail from '../../assets/project_thumbnail/portfolio_thumbnail2.png';

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
                      <LazyImage src={school_thumbnail} alt="Wordpress School theme"/>
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
                      <LazyImage src={notesApp_thumbnail} alt="NotesApp"/>
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
                      <LazyImage src={portfolio_thumbnail} alt="My Portfolio"/>
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