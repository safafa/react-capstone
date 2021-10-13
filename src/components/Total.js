/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';

const Total = ({ name, total }) => (
  <Card className="text-center pt-3 bg-pink text-light border-0">
    <Card.Title>{name}</Card.Title>
    <Card.Body>
      <Card.Text>
        {total}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Total;
