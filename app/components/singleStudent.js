import React, { Component } from 'react';
import {fetchSingleStudent} from '../reducers/studentReducer'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';
import {connect} from 'react-redux';


class SingleStudent extends Component {
    constructor(props){
        super(props)
        this.deleteHandler = this.deleteHandler.bind(this);
    }

    
componentDidMount() {

    this.props.loadSingleStudent();

}

deleteHandler(event) {
    var thisStudent = this.props.students[0].id
    console.log(thisStudent)
    axios.delete('/api/students/'+thisStudent)
} //PLEASE FIX THIS HACKEY MESS

render(){

    return(
        <div>
      
        <ul>

        
        <li>
        {this.props.students.map((student) => 
            <div key = {student.id}>
                                                <p> Name: {student.fullName} </p>
                                                <p> Email: {student.email}</p>
                                                <p> GPA: {student.gpa} </p>
                                                <p> <Link to= {`/singleCampus/${student.campusId}`}> 
                                                Campus: {student.campus && student.campus.name} </Link> </p> 
                                                </div>)}</li>
        
        </ul>
       <Link to="/students"> <button onClick = {this.deleteHandler}> Delete! </button> </Link> <button> Update! </button>
        </div>
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