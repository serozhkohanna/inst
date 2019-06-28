import React, { Component } from 'react';
import styles from './Content.css';
import Posts from './Posts.jsx';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Linked extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired
  }
  state = {
    tagged:false
  }
  handlePost = () =>{
    this.setState({
      tagged:false
    })
  }
  handleTagged = () => {
    this.setState({
      tagged:true
    })
  }
    render () {
      let posts = !this.state.tagged
        ? this.props.posts.filter(item => item.user === 'leonardodicaprio' )
        : this.props.posts.filter(item => item.tagged == 'leonardodicaprio');
        return <section>
            <div className = {styles.linked}>
                <ul className = {styles.list}>
                    <li onClick = {this.handlePost} className={this.state.tagged ? styles.checked : styles.listItem}>POSTS </li>
                    <li onClick = {this.handleTagged} className={!this.state.tagged ? styles.checked : styles.listItem}> TAGGED</li>
                </ul>
                {<Posts posts = {posts} />}
            </div>
        </section>;
    }
}
const mapStateToProps = state => {
  return {
    posts:state.allPosts
  }
}

export default connect(mapStateToProps)(Linked);
