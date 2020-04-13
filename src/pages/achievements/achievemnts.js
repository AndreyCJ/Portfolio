import React, {Component} from 'react';
import Img from 'react-image';

import Hero from '../../components/hero';
import './achievements.css';

import infoznayka from '../../assets/certificates/infoznayka.jpg';
import kit from '../../assets/certificates/kit.jpg';

export default class Achievements extends Component {
    render() {
        return (
            <div>
                <Hero title={this.props.title} />
                <div className="page-content">
                    <section className="achievements">
                        <h1>Конкурсы</h1>
                        <p>Участвовал во Всероссийском конкурсе "КИТ - компьютеры, информатика, технологии", муждународном конкурсе по информатике и ИКТ "Инфознайка-2018".</p>
                        <div className="gallery">
                            <div className="flexbox">
                                <a href={infoznayka} rel="noopener noreferrer" target="_blank">
                                    <Img
                                        src={infoznayka}
                                        alt="TimetableApp"
                                        loader={
                                            <div className="sertificate_placeholder"></div>
                                        }
                                        style={{
                                            opacity: 1
                                        }}
                                    /> 
                                </a>
                                <a href={kit} rel="noopener noreferrer" target="_blank">
                                    <Img
                                        src={kit}
                                        alt="TimetableApp"
                                        loader={
                                            <div className="sertificate_placeholder"></div>
                                        }
                                        style={{
                                            opacity: 1
                                        }}
                                    /> 
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    };
};