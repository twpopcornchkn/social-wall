import React, {Component} from 'react';
import SocialPost from './SocialPost/SocialPost'; 
import CommentForm from '../../components/commentFrom';
import {connect} from "react-redux";
import {fetchMessage} from "../../store/actions/messages";

class Feeds extends Component {
    componentDidMount(){
        this.props.fetchMessage();
    }

    
    render(){
        return(
            <div>
                <SocialPost posts={this.props.messages}/>
                <CommentForm/>
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