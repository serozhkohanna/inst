import React, {Component} from 'react';
import styles from './Likes.css';
import {connect} from 'react-redux';

class Likes extends Component{
  render(){
    const {postID, likes} = this.props;
    return(
      <section>
        <div className = {styles.likes}>
          {likes[postID - 1].likes}
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return{
    likes:state.allPosts
  }
}
export default connect(mapStateToProps, mapDispatchToProps => ({}))(Likes)
