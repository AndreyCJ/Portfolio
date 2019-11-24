import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import './projects.css';

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
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: `url(${require('../../assets/react-logo.png')}) center / cover`}}>
                                React Project #1
                            </CardTitle>
                            <CardText>
                                Est commodo esse commodo est id exercitation. Occaecat amet consectetur nisi laboris sit ut irure id.
                                Laboris ullamco aliquip deserunt dolore incididunt dolor ad enim veniam do. Sit excepteur esse in consectetur.
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: `url(${require('../../assets/react-logo.png')}) center / cover`}}>
                                React Project #1
                            </CardTitle>
                            <CardText>
                                Est commodo esse commodo est id exercitation. Occaecat amet consectetur nisi laboris sit ut irure id.
                                Laboris ullamco aliquip deserunt dolore incididunt dolor ad enim veniam do. Sit excepteur esse in consectetur.
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: `url(${require('../../assets/react-logo.png')}) center / cover`}}>
                                React Project #1
                            </CardTitle>
                            <CardText>
                                Est commodo esse commodo est id exercitation. Occaecat amet consectetur nisi laboris sit ut irure id.
                                Laboris ullamco aliquip deserunt dolore incididunt dolor ad enim veniam do. Sit excepteur esse in consectetur.
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                );
            case 1: // PHP Page
                return (
                    <h1>PHP</h1>
                );
            case 2: // JavaScript Page
                return (
                    <h1>JavaScript</h1>
                );
            case 3: // HTML/CSS Page
                return (
                    <h1>HTML/CSS</h1>
                );
            default:
                return this.setState({activeTab: 0});
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>PHP</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>HTML/CSS</Tab>
                </Tabs>

                <section className="project-grid">
                    <Grid className="project-grid">
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        );
    };
}