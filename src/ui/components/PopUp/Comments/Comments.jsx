import React, { Component } from 'react';
import styles from './Comments.css';
import PropTypes from 'prop-types';

class Comments extends Component {
	static propTypes = {
        comments: PropTypes.array,
				post:PropTypes.object
    };

  static defaultProps = {
        post: {},
				comments:[]
    };

	render () {
		const { post } = this.props;
		const comments = post.comments;
		return (
			<section>
				<div className={styles.comments}>
					<div className={styles.description}>
						<img src={post.userPic} alt = 'pho' className={styles.img} />
						<div>
							<span className={styles.userName}>
								{post.user}
							</span> {post.description}
						</div>
					</div>
					{comments.map((item, index) => {
						return (
							<div key={index} className={styles.userComments}>
								<img src={item.userPic} alt='pho' className={styles.img} />
								<div><span className={styles.userName}>{item.user}</span>{item.comment}</div>
							</div>
						);
					})}
				</div>
			</section>
		);
	}
}

export default Comments;
