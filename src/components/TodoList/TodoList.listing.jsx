import React from 'react';
import PropTypes from 'prop-types';

import { TodoListingItem } from './TodoList.listing.item';

const TodoListing = ({ todos, onStatusChange, onDelete }) => (
  <ul className="todo-listing container">
    {todos.map(i => (
      <TodoListingItem
        key={i.id}
        {...i}
        onStatusChange={onStatusChange}
        onDelete={onDelete}
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
  onStatusChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { TodoListing };
