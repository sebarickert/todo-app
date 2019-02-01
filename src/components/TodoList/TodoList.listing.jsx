import React from 'react';
import PropTypes from 'prop-types';

import { TodoListingItem } from './TodoList.listing.item';

const TodoListing = ({ todos, handleDone, handleDelete }) => (
  <ul className="todo-listing container">
    {todos.map(i => (
      <TodoListingItem
        key={i.id}
        {...i}
        handleDone={handleDone}
        handleDelete={handleDelete}
      />
    ))}
  </ul>
);

TodoListing.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    task: PropTypes.string,
    status: PropTypes.bool,
  })).isRequired,
  handleDone: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export { TodoListing };
