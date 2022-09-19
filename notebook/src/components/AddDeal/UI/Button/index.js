import React from 'react'
import style from '../../UI/Button/style.module.sass'


export default function Button({children}) {
  return (
   <button className={style.button}>
    {children}
   </button>
  )
}
