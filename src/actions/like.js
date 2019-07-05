import {LIKE} from '../types/types';

const like = (likes, postID) => ({
	type: LIKE,
	likes: ++likes,
	postID
});

export default like;
