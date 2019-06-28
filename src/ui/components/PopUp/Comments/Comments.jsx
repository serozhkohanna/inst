import React, { Component } from 'react';
import styles from './Comments.css';
import Verify from '../../Verify/Verify.jsx';


class Comments extends Component {
    render () {
        const { post } = this.props;
        let comments = post.map(item => item.comments);
        return (
            <section className={styles.commentComponent}>
                <div className = {styles.comments}>

                    {post.map((item, index) => {
                        return (
                            <div key = {index} className = {styles.description}>
                                <img src = {item.userPic} alt = 'pho' className = {styles.img} />
                                <div>
                                  <span className={styles.userName}>
                                    {item.user}
                                  </span> {item.description}
                                </div>
                            </div>
                        );
                    })}

                    {comments[0].map((item, index) => {
                        return (
                            <div key = {index} className = {styles.userComments}>
                                <img src = {item.userPic} alt = 'pho' className = {styles.img} />
                                <div><span className={styles.userName}>{item.user} </span> {item.comment} </div>
                            </div>
                        );
                    })}

                </div>
            </section>
        );
    }
}

export default Comments;
