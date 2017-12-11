import React, { Component } from 'react';
import {fetchSingleStudent} from '../reducers/singleStudentReducer';
import {fetchCampuses} from '../reducers/campusReducer';
import { Link } from 'react-router-dom';
import axios from "axios";
import {connect} from 'react-redux';

class EditStudent extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.student

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleGpaChange = this.handleGpaChange.bind(this);
        this.handleCampusChange = this.handleCampusChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    componentDidMount() {
       this.props.loadSingleStudent();
       this.props.loadCampuses();
    }

    handleFirstNameChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({firstName : value})
        console.log(this.state);

    }
    
    handleLastNameChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({lastName : value})
        console.log(this.state);

    }
    
    handleEmailChange(event) {
        const target = event.target;
        const value = target.value;
        this.setState({email : value})
        console.log(this.state);
    }
    
    handleGpaChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({gpa : value})
        console.log(this.state);

    }
    
    handleCampusChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({campus : value})
        console.log(this.state);

    }

    handleSubmit(event) { 
        axios.put('/api/students', this.state)
        .then(this.props.history.push('/students'))
        event.preventDefault();
    }

    render(){
       
    
        return(
            <div>
            <p/>
            <h3> Edit Student:   </h3>
                <form onSubmit = {this.handleSubmit}>
                    <label>FIRST NAME: </label>
                        <input name = "firstName" defaultValue = {this.state.firstName}  onChange = {this.handleFirstNameChange} />
                        <label>LAST NAME: </label>
                        <input name = "lastName" defaultValue = {this.state.lastName} onChange = {this.handleLastNameChange} />  
                    <label>EMAIL: </label>
                        <input name = "email" defaultValue = {this.state.email} onChange = {this.handleEmailChange} /> 
                    <label>GPA: </label>
                        <input name = "gpa" defaultValue = {this.state.gpa} onChange = {this.handleGpaChange} /> 
                    <label>CAMPUS: </label>
                    <select onChange = {this.handleInputChange} name = "campusId"> 
                        <option> Campus </option>   
                        {this.props.campuses.map((campus) => <option key= {campus.id} value = {campus.id} >{campus.name}</option> )}
                    </select>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    
  
        
    } 
} 


function mapStateToProps(storeState) {
    return {
        student : storeState.student,
        campuses : storeState.campuses
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    
        return {
            loadSingleStudent : function() {
                dispatch(fetchSingleStudent(ownProps.match.params.id));
            },
            loadCampuses : function() {
                dispatch(fetchCampuses());
            }
        }
    }

const EditStudentContainer = connect(mapStateToProps, mapDispatchToProps)(EditStudent);

export default EditStudentContainer;