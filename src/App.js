import React from 'react';
import {  Route, BrowserRouter as Router } from 'react-router-dom';

import "@fontsource/roboto"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import ToDoHome from './components/todo/ToDoHome';
import RRN from './components/rrn/RRN';
import Naver from "./components/naver/Naver";

function App() {
/**
 * 지나인 사전과제 
 * https://gist.github.com/happydeveloper/afa47b62e09928875cf37774415bd99d
 * 
 */

  return (
    <div className="main">
      <Router>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/todo" component={ToDoHome} exact={true}/>
        <Route path="/rrn" component={RRN} exact={true}/>
        <Route path="/naver" component={Naver} exact={true}/>
      </Router>
    </div>
  );
}

export default App;
