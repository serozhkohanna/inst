import React, { Component } from 'react';
import styles from './Header.css';
import Follow from '../.././Buttons/Follow/Follow.jsx';
import Report from '../.././Buttons/Report/Report.jsx';
import Verify from '../../Verify/Verify.jsx';
import PropTypes from 'prop-types';

class Header extends Component {
  static propTypes={
      post: PropTypes.object.isRequired
  }
  render () {
      const {post} = this.props;
      return (
          <section className={styles.headerComponent}>
              <div className={styles.header}>
                          <div className={styles.user}>
                              <img src={post.userPic} className={styles.img} />
                              <p className={styles.userName}>{post.user}</p>
                              {post.verified && <Verify />}
                              <Follow />
                              <Report />
                          </div>
              </div>
          </section>
      );
  }
}
export default Header;
