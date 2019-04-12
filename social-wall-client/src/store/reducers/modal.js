import { LOAD_MODAL, REMOVE_MODAL } from "../actionTypes";

const initialState = {
    show: false
}

export default (state = initialState, action) => {
    switch (action.type) {
      case LOAD_MODAL:
        return { ...state, show: true, postid: action.postid };
      case REMOVE_MODAL:
        return { ...state, show: false };
      default:
        return state;
    }
  };
  