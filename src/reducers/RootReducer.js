import {
    ROOT_CHANGE_CATEGORY
    , ROOT_LIST_CATEGORIES
    , ROOT_LIST_POSTS
} from '../actions/ActionsTypes';

const INITIAL_STATE = {
    categorySelected: 'all'
    , categories: []
    , posts: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ROOT_CHANGE_CATEGORY:
            return { ...state, categorySelected: action.payload }
        case ROOT_LIST_CATEGORIES:
            return { ...state, categories: action.payload }
        case ROOT_LIST_POSTS:
            return { ...state, posts: action.payload }
        default:
            return state;
    }
}