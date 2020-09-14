import {createStore} from 'redux';
//import fetch from 'isomorphic-unfetch'

const InitialState={
  claimList:[]
}
export default function claimListReducer(state=InitialState, action){
  console.log(action);
  switch(action.type){

   case "claimList":
   state ={claimObj:action.claimList};
   break;
  

  }
  return state;
};


//function getCliamList(){
 // static async getInitialProps() {
  //  const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
 //   const data = await res.json()

 //   return {
  //    title: data.title,
  //    imageUrl: data.url
  //  }
  //}
//};

//define store

//const store = createStore(claimListReducer,{});
//this part later handel this

//store.subscribe(()=> 
  //console.log("store updated==>"+JSON.stringify(store.getState())));

//Action and Payload dispatcher
//export default ClaimListReducer;

