import React, {Component} from 'react';
import styles from './Header.css';

class Header extends Component{
  render(){
    return <section>
        <div className = {styles.content}>
          <nav className = {styles.nav}>

            <div className = {styles.label}>
              instagram
            </div>

            <div className = {styles.inputField}>
              <input />
            </div>

            <div className = {styles.icons}>
              icon
            </div>

          </nav>
        </div>
    </section>
  }
}
export default Header;
