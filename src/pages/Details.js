/* eslint-disable react/prop-types */
import React from 'react';
import Total from '../components/Total';

const Details = ({ country }) => {
  console.log(country);
  return (
    <div>
      <Total name="World" total="1000" />
    </div>
  );
};

export default Details;
