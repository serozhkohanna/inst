import React, {Component} from 'react';
import {NavLink } from 'react-router-dom';
import styles from './Content.css';

class Linked extends Component{
  render(){
    return <section>
        <div className = {styles.linked}>
          <ul className = {styles.list}>
              <li><NavLink to = '/'>POSTS</NavLink></li>
              <li><NavLink to = '/tagged/'>TAGGED</NavLink></li>
          </ul>
        </div>
      </section>;
  }
}
export default Linked;
