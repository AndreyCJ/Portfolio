import React, {Component} from 'react';
import './about.css';

export default class About extends Component {
    render() {
        const { title, subTitle, text } = this.props;
        return (
            <div>
                <div className="landing">
                    <h2>{ subTitle }</h2>
                    <h1>{ title }</h1>  
                </div>
                <div className="description">
                    <span>
                        { text }
                    </span>
                    <div>
                        JavaScript, React, NodeJS, PHP, MySQL, MongoDB
                    </div>
                </div>
            </div>
        );
    }
}