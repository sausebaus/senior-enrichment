import React, { Component } from 'react';
import {fetchStudents} from '../reducers/studentReducer'
import { Link } from 'react-router-dom';
import axios from "axios";
import {connect} from 'react-redux';

class Students extends Component {
    

    componentDidMount() {
       this.props.loadStudents();
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

function mapStateToProps(storeState) {
    return {
        students : storeState.students
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadStudents : function() {
            dispatch(fetchStudents());
        }
    }
}

const StudentContainer = connect(mapStateToProps, mapDispatchToProps)(Students);

export default StudentContainer;