import {SET_CURRENT_USER} from "../actionTypes";

const intialState = {
    isAuthenticated: false,
    user: {} 
}
export default (state = intialState, action) => {
    switch(action.type){
        case SET_CURRENT_USER: 
            return {
                // !! turn empty object into false or if there are keys, true
                isAuthenticated: !!Object.keys(action.user).length,
                user: action.user
            }
        default:
            return state;
        
    }
}