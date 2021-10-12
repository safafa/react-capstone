import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { getContries } from './redux/countries/countries';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Details from './pages/Details';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.countriesReducer);
  useEffect(() => {
    dispatch(getContries());
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/details/:name">
            <Details />
          </Route>
          <Route path="/">
            <Main data={data} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
