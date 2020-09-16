import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Component } from 'react';
import { ReactDOM} from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import { Logger } from 'react-logger-lib';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import {connect} from 'react-redux';

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class LoginForm extends React.Component {
 constructor(props) {
    super(props);
    this.props=props;
    this.state = {    
      userName: null,
      password: null,
      invalidUser:false,
      errors: {
        userName: '',  password: ''
      },
      user: '',
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(){
    //event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
  // Logger.of('App.LoginForm.handleChange').info('name=',name);
 //   console.log(name);
    switch (name) {
      case 'userName': 
        errors.userName = 
          value.length < 5
            ? 'User Name must be 5 characters long!'
            : '';
        break;     
      case 'password': 
        errors.password = 
          value.length < 5
            ? 'Password must be 5 characters long!'
            : '';
        break;       
      default:
        break;
    }

    this.setState({errors, [name]: value}, ()=> {
        Logger.of('App.LoginForm.handleChange').info('errors=',errors);     
    })
  }
 
  handleSubmit(event){
  window.event.preventDefault();
  
   //  Logger.of('App.LoginForm.handleSubmit').info('errors=',this.state.errors);     
   // if(validateForm(this.state.errors)){
   //  console.info('Valid Form')
   //   browserHistory.push('DashboardForm');
  //  }else{
   //  console.error('Invalid Form')
 // }

 
    console.log('authenticating user');
      axios.get(`http://localhost:8102/rest/user`)
      .then(res => {
        let validUser = false;
        for(let i=0;i < res.data.length; i++) {
          if(res.data[i].userName === this.refs['userName'].value
          && res.data[i].password === this.refs['password'].value) {
            console.log('userName/password is matching');
           validUser = true;
          }
        }
       // console.log('matching User', validUser);
        if(validUser) {
          console.log("aaa state"+this.state);         

          this.dispatchLoggedUsernameStore(this.refs['userName'].value);
         // localStorage.setItem('user', this.refs['userName'].value);
          browserHistory.push('DashboardForm');

        }else {
          this.setState({invalidUser: true});
       }
      }).catch(error => {this.setState({invalidUser: true})})
      
  }

dispatchLoggedUsernameStore(loggedUsername) {
        console.log('dispatching logged-in user name', loggedUsername);
        console.log('dispatching props', this.props);
        this.props.dispatch(this.loginAction(loggedUsername))
 }

loginAction(loggedUser){
        return {
            type: 'login',
            loggedUsername: loggedUser
        }
    }
  render() {
  const {errors} = this.state;
  return (
 <div>
   { (this.state.invalidUser) && 
                    (<Alert key='error-message' variant='warning'>User name or password does not match</Alert>)
                }
   <Container style={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop : '50px'}}>
        <Form onSubmit={this.handleSubmit} noValidate>
          <Row className="justify-content-md-center align-items-center">
            <Col xs lg="17">
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="userName" placeholder="Username" ref="userName" onChange={this.handleChange} noValidate/>
                {errors.userName.length > 0 && 
                <span style={{color: "red"}} className='error'>{errors.userName}</span>}
              </Form.Group>
            </Col>
 
          </Row>
          <Row className="justify-content-md-center align-items-center">
            <Col xs lg="17">
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"  name="password"  placeholder="Password" ref="password" onChange={this.handleChange} noValidate />

                 {errors.password.length > 0 && 
                <span style={{color: "red"}} className='error'>{errors.password}</span>}
              </Form.Group></Col>
 
          </Row>
          <Row className="justify-content-md-center align-items-center">            
           
            <Button variant="primary" style={{backgroundColor:"#808080"}} onClick={this.handleSubmit.bind(this)} size="em" active>
              Login
            </Button>
            
          </Row>
        </Form>
      </Container>

</div>
    );
  }

}

const mapStateToProps = state => {
    console.log('App state', state);
    return {loggedUsername: state.loggedUsername}
}


export default connect(mapStateToProps)(LoginForm)
