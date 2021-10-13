/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import Total from '../components/Total';
import Country from '../components/Country';
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

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWYZ';
  const buttonList = letters.split('').map((letter) => <Dropdown.Item className="text-center" key={letter} eventKey={letter}>{letter}</Dropdown.Item>);
  return (
    <section className="px-1">
      <Total name="World" total={todayConfirmed} filter={handleClick} />
      <div>
        <Dropdown onSelect={handleClick}>
          <Dropdown.Toggle className="filter-button border-0 w-100" id="dropdown-basic">
            Filter
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-100">
            {buttonList}
          </Dropdown.Menu>
        </Dropdown>
        <ul className="d-flex flex-row flex-wrap w-100 px-0">
          {list}
        </ul>
      </div>
    </section>
  );
};

export default Main;
