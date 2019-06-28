import React, { Component } from 'react';
import styles from './Content.css';
import {Link} from 'react-router-dom';
import Likes from '../Likes/Likes.jsx';
import like from './icon/like.png';
import comment from './icon/comment.png';
import PropTypes from 'prop-types';

class Posts extends Component {
  static propTypes = {
    posts:PropTypes.array.isRequired
  }
  render () {
      return (
        <section>
          <div className = {styles.posts}>
              <div className = {styles.grid}>
                {this.props.posts.map((item,index) => {
                  return (
                    <div key = {index} className={styles.photoes}>
                      <Link to={'/p/'+item.id} postlist={this.props}>
                        <img src={item.photo} className={styles.img} />
                        <div className={styles.overlay}>
                          <img src={like} className={styles.icon} />
                          <p className={styles.amount}>{item.likes > 1000 ? Math.round(item.likes/1000) + 'tsd' : item.likes }</p>
                          <img src={comment} className={styles.icon} />
                          <p>{item.comments.length}</p>
                        </div>
                      </Link>
                    </div>
                   )
                 })}
              </div>
          </div>
      </section>
    );
  }
}
export default Posts
