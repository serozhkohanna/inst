import React,{Component} from 'react';
import styles from './Buttons.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class NextButton extends Component{
  render(){
    const {posts, post, postID} = this.props;
    return(
      <section>
        <div className={styles.nextArrow}></div>
      </section>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    posts:state.allPosts
  }
}
export default connect(mapStateToProps)(NextButton);
// if (posts[postID-1].user == 'leonardodicaprio') {
//   if (posts[postID].user == 'leonardodicaprio') {
//      newPostLink = posts[postID].id;
//   }else newPostLink = posts[postID-1].id;
// }else {
//   if (posts[postID] !== undefined && posts[postID].tagged == 'leonardodicaprio') {
//     newPostLink = posts[postID].id;
//   }else newPostLink = posts[postID-1].id;
// }
