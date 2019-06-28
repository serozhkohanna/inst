import {FOLLOW, UNFOLLOW, LIKE, DISLIKE} from '../types/types.js';
const initialState = {
    followers: ['user1', 'user2', 'user3'],
    userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
    userName: 'user123',
    likedPostId: [null]
};
export default function (state = initialState, action) {
    switch (action.type) {
    case FOLLOW:
        return { ...state, followers: [...state.followers, action.followers] };
    case UNFOLLOW:
        return { ...state, followers: [ action.followers] };
    case LIKE:
        return {...state, likedPostId:[...state.likedPostId, action.postID+1]};
    case DISLIKE:
        return {...state, likedPostId:[ state.likedPostId] }
    default: return state;
    }
}
