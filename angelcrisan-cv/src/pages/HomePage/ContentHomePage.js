import React from 'react';
import './HomePage.css';
import ProfilePic from '../HomePage/profile-picture.jpg';
import './ContentHomePage.css';


export class ContentHomePage extends React.Component {
    render(){
        return(
            <div className="homepage-container">
                <h1>TUDOR-ANGEL CRISAN</h1>
                <h3>24 YEARS OLD</h3>
                <h3>ASPIRING TO BECOME A FRONT-END DEVELOPER</h3>
                <img src={ProfilePic} alt="profile-picture" className="profile-picture"></img>
            </div>
        )
    }
}