import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <div>
        <NavLink to='/profile'>Profile</NavLink>
      </div>
      <div>
       <NavLink to='/messages' className={style.active}>Messages</NavLink>
      </div>
      <div>
        <NavLink to='/news'>News</NavLink>
      </div>
      <div>
      <NavLink to='/music'>Music</NavLink>
      </div>
      <div>
        <NavLink to='/options'>Options</NavLink>
      </div>
    </nav>
  );
}
