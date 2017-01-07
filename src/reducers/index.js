import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './auth';
import PostsReducer from './posts';

const rootReducer = combineReducers({
  form: formReducer,
  auth: AuthReducer,
  posts: PostsReducer,
});

export default rootReducer;
