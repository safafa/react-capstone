/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';

const Country = ({ country }) => {
  const page = `/details/${country.id}`;
  return (
    <a className="w-50 text-decoration-none link-dark text-center" href={page}>
      <Card>
        <Card.Title>{country.name}</Card.Title>
        <Card.Body>
          <Card.Text>
            {country.today_confirmed}
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default Country;
