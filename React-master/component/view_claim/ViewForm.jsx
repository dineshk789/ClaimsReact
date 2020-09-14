
 import React from 'react';
 import Table from 'react-bootstrap/Table'
 import ClaimList from './ClaimList.jsx'
 import{ Navbar,Nav, Form ,FormControl,Button} from 'react-bootstrap';
import { Router, Route, Link,NavLink,  browserHistory, IndexRoute  } from 'react-router';
 import NavigationBar from './../common/Navigation.jsx';
class ViewForm extends React.Component {

	render() {
   
    return(
 <div>
 <NavigationBar/>
  <Navbar  style={{backgroundColor:"#154360"}} variant="dark">
      
    <Nav className="mr-auto">   
     <Nav.Link href="#home" as={Link} to="DashboardForm">Home</Nav.Link>  
      <Navbar.Brand href="#viewForm" as={Link} to="ViewForm">View Claim</Navbar.Brand>  
      <Nav.Link href="#updateForm" as={Link}  to="UpdateForm">Update Claim</Nav.Link>
      <Nav.Link href="#contact" as={Link} to="Contact">Contact Us</Nav.Link>
    </Nav>
  </Navbar>
<section style={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop : '50px'}}>
<Table striped bordered hover size="sm" responsive="sm">
  <thead>
    <tr>
      <th>Employee ID</th>
      <th>Employee Name</th>
      <th>Claim Number</th>
      <th>Claim Type</th>
      <th>Claim Programs</th>
      <th>Claim Start Date</th>
      <th>Claim End Date</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    
    
    <ClaimList />
    
  </tbody>
</Table>


  </section>
</div>
     );
  }
}
export default ViewForm;

