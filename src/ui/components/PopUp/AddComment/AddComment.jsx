import React, { Component } from 'react';
import styles from './AddComment.css';
import { connect } from 'react-redux';
import addComment from '../../../../actions/addComment.js';
const ENTER_BUTTON = 13;

class AddComment extends Component {
    state = {
        comment: ''
    }

    handleClick = (e) => {
        let { postID } = this.props;
        this.props.addComment(this.props.userData.userName, this.props.userData.userPic, this.state.comment, postID - 1);
        this.setState({
            comment: ''
        });
        this.onChange.value = '';
    }

    handleChange = (e) => {
        this.setState({
            comment: e.target.value
        });
    }

    enterKey = e => {
        if (e.keyCode === ENTER_BUTTON) {
            this.handleClick();
        }
    }
    render () {
      let {comment} = this.state
        return (
            <section>
                <div className = {styles.addComment}>
                    <input
                        maxLength='100'
                        placeholder='add comment'
                        value={comment}
                        onChange={this.handleChange}
                        onKeyDown={this.enterKey}
                    />
                    <button
                        onClick={this.handleClick}
                        disabled={!comment}
                        className={!comment ? styles.notActive : styles.active}>Post
                    </button>
                </div>
            </section>
        );
    }
}
const mapStateToProps = ({guest}) => {
    return {
        userData: guest
    };
};
const mapDispatchToProps = dispatch => {
    return {
        addComment: (user, userPic, comment, postID) => dispatch(addComment(user, userPic, comment, postID))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
