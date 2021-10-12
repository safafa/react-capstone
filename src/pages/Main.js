/* eslint-disable react/prop-types */
import React from 'react';

const Main = ({ data }) => {
  const { countries, todayConfirmed } = data;
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
      {todayConfirmed}
      <ul>{list}</ul>
    </div>
  );
};

export default Main;
