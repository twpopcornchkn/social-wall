import React from 'react';
import './commentsStream.css';
import Comment from './comment/comment';

const commentsStream = (props) =>{
    return(
        <div className="commentsStream">
            <div className="comments-container">
                <h1>Comments</h1>
                <div id="comments-list" className="comments-list">
                    <div className="comment-main-level">
                        <Comment/>
                    </div>
                    <ul className="comments-list reply-list">
                        <li><Comment/></li>
                        <li><Comment/></li>
                    </ul>
                    <Comment/>
                </div>
            </div>
        </div>
    );
};

export default commentsStream;