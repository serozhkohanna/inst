import React, {Component} from 'react';
import styles from './User.css';
import {connect} from 'react-redux';
import Follow from '../Buttons/Follow.jsx';
import Suggested from '../Buttons/Suggested.jsx';
import Report from '../Buttons/Report.jsx';

class User extends Component{
  render(){
    const {userName, profilePhoto,posts, followers, followings, description,verified } = this.props.bio;
    return <section>
        <div className = {styles.content}>
          <div className = {styles.body}>

              <div className = {styles.userPic}>
                <span className = {styles.photoContainer}><img src = {profilePhoto} alt = 'userpic' className = {styles.img} /></span>
              </div>

              <div className = {styles.description}>

                <div className = {styles.userName}>
                  <h1>{userName}</h1>
                  <Follow />
                  <Suggested />
                  <Report />
                </div>

                <ul className = {styles.followers}>
                    <li>posts: {posts}</li>
                    <li>followers: {followers}</li>
                    <li>followings: {followings}</li>
                </ul>

                <div className  = {styles.about}>
                  <h1>{description.name}</h1>
                  <p>{description.about}</p>
                  <a href = {description.link}>{description.link}</a>
                </div>

              </div>

            </div>
        </div>
    </section>
  }
}
const mapStateToProps = (state) => {
  return {
    bio:state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps =>({}))(User);
