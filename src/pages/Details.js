/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { getCountry } from '../redux/countries/countries';
import Navbar from '../components/Navbar';
import Total from '../components/Total';
import '../css/Details.css';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountry(id));
  }, []);
  const country = useSelector((state) => state.countriesReducer);
  let regions = [];
  if (country.regions) {
    regions = country.regions.map((region) => (
      <ListGroup.Item key={region.name}>
        <span className="me-3">
          {region.name}
          :
        </span>
        {region.today_confirmed}
      </ListGroup.Item>
    ));
  }
  return (
    <>
      <Navbar title="Details" />
      <section>
        <Total name={country.name} total={country.today_confirmed} />
        <ListGroup as="ul" className="mt-3">
          <ListGroup.Item>
            <span className="me-3 title-f">Date:</span>
            {country.date}
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="me-3 title-f">Today deaths:</span>
            {country.today_deaths}
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="me-3 title-f">Yesterday recovered:</span>
            {country.yesterday_recovered}
          </ListGroup.Item>
          {regions}
        </ListGroup>
      </section>
    </>
  );
};

export default Details;
