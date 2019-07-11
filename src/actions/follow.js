import {FOLLOW} from '../types/types';

const follow = (user,userFollowers) => ({
	type: FOLLOW,
	followers: user,
	newFollower: userFollowers+1
});

export default follow;
