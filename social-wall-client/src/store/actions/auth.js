import {SET_CURRENT_USER} from "../actionTypes";
import {apiCall, setTokenHeader} from "../../services/api";
import {addError, removeError} from "./errors";

export function setCurrentUser(user){
    return{
        type: SET_CURRENT_USER,
        user: user
    }
}

export function setAuthorizationToken(token){
    setTokenHeader(token);
  }

export function logout(){
    return dispatch => {
      localStorage.clear();
      setAuthorizationToken(false);
      dispatch(setCurrentUser({})); 
    }
  }

export function getUserInfo(token, userData){
    let queryParameters =  '&orderBy="uid"&limitToFirst=1&equalTo="' + userData.uid + '"';
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall("get", process.env.REACT_APP_FIREBASE_BASE + "users.json?auth=" + token + queryParameters)
            .then(res =>{
                // console.log(Object.values(res)[0]);
                dispatch(setCurrentUser(Object.values(res)[0]));
                localStorage.setItem('profile', Object.values(res)[0].profileImageUrl);
                resolve(); 
            })
            .catch(err => {
                reject();
            })

        })
    }
}
export function saveUserInfo(token, userData){
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall("post", process.env.REACT_APP_FIREBASE_BASE + "users.json?auth=" + token , userData)
            .then(() =>{
                dispatch(setCurrentUser(userData));
                localStorage.setItem('profile', userData.profileImageUrl);
                resolve(); 
            })
            .catch(err => {
                reject();
            })

        })
    }
}

export function authUser(type, userData){
    let URL = type === "signup" ? process.env.REACT_APP_FIREBASE_AUTH_SIGNUP : process.env.REACT_APP_FIREBASE_AUTH_SIGNIN;
    return dispatch => {
        return new Promise((resolve, reject)=>{
            return apiCall("post", URL+process.env.REACT_APP_FIREBASE_API_KEY, {displayName: userData.username, returnSecureToken: true, ...userData})
            .then(({idToken, ...firebaseUserData}) => {
                localStorage.setItem('jwtToken', idToken);
                const payload =  {
                    username: firebaseUserData.displayName,
                    uid: firebaseUserData.localId,
                    email: firebaseUserData.email,
                    profileImageUrl: userData.profileImageUrl}
                setAuthorizationToken(idToken);

                if(type==="signup"){
                    dispatch(saveUserInfo(idToken, payload));
                }else if(type ==="signin"){
                    dispatch(getUserInfo(idToken, payload));
                }

                dispatch(removeError());
                resolve(); 
            })
            .catch(err =>{
                dispatch(addError(err.message));
                reject();
            })
        })
    }
}