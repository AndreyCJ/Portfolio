import React, { Component } from 'react';

import './form.css';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            SnackbarClass: 'alert',
            SnackbarMessage: 'Сообщение отправлено',
            isInputEmpty: true,
            showSnackbarClass: ''
        };
    };

    handleChange = (event) => {
        this.isInputEmpty(event);

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const templateID = 'template_zt3IY7cH';
        if (this.validateForm()) {
            this.sendFeedback(templateID, {
                message_html: this.state.message,
                from_name: this.state.name,
                reply_to: this.state.email
            });
            this.setState({
                disabled: true
            });
        } else {
            console.log('Неправильно заполненная форма');
            this.setState({
                SnackbarClass: 'error',
                showSnackbarClass: 'show',
                SnackbarMessage: 'Неправильно заполненная форма',
                disabled: true
            });
            setTimeout(() => {
                this.setState({showSnackbarClass: ''});
            }, 2900)
        }
    };

    validateForm = () => {
        const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (this.state.email.match(mailformat) && this.state.name !== '' && this.state.message !== '') {
            return true;
        } else {
            return false;
        }
    };

    sendFeedback = (templateId, variables) => {
        window.emailjs.send(
            'gmail', templateId,
            variables
            ).then(res => {
                this.handleShowSnackbar(true, 'Сообщение отправлено');
                console.log('Email successfully sent!')
            })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => {
                console.error('Oh well, you failed. Here some thoughts on the error that occured:', err)
                this.handleShowSnackbar(false, err);
            });
    };

    handleShowSnackbar = (success, message) => {
        if (success) {
            this.setState({SnackbarClass: 'success', showSnackbarClass: 'show'})
            setTimeout(() => {
                this.setState({showSnackbarClass: ''});
            }, 2900)
        } else {
            this.setState({SnackbarClass: 'error', showSnackbarClass: 'show', SnackbarMessage: message})
            setTimeout(() => {
                this.setState({showSnackbarClass: ''});
            }, 2900)
        }
    };

    isInputEmpty = (e) => {
        if (e.target.value !== '') {
            e.target.className = 'input-text js-input not-empty'
        } else {
            e.target.className = 'input-text js-input';
        }
    };

    render() {
        return (
            <div>
                <form className="contact-form row" onSubmit={this.handleSubmit}>
                    <div className="form-field col x-50">
                        <input
                            id="name"
                            name="name"
                            value={this.state.name}
                            className={`input-text js-input `}
                            onChange={this.handleChange}
                            type="text" required
                        />
                        <label className="label" name="name" >Имя</label>
                    </div>
                    <div className="form-field col x-50">
                        <input
                            id="email"
                            name="email"
                            value={this.state.email}
                            className={`input-text js-input `}
                            onChange={this.handleChange}
                            type="email" required
                        />
                        <label className="label" name="email">E-mail</label>
                    </div>
                    <div className="form-field col x-100">
                        <input
                            id="message"
                            name="message"
                            value={this.state.message}
                            className={`input-text js-input `}
                            onChange={this.handleChange}
                            type="text" required
                        />
                        <label className="label" name="message">Сообщение</label>
                    </div>
                    <div className="form-field col x-100 align-center">
                        <button className="submit-btn" type="submit" value="Отправить" disabled={this.state.disabled} onClick={this.handleSubmit} >Отправить</button>
                    </div>
                </form>
                <div className={`snackbar ${this.state.showSnackbarClass} ${this.state.SnackbarClass} `}>{this.state.SnackbarMessage}</div>
            </div>
        );
    };
};