import React, { Component } from 'react';
import styles from './AddComment.css';
import { connect } from 'react-redux';
import addComment from '../../../../actions/addComment.js';

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
        if (e.keyCode === 13) {
            this.handleClick();
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
