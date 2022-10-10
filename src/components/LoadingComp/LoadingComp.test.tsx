import React from 'react';
import renderer from 'react-test-renderer';
import LoadingComp from './LoadingComp';

// jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

describe('<LoadingComp />', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<LoadingComp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
