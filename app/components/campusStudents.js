import React, { Component } from 'react';
import {fetchCampusStudents} from '../reducers/studentReducer'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';


class CampusStudents extends Component {
    
componentDidMount() {

    this.props.loadCampusStudents();
}

render(){

    return(
        <ul>
        
         {this.props.students.map((student) => 
            <Link to={`/students/${student.id}`} key = {student.id} > 
            <li> {student.fullName} </li> </Link> )} 
        
        </ul>
    )
    
  }  
}

function mapStateToProps (storeState) {
    return {
        students : storeState.students
    }
}

function mapDispatchToProps(dispatch, ownProps) {

    return {
        loadCampusStudents : function() {
            dispatch(fetchCampusStudents(ownProps.match.params.id));
        }
    }
}

const CampusStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(CampusStudents)

export default CampusStudentsContainer;