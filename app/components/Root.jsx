import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import CampusContainer from './campuses'
import StudentContainer from './students'
import CampusStudentsContainer from './campusStudents'
import SingleStudentContainer from './singleStudent'
import AddStudentContainer from './addNewStudent'
import AddCampusContainer from './addCampus'
import SingleCampusContainer from './singleCampus'
import Students from "./students";
import Campuses from "./campuses";
import Homepage from "./homepage";

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
            <Route exact path = "/addStudent" component = {AddStudentContainer}/>
            <Route exact path = "/addCampus" component = {AddCampusContainer}/>
            <Route exact path = "/" component = {Homepage}/>
            <Route exact path = "/campuses" component = {CampusContainer}/>      {/* Here is RouterTown*/}
            <Route exact path = "/students" component= {StudentContainer}/>
            <Route exact path = "/campuses/:id" component = {CampusStudentsContainer}/>
            <Route exact path = "/students/:id" component = {SingleStudentContainer}/>
            <Route exact path = '/singleCampus/:id' component = {SingleCampusContainer}/>
            </Switch>
        </div>
      </div>
      </Router>
    )
  }
}



