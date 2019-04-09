import React from 'react';
import {Provider} from "react-redux";
import {configureStore} from "../store/index";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";

const store = configureStore(); 

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


