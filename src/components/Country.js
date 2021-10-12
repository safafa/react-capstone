/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';

const Country = ({ country }) => (
  <Card className="w-50">
    <Card.Title>{country.name}</Card.Title>
    <Card.Body>
      <Card.Text>
        {country.today_confirmed}
      </Card.Text>
    </Card.Body>
    <Card.Link href="/details">Details</Card.Link>
  </Card>
);

export default Country;
