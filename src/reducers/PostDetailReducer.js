import {
    DETAIL_GET_POST
    , DETAIL_GET_ALL_COMMENTS
} from '../actions/ActionsTypes';
import { PostEntity } from '../entities';

const INITIAL_STATE = {
    PostEntity
    , comments: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DETAIL_GET_POST:
            return { ...state, PostEntity: { ...action.payload } }
        case DETAIL_GET_ALL_COMMENTS:
            return { ...state, comments: [...action.payload] }
        default:
            return state;
    }
}

