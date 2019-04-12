import React, {Component} from 'react';
import CommentForm from '../components/commentForm';
import {fetchComments} from '../store/actions/comments';
import {connect} from 'react-redux';
import CardSub from './card-sub';

class Comments extends Component {
  componentDidMount(){
    this.props.fetchComments(this.props.postid);
  }
  render(){
    let commentElements = [];
    for (let key in this.props.comments ){
      commentElements.push({
        id:key,
        ...this.props.comments[key]
      })
    }

    //sort by createdDate descendingly 
    commentElements.sort(function(a, b){return b.createdDate - a.createdDate});
        
    let commentList = commentElements.map(c => (
          <div className="card my-1" key={c.id}>
                <div className="card-body">
                <p className="card-title">
                <img 
                    className="rounded-circle rounded-sm img-thumbnail" 
                    src={c.profileImg} 
                    width="50" 
                    height="50" 
                    alt={c.username}/>
                  <span className="px-1">@{c.username}</span> 
                  <CardSub createdDate={c.createdDate}/></p>
                  <p className="card-text">{c.text}</p>
                </div>
          </div>
    ))
    return(
      <div>
            <CommentForm/>
            {commentList}
      </div>
    );

  }

}

function mapStateToProps(state){
  return{
    comments: state.comments,
    postid: state.modal.postid
  }
}

export default connect(mapStateToProps, {fetchComments})(Comments);
                
                
