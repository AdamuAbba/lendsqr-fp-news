import NewsListingScreen from './NewsListingScreen';
import renderer from 'react-test-renderer';

describe('<NewsListingScreen/>', () => {
  test('component should render', () => {
    const tree = renderer.create(<NewsListingScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
