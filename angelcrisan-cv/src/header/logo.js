import React from 'react';
import SiteLogo from '../header/angel-logo.svg'
import '../header/logo.css'

export function CvLogo() {
    return (
        <div className="logo-container">
            <img src={SiteLogo} alt="site-logo" className="logo-pic"/>
            <p id="logo-text">Tudor-Angel Crisan</p>
        </div>
    )
}