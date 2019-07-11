import React, { Component } from 'react';
import styles from './PopUp.css';
import { connect } from 'react-redux';
import Header from './Header/Header.jsx';
import Comments from './Comments/Comments.jsx';
import Like from '.././Buttons/Like/Like.jsx';
import Likes from '.././Likes/Likes.jsx';
import AddComment from './AddComment/AddComment.jsx';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class PopUp extends Component {
	static defaultProps={
      posts: []
    };
	render ()  {
		let {posts} = this.props;
	 	let newArrPost, next, prev, postIndex;
		let post = posts.filter(item => item.id === +this.props.match.params.post_id);
		let postID = this.props.match.params.post_id;

		if (post[0].user === 'leonardodicaprio') {
			 newArrPost = posts.filter(item => item.user === 'leonardodicaprio');
			 postIndex = newArrPost.indexOf(post[0]);
			 next = newArrPost[postIndex+1] !== undefined ? newArrPost[postIndex+1].id : newArrPost[postIndex].id;
			 prev = newArrPost[postIndex-1] !== undefined ? newArrPost[postIndex-1].id : newArrPost[postIndex].id
		}else{
			newArrPost = posts.filter(item => item.tagged == 'leonardodicaprio');
			postIndex = newArrPost.indexOf(post[0]);
			next = newArrPost[postIndex+1] !== undefined ? newArrPost[postIndex+1].id : newArrPost[postIndex].id;
			prev = newArrPost[postIndex-1] !== undefined ? newArrPost[postIndex-1].id : newArrPost[postIndex].id
		}
		return (
			<section>
				<div className={styles.popup} >
					<Link to='/'>
						<div className={styles.overlay}>
						</div>
					</Link>
					<Link to={`/p/${prev}`} className={styles.prevButton}><div></div></Link>
					<Link to={`/p/${next}`} className={styles.nextButton}><div></div></Link>
					<Link to='/'><span className={styles.close}></span></Link>
					<div className={styles.content} >
						<div className={styles.photo} >
							 <img src={post[0].photo} className={styles.img} />
						</div>
						<div className={styles.otherBlock} >
							<div className={styles.headerComponent}><Header post={post[0]} /></div>
							<div className={styles.commentsComponent}><Comments post={post[0]} /></div>
							<ul className={styles.buttons}>
								<li className={styles.components}><Like postID={postID} /></li>
								<li className={styles.components}><div className={styles.comment}></div></li>
								<li className={styles.components}><div className={styles.share}></div></li>
							</ul>
							<Likes post={post[0]} />
							<AddComment postID={postID} />
						</div>
					</div>
				</div>
			</section>
		);
	}
}
const mapStateToProps = ({allPosts}) => {
	return {
		posts: allPosts,
	};
};
export default connect(mapStateToProps)(PopUp);
