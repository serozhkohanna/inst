import React, { Component } from 'react';
import styles from './AddComment.css';
import {connect} from 'react-redux';

class AddComment extends Component {
    state = {
      comment:''
    }
    handleClick = (e) =>{
      let {postID} = this.props;
      this.props.addComment(this.props.userData.userName, this.props.userData.userPic, this.state.comment,postID-1);
      this.setState({
        comment:''
      });
      this.onChange.value=''
    }
    handleChange = (e) =>{
      this.setState({
        comment:e.target.value
      })
    }
    enterKey = e =>{
      if (e.keyCode === 13) {
        this.handleClick()
      }
    }
    render () {
        return (
            <section>
                <div className = {styles.addComment}>
                    <input
                    maxLength='100'
                    placeholder='add comment'
                    ref={(input) => this.onChange = input}
                    onChange={this.handleChange}
                    onKeyDown={this.enterKey}
                     />
                    <button
                    onClick={this.handleClick}
                    disabled={!this.state.comment}
                    className={!this.state.comment ? styles.notActive : styles.active}>Post
                    </button>
                </div>
            </section>
        );
    }
}
const mapStateToProps = state => {
  return{
    userData:state.guest
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    addComment: (user, userPic, comment,postID) =>{
      dispatch({type:'ADD_COMMENT', user:user, userPic:userPic, comment:comment,postID:postID})
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddComment);
