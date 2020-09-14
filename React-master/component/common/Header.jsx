import React from 'react';
//import styles from './claim.css';
import{ Navbar,Nav, Form ,FormControl,Button}from 'react-bootstrap';
class Headers extends React.Component {
   render() {      
                   
      return (   // Render fucction is life cycle hook which render template
  
 <Navbar bg="dark" style={{backgroundColor:"#154360"}} variant="dark">
  <h5 className="row col-6 d-flex justify-content-left text-white">CLAIM MANAGEMENT</h5>
   
   

  <h4>Update Claims</h4>
  

</Navbar>


      );
   }
}

export default Headers;   
