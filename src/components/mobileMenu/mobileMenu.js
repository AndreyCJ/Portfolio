import React from 'react';
import {Link} from 'react-router-dom';

import './mobileMenu.css';


const MobileMenu = props => {
    let menuClasess = 'mobileMenu';
    if (props.show) {
        menuClasess = 'mobileMenu open';
    };

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
                        return <li key={i} className='headerNavItem__mobile'><Link  to={ path } className="nav-link active">{ title }</Link></li>
                    })
                }
                </ul>
            </nav>
        </div>
    );   
};

export default MobileMenu;