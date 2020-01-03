import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/logo2.svg';
import './header.css';

import MobileMenuToggleBtn from '../mobileMenu/mobileMenuToggleBtn';
import MobileMenu from '../mobileMenu/mobileMenu';
import Backdrop from '../backdrop/backdrop';

export default class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isMenuOpen: false,
            shadow: 'no-shadow'
        };
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
                                    return <li key={i} className='headerNavItem'><Link to={ path } className='nav-link'>{ title }</Link></li>
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