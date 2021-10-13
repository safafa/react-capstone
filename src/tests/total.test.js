import renderer from 'react-test-renderer';
import Total from '../components/Total';

describe('Total component', () => {
  test('Snapshot test', () => {
    const tree = renderer.create(
      <Total name="World" total="12234" />,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
