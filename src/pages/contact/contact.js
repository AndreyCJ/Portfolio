import React, {Component} from 'react';

import Form from '../../components/form';
import './contact.css';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-box">
                <h1 className="hero">Обратная связь</h1>
                <Form />
            </div>
        );
    }
}