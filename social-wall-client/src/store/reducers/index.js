import {combineReducers} from "redux";
import error from "./errors";
import currentUser from "./currentUser";

const rootReducer = combineReducers({
    error, 
    currentUser
});

export default rootReducer;