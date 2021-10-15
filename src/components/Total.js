import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const Total = ({ name, total }) => (
  <Card className="text-center pt-3 bg-pink text-light border-0 my-1">
    <Card.Title className="title-f">{name}</Card.Title>
    <Card.Body>
      <Card.Text>
        {total}
      </Card.Text>
    </Card.Body>
  </Card>
);

Total.propTypes = {
  name: PropTypes.string,
  total: PropTypes.string,
};
Total.defaultProps = {
  name: 'name',
  total: '0',
};

export default Total;
