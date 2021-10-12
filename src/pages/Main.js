/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Total from '../components/Total';
import Country from '../components/Country';
import { getContries } from '../redux/countries/countries';

const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.countriesReducer);
  useEffect(() => {
    dispatch(getContries());
  }, []);
  const { countries, todayConfirmed } = data;
  let list = [];
  if (countries) {
    list = countries.map((country) => (
      <Country key={country.id} country={country} />
    ));
  }

  return (
    <div className="px-1">
      <Total name="World" total={todayConfirmed} />
      <h6>Stats by Country</h6>
      <ul className="d-flex flex-row flex-wrap w-100 px-0">
        {list}
      </ul>
    </div>
  );
};

export default Main;
