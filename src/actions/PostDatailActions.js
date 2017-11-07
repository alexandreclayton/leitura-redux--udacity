import {
    DETAIL_GET_POST
    , DETAIL_GET_ALL_COMMENTS
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