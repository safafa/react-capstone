import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import Main from './pages/Main';
import Details from './pages/Details';
import './App.css';

function App() {
  return (
    <Router>
      <div>
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
