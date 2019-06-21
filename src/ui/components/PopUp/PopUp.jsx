import React,{Component} from 'react';
import styles from './PopUp.css';
import {connect} from 'react-redux';
import Header from './Header/Header.jsx';
import Comments from './Comments/Comments.jsx';
import Like from '.././Buttons/Like.jsx';
import Comment from '.././Buttons/Comment.jsx';
import Share from '.././Buttons/Share.jsx';
import Likes from '.././Likes/Likes.jsx';
import AddComment from './AddComment/AddComment.jsx';

class PopUp extends Component{

  render(){
    let post = this.props.post.filter(item => item.id == this.props.match.params.post_id)
    let postID = this.props.match.params.post_id;
    return(
      <section>
        <div className = {styles.popup}>
          <div className = {styles.fs}>
            <div className = {styles.contentArea}>

              <ul>
                {post.map((item,index) => <li key = {index} className = {styles.element}><img src = {item.photo} className = {styles.img} /></li>)}
              </ul>

              <div className = {styles.otherBlock}>
                <Header post = {post} />
                <Comments post = {post} />

                <ul className = {styles.buttons}>
                  <li className = {styles.components}><Like post = {post} postID = {postID} /></li>
                  <li className = {styles.components}><Comment /></li>
                  <li className = {styles.components}><Share /></li>
                </ul>

                <Likes post = {post} postID = {postID} />
                <AddComment />

              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    post:state.allPosts
  }
}
export default connect(mapStateToProps, mapDispatchToProps => ({}))(PopUp)
