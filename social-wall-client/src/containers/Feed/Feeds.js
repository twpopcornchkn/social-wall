import React, {Component} from 'react';
import SocialPost from './SocialPost/SocialPost'; 
import CommentForm from '../../components/comments/commentFrom';
import {connect} from "react-redux";
import {fetchMessage} from "../../store/actions/messages";

class Feeds extends Component {
    state ={
        posts: {
            "1":   {
                "userName": 'Toronto Raptors',
                "userId": 1,
                "profileImg": "https://pbs.twimg.com/profile_images/1109489260661485570/cNx_Fi5H_bigger.png",
                "image": "https://pbs.twimg.com/media/D3KLOAlXkAE6-cU.jpg",
                "body": "Danny! Danny! Danny!\n29 Pts // 7 3PM // 5 Rebs / 3 Blk / 2 Stl\n@DGreen_14 | #WeTheNorth",
                "subtext": "Last updated 3 mins ago"
              },
            "2":   {
                "userName": 'Toronto Raptors',
                "userId": 1,
                "profileImg": "https://pbs.twimg.com/profile_images/1109489260661485570/cNx_Fi5H_bigger.png",
                "image": "https://pbs.twimg.com/media/D3KLOAlXkAE6-cU.jpg",
                "body": "Danny! Danny! Danny!\n29 Pts // 7 3PM // 5 Rebs / 3 Blk / 2 Stl\n@DGreen_14 | #WeTheNorth",
                "subtext": "Last updated 3 mins ago"
              },
        }
    }
    
    componentDidMount(){
        this.props.fetchMessage();
    }

    
    render(){
        const { messages, removeMessage, currentUser } = this.props;
        return(
            <div>
                <SocialPost posts={messages}/>
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