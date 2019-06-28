import { combineReducers } from 'redux';

import user from './user';
import guest from './guest';
import allPosts from './allPosts';

const reducers = combineReducers({
    user,
    guest,
    allPosts
});

export default reducers;
