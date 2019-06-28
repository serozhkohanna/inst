import React from 'react';
import styles from './Buttons.css';
import {Link} from 'react-router-dom';

const Close = () =>{
  return(
    <section>
      <Link to='/'><div className={styles.close}></div></Link>
    </section>
  )
}
export default Close;
