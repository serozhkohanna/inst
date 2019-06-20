import React, {Component} from 'react';
import styles from './Content.css';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

class Tagged extends Component{
  render(){
    console.log(this.props.tagged);
    return(
      <section>
        <div className = {styles.tagged}>
          <div className = {styles.grid}>
            <ul>
              {this.props.tagged.map((item,index) => {
                return(
                  <li key = {index} >
                  <NavLink to = {'/p/' + item.id}>
                    < img src = {item.photo} />
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
    tagged:state.allPosts.filter(item => item.tagged.includes(state.user.userName))
  }
}
export default connect(mapStateToProps, mapDispatchToProps =>({}))(Tagged);
