import {combineReducers} from "redux";
import errors from "./errors";
import currentUser from "./currentUser";
import messages from "./messages";
import modal from "./modal";
import comments from "./comments";

const rootReducer = combineReducers({
    errors, 
    currentUser,
    messages,
    modal,
    comments
});

export default rootReducer;