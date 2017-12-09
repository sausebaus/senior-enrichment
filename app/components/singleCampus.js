import React, { Component } from 'react';
import {fetchSingleCampus} from '../reducers/campusReducer'
import {fetchCampusStudents} from '../reducers/studentReducer'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import CampusStudentsContainer from './campusStudents'


class SingleCampus extends Component {
    
componentDidMount() {

    this.props.loadSingleCampus();
    this.props.loadCampusStudents();
}



render(){

   
    return(
        <div>
         {this.props.campuses.map((campus) => 
            <div><h1 key = {campus.id}> {campus.name} </h1> 
            <p>{campus.description} </p> 
            <img src = {campus.imgUrl}/> </div> )} 

            <ul>
            
             {this.props.students.map((student) => 
                <Link to={`/students/${student.id}`} key = {student.id} > 
                <li> {student.fullName} </li> </Link> )} 
            
            </ul>
         </div>
    )
    
  }  
}

function mapStateToProps (storeState) {
    return {
        campuses : storeState.campuses,
        students : storeState.students
    }
}

function mapDispatchToProps(dispatch, ownProps) {

    return {
        loadSingleCampus : function() {
            dispatch(fetchSingleCampus(ownProps.match.params.id));
        },
        loadCampusStudents : function() {
            dispatch(fetchCampusStudents(ownProps.match.params.id));
        }
    }
}

const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus)

export default SingleCampusContainer;