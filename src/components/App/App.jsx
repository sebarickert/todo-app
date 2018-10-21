import React from 'react';
import { Route, Link } from 'react-router-dom';

import { Home, About, Contact } from './';

const App = () => (
  <div className="App">
    <div className="container container--inset">
      <ul className="main-menu">
        <li className="main-menu__item">
          <Link className="main-menu__link" to="/">PAGE 1</Link>
        </li>
        <li className="main-menu__item">
          <Link className="main-menu__link" to="/page-2">PAGE 2</Link>
        </li>
        <li className="main-menu__item">
          <Link className="main-menu__link" to="/page-3">PAGE 3</Link>
        </li>
      </ul>
    </div>
    <Route exact path="/" component={Home} />
    <Route exact path="/page-2" component={About} />
    <Route exact path="/page-3" component={Contact} />
  </div>
);

export { App };
