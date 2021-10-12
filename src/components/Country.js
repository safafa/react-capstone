/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';

const Country = ({ name, cases }) => (
  <Card className="w-50">
    <Card.Title>{name}</Card.Title>
    <Card.Body>
      <Card.Text>
        {cases}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Country;
