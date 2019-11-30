import React, {Component} from 'react';
import {Textfield, Button, Snackbar} from 'react-mdl';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
            isSnackbarSuccessActive: false,
            isSnackbarErrorActive: false
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            disabled: true,
            emailSent: true
        });

        this.handleShowSnackbar();
    };

    handleTimeoutSnackbar = () => {
        this.setState({
            isSnackbarSuccessActive: false,
            isSnackbarErrorActive: false
        });
    };

    handleShowSnackbar = () => {
        this.setState((state) => {
            if (state.emailSent === true) {
                return {isSnackbarSuccessActive: true}
            } else {
                return {isSnackbarErrorActive: true}
            } 
        });
    };

    render() {
        return (
            <form className="contact-form" onSubmit={this.handleSubmit}>
                <h1 className="hero">Обратная связь</h1>
                <Textfield
                    onChange={this.handleChange}
                    label="Имя"
                    floatingLabel
                    style={{width: '100%', maxWidth: '600px', boxSizing: 'border-box', color: '#fcfcfc'}}
                />
                <Textfield
                    onChange={this.handleChange}
                    label="Email"
                    floatingLabel
                    style={{width: '100%', maxWidth: '600px', boxSizing: 'border-box', color: '#fcfcfc'}}
                />
                <Textfield
                    onChange={this.handleChange}
                    label="Сообщение"
                    floatingLabel
                    maxRows={3}
                    style={{width: '100%', maxWidth: '600px', boxSizing: 'border-box', color: '#fcfcfc'}}
                />

                <Button
                    ripple
                    colored
                    raised
                    className="submit-form"
                    type="submit"
                    style={{alignSelf: 'flex-start', margin: '20px 0'}}
                    disabled={this.state.disabled}
                >
                    Отправить
                </Button>

                <Snackbar
                    className='alert-success'
                    active={this.state.isSnackbarSuccessActive}
                    onTimeout={this.handleTimeoutSnackbar}
                >
                    Сообщение отправлено
                </Snackbar>

                <Snackbar
                    className='alert-error'
                    active={this.state.isSnackbarErrorActive}
                    onTimeout={this.handleTimeoutSnackbar}
                >
                    Сообщение не удалось отправить
                </Snackbar>
                
 
            </form>
        );
    }
}