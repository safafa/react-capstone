import renderer from 'react-test-renderer';
import Main from '../pages/Main';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: () => ({
    countries: [{
      id: 'test1',
      regions: [],
      name: 'test',
      date: 'test',
    },
    {
      id: 'test2',
      regions: [],
      name: 'test',
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
      name: 'test',
      date: 'test',
    },
    {
      id: 'test2',
      regions: [],
      name: 'test',
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
});
