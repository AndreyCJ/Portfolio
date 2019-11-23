import React, {Component} from 'react';
import './app.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from '../main';
import {Link} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title="Title" scroll>
                        <Navigation>
                            <Link to="/resume">Резюме</Link>
                            <Link to="/about">О себе</Link>
                            <Link to="/projects">Проекты</Link>
                            <Link to="/contact">Связаться</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Title">
                        <Navigation>
                            <Link to="/resume">Резюме</Link>
                            <Link to="/about">О себе</Link>
                            <Link to="/projects">Проекты</Link>
                            <Link to="/contact">Связаться</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                </Layout>
            </div>
        );
    }
};