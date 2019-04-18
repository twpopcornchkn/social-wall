import {SET_CURRENT_USER, UPDATE_USER_PROFILE_IMAGE} from "../actionTypes";
import {apiCall, setTokenHeader, saveImgToImgur} from "../../services/api";
import {addError, removeError} from "./errors";
import jwtDecode from "jwt-decode";


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

export function setCurrentUserProfile(imgURL){
    return {
        type: UPDATE_USER_PROFILE_IMAGE,
        imgURL
    }
}

export function saveProfileImg(data){
    return dispatch => {
        return new Promise((resolve, reject) => {
            return saveImgToImgur(data)
            .then(imgLink =>{
                //update profile image for both localstorage & state
                dispatch(setCurrentUserProfile(imgLink));
                localStorage.setItem('profile', imgLink);

                //create payload
                let payload = {profileImageUrl: imgLink}

                dispatch(updateUserInfo("profileImageUrl", payload))
                dispatch(removeError());
                resolve(); 
            })
            .catch(err => {
                dispatch(addError(err));
                reject();
            })

        })
    }
}

export const updateUserInfo = (field, data) => {
    let token = localStorage.jwtToken;
    let user_key = localStorage.user_key;
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall("patch", process.env.REACT_APP_FIREBASE_BASE + `users/${user_key}/.json?auth=${token}`, data)
            .then(res =>{
                // console.log(res);
                dispatch(removeError());
                resolve(); 
            })
            .catch(err => {
                dispatch(addError(err.message));
                reject();
            })

        })
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export function getUserInfo(token, userData){
    let queryParameters =  '&orderBy="uid"&limitToFirst=1&equalTo="' + userData.uid + '"';
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall("get", process.env.REACT_APP_FIREBASE_BASE + "users.json?auth=" + token + queryParameters)
            .then(res =>{
                let newUserWithKey = {...Object.values(res)[0], user_key: Object.keys(res)[0]};
                // console.log(newUserWithKey);
                dispatch(setCurrentUser(newUserWithKey));
                localStorage.setItem('profile', Object.values(res)[0].profileImageUrl);
                localStorage.setItem('user_key', Object.keys(res)[0]);
                dispatch(removeError());
                resolve(); 
            })
            .catch(err => {
                dispatch(addError(err.message));
                reject();
            })

        })
    }
}

export function saveUserInfo(token, userData){
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall("post", process.env.REACT_APP_FIREBASE_BASE + "users.json?auth=" + token , userData)
            .then(res =>{
                let newUserWithKey = {...userData, user_key: Object.values(res)[0]};
                // console.log(newUserWithKey);
                dispatch(setCurrentUser(newUserWithKey));
                localStorage.setItem('profile', userData.profileImageUrl);
                localStorage.setItem('user_key', Object.values(res)[0]);
                dispatch(removeError());
                resolve(); 
            })
            .catch(err => {
                dispatch(addError(err.message));
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
            .then(res => {
                let {idToken, ...firebaseUserData} = res;

                //token & expiration to localstorage
                localStorage.setItem('jwtToken', idToken);
                const expirationDate = new Date (new Date().getTime() + firebaseUserData.expiresIn * 1000)
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(checkAuthTimeout(firebaseUserData.expiresIn));


                //save payload to user table  
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


//Not asynchronous code but this allow to dispatch multiple actions from within this action
export const authCheckState = (token) => {
    return dispatch => {
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(setCurrentUser({
                    profileImageUrl: localStorage.profile, 
                    user_key: localStorage.user_key, 
                    username: jwtDecode(localStorage.jwtToken).name, 
                    uid: jwtDecode(localStorage.jwtToken).user_id, 
                    email: jwtDecode(localStorage.jwtToken).email }));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};