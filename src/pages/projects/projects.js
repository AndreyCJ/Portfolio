import React, {Component} from 'react';
import {Grid, Cell, Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

import './projects.css';
import Hero from '../../components/hero';

export default class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0
        };
    };

    toggleCategories() {
        switch (this.state.activeTab) {
            case 0: // React Page
                return (
                    <div className="projects-grid">
                        <Card shadow={2} style={{minWidth: '430', margin: '15px'}}>
                            <CardTitle style={{color: '#fff', height: '220px', background: `url(${require('../../assets/portfolio-thumbnail.png')}) center / cover`}}>
                                
                            </CardTitle>
                            <CardText>
                                Сайт-портфолио, написанный с использованием React.js библиотеки.
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/AndreyCJ/Portfolio" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
                                <Button disabled colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                );
            case 1: // Wordpress Page
                return (
                    <div className="projects-grid">
                        <Card shadow={2} style={{minWidth: '430', margin: '15px'}}>
                            <CardTitle style={{color: '#fff', height: '220px', background: `url(${require('../../assets/1school_thumbnail.png')}) center / cover`}}>
                                
                            </CardTitle>
                            <CardText>
                                Wordpress тема для сайта с поддержкой постов, поиска по страницам и постам, виджет слайдер разработанный для данной темы
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/AndreyCJ/1school_WpTheme" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
                                <a href="https://1school-wptheme.000webhostapp.com/" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                );
            case 2: // JavaScript Page
                return (
                    <div className="projects-grid">
                        <Card shadow={2} style={{minWidth: '430', margin: '15px'}}>
                            <CardTitle style={{color: '#fff', height: '220px', background: `url(${require('../../assets/notesApp_thumbnail.png')}) center / cover`}}>
                                
                            </CardTitle>
                            <CardText>
                                Приложение для заметок, разработанное по паттерну проектирования AJAX на чистом JavaScript, PHP, MySQL
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/AndreyCJ/NotesApp" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
                                <a href="https://vanillajsnotesapp.000webhostapp.com/" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                );
            case 3: // HTML/CSS Page
                return (
                    <div className="projects-grid">
                        <Card shadow={2} style={{minWidth: '430', margin: '15px'}}>
                            <CardTitle style={{color: '#fff', height: '220px', background: `url(${require('../../assets/html-css-1.jpg')}) center / cover`}}>
                                
                            </CardTitle>
                            <CardText>
                                Flexbox шаблон блог-сайта
                            </CardText>
                            <CardActions border>
                                <a href="https://codepen.io/AndreyCJ/pen/wxYgwp" rel="noopener noreferrer" target="_blank"><Button colored>Codepen</Button></a>
                                <a href="https://codepen.io/AndreyCJ/full/wxYgwp" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                );
            default:
                return this.setState({activeTab: 0});
        }
    }

    render() {
        return (
            <div>
                <Hero title={this.props.title}/>
                <div className="page-content">
                    <div className="category-tabs">
                        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                            <Tab>React</Tab>
                            <Tab>Wordpress</Tab>
                            <Tab>JavaScript</Tab>
                            <Tab>HTML/CSS</Tab>
                        </Tabs>

                        <Grid>
                            <Cell col={12}>
                                <div className="content">
                                    {this.toggleCategories()}
                                </div>
                            </Cell>
                        </Grid>              
                    </div>
                </div>
            </div>
        );
    };
};