import React from 'react'
import style from '../Post/style.module.css'
import ComentContainer from '../ComentsComtainer';

export default function Post({title, text, like, change_like, id, comments, add_comment}) {

  const like_classes = [style.like_btn, like ? style.like_btn_active : ""];

  return (
    <div className={style.post}>
        <h1>{title}</h1>
        <p>{text}</p>
        <p className={like_classes.join(' ')}
        onClick={() => change_like(id)} >
          {like ? 'liked' : 'like?'}</p>
          <ComentContainer comments={comments} add_comment={add_comment} post_id={id}/>
    </div>
  )
}
