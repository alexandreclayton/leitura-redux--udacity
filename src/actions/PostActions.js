import uuid from 'uuid';
import moment from 'moment';
import {
    ROOT_UPDATE_POSTS
    , ROOT_EDIT_POST
    , ROOT_DIALOG_POST_FORM
    , POST_HANDLE_CHANGE
    , POST_CHANGE_CATEGORY
    , POST_LOAD_DATA
    , POST_FORM_SAVE
    , POST_VALID_FORM
    , POST_CLEAN_FORM
    , POST_REMOVE
    , DETAIL_GET_POST
} from './ActionsTypes';
import { rootListCategoriesAction } from './RootActions';
import { postDetailCommentSaveAction } from './PostDetailActions';
import * as Api from '../util/api';

export const postHandleChangeAction = (event) => {
    return {
        type: POST_HANDLE_CHANGE
        , field: event.target.name
        , payload: event.target.value
    }
}

export const postChangeCategoryAction = category => {
    return {
        type: POST_CHANGE_CATEGORY
        , payload: category
    }
}

export const postFormSaveAction = (PostEntity) => {
    let fieldsErros = [];
    let newPost = { ...PostEntity };
    let insert = false;
    // init new post
    if (newPost.id === '') {
        insert = true;
        newPost.id = uuid.v1();
        newPost.timestamp = moment().valueOf();
    }
    // Valid form
    for (let prop in newPost) {
        if (newPost[prop] === null || newPost[prop] === "") {
            fieldsErros.push(prop);
        }
    }
    // Enviar para servidor
    return dispatch => {
        if (fieldsErros.length === 0) {
            if (insert) {
                Api.savePost(newPost).then(post => {
                    dispatch({ type: POST_FORM_SAVE, payload: newPost });
                    dispatch({ type: ROOT_UPDATE_POSTS, payload: post });
                    dispatch({ type: ROOT_DIALOG_POST_FORM, payload: false });
                    dispatch({ type: POST_CLEAN_FORM });
                });
            } else {
                Api.editPost(newPost).then(post => {
                    dispatch({ type: DETAIL_GET_POST, payload: post });
                    dispatch({ type: ROOT_EDIT_POST, payload: post });
                    dispatch({ type: ROOT_DIALOG_POST_FORM, payload: false });
                    dispatch({ type: POST_CLEAN_FORM });
                });
            }
        } else {
            dispatch({ type: POST_VALID_FORM, payload: fieldsErros });
        }
    }
}

export const postFormCancelAction = () => {
    return dispatch => {
        dispatch({ type: POST_CLEAN_FORM });
        dispatch({ type: ROOT_DIALOG_POST_FORM, payload: false });
    }
}

export const postEditAction = (PostEntity) => {
    return dispatch => {
        dispatch(rootListCategoriesAction());
        dispatch({ type: POST_LOAD_DATA, payload: PostEntity });
        dispatch({ type: ROOT_DIALOG_POST_FORM, payload: true });
    }
}

export const postRemoveAction = (post_id, history) => {
    return dispatch => {
        if (window.confirm("Você confirma a remoção da postagem?")) {
            Api.removePost(post_id).then(post => {
                dispatch({ type: POST_REMOVE, payload: post })
                // Adicionar rotina para "remover" os comentários.
                if (history) {
                    history.push("/");
                }
            });
        }
    }
}

export const postVoteAction = (post_id, option) => {
    return dispatch => {
        Api.votePost(post_id, { option }).then(post => {
            dispatch(postFormSaveAction(post));
        });
    }
}