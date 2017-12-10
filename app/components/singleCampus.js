import React, { Component } from 'react';
import {fetchSingleCampus} from '../reducers/singleCampusReducer'
import {fetchCampusStudents} from '../reducers/studentReducer'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';



class SingleCampus extends Component {
    constructor(props){
        super(props)
        this.deleteHandler = this.deleteHandler.bind(this);
    }
    
componentDidMount() {

    this.props.loadSingleCampus();
    this.props.loadCampusStudents();

}

deleteHandler(event) {
    var thisCampus = this.props.campus.id;
    axios.delete('/api/campuses/'+thisCampus)
}



render(){

   
    return(
        <div>
        
            <div key = {this.props.campus.id}><h1 > {this.props.campus.name} </h1> 
            <p>{this.props.campus.description} </p> 
            <img src = {this.props.campus.imgUrl}/> </div>

            <ul>
            
             {this.props.students.map((student) => 
                <Link to={`/students/${student.id}`} key = {student.id} > 
                <li> {student.fullName} </li> </Link> )} 
            
            </ul>
               <Link to="/campuses"> <button onClick = {this.deleteHandler}> Delete this campus </button> </Link>
               <Link to={"/editCampus/"+this.props.match.params.id}> <button> Update this Campus </button> </Link>
         </div>
    )
    
  }  
}

function mapStateToProps (storeState) {
    return {
        campus : storeState.campus,
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