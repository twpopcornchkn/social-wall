import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Navbar extends Component {
 
    render(){
        return(
            <nav className="navbar navbar-expand navbar-dark bg-primary">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <i className="fas fa-drumstick-bite"></i> Drumstick Social 
                        </Link>
                    </div>
                    <ul className="nav navbar-nav nav-bar-right">
                        <li>
                            <Link to="/signup">Sign up</Link>
                        </li>
                        <li>
                            <Link to="/signin">Sign in</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}


export default connect(mapStateToProps, null)(Navbar);