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

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <AddingForm handleSubmit={this.handleSubmit} />
        <TodoListing todos={todos} />
      </div>
    );
  }
}

export { App };
