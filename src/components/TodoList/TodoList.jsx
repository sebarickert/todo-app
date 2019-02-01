import React, { Component } from 'react';

import { AddingForm } from './TodoList.form';
import { TodoListing } from './TodoList.listing';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          task: 'get shit done',
          status: false,
        },
      ],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { todos } = this.state;
    const { taskName } = e.target;

    const stack = todos.map(i => i.id);
    const newID = stack.length === 0 ? 1 : Math.max(...stack) + 1;

    const newItem = {
      id: newID,
      task: taskName.value,
      status: false,
    };

    if (taskName.value === '') {
      taskName.classList.add('is-empty');
      taskName.placeholder = "Please don't leave me empty!";
    } else {
      this.setState(prevState => ({
        todos: [...prevState.todos, newItem],
      }));

      taskName.classList.remove('is-empty');
      taskName.placeholder = 'Tell me your plans!';

      taskName.value = '';
    }
  };

  handleDone = (id) => {
    const { todos } = this.state;
    const newTodoList = todos.map(i => (i.id !== id ? i : { ...i, status: !i.status }));
    this.setState({ todos: newTodoList });
  };

  handleDelete = (id) => {
    const currentState = [...this.state.todos];
    this.setState({ todos: currentState.filter(i => i.id !== id) });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-list">
        <AddingForm handleSubmit={this.handleSubmit} />
        <TodoListing
          todos={todos}
          handleDone={this.handleDone}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export { TodoList };
