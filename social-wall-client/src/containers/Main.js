import React from 'react';
import {Switch, Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Feed from './Feed/Feeds';
import AuthForm from '../components/AuthForm';


const Main = (props) =>{
    return(
        <div className="container">
            <Switch>
                <Route exact path="/" render={props => <Feed {...props}/>}/>
                <Route exact path="/signin" render={props => <AuthForm {...props}/>}/>
                <Route exact path="/signup" render={props => <AuthForm {...props}/>}/>
            </Switch>
        </div>
    );
};

export default withRouter(Main);