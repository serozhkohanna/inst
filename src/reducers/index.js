import { combineReducers } from 'redux';

import application from './application';
import user from './user';
import guest from './guest';
import allPosts from './allPosts';

const reducers = combineReducers({
    application,
    user,
    guest,
    allPosts
});

export default reducers;
