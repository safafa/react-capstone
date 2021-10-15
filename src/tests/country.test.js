import renderer from 'react-test-renderer';
import Country from '../components/Country';

describe('Country component', () => {
  test('Snapshot test', () => {
    const tree = renderer.create(
      <Country country={{ id: 'test', name: 'test', today_confirmed: '12314' }} />,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
