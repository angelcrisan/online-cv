import React from 'react';
import './HomePage.css';
import ProfilePic from '../HomePage/profile-pic.jpg';
import './ContentHomePage.css';
import FacebookLogo from '../HomePage/facebook-logo.svg';
import InstagramLogo from '../HomePage/instagram-logo.svg';
import LinkedinLogo from '../HomePage/linkedin-logo.svg';

export class ContentHomePage extends React.Component {
    render(){
        return(
            <div className="homepage-container">
                <h1>TUDOR-ANGEL CRISAN</h1>
                <h3>24 YEARS OLD</h3>
                <h3>ASPIRING TO BECOME A FRONT-END DEVELOPER</h3>
                <img src={ProfilePic} alt="profile" className="profile-picture"></img>

                <div className="socialMedia">
                <a href="https://www.facebook.com/angeel.crisan" target="_blank" rel= "noopener noreferrer">
                <img src={FacebookLogo} alt="facebook" className="socialProfiles"></img>
                </a>
                <a href="https://www.instagram.com/angelcrisan_/" target="_blank" rel= "noopener noreferrer">
                <img src={InstagramLogo} alt="instagram" className="socialProfiles"></img>
                </a>
                <a href="https://www.linkedin.com/in/angel-crisan-14296b1b9/" target="_blank" rel= "noopener noreferrer">
                <img src={LinkedinLogo} alt="linkedin" className="socialProfiles"></img>
                </a>
                </div>
            </div>
        )
    }
}