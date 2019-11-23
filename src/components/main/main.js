import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from '../landing';
import About from '../about';
import Contact from '../contact';
import Projects from '../projects';
import Resume from '../resume';

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