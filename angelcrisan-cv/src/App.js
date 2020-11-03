import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { KnowledgePage } from "./pages/KnowledgePage/KnowledgePage";
import { AboutMePage } from './pages/AboutMePage/AboutMePage';
import { Header } from './header/header';
import { EducationPage } from './pages/EducationPage/EducationPage';
import { WorkPage } from './pages/WorkExperience/WorkExperience';


export class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact>
            <HomePage/>
          </Route>
          <Route path="/Knowledge-Page">
            <KnowledgePage/>
          </Route>
          <Route path="/Education-Page">
            <EducationPage/>
          </Route>
          <Route path="/Work-Page">
            <WorkPage/>
          </Route>
          <Route path="/AboutMe-Page">
            <AboutMePage/>
          </Route>
        </Switch>
      </Router>
      </div>
  );
}
}
