import {render} from '@testing-library/react-native';
import MediaContentCarousel from './MediaContentCarousel';

describe('<MediaContentCarousel/>', () => {
  test('component should render', () => {
    const {getByTestId} = render(<MediaContentCarousel />);
  });
});
