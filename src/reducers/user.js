import {FOLLOW, UNFOLLOW} from '../types/types.js';

const initialState = {
    userName: 'leonardodicaprio',
    profilePhoto: 'https://pbs.twimg.com/profile_images/694662257586892802/mdc5ELjj_400x400.jpg',
    posts: 1015,
    followers: 55,
    followings: 32,
    description: {
        name: 'Leonardo DiCaprio',
        about: 'Actor and Environmentalist',
        link: 'globaldealfornature.org'
    },
    verified: true
};

export default function (state = initialState, action) {
    switch (action.type) {
    case FOLLOW:
        return { ...state, followers: action.newFollower };
    case UNFOLLOW:
        return { ...state, followers: action.deleteFollower };
    default: return state;
    }
}
