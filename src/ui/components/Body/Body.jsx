import React, {Component} from 'react';
import styles from './Body.css';
import User from '../User/User.jsx';

class Body extends Component{
  render(){
    return <section>
      <User />
    </section>;
  }
}
export default Body
