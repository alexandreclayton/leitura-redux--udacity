import sortBy from 'sort-by'
import {
    ROOT_CHANGE_CATEGORY
    , ROOT_CHANGE_SORT
    , ROOT_LIST_CATEGORIES
    , ROOT_LIST_POSTS
    , ROOT_DIALOG_POST_FORM
    , ROOT_UPDATE_POSTS
    , ROOT_EDIT_POST
    , POST_REMOVE
} from '../actions/ActionsTypes';

const INITIAL_STATE = {
    categorySelected: 'all'
    , sortSelected: '-voteScore'
    , categories: []
    , posts: []
    , openDialogState: false
}

export default (state = INITIAL_STATE, action) => {
    let { categorySelected, sortSelected } = state;
    switch (action.type) {
        case ROOT_CHANGE_CATEGORY:
            return { ...state, categorySelected: action.payload }
        case ROOT_CHANGE_SORT:
            return { ...state, sortSelected: action.payload }
        case ROOT_LIST_CATEGORIES:
            return { ...state, categories: action.payload }
        case ROOT_LIST_POSTS:
            let posts = action.payload.filter(p => !p.deleted);
            let newPosts = posts.sort(sortBy(sortSelected));
            if (categorySelected !== 'all') {
                newPosts = newPosts.filter(p => p.category === categorySelected);
            }
            return { ...state, posts: newPosts }
        case ROOT_DIALOG_POST_FORM:
            return { ...state, openDialogState: action.payload }
        case ROOT_UPDATE_POSTS:
            if (categorySelected === "all" || action.payload.category === categorySelected) {
                return { ...state, posts: [...state.posts, action.payload] }
            } else {
                return { ...state }
            }
        case ROOT_EDIT_POST:
            return { ...state, posts: state.posts.map(p => (p.id === action.payload.id ? action.payload : p)) }
        case POST_REMOVE:
            return { ...state, posts: [...state.posts.filter(p => action.payload.id !== p.id)] }
        default:
            return state;
    }
}