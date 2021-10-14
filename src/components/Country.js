import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { BsArrowRightCircle } from 'react-icons/bs';
import '../css/country.css';

const Country = ({ country }) => {
  const page = `/details/${country.id}`;
  return (
    <a className="w-50 text-decoration-none link-dark text-center text-light" href={page}>
      <Card className="bg-pink border-0 m-1 cardo">
        <div className="d-flex justify-content-between align-items-center px-3 pt-2">
          <Card.Title className="title-f">{country.name}</Card.Title>
          <BsArrowRightCircle className="arrow" />
        </div>
        <Card.Body>
          <Card.Text>
            {country.today_confirmed}
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

Country.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    today_confirmed: PropTypes.string.isRequired,
  }).isRequired,
};
export default Country;
