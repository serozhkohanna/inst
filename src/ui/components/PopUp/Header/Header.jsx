import React, {Component} from 'react';
import styles from './Header.css';
import {connect} from 'react-redux';
import Follow from '../.././Buttons/Follow.jsx';
import Report from '../.././Buttons/Report.jsx';

class Header extends Component{
  render(){
    const { post } = this.props;
    return(
      <section>
        <div className = {styles.header}>
             {post.map((item,index) => {
             return(
               <div key = {index} className = {styles.user}>
                  <img src = {item.userPic} className = {styles.img} />
                  <p className = {styles.userName}>{item.user}</p>
                  <Follow />
                  <Report />
               </div>
             )
           })}
        </div>
      </section>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    posted: state.allPosts
  }
}
export default connect(mapStateToProps, mapDispatchToProps =>({}))(Header);
