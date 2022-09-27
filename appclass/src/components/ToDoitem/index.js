
import React, { Component } from 'react'
import s from '../ToDoitem/style.module.sass'

export default class TodoItem extends Component {
  render() {
    const {id, title, done, changeDone, deleteTodo} = this.props;
    const style = {
        textDecoration: 'line-through'
    }
    return (
        <div dblClick={()=> deleteTodo(id)} onClick={()=>changeDone(id)} style={done ? style : {}} className={s.item}>
            <p>{title}</p>
        </div>
      
    )
  }
}
