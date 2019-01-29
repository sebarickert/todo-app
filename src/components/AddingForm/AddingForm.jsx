import React from 'react';
import PropTypes from 'prop-types';

const AddingForm = ({ handleSubmit }) => (
  <form
    onSubmit={handleSubmit}
    className="form-todo container container--inset"
  >
    <label htmlFor="task-name" className="form-todo__label">
      <h2 className="form-todo__heading">
        What&apos;re you trying to achieve?
      </h2>
      <input
        type="text"
        name="task-name"
        id="task-name"
        className="form-todo__input"
        placeholder="Tell me your plans!"
      />
    </label>
    <button type="submit" className="btn form-todo__button">
      <i className="fas fa-plus" />
    </button>
  </form>
);

AddingForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export { AddingForm };
