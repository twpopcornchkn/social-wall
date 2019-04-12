import {apiCall} from "../../services/api";
import {addError} from "../actions/errors";
import {LOAD_MESSAGES, REMOVE_MESSAGE} from "../actionTypes";

export const loadMessages = messages  => ({
    type: LOAD_MESSAGES,
    messages
})

export const fetchMessage = () => {
    const token = localStorage.jwtToken;

    return dispatch => {
        return apiCall('get', process.env.REACT_APP_FIREBASE_BASE + 'messages.json' + '?auth=' + token)
        .then((res)=>{
            dispatch(loadMessages(res));
        }).catch(err => {
            dispatch(addError(err));
        })
    }
}

export const postNewMessage = text => (dispatch, getState) => {
    if(!text){
        dispatch(addError("Please enter a message!"));
        return;
    }
    let { currentUser } = getState();
    const token = localStorage.jwtToken;
    const payload = {
        text, 
        uid: currentUser.user.uid,
        username: currentUser.user.username,
        createdDate: Date.now(),
        profileImg: localStorage.profile
    }
    return apiCall("post", process.env.REACT_APP_FIREBASE_BASE + `messages.json` + "?auth=" + token , payload)
      .then(res => {
        dispatch(fetchMessage());
      })
      .catch(err => dispatch(addError(err.message)));
};