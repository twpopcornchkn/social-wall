import React, {Component} from 'react';
import SocialPost from './SocialPost/SocialPost'; 
import {connect} from "react-redux";
import {fetchMessage} from "../../store/actions/messages";
import SinglePost from "./SinglePost";

class Feeds extends Component {
    componentDidMount(){
        this.props.fetchMessage();
    }

    
    render(){
        return(
            <div>
                <SocialPost posts={this.props.messages}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        messages: state.messages,
        currentUser: state.currentUser.user
    }
}

export default connect(mapStateToProps, {fetchMessage})(Feeds);