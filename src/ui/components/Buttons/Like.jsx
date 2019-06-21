import React, {Component} from 'react';
import styles from './Buttons.css';
import {connect} from 'react-redux';

class Like extends Component{

  render(){
    let {postID, likes, likedPhoto} = this.props;


    return(
      <div>
        <button>LIKE</button>
      </div>
    )
  }
}

export default Like
