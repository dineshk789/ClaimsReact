import React from 'react';

import axios from 'axios';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
 import {connect} from 'react-redux';
class ClaimList extends React.Component {
  
 constructor(props){
   
  super(props);
  this.state = {
    claims: []
  }
this.handleSubmit = this.handleSubmit.bind(this)
this.showUpdate = this.showUpdate.bind(this);
}
componentDidMount() {
  console.log("componentDidMount")
   // axios.get(`http://localhost:8102/rest/claims/getClaims`)
   axios.get(`http://localhost:8102/rest/claims/getClaims`)
      .then(res => {       
        const claimList = res.data;      
        console.log("ammm in claims"+claimList)
         this.dispatchClaimListToStore(claimList);  
       // this.setState({ claims });
      })
  }
dispatchClaimListToStore(claimList) {
        console.log('dispatching ClaimList', claimList);
        console.log('dispatching props', this.props);
        this.props.dispatch(this.claimListAction(claimList))
 }

claimListAction(claimList){
        return {
            type: "claimList",
            claimList: claimList
        }
    }
   showUpdate(thisClaim) {
    window.event.preventDefault();
      console.log('updating claim', thisClaim.emp_id);
     browserHistory.push('UpdateForm/'+thisClaim.emp_id);
      this.setState({showUpdate: true, selectedClaim: thisClaim})
   }

handleSubmit(claim){
    
   console.log("heree");
   // if(validateForm(this.state.errors)) {
    //  console.info('Valid Form')
    browserHistory.push('UpdateForm');
    //}else{
   //   console.error('Invalid Form')
   // }
  }
  render() {
    let showUpdateContent = this.showUpdate;
    console.log("State::"+this.state);
      console.log('Header: this.props', this.props);
    
     //   var myJSON = JSON.stringify(cla); 
    //    console.log("Type4: " +  myJSON); 
  
     console.log("this.props.claimList"+this.props.claimList); 
    
    let myTr="";
    if(this.props.claimList){

    myTr= this.props.claimList.map(function(claim, index){
               return (<tr key={index}><td>{claim.emp_id}</td><td>{claim.emp_name}</td>
                      <td>{claim.claim_number}</td><td>{claim.claim_type}</td>
                      <td>{claim.claim_program}</td>
                      <td>{claim.start_date}</td>
                      <td>{claim.end_date}</td>
                      <td><a className="updateTdBut" href="#UpdateForm" onClick={() => showUpdateContent(claim)} >Update</a></td>
                    </tr>)
        });    
      
    }
  
   return myTr;       

 }    
  
}
const mapStateToProps = state => {
   console.log('App state', state);
   return {claimList: state.ClaimListReducer.claimObj}
}


export default connect(mapStateToProps)(ClaimList)
//export default ClaimList;