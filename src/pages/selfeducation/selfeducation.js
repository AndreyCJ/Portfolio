import React, {Component} from 'react';
import Img from 'react-image';

import Hero from '../../components/hero';
import './selfeducation.css';

import devRoadmap from '../../assets/diagrams/frontend.png';
// import devRoadmap_overlay from '../../assets/diagrams/frontend_overlay.jpg';

export default class Selfeducation extends Component {
    render() {
        return (
            <div>
                <Hero title={this.props.title} />
                <div className="page-content">
                    <section className="selfEducation">
                        <h1>Путь обучения</h1>
                        <p>Я обучаюсь по front-end developer-roadmap от <a href="https://roadmap.sh/frontend" target="_blank" rel="noopener noreferrer" >@kamranahmedse</a>.</p>
                        <a href={devRoadmap} rel="noopener noreferrer" target="_blank">
                            <Img
                                src={devRoadmap}
                                alt="TimetableApp"
                                loader={
                                    <div className="roadMap-placeholder"></div>
                                    // <img src={devRoadmap_overlay} alt="TimetableApp"/>
                                }
                                style={{
                                    opacity: 1
                                    // width: "100%"
                                }}
                            /> 
                        </a>
                        <h1>Курсы</h1>
                        <p>Прошел различные курсы по JavaScript, некоторые из них:</p>
                        <ul>
                            <li>JavaScript and ES6 Challenges - Do you know JavaScript</li>
                            <li>Data Structures using Javascript</li>
                            <li>Learn JavaScript: Full-Stack from Scratch</li>
                        </ul>
                        <p>Курсы по MERN стеку и MongoDB:</p>
                        <ul>
                            <li>React, NodeJS, Express & MongoDB - The MERN Fullstack Guide</li>
                            <li>MongoDB - The Complete Developer's Guide 2020</li>
                        </ul>
                        <p>Курсы по ReactJs:</p>
                        <ul>
                            <li>Библиотека - ReactJS</li>
                            <li>React + Redux - Профессиональная Разработка</li>
                        </ul>
                        <h1>Книги</h1>
                        <p>Книги по JavaScript и ReactJs:</p>
                        <ul>
                            <li>Eloquent JavaScript</li>
                            <li>The Road to learn React</li>
                        </ul>
                    </section>
                </div>
            </div>
        );
    };
};