import React, { Component } from 'react';
import {fetchStudents} from '../reducers/studentReducer';
import {fetchCampuses} from '../reducers/campusReducer';
import { Link } from 'react-router-dom';
import axios from "axios";
import {connect} from 'react-redux';

class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    componentDidMount() {
       this.props.loadStudents();
       this.props.loadCampuses();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name] : value
        })

    }

    handleSubmit(event) { 
        axios.post('/api/addStudent', this.state)
        event.preventDefault();
    }

    render(){
        return(
            <div>
            <p/>
            <h3> Add a new student! </h3>
                <form onSubmit = {this.handleSubmit}>
                    <label>FIRST NAME: </label>
                        <textarea name = "firstName" value = {this.state.firstName} onChange = {this.handleInputChange} />
                        <label>LAST NAME: </label>
                        <textarea name = "lastName" value = {this.state.lastName} onChange = {this.handleInputChange} />  
                    <label>EMAIL: </label>
                        <textarea name = "email" value = {this.state.email} onChange = {this.handleInputChange} /> 
                    <label>GPA: </label>
                        <textarea name = "gpa" value = {this.state.gpa} onChange = {this.handleInputChange} /> 
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
        students : storeState.students,
        campuses: storeState.campuses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadStudents : function() {
            dispatch(fetchStudents());
        },
        loadCampuses: function() {
            dispatch(fetchCampuses());
        }
    }
}

const AddStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AddStudent);

export default AddStudentContainer;