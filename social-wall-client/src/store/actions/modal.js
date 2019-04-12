import {LOAD_MODAL, REMOVE_MODAL} from "../actionTypes";

export const loadModal = (postid) => {
    return {
        type: LOAD_MODAL,
        show: true, 
        postid: postid
    }
}

export const removeModal = () => {
    return {
        type: REMOVE_MODAL,
        show: false
    }
}