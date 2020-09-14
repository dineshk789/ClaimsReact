import {createStore} from 'redux';

const InitialState={
  loggedUsername:""
}
export default function loginReducer(state=InitialState, action){
  switch(action.type){
  case "login":
    state=action.loggedUsername;
    break;
   //case "claimList":
   // state=action.claimList;
   //break;
  

  }
  return state;
}




//define store

//const store = createStore(loginReducer,"");
//this part later handel this

//store.subscribe(()=> 
 // console.log("store updated==>"+JSON.stringify(store.getState())));

//Action and Payload dispatcher


