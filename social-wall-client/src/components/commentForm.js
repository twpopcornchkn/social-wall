import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postNewComment} from '../store/actions/comments';

class commentForm extends Component {
    state = {
        comment: ""
    }
    handleNewComment = e => {
        e.preventDefault();
        this.props.postNewComment(this.props.postid, this.state.comment);
        this.setState({comment: ""});
    }

    render(){
        return(
        <div>
            {this.props.errors.message && (
                <div className="alert alert-danger">{this.props.errors.message}</div>
            )}
       
        <form onSubmit={this.handleNewComment} style={{width:"100%"}} className="commentForm my-2">
            <textarea 
                className="form-control" 
                rows="2"
                placeholder="Reply" 
                onChange={e => this.setState({comment: e.target.value})} value={this.state.comment}>    
            </textarea>

            <button type="submit" className="btn btn-success float-right ml-1">
                Reply
            </button>
        </form>
        </div>
        );
    }


}

function mapStateToProps(state){
    return{
        errors: state.errors,
        postid: state.modal.postid
    }
}

export default connect(mapStateToProps, {postNewComment})(commentForm);
