import uuid from 'uuid';
import moment from 'moment';
import {
    POST_HANDLE_CHANGE
    , POST_CHANGE_CATEGORY
    , POST_FORM_SAVE
} from './ActionsTypes';

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
    PostEntity.id = uuid.v1();
    PostEntity.timestamp = moment().valueOf();
    // Enviar para servidor
    return dispatch => {
        Api.savePost(PostEntity).then(post => {
            dispatch({ type: POST_FORM_SAVE, payload: PostEntity })
        });
    }
}