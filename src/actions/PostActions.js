import uuid from 'uuid';
import moment from 'moment';
import {
    POST_HANDLE_CHANGE
    , POST_CHANGE_CATEGORY
    , POST_FORM_SAVE
    , ROOT_UPDATE_POSTS
    , POST_VALID_FORM
} from './ActionsTypes';

import * as Api from '../util/api';


export const postHandleChangeAction = (event) => {
    console.log(event.target.errorText);
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
    // Valid form
    for (let prop in PostEntity) {
        if (PostEntity[prop] === null || PostEntity[prop] === "") {
            fieldsErros.push(prop);
            debugger;
        }
    }
    // Enviar para servidor
    return dispatch => {
        if (fieldsErros.length === 0) {
            PostEntity.id = uuid.v1();
            PostEntity.timestamp = moment().valueOf();
            Api.savePost(PostEntity).then(post => {
                dispatch({ type: POST_FORM_SAVE, payload: PostEntity });
                dispatch({ type: ROOT_UPDATE_POSTS, payload: post });
            });
        } else {
            dispatch({ type: POST_VALID_FORM, payload: fieldsErros });
        }
    }
}