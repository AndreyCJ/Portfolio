import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './mobileMenu.css';


const MobileMenu = props => {
    let menuClasess = 'mobileMenu';
    if (props.show) {
        menuClasess = 'mobileMenu open';
    };
    // let about, portfolio = '';
    // const currentPageClass = '#4b5fd3';

    return (
        <div>
            <nav className={menuClasess}>
                <div className="mobileLogo">
                    <h1>Андрей Чеботарь</h1>
                    <h2>andreyoneup@gmail.com</h2>
                </div>
                <ul>
                {
                    props.headerLinks.map(({ title, path }, i) => {
                      // switch (props.history.location.pathname) {
                      //   case '/':
                      //     about = currentPageClass;
                      //     portfolio = '';
                      //     break;
                      //   case '/portfolio':
                      //     portfolio = currentPageClass;
                      //     about = '';
                      //     break;
                      //   default:
                      //     about = currentPageClass;
                      //     portfolio = '';
                      //     break;
                      // }
                        return <li key={i} className='headerNavItem__mobile'>
                          <Link
                            to={ path }
                            className="nav-link"
                            // style={path === '/' ? {color: about} : {color: portfolio}}
                          >
                            { title }
                          </Link>
                        </li>
                    })
                }
                </ul>
            </nav>
        </div>
    );   
};

export default withRouter(MobileMenu);