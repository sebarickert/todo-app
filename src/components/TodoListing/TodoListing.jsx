import React from 'react';
import PropTypes from 'prop-types';

import { TodoListingItem } from './';

const TodoListing = ({ todos }) => (
  <div className="todo-listing container container--inset">
    {todos.map(i => (
      <TodoListingItem key={i.id} {...i} />
    ))}
  </div>
);

TodoListing.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    task: PropTypes.string,
    status: PropTypes.bool,
  })).isRequired,
};

export { TodoListing };
