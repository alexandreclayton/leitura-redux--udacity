import {
    ROOT_CHANGE_CATEGORY
    , ROOT_SHOW_POST
    , ROOT_NEW_POST
} from '../actions/ActionsTypes';

const INITIAL_STATE = {
    categorySelected: ''
    , posts: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ROOT_CHANGE_CATEGORY:
            return { ...state, categorySelected: action.payload }
        case ROOT_CHANGE_CATEGORY:
            return { ...state, posts: action.payload }
        default:
            return state;
    }
}