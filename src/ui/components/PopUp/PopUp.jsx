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
      posts: [],
			post:[]
    };
	render ()  {
		let nextPostLink, prevPostLink;
		let arrayPosts = [], arrayPostsPrev = [];
		let post = this.props.post.filter(item => item.id == this.props.match.params.post_id);
		let postID = this.props.match.params.post_id;

		for (var i = post[0].id; i < this.props.post.length; i++) {
			arrayPosts.push(this.props.post[i].id);
		}
		for (var i = post[0].id-1; i > 0; i--) {
			arrayPostsPrev.push(this.props.post[i].id-1);
		}
		nextPostLink = arrayPosts[0] || post[0].id;
		prevPostLink = arrayPostsPrev[0] || post[0].id;
		return (
			<section>
				<div className = {styles.popup} >
					<Link to='/'>
						<div className={styles.overlay}>
						</div>
					</Link>
					<Link to = {'/p/'+ prevPostLink} className={styles.prevButton}><div></div></Link>
					<Link to = {'/p/'+ nextPostLink} className={styles.nextButton}><div ></div></Link>
					<Link to='/'><span className={styles.close}></span></Link>
					<div className={styles.content} >
						<div className = {styles.photo} >
							{post.map((item, index) => <img key={index} src={item.photo} className={styles.img} />)}
						</div>
						<div className = {styles.otherBlock} >
							<div className={styles.headerComponent}><Header post={post} /></div>
							<div className={styles.commentsComponent}><Comments post={post} /></div>
							<ul className={styles.buttons}>
								<li className={styles.components}><Like post={post} postID={postID} /></li>
								<li className={styles.components}><div className={styles.comment}></div></li>
								<li className={styles.components}><div className={styles.share}></div></li>
							</ul>
							<Likes post={post} postID={postID} />
							<AddComment post={post} postID={postID} />
						</div>
					</div>
				</div>
			</section>
		);
	}
}
const mapStateToProps = ({allPosts}) => {
	return {
		post: allPosts,
	};
};
export default connect(mapStateToProps)(PopUp);
