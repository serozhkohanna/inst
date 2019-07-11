import React, { Component } from 'react';
import styles from './AddComment.css';
import { connect } from 'react-redux';
import addComment from '../../../../actions/addComment.js';
import PropTypes from 'prop-types';
const ENTER_BUTTON = 13;

class AddComment extends Component {
    state = {
        comment: ''
    }

    static propTypes={
      userData:PropTypes.object,
      postID:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
      addComment:PropTypes.func.isRequired
    }

    static defaultProps={
      userData:{}
    }

    handleClick = (e) => {
        let { postID, userData } = this.props;
        this.props.addComment(userData.userName, userData.userPic, this.state.comment, postID - 1);
        this.setState({
            comment: ''
        });
    }

    handleChange = (e) => {
        this.setState({
            comment: e.target.value
        });
    }

    handleEnter = e => {
        if (e.keyCode === ENTER_BUTTON) {
            this.handleClick();
        }
    }
    render () {
      let {comment} = this.state;
        return (
            <section>
                <div className = {styles.addComment}>
                    <input
                        maxLength='100'
                        placeholder='Add a comment...'
                        value={comment}
                        onChange={this.handleChange}
                        onKeyDown={this.handleEnter}
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
