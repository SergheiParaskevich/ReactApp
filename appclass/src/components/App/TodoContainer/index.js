import React, { Component } from 'react'
import TodoItem from '../../ToDoitem';
import style from '../TodoContainer/style.module.sass'



export default class TodoContainer extends Component {
  render() {
    const {data, changeDone, deleteTodo} = this.props;
    return (
      <div className={style.container}> 
        {
            data.map(item => <TodoItem  key={item.id} {...item} changeDone={changeDone} deleteTodo={deleteTodo} />)
        }
     </div>
    )
  }
}
