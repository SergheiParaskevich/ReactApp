import React from 'react'
import { Link } from 'react-router-dom'
import style from '../NavBarMenu/style.module.css'

export default function Navbar() {
  return (
    <nav className={style.navmenu}>
        <Link to='/home'>Home</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/about'>About</Link>
    </nav>
  )
}
