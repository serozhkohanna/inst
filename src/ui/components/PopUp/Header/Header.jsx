import React, { Component } from 'react';
import styles from './Header.css';
import { connect } from 'react-redux';
import Follow from '../.././Buttons/Follow.jsx';
import Report from '../.././Buttons/Report.jsx';
import Verify from '../../Verify/Verify.jsx';
import PropTypes from 'prop-types';

class Header extends Component {
  static propTypes = {
    post:PropTypes.array.isRequired
  }
  render () {
    const { post } = this.props;
    return (
      <section className={styles.headerComponent}>
        <div className = {styles.header}>
          {post.map((item, index) => {
            return (
              <div key = {index} className = {styles.user}>
                <img src = {item.userPic} className = {styles.img} />
                <p className = {styles.userName}>{item.user}</p>
                {item.verified ? <Verify /> : null}
                <Follow />
                <Report />
              </div>
           );
          })}
        </div>
    </section>
  );
 }
}
const mapStateToProps = (state) => {
    return {
        posted: state.allPosts
    };
};
export default connect(mapStateToProps, mapDispatchToProps => ({}))(Header);
