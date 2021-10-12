/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';

const Total = ({ total }) => (
  <Card>
    <Card.Body>
      <Card.Text>
        {total}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Total;
