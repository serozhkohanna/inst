import React, {Component} from 'react';
import styles from './Buttons.css';
import {connect} from 'react-redux';

class Suggested extends Component{
  render(){
    return <section>
      <button className = {this.props.followers ? styles.followed : styles.unfollowed} >Suggested</button>
    </section>;
  }
}
const mapStateToProps = ({guest, user}) =>{
  return{
    followers:guest.followers.some((item) => item === user.userName)
  }
}
export default connect(mapStateToProps, mapDispatchToProps =>({}))(Suggested)
