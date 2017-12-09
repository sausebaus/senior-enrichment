import React, { Component } from 'react';
import {fetchCampusStudents} from '../reducers/studentReducer'
import {fetchCampuses} from '../reducers/campusReducer'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';


class CampusStudents extends Component {
    
componentDidMount() {

    this.props.loadCampusStudents();
    this.props.loadCampuses();
  

}



render(){

    console.log(this.props.students);
    console.log(this.props.campuses);
    console.log(this.props.campuses && this.props.campuses.filter(campus => campus.id === this.props.students.campusId))
    return(
        <div>
        <h1></h1>
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
        students : storeState.students,
        campuses : storeState.campuses
    }
}

function mapDispatchToProps(dispatch, ownProps) {

    return {
        loadCampusStudents : function() {
            dispatch(fetchCampusStudents(ownProps.match.params.id));
        },
        loadCampuses : function() {
            dispatch(fetchCampuses());
        }

    }
}

const CampusStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(CampusStudents)

export default CampusStudentsContainer;