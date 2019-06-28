import React,{Component} from 'react';
import styles from './Buttons.css';

class PrevButton extends Component{
  render(){
    return(
      <section>
        <div className={styles.prevButton}></div>
      </section>
    )
  }
}
export default PrevButton;
