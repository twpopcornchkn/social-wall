import React from 'react';
import {Provider} from "react-redux";
import {configureStore} from "../store/index";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import { setAuthorizationToken, setCurrentUser } from '../store/actions/auth';
import Main from "./Main";
import jwtDecode from "jwt-decode";

const store = configureStore(); 

//if localStorage token existed, then save it in redux 
if(localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken);
    
    //prevent someone from manually tampering with the kyeof jwtToken in localStorage 
    try{
      store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
    }catch(e){
      store.dispatch(setCurrentUser({}));
    }
  }

const App = () => {
    return (
       <Provider store={store}>
          <Router>
              <Navbar/>
              <Main/>
          </Router>
        </Provider>
    );

}

export default App;


