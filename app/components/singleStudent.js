import React, { Component } from 'react';
import {fetchSingleStudent} from '../reducers/studentReducer'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';


class SingleStudent extends Component {
    
componentDidMount() {

    this.props.loadSingleStudent();
}

render(){

    return(
        <ul>
        
        <li>
        {this.props.students.map((student) => <div key = {student.id}>
                                                <p> Name: {student.fullName} </p>
                                                <p> Email: {student.email}</p>
                                               {/* <p> Campus: {student.campus.name} </p> */}
                                                </div>)}</li>
        
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
        loadSingleStudent : function() {
            dispatch(fetchSingleStudent(ownProps.match.params.id));
        }
    }
}

const SingleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent)

export default SingleStudentContainer;