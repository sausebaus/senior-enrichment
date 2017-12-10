import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
   



render(){
    return(
        <div>
        <h5> I AM A NAVBAR LOOK AT MEEEE </h5>
        <Link to="/"><button>HOME</button></Link>
        <Link to="/campuses"><button>CAMPUSES</button></Link>
        <Link to="/students"><button>STUDENTS</button></Link>
        </div>

    )
  }
}

