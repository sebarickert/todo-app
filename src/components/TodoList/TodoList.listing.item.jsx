import React from 'react';
import PropTypes from 'prop-types';

const TodoListingItem = ({
  id, task, status, handleDone, handleDelete,
}) => (
  <li
    id={`todo-item--${id}`}
    className={`todo-listing__item ${status ? 'is-active' : ''}`}
  >
    <button className="todo-listing__checkbox" onClick={() => handleDone(id)} />
    <h3 className="todo-listing__task">{task}</h3>
    <button
      className="btn todo-listing__delete"
      onClick={() => handleDelete(id)}
    >
      <i className="fas fa-trash" />
    </button>
  </li>
);

TodoListingItem.propTypes = {
  id: PropTypes.number.isRequired,
  task: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  handleDone: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export { TodoListingItem };
