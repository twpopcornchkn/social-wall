import {LOAD_COMMENTS, ADD_COMMENT} from "../actionTypes";

const comments = (state = [], action) => {
  switch (action.type) {
    case LOAD_COMMENTS:
      return {...action.comments};
    case ADD_COMMENT:
      return {...state, comments: state.comments.conct(action.comment)};
    default:
      return state;
  }
};

export default comments;
