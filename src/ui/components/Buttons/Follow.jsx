import React, {Component} from 'react';
import styles from './Buttons.css';
import {connect} from 'react-redux';

class Follow extends Component{
  handleClick = () => {
    if (this.props.followers) {
      this.props.unFollow(this.props.followersArray.filter(item => item !== this.props.user.userName), this.props.userFollowers);
    }else {
      this.props.follow(this.props.user, this.props.userFollowers)
    }
  }
  render(){
      return <section>
      <button
      onClick = {this.handleClick}
      className = {this.props.followers ? styles.followed : styles.unfollowed}>
      follow
      </button>
    </section>;
  }
}
const mapStateToProps = ({guest, user}) => {
  return{
    followers:guest.followers.some((item) => item === user.userName),
    followersArray:guest.followers,
    user:user.userName,
    userFollowers:user.followers
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    follow: (userName,followers) => {
      dispatch({type:'FOLLOW', followers:userName, newFollower:followers + 1})
    },
    unFollow: (userName,followers) => {
      dispatch({type:'UNFOLLOW', followers:userName,deleteFollower:followers - 1 })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Follow);
