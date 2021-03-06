import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/logo2.svg';
import './header.css';

import MobileMenuToggleBtn from '../mobileMenu/mobileMenuToggleBtn';
import MobileMenu from '../mobileMenu/mobileMenu';
import Backdrop from '../backdrop/backdrop';

class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            shadow: 'no-shadow'
        };
    }

    handleMenuBtnClick = () => {
        this.setState(
            (prevState) => {
                return {isMenuOpen: !prevState.isMenuOpen};
            }
        );
    };

    handleBackdropClick = () => {
        this.setState({isMenuOpen: false});
    };

    render() {
        return (
            <div className={`header ${this.state.shadow}`}>
                <div className="logo">
                    <NavLink to="/"><Logo /></NavLink>
                </div>

                <div className="headerNav-container">
                    <nav>
                        <ul className="headerNavList">
                            {
                                this.props.headerLinks.map(({ title, path }, i) => {
                                    return <li key={i} className={`headerNavItem`}>
                                      <NavLink
                                        to={ path }
                                        className="nav-link"
                                        activeClassName="headerNavItem--selected"
                                        exact={true}
                                      >
                                        { title }
                                      </NavLink>
                                    </li>
                                })
                            }
                        </ul>
                    </nav>

                    <div className="mobileMenu-wrapper">
                        <MobileMenuToggleBtn click={this.handleMenuBtnClick}/>
                        <MobileMenu show={this.state.isMenuOpen} headerLinks={this.props.headerLinks} />
                        <Backdrop click={this.handleBackdropClick} show={this.state.isMenuOpen} />
                    </div>
                </div>
            </div>
        );
    };
};

export default withRouter(Header);