import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Splash from '../splash';
import Quiz from '../quiz';

export default function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Splash />
        </Route>
        <Route exact path="/quiz">
          <Quiz />
        </Route>
      </Switch>
    </Router>
  );
}
