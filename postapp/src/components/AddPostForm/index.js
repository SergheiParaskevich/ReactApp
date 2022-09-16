import React from 'react'
import style from '../AddPostForm/style.module.css'

export default function AddPostForm({add_post}) {

const submit = (event) => {
    event.preventDefault();
    const {title, text} = event.target;
    add_post(title.value, text.value);
    title.value ='';
    text.value ='';
}

  return (
   <form className={style.postForm} onSubmit={submit} >
    <input type='text' placeholder='Heading'  name='title'/>
    <input type='text' placeholder='Your text'  name='text'/>
    <button>Publish</button>
   </form>
  )
}
