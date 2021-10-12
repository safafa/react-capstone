/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';
import Total from '../components/Total';

const Details = () => {
  const { name } = useParams();
  return (
    <div>
      <Total name={name} total="1000" />
    </div>
  );
};

export default Details;
