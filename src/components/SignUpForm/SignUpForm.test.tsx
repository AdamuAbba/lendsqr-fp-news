import SignUpForm from './SignUpForm';
import renderer from 'react-test-renderer';

describe('<SignUpForm/>', () => {
  test('component should render', () => {
    const tree = renderer.create(<SignUpForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
