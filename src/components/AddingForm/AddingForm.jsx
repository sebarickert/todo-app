import React from 'react';
import PropTypes from 'prop-types';

const AddingForm = ({ handleSubmit }) => (
  <form
    onSubmit={handleSubmit}
    className="form-adding container container--inset"
  >
    <label htmlFor="task-name">
      <h2 className="">What&apos;re you trying to achieve?</h2>
      <input type="text" name="task-name" id="task-name" />
    </label>
    <button type="submit" className="btn">
      Add
    </button>
  </form>
);

AddingForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export { AddingForm };
