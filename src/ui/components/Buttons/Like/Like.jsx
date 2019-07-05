import React, { Component } from 'react';
import styles from './Like.css';
import { connect } from 'react-redux';
import like from '../../../../actions/like';
import dislike from '../../../../actions/dislike';
import PropTypes from 'prop-types';

class Like extends Component {
  static propTypes ={
    likes:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.array
    ]),
    liked:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.array
    ])
  }
  handleClick = () => {
      let { postID, likes, like, dislike, liked } = this.props;
      let li = likes[postID - 1].likes;

      if (liked.some(item => item == postID)) {
          dislike(likes[postID - 1].likes, postID - 1);
      } else {
          like(likes[postID - 1].likes, postID - 1);
      }
  }
  render () {
      return (
          <section>
              <div onClick={this.handleClick} className={this.props.liked.some(item => item == this.props.postID) ? styles.filled : styles.outline} ></div>
          </section>
      );
  }
}
const mapStateToProps = ({allPosts, guest}) => {
    return {
        likes: allPosts,
        liked: guest.likedPostId
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        like: (likes, postID) => dispatch(like(likes, postID)),
        dislike: (likes, postID) => dispatch(dislike(likes, postID))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Like);
