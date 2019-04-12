import {combineReducers} from "redux";
import errors from "./errors";
import currentUser from "./currentUser";
import messages from "./messages";
import modal from "./modal";

const rootReducer = combineReducers({
    errors, 
    currentUser,
    messages,
    modal
});

export default rootReducer;