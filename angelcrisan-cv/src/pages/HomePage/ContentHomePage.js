import React from "react";
import "./HomePage.css";
import ProfilePic from "../HomePage/profile-pic.jpg";
import "./ContentHomePage.css";
import FacebookLogo from "../HomePage/facebook-logo.svg";
import InstagramLogo from "../HomePage/instagram-logo.svg";
import LinkedinLogo from "../HomePage/linkedin-logo.svg";

export class ContentHomePage extends React.Component {
  render() {
    return (
      <div className="homepage-container">
        <img src={ProfilePic} alt="profile" className="profile-picture"></img>
        <br></br>

        <div className="contact-details">
          <h1>TUDOR-ANGEL CRISAN</h1>
          <h3>Phone: (+4)0754564943</h3>
          <h3>Email: angelcrisan@live.com</h3>
          <h3>Cluj-Napoca,Romania</h3>
        </div>

        <div className="socialMedia">
          <div className="facebook-link">
            <a
              href="https://www.facebook.com/angeel.crisan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={FacebookLogo}
                alt="facebook"
                className="socialProfiles"
              ></img>
            </a>
          </div>
          <div>
          <a
            href="https://www.instagram.com/angelcrisan_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={InstagramLogo}
              alt="instagram"
              className="socialProfiles"
            ></img>
          </a>
          </div>
          <div>
          <a
            href="https://www.linkedin.com/in/angel-crisan-14296b1b9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedinLogo}
              alt="linkedin"
              className="socialProfiles"
            ></img>
          </a>
          </div>
        </div>
      </div>
    );
  }
}
