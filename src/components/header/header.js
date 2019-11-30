import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import './header.css'

export default class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isMenuOpen: false
        }
    }
    handleMenuBtnClick = () => {
        this.setState({isMenuOpen: !this.state.isMenuOpen});
    }

    render() {
        let {isMenuOpen} = this.state;
        isMenuOpen ? document.querySelector('html').style.overflow = 'hidden' : document.querySelector('html').style.overflow = 'visible';
        return (
            <div className="header">
                <div className="logo">
                    <Link to="/"><img src={require('../../assets/logo2.svg')} alt="Андрей Чеботарь" /></Link>
                </div>

                <nav className="headerNav">
                    <ul className="headerNavList">
                        <li className="headerNavItem"><Link to="/" className="nav-link active">О себе</Link></li>
                        <li className="headerNavItem"><Link to="/portfolio" className="nav-link">Портфолио</Link></li>
                        <li className="headerNavItem"><Link to="/contact" className="nav-link">Обратная связь</Link></li>
                    </ul>
                    <button className={`menuBtn ${isMenuOpen ? 'showBtn' : 'hideBtn'}`} onClick={() => this.handleMenuBtnClick()}><FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars}/></button>
                    <div className={`overlay ${isMenuOpen ? 'showMenu' : 'hideMenu'}`}>
                        <ul className={`mobileHeaderNavList ${isMenuOpen ? 'fadeIn' : 'fadeOut'}`}>
                            <li className="headerNavItem"><Link onClick={() => this.handleMenuBtnClick()} to="/" className="nav-link active">О себе</Link></li>
                            <li className="headerNavItem"><Link onClick={() => this.handleMenuBtnClick()} to="/portfolio" className="nav-link">Портфолио</Link></li>
                            <li className="headerNavItem"><Link onClick={() => this.handleMenuBtnClick()} to="/contact" className="nav-link">Обратная связь</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}