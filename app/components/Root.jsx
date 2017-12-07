import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import CampusContainer from './campuses'
import StudentContainer from './students'
import CampusStudentsContainer from './campusStudents'
import SingleStudentContainer from './singleStudent'
import Students from "./students";
import Campuses from "./campuses";

import axios from 'axios';
import Nav from './nav';

export default class Root extends Component {
  
render() {
    
    return (
      <Router>
      <div>
        <div>
            <Nav /> {/* Here is the NavBar*/}
        </div>
        <div>
          <h1>Stackistar Galactica</h1>
            <Switch>
            <Route exact path = "/campuses" component = {CampusContainer}/>      {/* Here is RouterTown*/}
            <Route exact path = "/students" component= {StudentContainer}/>
            <Route exact path = "/campuses/:id" component = {CampusStudentsContainer}/>
            <Route exact path = "/students/:id" component = {SingleStudentContainer}/>
            </Switch>
        </div>
      </div>
      </Router>
    )
  }
}



