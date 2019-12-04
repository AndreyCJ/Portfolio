import React, {Component} from 'react';
import './app.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
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
            pageData: [
                {
                    component: About,
                    title: 'О себе',
                    path: '/',
                    hero: 'Full Stack Веб-разработчик',
                    subTitle: 'Андрей Чеботарь',
                    text: 'Стек технологий, который я использую: '
                },
                {
                    component: Projects,
                    title: 'Портфолио',
                    path: '/portfolio',
                    hero: 'Мои работы',
                    subTitle: '',
                    text: ''
                },
                {
                    component: Contact,
                    title: 'Обратная связь',
                    path: '/contact',
                    hero: 'Оставьте ваше сообщение',
                    subTitle: '',
                    text: ''
                }
            ]
        };
    }

    render() {
        return (
            <Router>
                <div className="wrapper">
                    <Header headerLinks={this.state.pageData}/>                    
                        <div className="main">
                            {
                                this.state.pageData.map(({ component: C, path, hero, subTitle, text }, i) => {
                                    return  <Route
                                                exact
                                                key={i}
                                                path={path}
                                                render={(props) => < C {...props} title={hero} subTitle={subTitle} text={text}  />}
                                            />
                                })
                            }
                            
                        </div>
                    <Footer />
                </div>
            </Router>
        );
    };
};