import React from 'react'
import style from '../Close/style.module.sass'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Close(props) {
  return (
    <button {...props} className={style.close}>x</button>
  )
}
