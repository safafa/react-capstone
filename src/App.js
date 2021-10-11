import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContries } from './redux/contries/contries';

function App() {
  const dispatch = useDispatch();
  const contries = useSelector((state) => state.contriesReducer);

  useEffect(() => {
    dispatch(getContries());
  }, []);

  return (
    <div className="App">
      <p>{contries}</p>
    </div>
  );
}

export default App;
