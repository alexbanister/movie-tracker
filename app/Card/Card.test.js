import { shallow } from 'enzyme';
import Card from './Card';
import React from 'react';

describe('Card snapshot', () => {

  it('should always match the snapshot', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper).toMatchSnapshot();
  });
});
