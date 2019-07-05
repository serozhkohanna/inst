import {UNFOLLOW} from '../types/types';

const unFollow = (user, userFollowers) => ({
	type: UNFOLLOW,
	followers: user,
	deleteFollower: userFollowers-1
});

export default unFollow;
