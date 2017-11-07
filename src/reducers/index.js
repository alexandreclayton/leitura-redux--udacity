import { combineReducers } from 'redux';
import RootReducer from './RootReducer';
import PostReducer from './PostReducer';
import PostDetailReducer from './PostDetailReducer';


export default combineReducers({
    RootReducer, PostReducer, PostDetailReducer
})
