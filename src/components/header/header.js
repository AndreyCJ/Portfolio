import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo2.svg';

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
                    <Link to="/"><Logo /></Link>
                </div>

                <nav className="headerNav">
                    <ul className="headerNavList">
                        {
                            this.props.headerLinks.map(({ title, path }, i) => {
                                return <li key={i} className='headerNavItem'><Link to={ path } className='nav-link'>{ title }</Link></li>
                            })
                        }
                    </ul>
                    <button className={`menuBtn ${isMenuOpen ? 'showBtn' : 'hideBtn'}`} onClick={() => this.handleMenuBtnClick()}><FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars}/></button>
                    <div className={`overlay ${isMenuOpen ? 'showMenu' : 'hideMenu'}`}>
                        <ul className={`mobileHeaderNavList ${isMenuOpen ? 'fadeIn' : 'fadeOut'}`}>
                            {
                                this.props.headerLinks.map(({ title, path }, i) => {
                                    return <li key={i} className='headerNavItem'><Link onClick={() => this.handleMenuBtnClick()} to={ path } className="nav-link active">{ title }</Link></li>
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}