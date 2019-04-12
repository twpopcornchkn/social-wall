import React, {Component} from 'react';
import Comment from "../../components/comments";
import {connect} from "react-redux";
import CardContent from '../../components/card-content';


class SinglePost extends Component {
    componentDidMount(){
        console.log("postid:", this.props.postid);
    }

    render(){
        const onePost = this.props.posts[this.props.postid];
        return(
            <div>
              <CardContent 
                    postid={onePost.id} 
                    userName={onePost.username}
                    image={onePost.image}
                    profileImg={onePost.profileImg}
                    text={onePost.text}
                    createdDate={onePost.createdDate}/>
            
            <Comment postid={onePost.id}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        postid: state.modal.postid
    }
}

export default connect(mapStateToProps)(SinglePost);
