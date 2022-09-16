import React from 'react'
import style from '../AddCommentForm/style.module.css'

export default function AddCommentForm({add_comment, post_id}) {
    const submit = (event) => {
        event.preventDefault();
        const {comment} = event.target;
        add_comment( post_id, comment.value);
        comment.value = '';
    }
  return (
    <form onSubmit={submit} className={style.comentarForm}>
        <input type='text' name='comment' placeholder='Comentar'/>
        <button>Add</button>
    </form>
  )
}
