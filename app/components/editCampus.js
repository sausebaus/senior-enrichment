import React, { Component } from 'react';
import {fetchSingleCampus} from '../reducers/singleCampusReducer';
import { Link } from 'react-router-dom';
import axios from "axios";
import {connect} from 'react-redux';

class EditCampus extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.campus

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleImgUrlChange = this.handleImgUrlChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    componentDidMount() {
       this.props.loadSingleCampus();
    }

    handleNameChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({name : value})

    }
    
    handleImgUrlChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({imgUrl : value})

    }
    
    handleDescriptionChange(event) {
        const target = event.target;
        const value = target.value;
        this.setState({description : value})
    }

    handleSubmit(event) { 
        axios.put('/api/campuses', this.state)
        .then(this.props.history.push('/campuses'))
        event.preventDefault();
    }

    render(){
        return(
            <div>
            <p/>
            <h3> Edit Campus: </h3>
                <form onSubmit = {this.handleSubmit}>
                    <label>NAME: </label>
                        <input name = "name" defaultValue = {this.state.name} onChange = {this.handleNameChange} />
                        <label>IMG URL: </label>
                        <input name = "imgUrl" defaultValue = {this.state.imgUrl} onChange = {this.handleImgUrlChange} />  
                    <label>DESCRIPTION: </label>
                        <input name = "description" defaultValue = {this.state.description} onChange = {this.handleDescriptionChange} />
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    } 
} 


function mapStateToProps(storeState) {
    return {
        campus: storeState.campus
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        loadSingleCampus: function() {
            dispatch(fetchSingleCampus(ownProps.match.params.id));
        }
    }
}

const EditCampusContainer = connect(mapStateToProps, mapDispatchToProps)(EditCampus);

export default EditCampusContainer;