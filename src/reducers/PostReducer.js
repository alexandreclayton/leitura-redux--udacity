import {
    ROOT_CHANGE_CATEGORY
    , ROOT_LIST_CATEGORIES
    , ROOT_LIST_POSTS
} from '../actions/ActionsTypes';
import { PostEntity } from '../entities';

const INITIAL_STATE = {
    showDialog: false
    , PostEntity
    , categories: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ROOT_CHANGE_CATEGORY:
            return { ...state, PostEntity: action.payload }
        case ROOT_LIST_CATEGORIES:
            return { ...state, categories: action.payload }
        case ROOT_LIST_POSTS:
            return { ...state, posts: action.payload }
        default:
            return state;
    }
}