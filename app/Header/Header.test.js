import * as actions from './HeaderAction';
import { shallow, mount } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import Header from './Header';
import createRouterContext from 'react-router-test-context';
import PropTypes from 'prop-types';

describe('Header Action', ()=>{

  it('logOutAction should return an action', () => {
    const expected = {
      type: 'LOG_OUT'
    };

    expect(actions.logOutAction()).toEqual(expected);
  });
});

describe('Header snapshot', () => {

  it('should always match the snapshot', () => {
    const mockStore = configureStore();
    const initialState = {
      user: {}
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<Header
      store = {store}
    />);

    expect(wrapper).toMatchSnapshot();

  });
});

describe('Header container', () => {

  it('should have default state', () => {
    const mockStore = configureStore();
    const initialState = {
      user: {}
    };
    const store = mockStore(initialState);
    const context = createRouterContext();
    const childContextTypes = {
      router: PropTypes.object
    };
    const wrapper = mount(<Header
      store={store}
      users={{users: {}}}
    />, {context, childContextTypes});

    expect(wrapper.instance().props.users).toEqual({users: {}});

  });

  it.skip('should have a button that fires correct action', () => {
    const mockStore = configureStore();
    const initialState = {
      user: {id: 1}
    };
    const store = mockStore(initialState);
    const context = createRouterContext();
    const childContextTypes = {
      router: PropTypes.object
    };
    const mockHandleClick = jest.fn();
    const wrapper = mount(<Header
      store={store}
      users={{users: {id: 1}}}
      logoutAction={mockHandleClick}
    />, {context, childContextTypes});

    wrapper.find('.redux-click').last().simulate('click');
    expect(mockHandleClick).toHaveBeenCalled();
  });
});
