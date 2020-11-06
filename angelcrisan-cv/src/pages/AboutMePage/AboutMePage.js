import React from 'react';
import './AboutMePage.css';
import GamingLogo from '../AboutMePage/gaming-logo.svg';
import BasketballLogo from '../AboutMePage/basketball.svg';
import TvLogo from '../AboutMePage/tv.svg';


export class AboutMePage extends React.Component {
    render(){
        return(
        <div className="aboutme-section">
            <div className="about-details">
                <p>I am a very sociable person, interested in discovering everything that is new for me. I followed INTRO IN IT and FRONT-END WEB DEVELOPMENT courses at SCOALA INFORMALA DE IT, and my goal is to become one day a full-time front-end developer. Also, part time I am a professional basketball referee so to work in a team don't scares me. </p>
            </div>
            <div className="hobbies-title">
            <h2>Hobbies</h2>
           
            <ul className="hobbies-list">
            <li>Gaming</li>
            <img src={GamingLogo} alt="gaming-logo" className="hobbies-logo"/>
            <li>Basketball (Part-time basketball referee)</li>
            <img src={BasketballLogo} alt="basketball-logo" className="hobbies-logo"/>
            <li>TV shows</li>
            <img src={TvLogo} alt="tv-logo" className="hobbies-logo"/>
            </ul>
            </div>

            {/* <div className="contact-details">
                <h2>Contact</h2>
                <h4>Mail: angelcrisan@live.com</h4>
                <h4>Phone: (+4)0754564943</h4>
            </div> */}
            </div>
            
        )
    }
}