import React from 'react'
import style from '../Nav/style.module.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className={style.nav_menu}>
        <Link to='/configurations'> Configuration </Link>
        <Link to='/teams'> Teams </Link>
       
    </nav>
  )
}
