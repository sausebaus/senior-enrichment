import React, { Component } from 'react';
import {fetchSingleStudent} from '../reducers/singleStudentReducer'
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
    var thisStudent = this.props.student.id
    axios.delete('/api/students/'+thisStudent)
    .then(this.props.history.push('/students'))
} 

render(){


    return(
        <div>
      
        <ul>

        
        <li>
    
            <div>
                <p> Name: {this.props.student.fullName} </p>
                <p> Email: {this.props.student.email}</p>
                <p> GPA: {this.props.student.gpa} </p>
                <p> <Link to= {`/singleCampus/${this.props.student.campusId}`}> 
                Campus: {this.props.student.campus.name} </Link> </p> 
                </div></li>
        
        </ul>
       <button onClick = {this.deleteHandler}> Delete! </button>
       <Link to={"/editStudent/"+this.props.match.params.id}><button> Update! </button></Link>
        </div>
    )
    
  }  
}

function mapStateToProps (storeState) {
    return {
        student : storeState.student
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