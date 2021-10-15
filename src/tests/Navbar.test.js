import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  test('Snapshot test', () => {
    const tree = renderer.create(
      <Navbar title="World stats" />,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
