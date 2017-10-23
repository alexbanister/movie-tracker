import { shallow } from 'enzyme';
import App from './App';
import React from 'react';

describe('App snapshot', () => {

  it('should always match the snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
