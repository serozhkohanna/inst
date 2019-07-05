const addComment = (user, userPic, comment, postID) => ({
	type: 'ADD_COMMENT',
	user,
	userPic,
	comment,
	postID
});

export default addComment;
