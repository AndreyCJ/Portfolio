import React, {Component} from 'react';
import './app.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Main from '../main';
import Footer from '../footer';
import Header from '../header/header';

import About from '../../pages/about';
import Projects from '../../pages/projects';
import Contact from '../../pages/contact';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Andrey Chebotar',
            headerLinks: [
                {title: 'О себе', path: '/'},
                {title: 'Портфолио', path: '/projects'},
                {title: 'Обратная связь', path: '/contact'}
            ],
            about: {
                title: 'Full Stack Веб-разработчик',
                subTitle: 'Андрей Чеботарь',
                text: 'Стек технологий, который я использую: '
            },
            portfolio: {
                title: 'Мои работы'
            },
            contact: {
                title: 'Связаться со мной'
            }
        };
    }

    render() {
        return (
            <Router>
                <div className="wrapper">
                    <Header />                    
                        <div className="page-content">
                            <Route path="/" exact render={() => <About title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text} />} />
                            <Route path="/portfolio" render={() => <Projects title={this.state.portfolio.title} subTitle={this.state.portfolio.subTitle} text={this.state.portfolio.text} />} />
                            <Route path="/contact" render={() => <Contact title={this.state.contact.title} subTitle={this.state.contact.subTitle} text={this.state.contact.text} />} />
                        </div>
                    <Footer />
                </div>
            </Router>
        );
    }
};