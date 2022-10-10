import {render} from '@testing-library/react-native';
import NewsListPlaceholder from './NewsListPlaceholder';

describe('<NewsListPlaceholder/>', () => {
  test('test if component renders', () => {
    const {getByTestId} = render(<NewsListPlaceholder />);
    const mainView = getByTestId('main-view');
    expect(mainView).toBeTruthy();
  });
});
