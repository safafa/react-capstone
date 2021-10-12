import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';
// eslint-disable-next-line import/no-named-as-default
import Main from './pages/Main';
import Details from './pages/Details';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
