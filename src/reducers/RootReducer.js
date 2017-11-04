import {
    ROOT_CHANGE_CATEGORY
    , ROOT_LIST_CATEGORIES
    , ROOT_LIST_POSTS
    , ROOT_DIALOG_POST_FORM
    , ROOT_UPDATE_POSTS
} from '../actions/ActionsTypes';

const INITIAL_STATE = {
    categorySelected: 'all'
    , categories: []
    , posts: []
    , openDialogState: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ROOT_CHANGE_CATEGORY:
            return { ...state, categorySelected: action.payload }
        case ROOT_LIST_CATEGORIES:
            return { ...state, categories: action.payload }
        case ROOT_LIST_POSTS:
            return { ...state, posts: action.payload }
        case ROOT_DIALOG_POST_FORM:
            return { ...state, openDialogState: action.payload }
        case ROOT_UPDATE_POSTS:
            return { ...state, posts: [...state.posts, action.payload] }
        default:
            return state;
    }
}