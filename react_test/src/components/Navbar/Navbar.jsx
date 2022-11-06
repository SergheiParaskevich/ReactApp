import React from 'react'
import style from './style.module.css'

export default function Navbar() {
  return (
    <nav className={style.navbar}>
        <div>Profile</div>
        <div>Messages</div>
        <div>News</div>
        <div>Music</div>
        <div>Settings</div>
    </nav>
  )
}
