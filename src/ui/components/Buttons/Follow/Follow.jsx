import React, { Component } from 'react';
import styles from './Follow.css';
import { connect } from 'react-redux';
import follow from '../../../../actions/follow.js';
import unFollow from '../../../../actions/unFollow.js';
import PropTypes from 'prop-types';

class Follow extends Component {
  static propTypes={
    userFollowers:PropTypes.number.isRequired,
    followers:PropTypes.oneOfType([
        PropTypes.string, 
        PropTypes.array
    ]),
    user:PropTypes.string.isRequired
  }
  handleClick = () => {
      let {user, userFollowers, follow, unFollow, followers} = this.props;
      if (followers.some((item) => item === user)) {
          unFollow(followers.filter(item => item !== user.userName), userFollowers);
      } else {
          follow(user,userFollowers);
      }
  }
  render () {
      let follow = this.props.followers.some((item) => item === this.props.user);
      return <section>
          <button
              onClick = {this.handleClick}
              className = {follow ? styles.followed : styles.unfollowed}>
              {follow ? 'Following' : 'Follow'}
          </button>
      </section>;
  }
}
const mapStateToProps = ({ guest, user }) => {
    return {
        followers: guest.followers,
        user: user.userName,
        userFollowers: user.followers
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (user,userFollowers) => dispatch(follow(user,userFollowers)),
        unFollow: (user,userFollowers) => dispatch(unFollow(user,userFollowers))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Follow);
