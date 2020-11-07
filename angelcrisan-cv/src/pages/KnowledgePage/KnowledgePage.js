import React from 'react';
import './KnowledgePage.css';
import UranusSearch from '../KnowledgePage/UranusSearch.png';
import UranusMovie from '../KnowledgePage/UranusMovie.png';
import UranusHome from '../KnowledgePage/UranusHome.png';
import UranusRegister from '../KnowledgePage/UranusRegister.png';

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
                    <div className="final-project-link">
                    <h1>SCIT FINAL TEAM PROJECT</h1>
                    <hr></hr>
                    <a href="https://github.com/angelcrisan/uranus"> URANUS MOVIES</a>
                    </div>
                    <div className="final-project-screens">
                        <img src={UranusHome} alt="uranus-home" className="uranus"/>
                        <img src={UranusSearch} alt="uranus-search" className="uranus"/>
                        <img src={UranusMovie} alt="uranus-movie" className="uranus"/>
                        <img src={UranusRegister} alt="uranus-register" className="uranus"/>
                    </div>
                </div>
            </div>
        )
    }
}