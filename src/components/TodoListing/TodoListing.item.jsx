import React from 'react';
import PropTypes from 'prop-types';

const TodoListingItem = ({ id, task, status }) => (
  <li
    id={`todo-item--${id}`}
    className={`todo-listing__item todo-listing__item--${
      status ? 'active' : 'in-progress'
    }`}
  >
    <label htmlFor="taskStatus" className="todo-listing__label">
      <input
        type="checkbox"
        name="taskStatus"
        id="taskStatus"
        className="todo-listing__checkbox"
      />
      <h3 className="todo-listing__task">{task}</h3>
      <button type="button" className="btn todo-listing__delete">
        <i className="fas fa-trash" />
      </button>
    </label>
  </li>
);

TodoListingItem.propTypes = {
  id: PropTypes.number.isRequired,
  task: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export { TodoListingItem };
