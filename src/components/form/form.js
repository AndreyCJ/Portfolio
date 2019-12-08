import React, {Component} from 'react';
import {Textfield, Button} from 'react-mdl';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
// import axios from 'axios';  

import './form.css';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
            SnackbarClass: 'alert-success',
            SnackbarMessage: 'Сообщение отправлено',
            isSnackbarOpen: false
        };
    };

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
            disabled: true
        });

        fetch(`http://localhost:3030/api/email?name=${this.state.name}&email=${this.state.email}&message=${this.state.message}`)
            .catch(err => console.log(err));

        // axios.post('http://localhost:3030/api/email', this.state)
        //     .then(res => {
        //         if (res.data.success) {
        //             this.setState({
        //                 disabled: false,
        //                 emailSent: true
        //             });
        //         } else {
        //             this.setState({
        //                 disabled: false,
        //                 emailSent: false
        //             });
        //         }
        //     })
        //     .catch(err => {
        //         this.setState({
        //             disabled: false,
        //             emailSent: false
        //         });
        //     });

        this.handleShowSnackbar();
    };

    handleTimeoutSnackbar = () => {
        this.setState({
            isSnackbarOpen: false
        });
    };

    handleShowSnackbar = () => {
        this.setState((state) => {
            if (state.emailSent === true) {
                return {
                    SnackbarClass: 'alert-success',
                    isSnackbarOpen: true,
                    SnackbarMessage: 'Сообщение отправлено'
                };
            } else {
                return {
                    SnackbarClass: 'alert-error',
                    isSnackbarOpen: true,
                    SnackbarMessage: 'Сообщение не удалось отправить'
                };
            } 
        });
    };

    render() {
        return (
            <form className="contact-form" onSubmit={this.handleSubmit}>
                {/* <h1 className="hero">Обратная связь</h1> */}
                <Textfield
                    onChange={this.handleChange}
                    label="Имя"
                    floatingLabel
                    style={{width: '100%', boxSizing: 'border-box', color: '#fcfcfc'}}
                />
                <Textfield
                    onChange={this.handleChange}
                    label="Email"
                    floatingLabel
                    style={{width: '100%', boxSizing: 'border-box', color: '#fcfcfc'}}
                />
                <Textfield
                    onChange={this.handleChange}
                    label="Сообщение"
                    floatingLabel
                    maxRows={3}
                    style={{width: '100%', boxSizing: 'border-box', color: '#fcfcfc'}}
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
                    open={this.state.isSnackbarOpen}
                    onClose={this.handleTimeoutSnackbar}
                    autoHideDuration={2700}
                >
                    <SnackbarContent
                        classes={
                            { root: this.state.SnackbarClass }
                        }
                        aria-describedby="client-snackbar"
                        message={<span id="client-snackbar">{this.state.SnackbarMessage}</span>}
                    />
                </Snackbar>
 
        
            </form>
        );
    };
};