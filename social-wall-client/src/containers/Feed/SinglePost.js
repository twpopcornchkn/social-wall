import React, {Component} from 'react';
import Comment from "../../components/comments";
import {connect} from "react-redux";

class SinglePost extends Component {
    componentDidMount(){
        console.log("postid:", this.props.postid);
    }

    render(){
        return(
            <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.props.postid} Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
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
