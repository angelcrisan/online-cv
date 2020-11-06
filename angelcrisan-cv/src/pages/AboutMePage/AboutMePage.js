import React from "react";
import "./AboutMePage.css";
import GamingLogo from "../AboutMePage/gaming-logo.svg";
import BasketballLogo from "../AboutMePage/basketball.svg";
import TvLogo from "../AboutMePage/tv.svg";

export class AboutMePage extends React.Component {
  render() {
    return (
      <div className="aboutme-section">
        <div className="about-details">
          <p>
            I'M A VERY SOCIABLE, FUNNY AND ENTHUSIAST PERSON, INTERESTED IN
            DISCOVERING EVERYTHING THAT IS NEW FOR ME. MY GOAL IS TO BECOME
            BETTER EVERY DAY. ALSO I'M A PROFESSIONAL BASKETBALL REFEREE SO TEAM
            WORKING DON'T SCARES ME.{" "}
          </p>
        </div>
        <div className="hobbies-title">
          <h2>Hobbies</h2>

          <ul className="hobbies-list">
            <li>Gaming</li>
            <img src={GamingLogo} alt="gaming-logo" className="hobbies-logo" />
            <li>Basketball (Part-time basketball referee)</li>
            <img
              src={BasketballLogo}
              alt="basketball-logo"
              className="hobbies-logo"
            />
            <li>TV shows</li>
            <img src={TvLogo} alt="tv-logo" className="hobbies-logo" />
          </ul>
        </div>
      </div>
    );
  }
}
