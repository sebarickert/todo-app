import React from 'react';
import PropTypes from 'prop-types';

// Creates 'AddingForm' component.
// Gets 'handleSubmit' as a prop from the parent component.
const AddingForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit} className="todo-form container container--inset">
    <label htmlFor="task-name" className="todo-form__label">
      <h2 className="todo-form__heading">
        What&apos;re you trying to achieve?
      </h2>
      <input
        type="text"
        name="taskName"
        id="taskName"
        className="todo-form__input"
        placeholder="Tell me your plans!"
      />
    </label>
    <button type="submit" className="btn todo-form__button">
      <i className="fas fa-plus" />
    </button>
  </form>
);

// Prop validation for 'AddingForm' component.
AddingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// Exports 'AddingForm' component
export { AddingForm };
