import React from 'react';
import './KnowledgePage.css';

export class KnowledgePage extends React.Component {
    render () {
        return(
            <div className="knowledge-main">
            <div className="knowledge-details">
            <h1>KNOWLEDGE LEVEL</h1>
            <hr></hr>
            <h3 id="html">HTML - Mid Level</h3>
            <h3 id="css">CSS - Mid Level</h3>
            <h3 id="javascript">JAVASCRIPT - Mid Level</h3>
            <h3 id="react">REACT - Beginner Level</h3>
            <h3 id="github">GITHUB - Beginner Level</h3>
            </div>

            <br></br>
            <div className="final-project-section">
            <h1>SCIT FINAL TEAM PROJECT</h1>
            <hr></hr>
            <a href="https://github.com/angelcrisan/uranus"> Uranus Movies</a>
            </div>
            </div>
        )
    }
}