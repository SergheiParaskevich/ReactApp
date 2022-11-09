import React from 'react'
import style from './style.module.css'

export default function Navbar() {
  return (
    <nav className={style.navbar}>
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
    </nav>
  )
}
