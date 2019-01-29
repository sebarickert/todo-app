import React, { Component } from 'react';

import { AddingForm } from '../AddingForm';

class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <AddingForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export { App };
