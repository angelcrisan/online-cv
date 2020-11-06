import React from 'react';
import {CvLogo} from "./logo";
import "./header.css";
import {Link} from 'react-router-dom';

export class Header extends React.Component {
    render () {
        return (
            <div className="header-container">
                <CvLogo/>
                <div className="header-menu">
                    <Link to="/">
                        <p>Homepage</p>
                    </Link>
                    <Link to="/education-page">
                        <p>Education</p>
                    </Link>
                    <Link to="/knowledge-page">
                        <p>Skills and projects</p>
                    </Link>
                    <Link to="/work-page">
                        <p>Work Experience</p>
                    </Link>
                    <Link to="/aboutme-page">
                        <p>About Me</p>
                    </Link>
                    <Link to="/contact-page">
                        <p>Contact</p>
                    </Link>
                </div>
            </div>
        )
    }
}