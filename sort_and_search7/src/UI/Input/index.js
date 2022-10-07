import React from 'react'
import style from '../Input/style.module.sass'

export default function Input(props) {
  return (
    <input  className={style.inputstyle} 
           {...props} />
  )
}
