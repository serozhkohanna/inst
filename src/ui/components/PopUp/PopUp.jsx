import React, { Component } from 'react';
import styles from './PopUp.css';
import { connect } from 'react-redux';
import Header from './Header/Header.jsx';
import Comments from './Comments/Comments.jsx';
import Like from '.././Buttons/Like.jsx';
import Comment from '.././Buttons/Comment.jsx';
import Share from '.././Buttons/Share.jsx';
import Likes from '.././Likes/Likes.jsx';
import AddComment from './AddComment/AddComment.jsx';
import {Link} from 'react-router-dom';
import Close from '../Buttons/Close.jsx';
import NextButton from '../Buttons/NextButton.jsx';
import PrevButton from '../Buttons/PrevButton.jsx';

class PopUp extends Component {
 render () {
  let post = this.props.post.filter(item => item.id == this.props.match.params.post_id);
  let postID = this.props.match.params.post_id;
    return (
     <section>
      <div className = {styles.popup} >
        <Link to='/'>
          <div className={styles.overlay}>
          </div>
        </Link>

        <span className={styles.prevButton}><PrevButton /></span>
        <span className={styles.nextButton}><NextButton postID={postID} post={post} /></span>
        <span className={styles.close}><Close /></span>

        <div className={styles.content} >
          <div className = {styles.photo} >
            {post.map((item,index) => <img key={index} src={item.photo} className={styles.img} />)}
          </div>
          <div className = {styles.otherBlock} >
            <Header post={post} />
            <Comments post={post} />

            <ul className={styles.buttons}>
              <li className={styles.components}><Like post={post} postID={postID} /></li>
              <li className={styles.components}><Comment /></li>
              <li className={styles.components}><Share /></li>
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
const mapStateToProps = (state) => {
    return {
        post: state.allPosts
    };
};
export default connect(mapStateToProps, mapDispatchToProps => ({}))(PopUp);
