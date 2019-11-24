import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from '../../pages/landing';
import About from '../../pages/about';
import Contact from '../../pages/contact';
import Projects from '../../pages/projects';
import Resume from '../../pages/resume';

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
        </Switch>
    );
};

export default Main;