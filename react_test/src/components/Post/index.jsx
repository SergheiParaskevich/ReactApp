import React from 'react'
import style from './style.module.css'

export default function Post({coment,likes}) {
  return (
    <div className={style.posts}>
       <img className={style.ava} src='https://i.yapx.ru/Ra8I0.jpg'/> 
        <div>{coment}</div>
        <div>{likes}</div>
    </div>
  )
}
