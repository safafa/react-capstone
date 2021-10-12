/* eslint-disable react/prop-types */
import React from 'react';
import Total from '../components/Total';
import Country from '../components/Country';

const Main = ({ data }) => {
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
      <h7>Stats by Country</h7>
      <ul className="d-flex flex-row flex-wrap w-100 px-0">
        {list}
      </ul>
    </div>
  );
};

export default Main;
