import React from 'react';
import PropTypes from 'prop-types';

import { TodoListingItem } from './TodoList.listing.item';

const TodoListing = ({ todos, handleStatus, handleDelete }) => (
  <ul className="todo-listing container">
    {todos.map(i => (
      <TodoListingItem
        key={i.id}
        {...i}
        handleDone={handleStatus}
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
  handleStatus: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export { TodoListing };
