/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Total from '../components/Total';
import Country from '../components/Country';
import Filter from '../components/Filter';
import { getContries, filterCountries } from '../redux/countries/countries';
import '../css/Main.css';

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
      <Country key={country.name} country={country} />
    ));
  }

  const handleClick = (e) => {
    dispatch(filterCountries(e));
  };

  return (
    <>
      <Navbar title="World stats" />
      <section className="px-1">
        <Total name="World" total={todayConfirmed} filter={handleClick} />
        <div>
          <Filter handleSelect={handleClick} />
          <ul className="d-flex flex-row flex-wrap w-100 px-0">
            {list}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Main;
