
 import React from 'react';
 import{ Navbar,Nav, Form ,FormControl,Button}from 'react-bootstrap';
class Footer extends React.Component {

	render() {
    return(
     <nav className="navbar navbar-dark">
          <div className="row col-12 bg-dark justify-content-center text-white footer fixed-bottom">
            <span className="h6">Copyright reserved @ Cognizant</span>
          </div>
     </nav>

     );
  }
}
export default Footer;