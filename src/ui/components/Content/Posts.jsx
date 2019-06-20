import React, {Component} from 'react';
import styles from './Content.css';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

class Posts extends Component{
  render(){
    return(
      <section>
        <div className = {styles.posts}>
          <div className = {styles.grid}>
            <ul>
              {this.props.userPosts.map((item,index) => {
                return(
                  <li key = {index} >
                  <NavLink to = {'/p/' + item.id}>
                    < img src = {item.photo}  />
                  </NavLink>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    userPosts:state.allPosts.filter(item => item.user === state.user.userName)
  }
}

export default connect(mapStateToProps, mapDispatchToProps=>({}))(Posts);
