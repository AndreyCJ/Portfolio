import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/logo2.svg';
import './header.css';

import MobileMenuToggleBtn from '../mobileMenu/mobileMenuToggleBtn';
import MobileMenu from '../mobileMenu/mobileMenu';
import Backdrop from '../backdrop/backdrop';

class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isMenuOpen: false,
            shadow: 'no-shadow'
        };

        this.currentPageClass = '#4b5fd3';
        this.about = '';
        this.portfolio = '';
    };

    // handleScroll = () => {
    //   if (window.pageYOffset > 0) {
    //     this.setState({
    //       shadow: 'shadow'
    //     });
    //   } else {
    //     this.setState({
    //       shadow: 'no-shadow'
    //     });
    //   }
    // }

    // componentDidMount() {
    //   window.addEventListener('scroll', this.handleScroll);
    // }

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
                    <Link to="/"><Logo /></Link>
                </div>

                <div className="headerNav-container">
                    <nav>
                        <ul className="headerNavList">
                            {
                                this.props.headerLinks.map(({ title, path }, i) => {
                                    switch (this.props.history.location.pathname) {
                                      case '/':
                                        this.about = this.currentPageClass;
                                        this.portfolio = '';
                                        break;
                                      case '/portfolio':
                                        this.portfolio = this.currentPageClass;
                                        this.about = '';
                                        break;
                                      default:
                                        this.about = this.currentPageClass;
                                        this.portfolio = '';
                                        break;
                                    }
                                    return <li key={i} className={`headerNavItem ${this.currentPageClass}`}>
                                      <Link
                                        to={ path }
                                        className={`nav-link`}
                                        style={path === '/' ? {color: this.about} : {color: this.portfolio}}
                                      >
                                        { title }
                                      </Link>
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