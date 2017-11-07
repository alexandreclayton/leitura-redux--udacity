import {
    DETAIL_GET_POST
    , DETAIL_GET_ALL_COMMENTS
    , DETAIL_OPEN_DIALOG_COMMENT
    , DETAIL_POST_HANDLE_CHANGE
    , DETAIL_GET_COMMENT
    , DETAIL_ADD_COMMENT
    , DETAIL_COMMENT_FORM_CLEAN
} from '../actions/ActionsTypes';
import { PostEntity, CommentEntity } from '../entities';

const INITIAL_STATE = {
    PostEntity
    , CommentEntity
    , comments: []
    , fieldsErros: []
    , openDialogState: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DETAIL_GET_POST:
            return { ...state, PostEntity: { ...action.payload } }
        case DETAIL_GET_ALL_COMMENTS:
            return { ...state, comments: [...action.payload] }
        case DETAIL_OPEN_DIALOG_COMMENT:
            return { ...state, openDialogState: action.payload }
        case DETAIL_POST_HANDLE_CHANGE:
            return { ...state, CommentEntity: { ...state.CommentEntity, [action.field]: action.payload } }
        case DETAIL_GET_COMMENT:
            return { ...state, CommentEntity: { ...action.payload } }
        case DETAIL_ADD_COMMENT:
            return { ...state, CommentEntity: { ...action.payload } }
        case DETAIL_COMMENT_FORM_CLEAN:
            return { ...state, CommentEntity, fieldsErros: [] }
        default:
            return state;
    }
}

