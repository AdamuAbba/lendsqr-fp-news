import LatestHeadlinesList from './LatestHeadlinesList';
import {render} from '@testing-library/react-native';

describe('<LatestHeadlinesList/>', () => {
  test('component should render', () => {
    const {getByTestId} = render(<LatestHeadlinesList />);
    const mainView = getByTestId('main-view');
    expect(mainView).toBeTruthy();
  });
});
