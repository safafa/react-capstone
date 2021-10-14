import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Details from '../pages/Details';

jest.mock('react-router-dom', () => ({
  useParams: () => ({
    id: 'test',
  }),
}));

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: () => ({
    id: 'test',
    regions: [],
    name: 'test',
    date: 'test',
  }),
  useDispatch: () => mockDispatch,
}));

jest.mock('../redux/countries/countries', () => ({
  getCountry: () => ({
    country: {
      id: 'test',
      regions: [],
      name: 'test',
      date: 'test',
    },
  }),
}));

describe('Detail page', () => {
  test('Snapshot test', () => {
    const tree = renderer.create(
      <Details />,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('UI test', () => {
    render(<Details />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
