import {apiCall} from "../../services/api";
import {addError, removeError} from "../actions/errors";
import {LOAD_COMMENTS, ADD_COMMENT} from "../actionTypes";

export const loadComments = comments => ({
    type: LOAD_COMMENTS,
    comments
})
export const addComment = comment => ({
    type: ADD_COMMENT,
    comment
})

export const fetchComments = postid => {
    const token = localStorage.jwtToken;

    return dispatch => {
        return apiCall('get', process.env.REACT_APP_FIREBASE_BASE + 'comments.json?auth=' + token + '&orderBy="postid"&equalTo="' + postid + '"')
        .then((res)=>{
            dispatch(loadComments(res));
        }).catch(err => {
            dispatch(addError(err));
        })
    }

}

export const postNewComment = (postid, text) => (dispatch, getState) => {
    if(!text){
        dispatch(addError("Please enter a comment!"));
        return;
    }
    let {currentUser} = getState();
    const token = localStorage.jwtToken;
    const payload = {
        text, 
        uid: currentUser.user.uid,
        username: currentUser.user.username,
        createdDate: Date.now(),
        postid: postid,
        profileImg: localStorage.profile
    }

    return apiCall("post", process.env.REACT_APP_FIREBASE_BASE + "comments.json?auth=" + token , payload)
      .then(res => {
        dispatch(removeError());
        dispatch(fetchComments(postid));
      })
      .catch(err => dispatch(addError(err.message)));

}