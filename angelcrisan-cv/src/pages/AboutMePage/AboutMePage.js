import React from 'react';
import './AboutMePage.css';
import GamingLogo from '../AboutMePage/gaming-logo.svg';
import BasketballLogo from '../AboutMePage/basketball.svg';
import TvLogo from '../AboutMePage/tv.svg';
import FanLogo from '../AboutMePage/supporter.png';

export class AboutMePage extends React.Component {
    render(){
        return(
            <div className="aboutme-section">
            <div className="about-details">
                <p>I am a very sociable person, interested in discovering everything that is new for me. I followed INTRO IN IT and FRONT-END WEB DEVELOPMENT courses at SCOALA INFORMALA DE IT, and my goal is to become one day a full-time front-end developer. Also, part time I am a professional basketball referee so to work in a team don't scares me. </p>
            </div>

            <div className="hobbies-section">
            <h2>Hobbies</h2>
            <hr></hr>
            <p>Gaming</p>
            <img src={GamingLogo} alt="gaming-controller" className="gaming-logo"/>
            <p>Basketball (Part-time basketball referee)</p>
            <img src={BasketballLogo} alt="basketball" className="basketball-logo"/>
            <p>Sport games on TV</p>
            <img src={FanLogo} alt="supporter" className="fan-logo"/>
            <p>TV shows</p>
            <img src={TvLogo} alt="tv-silouette" className="tv-logo"/>
            </div>
            </div>
        )
    }
}