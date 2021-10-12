/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';

const Country = ({ country }) => {
  const page = `/details/${country.id}`;
  return (
    <Card className="w-50">
      <Card.Title>{country.name}</Card.Title>
      <Card.Body>
        <Card.Text>
          {country.today_confirmed}
        </Card.Text>
      </Card.Body>
      <Card.Link href={page}>Details</Card.Link>
    </Card>
  );
};

export default Country;
