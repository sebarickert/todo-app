import React from 'react';

const Home = () => (
  <div className="container container--inset">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <form>
      <label htmlFor="text-input">Text input</label>
      <input type="text" name="text-input" placeholder="text input" />
      <label htmlFor="number-input">Number input</label>
      <input type="number" name="number-input" placeholder="number input" />
      <label htmlFor="select-list">Select list</label>
      <select name="select-list">
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
      </select>
    </form>
    <button class="btn btn--blue" type="submit">
      Submit me!
    </button>
    <div className="btn-container">
      <div className="btn btn--outline">hello</div>
      <div className="btn btn--red btn--big btn--big-text">hello</div>
      <div className="btn btn--big btn--big-text btn--blue">there</div>
      <div className="btn btn--red-outline ">delilah</div>
    </div>
  </div>
);

export { Home };
