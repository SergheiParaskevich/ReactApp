import React from "react";
import style from "./style.module.css";

export default function Messages() {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <div className={style.dialog}>Alexandra</div>
        <div className={style.dialog}>Stanislav</div>
        <div className={style.dialog}>Julia</div>
        <div className={style.dialog}>Iren</div>
        <div className={style.dialog}>Lidia</div>
      </div>
      <div className={style.messages}>
        <div className={style.message}>Hi</div>
        <div className={style.message}>How are you?</div>
        <div className={style.message}>What is your name ?</div>
        <div className={style.message}>What old are you?</div>
        <div className={style.message}>Where are you lives?</div>
      </div>
    </div>
  );
}
