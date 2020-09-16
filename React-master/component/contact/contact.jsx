
 import React from 'react';
 import Table from 'react-bootstrap/Table';

 import{ Navbar,Nav, Form ,FormControl,Button,Container,Row,Col} from 'react-bootstrap';
import { Router, Route, Link,NavLink,  browserHistory, IndexRoute  } from 'react-router';
 import NavigationBar from './../common/Navigation.jsx';
class Contact extends React.Component {

	render() {
   
    return(
    	<div>
    	 <NavigationBar/>
   <Navbar  style={{backgroundColor:"#154360"}} variant="dark">
      
    <Nav className="mr-auto">   
     <Nav.Link  href="#home" as={Link} to="DashboardForm">Home</Nav.Link> 
      <Nav.Link  href="#viewForm" as={Link} to="ViewForm">View Claim</Nav.Link>  
      <Navbar.Brand href="#Contact" as={Link} to="Contact">Contact Us</Navbar.Brand>  
    </Nav>
  </Navbar>
<section>
<div >
	<Container style={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop : '50px'}}>
  <Row className="justify-content-md-left">
    <Col xs lg="12">
      <p> <b>Ready when you are
--Partnership:</b>
 	</p>
 	<p>  How to reach</p>
   <p>
+919030403657
bharath@c0-example.com

 	</p>
  <p> Where we are</p>
  <p>
Level2/ 113 Reservoir St
Surry Hills, NSW 2010
Australia
 </p>
    </Col>
    
  </Row>  
</Container>

  </div>
 </section>
</div>
     );
  }
}
export default Contact;