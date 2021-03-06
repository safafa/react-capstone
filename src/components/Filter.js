import { Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Filter = ({ handleSelect }) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWYZ';
  const buttonList = letters.split('').map((letter) => <Dropdown.Item className="text-center" key={letter} eventKey={letter}>{letter}</Dropdown.Item>);
  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle className="filter-button border-0 w-100" id="dropdown-basic">
        Filter
      </Dropdown.Toggle>
      <Dropdown.Menu className="w-100">
        {buttonList}
      </Dropdown.Menu>
    </Dropdown>
  );
};

Filter.propTypes = {
  handleSelect: PropTypes.func.isRequired,
};

export default Filter;
