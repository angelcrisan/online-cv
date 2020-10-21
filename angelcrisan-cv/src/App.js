import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { HomePage } from '.pages/HomePage/HomePage';
import { KnowledgePage } from './pages/KnowledgePage/KnowledgePage';
import { AboutMePage } from './pages/AboutMePage/AboutMePage';
import { Header } from './header/header';


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
          <Route path="/KnowledgePage">
            <KnowledgePage/>
          </Route>
          <Route path="/AboutMePage">
            <AboutMePage/>
          </Route>
        </Switch>
      </Router>
      </div>
  );
}
}
