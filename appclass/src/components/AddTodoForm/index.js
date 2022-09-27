import React, { Component } from 'react'

export default class AddTodo extends Component {

    submit = (event) => {
        event.preventDefault();
        const {addToDo} = this.props;
        const {title} = event.target;
        title.value = "";
    }

  render() {
    return (
      <form>
        <input type="text" placeholder="name" name="title"/>
        <button>Add</button>
      </form>
    )
  }
}
