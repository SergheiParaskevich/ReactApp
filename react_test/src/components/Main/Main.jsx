import React from 'react'
import AvatarDescription from '../AvatarDescription'
import Post from '../Post'
import style from './style.module.css'

export default function Main() {

  return (
    <div className={style.main}>
      
        <img src='https://www.imgcorporations.com/images/bg-img.jpg'/>
        <AvatarDescription/>
        <div>My Posts</div>
        <div>New posts</div>
        <Post coment='I love You' likes='20 Likes' />
        
        
       
        
    </div>
  )
}
