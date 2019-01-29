import React from 'react';
import PropTypes from 'prop-types';

const TodoListingItem = ({ id, task, status }) => (
  <div className="todo-listing__item">
    <div className="todo-listing__status">{status}</div>
    <h3 className="todo-listing__task">{task}</h3>
    <div className="todo-listing__id">{id}</div>
  </div>
);

TodoListingItem.propTypes = {
  id: PropTypes.number.isRequired,
  task: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export { TodoListingItem };
