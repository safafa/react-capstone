import renderer from 'react-test-renderer';
import Filter from '../components/Filter';

describe('Filter component', () => {
  test('Snapshot test', () => {
    const tree = renderer.create(
      <Filter handleSelect={() => {}} />,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
