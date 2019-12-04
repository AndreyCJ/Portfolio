import React, {Component} from 'react';

import Form from '../../components/form';
import Hero from '../../components/hero';
import './contact.css';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Hero title={this.props.title} />
                <div className="page-content">
                    <div className="contact-box">
                        <Form title={this.props.title}/>
                    </div>
                </div>
            </div>
        );
    };
};