import React, { Component } from 'react';
import styles from './Buttons.css';
import { connect } from 'react-redux';

class Like extends Component {
  handleClick = () =>{
    let { postID, likes, likedPhoto } = this.props;
    let li = likes[postID - 1].likes;

    if (this.props.liked.some(item => item == postID)){
      this.props.dislike(likes[postID-1].likes,postID-1);
    }else {
      this.props.like(likes[postID-1].likes,postID-1);
    }
  }
    render () {
        return (
            <section>
                <div onClick={this.handleClick} className={this.props.liked.some(item => item == this.props.postID) ? styles.filled  : styles.outline} ></div>
            </section>
        );
    }
}
const mapStateToProps = (state) => {
  return{
    likes:state.allPosts,
    liked:state.guest.likedPostId
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    like:(likes,postID) => {
      dispatch({type:'LIKE', likes:++likes,postID:postID})
    },
      dislike:(likes,postID) =>{
      dispatch({type:'DISLIKE', likes:--likes,postID:postID})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Like);
