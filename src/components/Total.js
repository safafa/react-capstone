/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';

const Total = ({ name, total }) => (
  <Card>
    <Card.Title>{name}</Card.Title>
    <Card.Body>
      <Card.Text>
        {total}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Total;
