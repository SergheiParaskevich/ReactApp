import React  from 'react'
import style from '../Button/style.module.sass'

export default function Button({children}) {
  return (
   <button className={style.btnstyle}>{children}</button>
  )
}
