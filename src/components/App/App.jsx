import React, { Component } from 'react';

import { AddingForm } from '../AddingForm';
import { TodoListing } from '../TodoListing';

class App extends Component {
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

    this.setState(prevState => ({
      todos: [...prevState.todos, newItem],
    }));

    taskName.value = '';
  };

  handleDone = (id) => {
    const { todos } = this.state;
    const newTodoList = todos.map(i => (i.id !== id ? i : { ...i, status: !i.done }));
    this.setState({ todos: newTodoList });
  };

  handleDelete = (id) => {
    const currentState = [...this.state.todos];
    this.setState({ todos: currentState.filter(i => i.id !== id) });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
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

export { App };
