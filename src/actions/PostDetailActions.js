import uuid from 'uuid';
import moment from 'moment';
import {
    DETAIL_GET_POST
    , DETAIL_GET_ALL_COMMENTS
    , DETAIL_OPEN_DIALOG_COMMENT
    , DETAIL_POST_HANDLE_CHANGE
    , DETAIL_GET_COMMENT
    , DETAIL_ADD_COMMENT
    , DETAIL_COMMENT_FORM_CLEAN
    , POST_VALID_FORM

} from './ActionsTypes';
import * as Api from '../util/api';

export const getPostDetailAction = (id) => {
    return dispatch => {
        Api.getPostsDetail(id).then(post => {
            dispatch({ type: DETAIL_GET_POST, payload: post });
        });
    }
}

export const getAllCommentsByPostId = (id) => {
    return dispatch => {
        Api.getAllCommentsByPostId(id).then(comments => {
            dispatch({ type: DETAIL_GET_ALL_COMMENTS, payload: comments });
        });
    }
}

export const postDetailOpenDialogCommentAction = (openDialogState) => {
    return {
        type: DETAIL_OPEN_DIALOG_COMMENT
        , payload: openDialogState
    }
}

export const postDetailGetCommentAction = (comment_id) => {
    return dispatch => {
        Api.getCommentDetail(comment_id).then(comment => {
            dispatch({ type: DETAIL_GET_COMMENT, payload: comment });
        });
    }
}

export const commentHandleChangeAction = (event) => {
    return {
        type: DETAIL_POST_HANDLE_CHANGE
        , field: event.target.name
        , payload: event.target.value
    }
}

export const postDetailCommentAddAction = (CommentEntity, PostEntity) => {
    let fieldsErros = [];
    let newComment = { ...CommentEntity };
    // init new post
    newComment.id = uuid.v1();
    newComment.timestamp = moment().valueOf();
    newComment.parentId = PostEntity.id;
    // Valid form
    for (let prop in newComment) {
        if (newComment[prop] === null || newComment[prop] === "") {
            fieldsErros.push(prop);
        }
    }
    return dispatch => {
        if (fieldsErros.length === 0) {
            Api.saveComment(newComment).then(comment => {
                dispatch({ type: DETAIL_ADD_COMMENT, payload: newComment });
                dispatch({ type: DETAIL_COMMENT_FORM_CLEAN });
            });
        } else {
            dispatch({ type: POST_VALID_FORM, payload: fieldsErros });
        }
    }
}