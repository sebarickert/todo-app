import React from 'react';
import PropTypes from 'prop-types';

const TodoListingItem = ({
  id, task, status, onStatusChange, onDelete,
}) => (
  <li
    id={`todo-item--${id}`}
    // Adds 'is-active' class when 'todos' 'status' state is true.
    className={`todo-listing__item ${status ? 'is-active' : ''}`}
  >
    <button
      className="todo-listing__item-checkbox"
      // If button is clicked, sends forward the clicked tasks ID.
      onClick={() => onStatusChange(id)}
    />
    <h3 className="todo-listing__item-task">{task}</h3>
    <button
      className="btn todo-listing__item-delete"
      // If button is clicked, sends forward the clicked tasks ID.
      onClick={() => onDelete(id)}
    >
      <i className="fas fa-trash" />
    </button>
  </li>
);

// Prop validation for 'TodoListingItem' component.
TodoListingItem.propTypes = {
  id: PropTypes.number.isRequired,
  task: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { TodoListingItem };
