import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.item}>
        <NavLink to='/profile' className={({ isActive })  => isActive ? style.active : undefined}>Profile</NavLink>
      </div>
      <div className={style.item}>
       <NavLink to='/messages' className={({ isActive })  => isActive ? style.active : undefined}>Messages</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/news' className={({ isActive })  => isActive ? style.active : undefined}>News</NavLink>
      </div>
      <div className={style.item}>
      <NavLink to='/music' className={({ isActive })  => isActive ? style.active : undefined}>Music</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/options' className={({ isActive })  => isActive ? style.active : undefined}>Options</NavLink>
      </div>
    </nav>
  );
}
