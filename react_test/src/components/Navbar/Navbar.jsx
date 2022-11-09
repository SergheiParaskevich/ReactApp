import React from 'react'
import style from './style.module.css'

export default function Navbar() {
  return (
    <nav className={style.navbar}>
        <div><a href='/profile'>Profile</a></div>
        <div><a href='/messages'>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
    </nav>
  )
}
