import React, { Component } from 'react';
import styles from './Linked.css';
import Posts from '../Posts/Posts.jsx';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Linked extends Component {
  static defaultProps={
      posts: [],
    };

  state = {
      tagged: false,
    };

  handlePostClick = () => {
      this.setState({
          tagged: false,
        });
    };

  handleTaggedClick = () => {
      this.setState({
          tagged: true,
        });
    };

  render () {
    let {tagged} = this.state;
    let posts = !tagged
        ? this.props.posts.filter(item => item.user === 'leonardodicaprio')
        : this.props.posts.filter(item => item.tagged == 'leonardodicaprio');
    return <section>
          <div className = {styles.linked}>
              <ul className = {styles.list}>
                  <li onClick = {this.handlePostClick} className={tagged ? styles.checked : styles.listItem}>POSTS </li>
                  <li onClick = {this.handleTaggedClick} className={!tagged ? styles.checked : styles.listItem}> TAGGED</li>
              </ul>
              {<Posts posts = {posts} />}
          </div>
      </section>;
  }
}
const mapStateToProps = ({allPosts}) => {
    return {
        posts: allPosts,
      };
  };

export default connect(mapStateToProps)(Linked);
