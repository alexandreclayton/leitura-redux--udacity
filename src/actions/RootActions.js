import {
    ROOT_CHANGE_CATEGORY
    , ROOT_LIST_CATEGORIES
    , ROOT_LIST_POSTS
    , ROOT_DIALOG_POST_FORM
} from './ActionsTypes';
import * as Api from '../util/api';

export const rootChangeCategoryAction = category => {
    return {
        type: ROOT_CHANGE_CATEGORY
        , payload: category
    }
}

export const rootListCategoriesAction = () => {
    return dispatch => {
        Api.getAllCategories().then(categories => {
            dispatch({ type: ROOT_LIST_CATEGORIES, payload: categories })
        });
    }
}

export const rootListPostsAction = () => {
    return dispatch => {
        Api.getAllPosts().then(posts => {
            console.log(posts);
            dispatch({ type: ROOT_LIST_POSTS, payload: posts })
        });
    }
}

export const rootOpenDialogAction = (openDialogState) => {
    return {
        type: ROOT_DIALOG_POST_FORM
        , payload: openDialogState
    }
}