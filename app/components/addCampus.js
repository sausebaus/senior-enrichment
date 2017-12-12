import React, { Component } from 'react';
import {fetchCampuses} from '../reducers/campusReducer';
import { Link } from 'react-router-dom';
import axios from "axios";
import {connect} from 'react-redux';

class AddCampus extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    componentDidMount() {
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
        axios.post('/api/addCampus', this.state)
        .then(this.props.history.push('/campuses'))
        event.preventDefault();
    }

    render(){
        return(
            <div>
            <p/>
            <h3> Add a new campus! </h3>
                <form onSubmit = {this.handleSubmit}>
                    <label>NAME: </label>
                        <input name = "name" value = {this.state.firstName} onChange = {this.handleInputChange} />
                        <label>IMG URL: </label>
                        <input name = "imgUrl" value = {this.state.lastName} onChange = {this.handleInputChange} />  
                    <label>DESCRIPTION: </label>
                        <input name = "description" value = {this.state.email} onChange = {this.handleInputChange} />
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    } 
} 


function mapStateToProps(storeState) {
    return {
        campuses: storeState.campuses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadCampuses: function() {
            dispatch(fetchCampuses());
        }
    }
}

const AddCampusContainer = connect(mapStateToProps, mapDispatchToProps)(AddCampus);

export default AddCampusContainer;