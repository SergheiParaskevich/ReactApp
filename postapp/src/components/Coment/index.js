import React from 'react'
import style from '../Coment/style.module.css'


export default function Coment({text}) {
  return (
   <p className={style.comment}>
    {text}
   </p>
  )
}
