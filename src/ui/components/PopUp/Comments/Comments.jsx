import React, {Component} from 'react';
import styles from './Comments.css'

class Comments extends Component{
  render(){
    const {post} = this.props
    let comments = post.map(item => item.comments);
    return(
      <section>
        <div className = {styles.comments}>

            {post.map((item,index) => {
              return(
                <div key = {index} className = {styles.description}>
                  <img src = {item.userPic} alt = 'pho' className = {styles.img} />
                  <p><span>{item.user}</span> {item.description} </p>
                </div>
              )
            })}

            {comments[0].map((item,index) => {
              return(
                <div key = {index} className = {styles.userComments}>
                  <img src = {item.userPic} alt = 'pho' className = {styles.img} />
                  <p><span>{item.user}</span> {item.comment} </p>
                </div>
              )
            })}



        </div>
      </section>
    )
  }
}

export default Comments;
//
// {comments[0].map((item,index) => {
//   return(
//     <div key = {index} className = {styles.userComments}>
//       <img src = {item.userPic} alt = 'pho' className = {styles.img} />
//       <p><span>{item.user}</span> {item.comment} </p>
//     </div>
//   )
// })}
