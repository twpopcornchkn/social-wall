import React, {Component} from 'react';
import CommentsStream from '../../components/comments/commentsStream';
import './CommentContainer.css';
class CommentContainer extends Component {
    render(){
        return(
            <div className="modal fade bd-example-modal-lg" id="commentLong" tabIndex="-1" role="dialog" aria-labelledby="commentLongTitle" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <CommentsStream/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>


        );
    }
}

export default CommentContainer;