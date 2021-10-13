/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import Total from '../components/Total';
import Country from '../components/Country';
import { getContries, filterCountries } from '../redux/countries/countries';

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

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const buttonList = letters.split('').map((letter) => <Dropdown.Item key={letter} eventKey={letter}>{letter}</Dropdown.Item>);
  return (
    <section className="px-1">
      <Total name="World" total={todayConfirmed} filter={handleClick} />
      <div>
        <h6>Stats by Country</h6>
        <Dropdown onSelect={handleClick}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Filter
          </Dropdown.Toggle>
          <Dropdown.Menu>
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
