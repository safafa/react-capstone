import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Main from '../pages/Main';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: () => ({
    countries: [{
      id: 'test1',
      regions: [],
      name: 'Maroc',
      date: 'test',
    },
    {
      id: 'test2',
      regions: [],
      name: 'Canada',
      date: 'test',
    },
    ],
    todayConfirmed: '132335456',
  }),
  useDispatch: () => mockDispatch,
}));

jest.mock('../redux/countries/countries', () => ({
  getContries: () => ({
    countries: [{
      id: 'test1',
      regions: [],
      name: 'Maroc',
      date: 'test',
    },
    {
      id: 'test2',
      regions: [],
      name: 'Canada',
      date: 'test',
    },
    ],
    todayConfirmed: '132335456',
  }),
}));

describe('Main page', () => {
  test('Snapshot test', () => {
    const tree = renderer.create(
      <Main />,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('UI test', () => {
    render(<Main />);
    screen.queryAllByRole('link').forEach((role) => expect(role).toBeInTheDocument());
  });

  test('Fire filter event', () => {
    render(<Main />);
    fireEvent.select(screen.getByRole('button'), {
      target: { eventKey: 'M' },
    });
    expect(screen.getByText(/Maroc/)).toBeInTheDocument();
  });
});
