import {
    POST_FORM_SAVE
    , POST_HANDLE_CHANGE
    , POST_CHANGE_CATEGORY
} from '../actions/ActionsTypes';
import { PostEntity } from '../entities';

const INITIAL_STATE = {
    showDialog: false
    , PostEntity
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POST_FORM_SAVE:
            return { ...state, PostEntity: action.payload }
        case POST_HANDLE_CHANGE:
            console.log(state);
            return { ...state, PostEntity: { ...state.PostEntity, [action.field]: action.payload } }
        case POST_CHANGE_CATEGORY:
            return { ...state, PostEntity: { ...state.PostEntity, category: action.payload } }
        default:
            return state;
    }
}