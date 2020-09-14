
 import React from 'react';
import{ Navbar,Nav, Form ,FormControl,Button}from 'react-bootstrap';
import { Router, Route, Link,NavLink,  browserHistory, IndexRoute  } from 'react-router';
 import NavigationBar from './../common/Navigation.jsx';
class DashboardForm extends React.Component {

	render() {

    return(
 <div>
 <NavigationBar/>
<Navbar  style={{backgroundColor:"#000000"}} variant="dark">
      
    <Nav className="mr-auto">   
     <Navbar.Brand href="#home" as={Link} to="DashboardForm">Home</Navbar.Brand>  
      <Nav.Link  href="#viewForm" as={Link} to="ViewForm">View Claim</Nav.Link>  
      <Nav.Link href="#contact" as={Link} to="Contact">Contact Us</Nav.Link>
    </Nav>
  </Navbar>
<section style={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop : '50px'}}>
<div>
  <h2 >Welcome to Claim Management Portal</h2>
  </div>
 </section>
</div>
     );
  }
}
export default DashboardForm;

