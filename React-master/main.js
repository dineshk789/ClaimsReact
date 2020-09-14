import React from 'react';
import ReactDOM from 'react-dom';

import LoginForm from './component/login/LoginForm.jsx';
import Headers from './component/common/Header.jsx';
import DashboardForm from './component/home/DashboardForm.jsx';
import Footer from './component/common/Footer.jsx';
import ViewForm from './component/view_claim/ViewForm.jsx';
import UpdateForm from './component/update/UpdateForm.jsx';
import Contact from './component/contact/Contact.jsx';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Menu from './Menu.jsx';
import {createStore,combineReducers} from 'redux';
import { Provider } from 'react-redux';
import LoginReducer from './reducer/LoginReducer';
import ClaimListReducer from './reducer/ClaimListReducer.js';
// json object here ReactDOM.render(<Hello name='sreeram' age='30'/>, document.getElementById('app'));

const store = createStore(combineReducers({LoginReducer,ClaimListReducer}));
//this part later handel this

store.subscribe(()=> 
  console.log("store updated==>"+JSON.stringify(store.getState())));



ReactDOM.render( 
   <Provider store={store}>
   <Router history = {browserHistory}>  
   <Route path = "/" component = {Menu}>       
   <IndexRoute component = {LoginForm} />       
   <Route path = "DashboardForm" component = {DashboardForm} />    
   <Route path = "ViewForm" component = {ViewForm} />    
   <Route path = "UpdateForm/:emp_id"  component = {(props) => <UpdateForm {...props}/>}/> 
   <Route path = "Contact" component = {Contact} />
   <Route path = "UpdateForm" component = {UpdateForm} />    
    <Route path = "LoginForm" component = {LoginForm} />  
    
   </Route>  
    </Router> 
    </Provider>
    ,
    document.getElementById('root'));