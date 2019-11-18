import React, { Component } from 'react';
import AddInput from 'Components/AddInput';
import TodoList from 'Components/TodoList';

class Main extends Component {
  render() {
    return (
      <div className="todo-container">
        <h1 className="todo-tit">Simple Todo App</h1>
        <AddInput />
        <TodoList />
      </div>
    );
  }
}

export default Main;
