import React, { Component } from 'react';

// Imports all needed components for TodoList component.
import { AddingForm, TodoListing, TodoListEmpty } from './';

// Create 'TodoList' class to be used as our 'brain'.
// It keeps all functions and manages state.
class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  // Function to update input's class and placeholder.
  setInputError = (input) => {
    const currentInput = input;
    currentInput.classList.add('is-empty');
    currentInput.placeholder = "Please don't leave me empty!";
  };

  // Function to update input's class and placeholder.
  setInputNormal = (input) => {
    const currentInput = input;
    currentInput.classList.remove('is-empty');
    currentInput.placeholder = 'Tell me your plans!';
  };

  // Create the 'handleSubmit' function to be used when the TodoForm is submitted.
  handleSubmit = (e) => {
    // When clicking on the submit button on the TodoForm, it will prevent it to "send" and refresh the page.
    e.preventDefault();

    // Declare variables from state and the input field used on the TodoForm.
    const { todos } = this.state;
    const { taskName } = e.target;

    // If no value is given in the input and submitted, it will change the placeholder text and add a class to the input.
    if (taskName.value === '') {
      // Adds 'is-empty' class and updates placeholder text.
      this.setInputError(taskName);

      return;
    }

    // Removes 'is-empty' class if present and change placeholder text back the the original one.
    this.setInputNormal(taskName);

    // Declare variables that gets us the correct ID.
    // 'stack' loops through 'todos' state and returns the amount of ID's there are in an array.
    const stack = todos.map(i => i.id);
    // Here we declare the new ID number to be used.
    // If 'stack' is empty it will be 1, otherwise it calculates from the stack.lenght and adds +1.
    const newID = stack.length === 0 ? 1 : Math.max(...stack) + 1;

    // Declares the 'newItem' that will be pushed into the state, when the form is submitted.
    const newItem = {
      id: newID,
      task: taskName.value,
      status: false,
    };

    // Updates state 'todos' with the 'newItem'
    this.setState(prevState => ({
      todos: [...prevState.todos, newItem],
    }));

    // After input submit the input will be cleared.
    taskName.value = '';
  };

  // Function that will handle each tasks status.
  // When the button is clicked, it will update the state.
  handleStatus = (id) => {
    const { todos } = this.state;
    const newTodoList = todos.map(i => (i.id !== id ? i : { ...i, status: !i.status }));
    this.setState({ todos: newTodoList });
  };

  // Function that deletes tasks that are clicked.
  // When the button is clicked, it will update the state.
  handleDelete = (id) => {
    const currentState = [...this.state.todos];
    this.setState({ todos: currentState.filter(i => i.id !== id) });
  };

  render() {
    // Declare a variable for the 'todos' state.
    const { todos } = this.state;
    return (
      <div className="todo-list">
        <AddingForm onSubmit={this.handleSubmit} />
        {todos.length ? (
          <TodoListing
            todos={todos}
            onStatusChange={this.handleStatus}
            onDelete={this.handleDelete}
          />
        ) : (
          <TodoListEmpty />
        )}
      </div>
    );
  }
}

export { TodoList };
