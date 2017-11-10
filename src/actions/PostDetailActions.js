import uuid from 'uuid';
import moment from 'moment';
import {
    DETAIL_GET_POST
    , DETAIL_GET_ALL_COMMENTS
    , DETAIL_OPEN_DIALOG_COMMENT
    , DETAIL_POST_HANDLE_CHANGE
    , DETAIL_GET_COMMENT
    , DETAIL_ADD_COMMENT
    , DETAIL_EDIT_COMMENT
    , DETAIL_REMOVE_COMMENT
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
            dispatch({ type: DETAIL_GET_ALL_COMMENTS, payload: comments.filter(c => !c.deleted) });
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

export const postDetailCommentSaveAction = (CommentEntity, PostEntity) => {
    let fieldsErros = [];
    let newComment = { ...CommentEntity };
    let insert = false;
    // init new post
    if (newComment.id === '') {
        insert = true;
        newComment.id = uuid.v1();
        newComment.timestamp = moment().valueOf();
        newComment.parentId = PostEntity.id;
    }
    // Valid form
    for (let prop in newComment) {
        if (newComment[prop] === null || newComment[prop] === "") {
            fieldsErros.push(prop);
        }
    }
    return dispatch => {
        if (fieldsErros.length === 0) {
            if (insert) {
                Api.saveComment(newComment).then(comment => {
                    dispatch({ type: DETAIL_ADD_COMMENT, payload: newComment });
                    dispatch({ type: DETAIL_COMMENT_FORM_CLEAN });
                    dispatch(postDetailOpenDialogCommentAction(false));
                });
            } else {
                Api.editComment(newComment).then(comment => {
                    dispatch({ type: DETAIL_EDIT_COMMENT, payload: newComment });
                    dispatch({ type: DETAIL_COMMENT_FORM_CLEAN });
                    dispatch(postDetailOpenDialogCommentAction(false));
                });
            }
        } else {
            dispatch({ type: POST_VALID_FORM, payload: fieldsErros });
        }
    }
}

export const postDetailCommentEditAction = (comment_id) => {
    return dispatch => {
        dispatch(postDetailGetCommentAction(comment_id));
        dispatch(postDetailOpenDialogCommentAction(true));
    }
}

export const postDetailCommentRemoveAction = (comment_id) => {
    return dispatch => {
        if (window.confirm("Você confirma a remoção do comentário?")) {
            Api.deleteComment(comment_id).then(comment => {
                dispatch({ type: DETAIL_REMOVE_COMMENT, payload: comment });
            });
        }
    }
}