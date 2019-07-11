import React from 'react';
import styles from './Likes.css';

const Likes = (props) =><div className={styles.likes}>{props.post.likes} likes</div>;

export default Likes;
