import React, { Component } from 'react';
import {fetchCampuses} from '../reducers/campusReducer'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';


class Campuses extends Component {
    
componentDidMount() {
    this.props.loadCampuses();
}

render(){
    return(
        <div>
        <h1>  </h1>
        <ul>
        
        {this.props.campuses.map((campus) =>
            
        <li key = {campus.id} > 
            {campus.name} 
                <br /> 
            <Link to={`/singleCampus/${campus.id}`}> <img src = {campus.imgUrl} /> </Link> 
        </li>

        )}
        
        </ul>

        <Link to="/addCampus"> Add a campus! </Link>
        </div>
    )
    
  }  
}

function mapStateToProps (storeState) {
    return {
        campuses : storeState.campuses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadCampuses : function() {
            dispatch(fetchCampuses());
        }
    }
}

const CampusContainer = connect(mapStateToProps, mapDispatchToProps)(Campuses)

export default CampusContainer;