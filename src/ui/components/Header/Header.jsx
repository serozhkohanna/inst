import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component {
  state = {
    pageYOffset:0,
    inputZoom:false
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('click', this.handleClick);
}
  handleScroll = e =>{
    this.setState({
      pageYOffset:window.pageYOffset
    })
  }
  handleClick = e =>{
    if (this.inputField.contains(e.target)) {
      this.setState({
        inputZoom:true
      })
      this.input.focus()
    }else this.setState({
        inputZoom:false
    })
  }
    render () {
      return <section>
        <div className = {this.state.pageYOffset < 60 ? styles.content :styles.scrolledContent }>
          <nav className = {styles.nav}>
            <div className = {styles.label}>
              <span className={styles.logo}></span>
              <div className={styles.line} ></div>
              <p className={styles.title}></p>
            </div>
            <div className = {styles.inputField} ref={(inputField) => this.inputField = inputField} >
              <input placeholder='Search' type='text' className={styles.search} ref={(input) => this.input = input} />
              {!this.state.inputZoom ?
              <div className={styles.input} >
              <p className={styles.searchIcon}></p>
              <p className={styles.inputText}>Search</p>
              </div> :
              <p className={styles.searchBtn}></p>}
            </div>
            <ul className = {styles.icons}>
              <li className={styles.iconItem}></li>
              <li className={styles.iconItem}></li>
              <li className={styles.iconItem}></li>
            </ul>
          </nav>
        </div>
    </section>;
  }
}
export default Header;
