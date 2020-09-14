import React from 'react';
 import{ Navbar,Nav, Form ,FormControl,Button} from 'react-bootstrap';
 import { Router, Route, Link,NavLink,  browserHistory, IndexRoute  } from 'react-router';
 import {connect} from 'react-redux';
 //import loginImage from "./loginProfileImage.png";
class NavigationBar extends React.Component {
    constructor(props) {  
      super(props);
    this.state = {
        user:""
    }

  }

   render() {
   const today= this.state

   //const {user}= this.state
    console.log('Header: this.props.state', this.props);
      return (
      <div>

<Navbar bg="dark" variant="dark">

  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text  className="mr-sm-2  text-white " >
    
    </Navbar.Text>
    <Navbar.Text className="mr-sm-2  text-white" >
    <div class="w3-container">
  <div class="w3-dropdown-hover">
    <button class="w3-button w3-black"> <a href="#login">{this.props.loggedUsername}</a>!</button>
    <div class="w3-dropdown-content w3-bar-block w3-border">      
     <Nav.Link   style={{backgroundColor:"#000000"}} variant="dark" href="#Singout" as={Link}  to="LoginForm">Signout</Nav.Link>    
     </div>
  </div>
</div>
     
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
 
    </div>
      )
   }
}

const mapStateToProps = state => {
    console.log('App state loggedinuser', state);
    return {loggedUsername: state.LoginReducer};
}
 

export default connect(mapStateToProps)(NavigationBar);





