/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContries } from '../redux/countries/countries';

const Main = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.contriesReducer.countries);

  useEffect(() => {
    dispatch(getContries());
  }, []);
  let list = [];
  if (countries) {
    list = countries.map((country) => (
      <li key={country.id}>
        {country.name}
        {' '}
        {country.today_confirmed}
      </li>
    ));
  }
  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
};

export default Main;
