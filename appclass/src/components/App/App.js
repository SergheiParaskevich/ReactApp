import React, { Component } from 'react'
import TodoContainer from './TodoContainer'
import AddTodo from '../AddTodoForm'

export default class App extends Component {

state = 
 {data: [
    {id: 1, title: 'poest', done: true},
    {id: 2, title: 'pospati', done: false},
    {id: 3, title: 'begat', done: false},
    {id: 4, title: 'guliat', done: true}
  ]}

  changeDone = (id) => {
    const target = this.state.data.find(todo => todo.id === id);
    target.done = !target.done;
    this.setState(this.state);
  }

  deleteTodo = (id) => {
    this.state.data = this.state.data.filter(item => item.id !== id);
   this.setState(this.state);
  }

  addTodo = (title) => {
   const todo = {
    id: Date.now(),
    title,
    done: false 
   };
   this.state.data.push(todo);
   this.setState(this.state)
  }

  render() {
    const {data} = this.state;
    return (
      <div>App
        <AddTodo/>
        <TodoContainer data={data} changeDone={this.changeDone.bind(this)} deleteTodo={this.deleteTodo}/>
      </div>
    )
  }
}
