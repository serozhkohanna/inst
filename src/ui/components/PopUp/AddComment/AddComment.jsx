import React, {Component} from 'react';
import styles from './AddComment.css'

class AddComment extends Component{

  render(){
    return(
      <section>
        <div className = {styles.addComment}>
          <input  maxLength='100' />
          <button>add</button>
        </div>
      </section>
    )
  }
}

export default AddComment;
