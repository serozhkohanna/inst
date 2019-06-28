import React, { Component } from 'react';
import styles from './User.css';
import { connect } from 'react-redux';
import Follow from '../Buttons/Follow.jsx';
import Suggested from '../Buttons/Suggested.jsx';
import Report from '../Buttons/Report.jsx';
import Verify from '../Verify/Verify.jsx';
import PropTypes from 'prop-types';

class User extends Component {
  static propTypes = {
    bio:PropTypes.shape({
      userName:PropTypes.string.isRequired,
      profilePhoto:PropTypes.string.isRequired,
      posts:PropTypes.number.isRequired,
      followers:PropTypes.number.isRequired,
      followings:PropTypes.number.isRequired,
      verified:PropTypes.bool.isRequired,
      description:PropTypes.shape({
        name:PropTypes.any,
        about:PropTypes.any,
        link:PropTypes.any
      })
    })
  }
      render () {
        const { userName, profilePhoto, posts, followers, followings, description, verified } = this.props.bio;
        return <section>
            <div className = {styles.content}>
                <div className = {styles.body}>

                    <div className = {styles.userPic}>
                        <span className = {styles.photoContainer}><img src = {profilePhoto} alt = 'userpic' className = {styles.img} /></span>
                    </div>

                    <div className = {styles.description}>

                        <div className = {styles.userName}>
                            <h1 className={styles.title}>{userName}</h1>
                            {verified ? <Verify /> : null}
                            <Follow />
                            <Suggested />
                            <Report />
                        </div>

                        <ul className = {styles.followers}>
                            <li className={styles.followersList}><span className={styles.data}>{posts}</span> posts</li>
                            <li className={styles.followersList}><span className={styles.data}>{followers}</span> followers</li>
                            <li className={styles.followersList}><span className={styles.data}>{followings}</span> following</li>
                        </ul>

                        <div className = {styles.about}>
                            <h1 className={styles.name}>{description.name}</h1>
                            <p>{description.about}</p>
                            <a href = {`https://`+description.link} className={styles.link}>{description.link}</a>
                        </div>

                    </div>

                </div>
            </div>
        </section>;
    }
}
const mapStateToProps = (state) => {
    return {
        bio: state.user
    };
};

export default connect(mapStateToProps)(User);
