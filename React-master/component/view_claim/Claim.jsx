import React from 'react';

import axios from 'axios';

class Claim extends React.Component {
  
constructor(props){
   
  super(props);
  
}
  render() {

    console.log("claim"+this.props.answer);
    return (<tr><td>I am a {this.props.answer}!</td></tr>)
  }
}

export default Claim;