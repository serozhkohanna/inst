import {DISLIKE} from '../types/types';

const dislike = (likes, postID) => ({
	type: DISLIKE,
	likes: --likes,
	postID
});

export default dislike;
